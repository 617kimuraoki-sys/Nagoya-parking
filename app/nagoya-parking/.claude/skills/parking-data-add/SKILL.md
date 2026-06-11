---
name: parking-data-add
description: >
  名古屋パーキングアプリ（car-motiva.com/nagoya-parking）のdata.jsに駐車場を追加するスキル。
  登録対象は大手コインパーキングチェーン（タイムズ・名鉄協商・三井のリパーク・NPC24Hなど）のみ。
  各社の公式サイトを参照して料金・情報を取得し、sourceURLを必ず記録する。
  「〇〇エリアに何件追加して」「タイムズの中村区を追加して」などの指示があれば必ずこのスキルを使う。
---

# 駐車場データ追加スキル（公式サイト参照版）

## 基本ルール

- 登録対象は**大手チェーンのみ**（タイムズ・名鉄協商・三井のリパーク・NPC24H）
- 料金は必ず**各社公式サイト**から取得する（Google マップ画像の読み取り禁止）
- `source` フィールドに**その駐車場の公式サイトURLを必ず記録**する
- 数字はすべて半角
- おうきさんへの確認は不要。すべて自動で完結させる

---

## 各社公式サイト（駐車場検索URL）

| 会社 | 検索URL |
|------|---------|
| タイムズ | https://times-info.net/park-search/ |
| 名鉄協商 | https://mkp.jp/ |
| 三井のリパーク | https://www.repark.jp/ |
| NPC24H | https://parking.npc-npc.co.jp/ |

---

## タイムズのURL構造（2026-06-11 確認済み）

タイムズの公式一覧ページはJavaScript描画のため WebFetch では取得できない。
以下の方法で個別詳細ページURLを収集する：

```
WebSearch: site:times-info.net "名古屋市中村区" park-detail BUK
```

個別詳細ページの形式：
```
https://times-info.net/P23-aichi/C105/park-detail-BUK0063316/
```

- `P23-aichi`：愛知県
- `C105`：名古屋市中村区（市区町村コード）
- `BUK0063316`：駐車場固有コード

詳細ページは**サーバーサイドレンダリング**なのでWebFetchで全情報が取得できる。

---

## 手順

### Step 1: 対象駐車場のURLリストを収集

WebSearch で以下のようなクエリを複数発行して詳細ページURLを30件以上収集する：

```
site:times-info.net "名古屋市中村区名駅" park-detail BUK
site:times-info.net "名古屋市中村区太閤" park-detail BUK
site:times-info.net "名古屋市中村区烏森" park-detail BUK
```

- 同じBUKコードが重複しないよう管理する
- 既にdata.jsに登録済みのsourceURLはスキップ

---

### Step 2: 各詳細ページから料金・情報を取得

WebFetch で各詳細ページを開き、以下を取得する：

| 項目 | 内容 |
|------|------|
| 正式名称 | ページタイトル（Googleマップと一致させる） |
| 住所 | 番地まで取得（例：名駅4-16） |
| 料金（平日・休日） | 料金表テキスト |
| 最大料金 | 料金表テキスト |
| 営業時間 | 詳細ページ |
| 収容台数 | 詳細ページ |
| 支払い方法 | 現金・クレジット・QR（キャッシュレス専用と記載があれば cash: false） |
| source URL | その駐車場の詳細ページURL（BUKコード付き） |

⚠️ **times-info.netのJavaScript内の座標は旧日本測地系（Tokyo Datum）のため使用禁止**。
座標は必ず下記Step 3のGSI APIで取得する。

---

### Step 3: 座標を国土地理院（GSI）APIで取得

住所から WGS84 座標を取得する。**Nominatimは精度が低いため使用禁止**。

```
https://msearch.gsi.go.jp/address-search/AddressSearch?q=<住所>
```

Python での一括取得例：

```python
import urllib.request, urllib.parse, json, time

url = f"https://msearch.gsi.go.jp/address-search/AddressSearch?q={urllib.parse.quote('愛知県名古屋市中村区名駅4-16')}"
req = urllib.request.Request(url)
with urllib.request.urlopen(req, timeout=10) as r:
    data = json.loads(r.read())
lng, lat = data[0]['geometry']['coordinates']  # [longitude, latitude] の順に注意
```

- レスポンスは `[longitude, latitude]` の順（逆なので注意）
- 丁目レベルでなく**番地まで**クエリに含める（例：`名駅4-16`）
- 0.3秒以上インターバルを空ける
- 結果が空の場合は丁目レベルで再試行（例：`名駅4丁目`）

---

### Step 4: data.js に追記

**ファイルパス：**
`/Users/k25040kk/car_motiva/car-motiva.com/app/nagoya-parking/data.js`

末尾の `];` の直前に追記する。フォーマット：

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
- 「30分 200円」→ hourlyRate: 400
- 「20分 100円」→ hourlyRate: 300
- 「15分 250円」→ hourlyRate: 1000
- 「60分 300円」→ hourlyRate: 300
- 料金不明 → hourlyRate: 0

**チェックリスト：**
- [ ] source に公式詳細ページURL（BUKコード付き）が入っている
- [ ] 数字はすべて半角
- [ ] lat/lng が GSI API で取得した WGS84 座標である（times-info.netのJS座標は使わない）
- [ ] capacity が入っている
- [ ] payment.cash/credit/qr が入っている（キャッシュレス専用なら cash: false）
- [ ] `];` が1つだけ存在する

---

### Step 5: CLAUDE.md の登録件数を更新

`/Users/k25040kk/car_motiva/car-motiva.com/CLAUDE.md` の「駐車場登録数」を更新する。

---

### Step 6: git push

```bash
cd /Users/k25040kk/car_motiva/car-motiva.com
git add app/nagoya-parking/data.js CLAUDE.md
git commit -m "feat: 駐車場を追加（<会社名> <エリア名> <N>件）"
GIT_SSH_COMMAND="ssh -i ~/.ssh/github_sakae" git push origin main
```

---

### Step 7: 完了報告

```
✅ <会社名> <エリア名>に<N>件追加しました
─────────────────
1. タイムズ名古屋中村第1 料金: 30分200円 最大1200円
   source: https://times-info.net/P23-aichi/C105/park-detail-BUK0063316/
2. ...
─────────────────
数分後に car-motiva.com/nagoya-parking に反映されます
```

---

## トラブルシューティング

| 問題 | 対処 |
|------|------|
| タイムズ一覧ページがWebFetchで取得できない | WebSearch で site:times-info.net "エリア名" park-detail BUK を使う |
| GSI APIで住所が見つからない | 番地を省いて丁目レベルで再試行（例：`名駅4-16` → `名駅4丁目`） |
| times-info.netのJS座標が地図上でズレる | 旧日本測地系のため使用禁止。GSI APIを使う |
| 料金が取得できない | `hourlyRate: 0, note: "料金要確認"` で登録 |
| 名前が全角数字 | 半角に変換してから登録（「第１」→「第1」） |
