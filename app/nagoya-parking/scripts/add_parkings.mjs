#!/usr/bin/env node
/**
 * add_parkings.mjs
 * 使い方: node scripts/add_parkings.mjs BUK0012345 BUK0023456 ...
 *         node scripts/add_parkings.mjs --file scripts/buk_list.txt
 *
 * times-info.net から料金・情報を取得し、GSI APIで座標を取得して
 * data.js に追記できる形式の JSON を output.json に出力する。
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { setTimeout as sleep } from 'timers/promises';

// ── 設定 ──────────────────────────────────────────
const DATA_JS = new URL('../data.js', import.meta.url).pathname;
const OUTPUT  = new URL('../scripts/output.json', import.meta.url).pathname;
const TIMES_BASE = 'https://times-info.net/P23-aichi';
const GSI_BASE   = 'https://msearch.gsi.go.jp/address-search/AddressSearch?q=';

// 中村区=C105, 中区=C106（必要に応じて拡張）
const WARD_CODE = {
  '中村区': 'C105',
  '中区':   'C106',
  '東区':   'C102',
  '西区':   'C103',
  '北区':   'C104',
  '昭和区': 'C107',
  '瑞穂区': 'C108',
  '熱田区': 'C109',
  '中川区': 'C110',
  '港区':   'C111',
  '南区':   'C112',
  '守山区': 'C113',
  '緑区':   'C114',
  '名東区': 'C115',
  '天白区': 'C116',
};

// ── 引数処理 ──────────────────────────────────────
let bukList = [];
const args = process.argv.slice(2);

if (args[0] === '--file' && args[1]) {
  const raw = readFileSync(args[1], 'utf8');
  bukList = raw.split(/\s+/).map(s => s.trim()).filter(s => /^BUK\d+$/.test(s));
} else {
  bukList = args.filter(s => /^BUK\d+$/.test(s));
}

if (bukList.length === 0) {
  console.error('BUKコードを引数または --file で指定してください');
  process.exit(1);
}

// 登録済みBUKをスキップ
const dataJs = readFileSync(DATA_JS, 'utf8');
const registered = new Set(dataJs.match(/BUK\d+/g) || []);
bukList = bukList.filter(b => {
  if (registered.has(b)) { console.log(`⏭  ${b} は登録済みのためスキップ`); return false; }
  return true;
});

if (bukList.length === 0) {
  console.log('追加対象がありません');
  process.exit(0);
}

console.log(`\n処理対象: ${bukList.length}件\n`);

// ── HTML取得ヘルパー ───────────────────────────────
async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CarMotiva/1.0)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

// ── テキスト抽出ヘルパー ──────────────────────────
function between(html, start, end) {
  const i = html.indexOf(start);
  if (i < 0) return '';
  const j = html.indexOf(end, i + start.length);
  if (j < 0) return '';
  return html.slice(i + start.length, j).replace(/<[^>]+>/g, '').trim();
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').replace(/&lt;/g,'<')
          .replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
}

function allMatches(html, re) {
  return [...html.matchAll(re)].map(m => stripTags(m[1] || m[0]));
}

// ── times-info.net パーサー ───────────────────────
function parseTimesPage(html, buk) {
  // 駐車場名
  let name = '';
  const h1m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1m) name = stripTags(h1m[1]);
  if (!name) {
    const tm = html.match(/<title>([\s\S]*?)<\/title>/i);
    if (tm) name = stripTags(tm[1]).split('（')[0].split('の時間')[0].trim();
  }
  // 全角数字→半角
  name = name.replace(/[０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0));

  // 住所
  let address = '';
  const addrPatterns = [
    /住所[^\n]*?>(愛知県[^<\n）]+)/,
    /"address"[^:]*:[^"]*"(愛知県[^"]+)"/,
    /(愛知県名古屋市[^\s<"'）]+)/,
  ];
  for (const p of addrPatterns) {
    const m = html.match(p);
    if (m) {
      address = stripTags(m[1]).replace(/）.*$/, '').replace(/\s.*$/, '').trim();
      break;
    }
  }

  // 収容台数
  let capacity = 0;
  const capM = html.match(/収容台数[^\d]*(\d+)\s*台/);
  if (capM) capacity = parseInt(capM[1]);

  // 営業時間
  let hours = '24時間';
  if (html.includes('24時間入出庫')) hours = '24時間';
  else {
    const hm = html.match(/営業時間[^>]*>([\s\S]*?)<\/(td|div|p)/i);
    if (hm) hours = stripTags(hm[1]).replace(/\s+/g,' ').trim().slice(0,20);
  }

  // 支払い方法
  const payText = html.toLowerCase();
  const cash   = payText.includes('現金');
  const credit = payText.includes('クレジット');
  const qr     = payText.includes('qrコード') || payText.includes('qr決済') ||
                  payText.includes('コード決済');

  // 料金テキストを全部集める
  const rateTexts = [];
  // パターン1: 「XX分 YYY円」
  for (const m of html.matchAll(/(\d+)\s*分\s*(\d[\d,]+)\s*円/g)) {
    rateTexts.push({ min: parseInt(m[1]), yen: parseInt(m[2].replace(/,/g,'')) });
  }
  // パターン2: 「XX分YYY円」(スペースなし)
  for (const m of html.matchAll(/(\d+)分(\d[\d,]+)円/g)) {
    rateTexts.push({ min: parseInt(m[1]), yen: parseInt(m[2].replace(/,/g,'')) });
  }

  // 基本料金（最初に出てくる料金単位）
  let baseMin = 0, baseYen = 0;
  if (rateTexts.length > 0) {
    // 最小のmin（最も短い時間単位が基本料金）
    const sorted = [...rateTexts].sort((a,b) => a.min - b.min);
    baseMin = sorted[0].min;
    baseYen = sorted[0].yen;
  }
  const hourlyRate = baseMin > 0 ? Math.round(baseYen / baseMin * 60) : 0;
  const rateStr = baseMin > 0 ? `${baseMin}分 ${baseYen}円` : '';

  // 最大料金
  const maxAmounts = [];
  for (const m of html.matchAll(/最大料金\s*([,\d]+)\s*円/g)) {
    maxAmounts.push(parseInt(m[1].replace(/,/g,'')));
  }
  // 平日・休日で分けて最大料金を抽出（簡易版）
  let maxWeekday = null, maxHoliday = null;
  // 平日セクションを探す
  const weekdaySection = html.match(/平日[\s\S]*?(?=休日|$)/i);
  const holidaySection = html.match(/休日[\s\S]*?(?=平日|$)/i);
  if (weekdaySection) {
    const wm = weekdaySection[0].match(/最大料金\s*([,\d]+)\s*円/);
    if (wm) maxWeekday = parseInt(wm[1].replace(/,/g,''));
  }
  if (holidaySection) {
    const hm = holidaySection[0].match(/最大料金\s*([,\d]+)\s*円/);
    if (hm) maxHoliday = parseInt(hm[1].replace(/,/g,''));
  }
  // 平日/休日が分からない場合は最初の最大料金を平日に
  if (maxWeekday === null && maxAmounts.length > 0) maxWeekday = maxAmounts[0];
  if (maxHoliday === null && maxAmounts.length > 1) maxHoliday = maxAmounts[1];

  // 平日・休日で料金テキストを抽出（なければ同一）
  let weekdayRate = rateStr, holidayRate = rateStr;

  return {
    name,
    address,
    hourlyRate,
    rates: { weekday: weekdayRate, holiday: holidayRate },
    maxRate: { weekday: maxWeekday, holiday: maxHoliday },
    hours,
    capacity,
    payment: { cash, credit, qr },
    source: `https://times-info.net/P23-aichi/CXXX/park-detail-${buk}/`,
  };
}

// ── GSI 座標取得 ──────────────────────────────────
async function getCoords(address) {
  const url = GSI_BASE + encodeURIComponent(address);
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.length > 0) {
      const [lng, lat] = data[0].geometry.coordinates;
      return { lat: Math.round(lat * 1e6) / 1e6, lng: Math.round(lng * 1e6) / 1e6 };
    }
  } catch(e) {}
  // 番地を省いて再試行
  const short = address.replace(/(\d+)-\d+$/, '$1丁目');
  if (short !== address) {
    try {
      const res = await fetch(GSI_BASE + encodeURIComponent(short));
      const data = await res.json();
      if (data && data.length > 0) {
        const [lng, lat] = data[0].geometry.coordinates;
        return { lat: Math.round(lat * 1e6) / 1e6, lng: Math.round(lng * 1e6) / 1e6 };
      }
    } catch(e) {}
  }
  return { lat: 0, lng: 0 };
}

// ── 区コードの推定 ────────────────────────────────
function guessWardCode(address) {
  for (const [ward, code] of Object.entries(WARD_CODE)) {
    if (address.includes(ward)) return code;
  }
  return 'C106'; // デフォルト中区
}

// ── メイン処理 ────────────────────────────────────
const results = [];
const errors  = [];

for (let i = 0; i < bukList.length; i++) {
  const buk = bukList[i];
  process.stdout.write(`[${i+1}/${bukList.length}] ${buk} ... `);

  try {
    // まず中区で試す、ダメなら中村区
    let html = null;
    let usedCode = 'C106';
    for (const code of ['C101','C102','C103','C104','C105','C106','C107','C108','C109','C110','C111','C112','C113','C114','C115','C116']) {
      const url = `${TIMES_BASE}/${code}/park-detail-${buk}/`;
      try {
        html = await fetchHtml(url);
        usedCode = code;
        break;
      } catch(e) {
        if (!e.message.includes('404')) throw e;
      }
    }
    if (!html) throw new Error('404 on all ward codes');

    const parsed = parseTimesPage(html, buk);
    parsed.source = `https://times-info.net/P23-aichi/${usedCode}/park-detail-${buk}/`;

    // 住所が取れなかった場合の警告
    if (!parsed.address) {
      parsed.address = '要確認';
      parsed.note = '住所要確認';
    }

    // 座標取得
    await sleep(300);
    const coords = await getCoords(parsed.address);
    parsed.lat = coords.lat;
    parsed.lng = coords.lng;

    const entry = {
      name: parsed.name,
      address: parsed.address,
      lat: parsed.lat,
      lng: parsed.lng,
      hourlyRate: parsed.hourlyRate,
      rates: parsed.rates,
      maxRate: parsed.maxRate,
      hours: parsed.hours,
      capacity: parsed.capacity,
      payment: parsed.payment,
      placeCid: '',
      placeFid: '',
      note: parsed.note || '',
      source: parsed.source,
    };

    results.push(entry);
    console.log(`✅ ${parsed.name} (${parsed.hourlyRate}円/h)`);

  } catch(e) {
    console.log(`❌ ${e.message}`);
    errors.push({ buk, error: e.message });
  }

  await sleep(400);
}

// ── 出力 ──────────────────────────────────────────
writeFileSync(OUTPUT, JSON.stringify(results, null, 2), 'utf8');

console.log(`\n═══════════════════════════════`);
console.log(`✅ 成功: ${results.length}件 → scripts/output.json`);
if (errors.length > 0) {
  console.log(`❌ 失敗: ${errors.length}件`);
  errors.forEach(e => console.log(`   ${e.buk}: ${e.error}`));
}
console.log('次のステップ: node scripts/apply_output.mjs を実行してdata.jsに追記');
