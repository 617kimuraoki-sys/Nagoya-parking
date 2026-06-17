# CarMotiva - 名古屋パーキング

## プロジェクト概要
名古屋市のコインパーキング料金比較サイト。CarMotivaブランドの第1弾アプリ。

**本番URL**: https://car-motiva.com/nagoya-parking  
**GitHub**: https://github.com/617kimuraoki-sys/Sakae-parking  
**X（Twitter）**: @car_motiva  
**ホスティング**: GitHub Pages  
**ドメイン**: Squarespace（car-motiva.com）  
**SSH鍵**: `~/.ssh/github_sakae`（ed25519）

---

## ⚠️ 現状の正確な情報（セッション開始時に必ず確認すること）

| 項目 | 状態 |
|------|------|
| 駐車場登録数 | **756件**（タイムズ 名古屋市中村区 30件・2026-06-11 / タイムズ 栄・錦・丸の内エリア 30件・2026-06-11 / タイムズ 大須・新栄・中区各所・中村区追加 40件・2026-06-11 / タイムズ 金山・熱田区・今池・覚王山・西区・東区・昭和区・南区・名東区・天白区・緑区・北区 83件・2026-06-15 / タイムズ 守山区・中川区・港区 11件・2026-06-15 / タイムズ 名東区・天白区・千種区・北区・東区・西区・瑞穂区・緑区・南区・中区・中川区追加 126件・2026-06-15 / スノーボール拡張 全区 42件・2026-06-15 / スノーボール拡張第2弾 南区・中川区・中村区・中区ほか 11件・2026-06-15 / スノーボール拡張第3弾 千種区・瑞穂区ほか 7件・2026-06-15 / 名鉄協商 名古屋市内 第1弾 29件・2026-06-17 / 名鉄協商 名古屋市内 第2弾 52件・2026-06-17 / 名鉄協商 北区・西区・東区・南区・中川区・港区 43件・2026-06-17 / 名鉄協商 瑞穂区・中村区・天白区・北区・東区・中区・中川区 30件・2026-06-17 / 名鉄協商 昭和区・熱田区・大須・名駅 25件・2026-06-17 / 名鉄協商 栄・久屋・太閤・椿町・千種区・昭和区御器所 28件・2026-06-17） |
| プライバシーポリシーページ | **作成済み** `/privacy-policy/index.html` |
| お問い合わせページ | **作成済み** `/contact/index.html` |
| Aboutページ | **作成済み** `/about/index.html` |
| トップページ | **作成済み** `/top/index.html` |
| コラムページ | **作成済み** `/column/index.html`（記事10本以上） |
| Google Analytics | **設置済み** G-Y5DJKRQDPD（全ページ） |
| Search Console | **登録済み** car-motiva.com |
| sitemap.xml | **設置済み** |
| インデックス登録リクエスト | **送信済み**（2026-05-23） |

---

## ファイル構成

```
car-motiva.com/               ← リポジトリルート
├── index.html                # サイトトップ（リダイレクトまたはランディング）
├── CNAME                     # car-motiva.com
├── sitemap.xml
├── robots.txt
├── ads.txt
├── app/
│   └── nagoya-parking/       # 名古屋パーキングアプリ本体
│       ├── index.html
│       ├── style.css
│       ├── app.js            # メインロジック（フィルター・ソート・地図・料金試算）
│       ├── data.js           # 駐車場データ（公式サイト参照・sourceURL必須）
│       └── maintenance_log.md # メンテナンス記録
├── nagoya-parking/           # 旧パス（リダイレクト用?）
├── nenpi-calc/               # 燃費カンリアプリ
│   └── index.html
├── privacy-policy/
│   └── index.html
├── contact/
│   └── index.html
├── about/
│   └── index.html
├── top/
│   └── index.html
└── column/                   # SEOコラム記事
    ├── index.html
    ├── sakae-parking-guide/
    ├── osu-parking-guide/
    ├── higashiyama-zoo-parking/
    ├── nagoya-castle-parking/
    ├── nagoya-port-parking/
    ├── noritake-garden-parking/
    ├── science-museum-parking/
    ├── tokugawaen-parking/
    ├── tsuruma-park-parking/
    └── nagoya-parking-tips/
```

---

## 技術スタック
- **フロントエンド**: HTML / CSS / Vanilla JavaScript（フレームワークなし）
- **地図**: Leaflet.js（OpenStreetMap）
- **フォント**: システムフォント
- **デザイン**: プライマリ `#2563eb`（青）、モバイルファースト

---

## デプロイ方法

```bash
git add <ファイル名>
git commit -m "変更内容"
GIT_SSH_COMMAND="ssh -i ~/.ssh/github_sakae" git push origin main
```
→ 数分後に本番反映（GitHub Pages）

---

## data.js のデータ構造（実際のフィールド）

```javascript
{
  name: "駐車場名",
  address: "愛知県名古屋市...",
  lat: 35.1234,
  lng: 136.9012,
  hourlyRate: 200,           // 並び替え用・平日基準の1時間料金（円/h）
  rates: {
    weekday: "30分 100円",   // 表示用テキスト
    holiday: "30分 200円"
  },
  maxRate: {
    weekday: 800,            // 最大料金（円）。なしはnull
    holiday: 900
  },
  hours: "24時間",
  placeCid: "123...",        // Google Maps Place CID（10進数）
  placeFid: "0x...:0x...",   // Google Maps FID（ピンポイントURL用）
  note: "補足（任意）",
  capacity: 10,                    // 収容台数（台）
  payment: { cash: true, credit: true, qr: true },  // 支払い方法
  source: "https://times-info.net/P23100xxxxxx/"  // 必須・公式詳細ページURL
}
```

※ `area` フィールドは **存在しない**。エリア判定は app.js の `getArea()` 関数が住所文字列から自動判定する。

---

## エリア一覧（getArea関数で自動判定）

栄 / 錦・伏見 / 名駅 / 大須 / 久屋 / 矢場町 / 金山 / 熱田 / ドーム / 今池 / 鶴舞 / 覚王山 / 千種 / 星ヶ丘 / 名古屋港 / 八事 / 名古屋城 / 円頓寺 / 高岳 / 黒川 / 藤が丘 / 山王 / その他

---

## 主な機能
- 駐車場一覧（料金が安い順・名前順・現在地から近い順・施設から近い順）
- エリアフィルター（複数選択可）
- 料金モード切替（自動・平日・休日）
- 駐車時間指定の料金試算
- リスト表示 / 地図表示（Leaflet）
- お気に入り機能（localStorage）
- 現在地取得
- 施設名検索（東山動植物園・名古屋城など周辺駐車場を絞り込み）

---

## データ登録ルール（2026-06-11 改定）

- 登録対象は**大手チェーンのみ**（タイムズ・名鉄協商・三井のリパーク・NPC24H）
- 料金は必ず各社**公式サイト**から取得（Google マップ画像の読み取り禁止）
- `source` フィールドに**公式詳細ページURLを必ず記録**する
- メンテナンス時は `source` URLを開いて最新料金と比較する
- メンテナンス結果は `maintenance_log.md` に記録する

| 会社 | 公式検索URL |
|------|------------|
| タイムズ | https://times-info.net/park-search/ |
| 名鉄協商 | https://mkp.jp/ |
| 三井のリパーク | https://www.repark.jp/ |
| NPC24H | https://parking.npc-npc.co.jp/ |

---

## 既知の問題・対応中

（なし）
