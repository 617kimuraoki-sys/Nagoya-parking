---
name: parking-data-add
description: >
  名古屋パーキングアプリ（car-motiva.com/nagoya-parking）のdata.jsに駐車場を追加するスキル。
  登録対象は大手コインパーキングチェーン（タイムズ・名鉄協商・三井のリパーク・NPC24Hなど）のみ。
  各社の公式サイトを参照して料金・情報を取得し、sourceURLを必ず記録する。
  「〇〇エリアに何件追加して」「タイムズの中村区を追加して」などの指示があれば必ずこのスキルを使う。
---

# 駐車場データ追加スキル（スクリプト自動化版）

## 基本ルール

- 登録対象は**大手チェーンのみ**（タイムズ・名鉄協商・三井のリパーク・NPC24H）
- 料金は必ず**各社公式サイト**から取得する（Google マップ画像の読み取り禁止）
- `source` フィールドに**その駐車場の公式サイトURLを必ず記録**する
- 数字はすべて半角
- おうきさんへの確認は不要。すべて自動で完結させる

---

## スクリプト構成（タイムズ専用）

```
app/nagoya-parking/scripts/
├── collect_buks.mjs   ← 区名指定でBUKコードを自動収集 → buk_list.txt生成 → add_parkings.mjsを自動実行
├── add_parkings.mjs   ← BUKコードリストからtimes-info.netを取得・GSI座標取得 → output.json生成
├── apply_output.mjs   ← output.jsonをdata.jsに追記
├── buk_list.txt       ← 収集したBUKコードリスト（自動生成）
└── output.json        ← 取得結果（自動生成）
```

---

## 区コード一覧

| 区名 | コード |
|------|--------|
| 千種区 | C101 |
| 東区 | C102 |
| 北区 | C103 |
| 西区 | C104 |
| 中村区 | C105 |
| 中区 | C106 |
| 昭和区 | C107 |
| 瑞穂区 | C108 |
| 熱田区 | C109 |
| 中川区 | C110 |
| 港区 | C111 |
| 南区 | C112 |
| 守山区 | C113 |
| 緑区 | C114 |
| 名東区 | C115 |
| 天白区 | C116 |

---

## 手順（タイムズの場合）

### Step 1: collect_buks.mjs を実行

```bash
cd /Users/k25040kk/car_motiva/car-motiva.com/app/nagoya-parking
node scripts/collect_buks.mjs 千種区 昭和区 守山区
```

全区一括の場合：
```bash
node scripts/collect_buks.mjs --all
```

これだけで以下が自動実行される：
1. 指定区の times-info.net ページを全ページスクレイピング
2. BUKコードを抽出（登録済みは自動スキップ）
3. `scripts/buk_list.txt` を生成
4. `scripts/add_parkings.mjs` を自動実行 → `scripts/output.json` を生成

---

### Step 2: apply_output.mjs を実行

```bash
node scripts/apply_output.mjs
```

`output.json` の内容を `data.js` の末尾に追記する。

---

### Step 3: CLAUDE.md の登録件数を更新

`/Users/k25040kk/car_motiva/car-motiva.com/CLAUDE.md` の「駐車場登録数」を更新する。

---

### Step 4: git push

```bash
cd /Users/k25040kk/car_motiva/car-motiva.com
git add app/nagoya-parking/data.js app/nagoya-parking/scripts/ CLAUDE.md
git commit -m "feat: 駐車場を追加（タイムズ <区名> <N>件）"
GIT_SSH_COMMAND="ssh -i ~/.ssh/github_sakae" git push origin main
```

---

### Step 5: 完了報告

```
✅ <区名>エリアに<N>件追加しました（合計 XXX 件）
─────────────────
1. タイムズ〇〇 (400円/h) 愛知県名古屋市...
2. ...
─────────────────
数分後に car-motiva.com/nagoya-parking に反映されます
```

---

## 名鉄協商・三井のリパーク・NPC24H の場合

スクリプト未対応のため、手動で以下を行う：

| 会社 | 検索URL |
|------|---------|
| 名鉄協商 | https://mkp.jp/ |
| 三井のリパーク | https://www.repark.jp/ |
| NPC24H | https://parking.npc-npc.co.jp/ |

1. 公式サイトで対象エリアの駐車場一覧を取得
2. WebFetch で各詳細ページから料金・住所を取得
3. GSI API で座標取得（`https://msearch.gsi.go.jp/address-search/AddressSearch?q=<住所>`）
4. data.js に直接追記

---

## data.js フォーマット

```js
  {
    "name": "タイムズ名古屋中村第1",
    "address": "愛知県名古屋市中村区椿町1-1",
    "lat": 35.1701,
    "lng": 136.8820,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0063316/"
  },
```

**hourlyRate の計算：**
- 「30分 200円」→ 400
- 「20分 100円」→ 300
- 「15分 250円」→ 1000
- 料金不明 → 0（note: "料金要確認"）

---

## トラブルシューティング

| 問題 | 対処 |
|------|------|
| collect_buks で BUK が0件 | times-info.net のページ構造変化の可能性。URLを手動確認 |
| add_parkings で 404 が多い | 区コードが合っていない。スクリプトは全区コードを自動試行するので基本不要 |
| GSI APIで住所が見つからない | 番地を省いて丁目レベルで再試行（スクリプト内で自動実行） |
| times-info.netのJS座標がズレる | 旧日本測地系のため使用禁止。GSI APIを使う（スクリプトで対応済み） |
| 料金が取得できない | `hourlyRate: 0, note: "料金要確認"` で登録済み |
