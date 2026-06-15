#!/usr/bin/env node
/**
 * collect_buks.mjs
 * 使い方: node scripts/collect_buks.mjs 千種区 昭和区 守山区
 *         node scripts/collect_buks.mjs --all   ← 名古屋市全区
 *
 * times-info.net の区別ページから BUK コードを全ページ収集し、
 * 登録済みをスキップして scripts/buk_list.txt に出力する。
 * 出力後、自動で add_parkings.mjs を実行する。
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { setTimeout as sleep } from 'timers/promises';

const DATA_JS  = new URL('../data.js', import.meta.url).pathname;
const OUTPUT   = new URL('../scripts/buk_list.txt', import.meta.url).pathname;
const ADD_SCRIPT = new URL('../scripts/add_parkings.mjs', import.meta.url).pathname;

// 区名 → 区コード
const WARD_CODE = {
  '千種区': 'C101',
  '東区':   'C102',
  '北区':   'C103',
  '西区':   'C104',
  '中村区': 'C105',
  '中区':   'C106',
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
const args = process.argv.slice(2);

let targetWards = [];
if (args[0] === '--all') {
  targetWards = Object.keys(WARD_CODE);
} else {
  targetWards = args.filter(a => WARD_CODE[a]);
  const unknown = args.filter(a => !WARD_CODE[a] && a !== '--all');
  if (unknown.length > 0) {
    console.warn(`⚠️  不明な区名: ${unknown.join(', ')}`);
  }
}

if (targetWards.length === 0) {
  console.error('区名を引数で指定してください（例: node scripts/collect_buks.mjs 千種区 昭和区）');
  console.error('全区: node scripts/collect_buks.mjs --all');
  process.exit(1);
}

// 登録済み BUK を読み込む
const dataJs = readFileSync(DATA_JS, 'utf8');
const registered = new Set(dataJs.match(/BUK\d+/g) || []);
console.log(`登録済み: ${registered.size}件\n`);

// ── HTML 取得 ─────────────────────────────────────
async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CarMotiva/1.0)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

// ── BUK コード抽出 ────────────────────────────────
function extractBuks(html) {
  const matches = html.match(/park-detail-(BUK\d+)/g) || [];
  return [...new Set(matches.map(m => m.replace('park-detail-', '')))];
}

// ── 総ページ数取得 ────────────────────────────────
function getTotalPages(html) {
  // 「全XX件」または「XX件中」から総件数を取得してページ数を計算
  const countM = html.match(/全\s*(\d+)\s*件/) || html.match(/(\d+)\s*件中/);
  if (countM) {
    const total = parseInt(countM[1]);
    return Math.ceil(total / 20); // 1ページ20件
  }
  // ページネーションから最大ページ数を取得
  const pageMatches = html.match(/[?&]page=(\d+)/g) || [];
  if (pageMatches.length > 0) {
    const pages = pageMatches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...pages);
  }
  return 1;
}

// ── メイン処理 ────────────────────────────────────
const allBuks = []; // { buk, ward } のリスト

for (const ward of targetWards) {
  const code = WARD_CODE[ward];
  const baseUrl = `https://times-info.net/P23-aichi/${code}/`;
  console.log(`📍 ${ward}（${code}）を収集中...`);

  try {
    // 1ページ目を取得して総ページ数を確認
    const firstHtml = await fetchHtml(baseUrl);
    const buks1 = extractBuks(firstHtml);
    const totalPages = getTotalPages(firstHtml);
    console.log(`   総ページ数: ${totalPages}`);

    const wardBuks = new Set(buks1);

    // 2ページ目以降
    for (let page = 2; page <= totalPages; page++) {
      await sleep(400);
      const url = `${baseUrl}?page=${page}`;
      try {
        const html = await fetchHtml(url);
        const buks = extractBuks(html);
        buks.forEach(b => wardBuks.add(b));
      } catch(e) {
        console.warn(`   ⚠️  page ${page} 取得失敗: ${e.message}`);
      }
    }

    const newBuks = [...wardBuks].filter(b => !registered.has(b));
    console.log(`   発見: ${wardBuks.size}件 / 未登録: ${newBuks.length}件`);
    newBuks.forEach(b => allBuks.push({ buk: b, ward }));

  } catch(e) {
    console.error(`   ❌ ${ward} 取得失敗: ${e.message}`);
  }

  await sleep(500);
}

// ── buk_list.txt 出力 ─────────────────────────────
if (allBuks.length === 0) {
  console.log('\n追加対象がありません（全件登録済み）');
  process.exit(0);
}

// 区ごとにまとめて出力
const byWard = {};
for (const { buk, ward } of allBuks) {
  if (!byWard[ward]) byWard[ward] = [];
  byWard[ward].push(buk);
}

const lines = [];
for (const [ward, buks] of Object.entries(byWard)) {
  lines.push(`# ${ward}`);
  buks.forEach(b => lines.push(b));
  lines.push('');
}
writeFileSync(OUTPUT, lines.join('\n'), 'utf8');

console.log(`\n═══════════════════════════════`);
console.log(`✅ ${allBuks.length}件の BUK コードを buk_list.txt に出力`);
console.log(`\n🚀 add_parkings.mjs を実行します...\n`);

// ── add_parkings.mjs を自動実行 ───────────────────
try {
  execSync(`node "${ADD_SCRIPT}" --file "${OUTPUT}"`, { stdio: 'inherit' });
} catch(e) {
  console.error('add_parkings.mjs の実行に失敗しました');
  process.exit(1);
}
