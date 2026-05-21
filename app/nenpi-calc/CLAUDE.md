# 燃費カンリ - CLAUDE.md

## アプリ概要
車の燃費を記録・管理するWebアプリ。CarMotivaの第2弾アプリ。

## URL
car-motiva.com/nenpi-calc（予定）

## 主要機能
- 燃費計算（走行距離 ÷ 給油量）
- ガソリン代計算（単価 × 給油量）
- 過去の給油記録を保存・閲覧（localStorage）
- 複数車両管理
- 燃費推移グラフ（Chart.js）

## ファイル構成
- index.html - メインHTML
- style.css - スタイル
- app.js - ロジック全般

## データ保存（localStorage）
- `nenpi_cars` - 登録車両リスト
- `nenpi_records` - 給油記録リスト

## 外部ライブラリ
- Chart.js（CDN）- グラフ描画
