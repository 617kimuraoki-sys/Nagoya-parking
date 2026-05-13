# CarMotiva - 名古屋パーキング

## プロジェクト概要
名古屋市中心部のコインパーキング料金比較サイト。
CarMotivaブランドの第1弾アプリ。

**本番URL**: https://car-motiva.com  
**GitHub**: https://github.com/617kimuraoki-sys/Sakae-parking  
**X（Twitter）**: @car_motiva

---

## 技術スタック
- **フロントエンド**: HTML / CSS / Vanilla JavaScript（フレームワークなし）
- **地図**: Leaflet.js
- **ホスティング**: GitHub Pages
- **ドメイン**: Squarespace（car-motiva.com）

---

## ファイル構成
```
sakae-parking/
├── index.html   # メインHTML・UIコンポーネント
├── style.css    # 全スタイル定義
├── app.js       # アプリロジック（フィルター・ソート・地図・料金試算）
├── data.js      # 駐車場データ（107件）
├── sitemap.xml  # Google Search Console用
└── CNAME        # カスタムドメイン設定（car-motiva.com）
```

---

## デプロイ方法
ローカルで編集後、以下で本番に反映される（数分で自動デプロイ）：

```bash
git add <ファイル名>
git commit -m "変更内容"
git push origin main
```

**SSH設定済み**: `~/.ssh/github_sakae`（ed25519）

---

## 主な機能
- 駐車場一覧（料金が安い順・名前順・現在地から近い順）
- エリアフィルター（全件・栄・錦伏見・名駅・大須・久屋・金山）
- 料金モード切替（自動・平日・休日）
- 駐車時間指定の料金試算（1h・2h・3h・6h・12h・24h）
- リスト表示 / 地図表示（Leaflet）
- お気に入り機能（localStorage）
- 現在地取得・ソート・地図マーカー表示

---

## データ構造（data.js）
```javascript
{
  name: "駐車場名",
  area: "栄",                      // エリア名
  address: "愛知県名古屋市...",
  lat: 35.1234, lng: 136.9012,     // 座標
  hours: "24時間",
  rate: {
    weekday: "60分100円",           // 平日料金テキスト
    holiday: "60分200円",           // 休日料金テキスト
    weekdayMax: 800,                // 平日最大料金（円）
    holidayMax: 900,                // 休日最大料金（円）
    per30min: 50,                   // 30分あたりの料金（試算用）
    per30minHoliday: 100,           // 休日30分あたりの料金（試算用）
  },
  note: "補足情報（任意）",
  mapUrl: "https://maps.google.com/..."
}
```

---

## デザイン方針
- モバイルファースト（max-width: 600px）
- カラー: プライマリ `#2563eb`（青）
- フォント: システムフォント（-apple-system, Hiragino Sans）
- シンプルで使いやすいUI

---

## 今後の展開
- car-motiva.com 配下で車関連アプリを順次リリース予定
- 対象エリアの拡大（他都市への展開）
- データの定期的なメンテナンス
