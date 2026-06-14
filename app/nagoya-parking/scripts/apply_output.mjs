#!/usr/bin/env node
/**
 * apply_output.mjs
 * scripts/output.json の内容を data.js の末尾（];の直前）に追記する。
 * 使い方: node scripts/apply_output.mjs
 */

import { readFileSync, writeFileSync } from 'fs';

const DATA_JS = new URL('../data.js', import.meta.url).pathname;
const OUTPUT  = new URL('../scripts/output.json', import.meta.url).pathname;

const entries = JSON.parse(readFileSync(OUTPUT, 'utf8'));
if (entries.length === 0) {
  console.log('output.json が空です');
  process.exit(0);
}

let dataJs = readFileSync(DATA_JS, 'utf8');

// 既登録BUKを除外
const registered = new Set(dataJs.match(/BUK\d+/g) || []);
const newEntries = entries.filter(e => {
  const buk = (e.source || '').match(/BUK\d+/)?.[0];
  if (buk && registered.has(buk)) {
    console.log(`⏭  ${e.name} (${buk}) は登録済みのためスキップ`);
    return false;
  }
  return true;
});

if (newEntries.length === 0) {
  console.log('追加対象がありません');
  process.exit(0);
}

// "];" の直前に追記
const insertPos = dataJs.lastIndexOf('];');
if (insertPos < 0) {
  console.error('data.js の末尾 ]; が見つかりません');
  process.exit(1);
}

const toInsert = newEntries.map(e => {
  return `  ${JSON.stringify(e, null, 2).split('\n').join('\n  ')}`;
}).join(',\n');

const newDataJs =
  dataJs.slice(0, insertPos) +
  ',\n' + toInsert + '\n' +
  dataJs.slice(insertPos);

writeFileSync(DATA_JS, newDataJs, 'utf8');

console.log(`✅ ${newEntries.length}件を data.js に追記しました`);
newEntries.forEach((e, i) => {
  console.log(`  ${i+1}. ${e.name} (${e.hourlyRate}円/h) ${e.address}`);
});
