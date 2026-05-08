// 駐車場データ
// hourlyRate: 並び替え用に正規化した平日基準の1時間料金（円/h）
// rates.weekday / rates.holiday: 表示用の料金テキスト
// maxRate.weekday / maxRate.holiday: 最大料金（円）。「なし」は null
// note: 補足（時間帯別料金など）
const parkingData = [
  {
    name: "名古屋市営久屋駐車場",
    address: "愛知県名古屋市中区栄3丁目5",
    lat: 35.16840232749371,
    lng: 136.90857250749093,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "7:00-24:00"
  },
  {
    name: "名鉄協商パーキング 池田公園PB",
    address: "愛知県名古屋市中区栄4丁目8",
    lat: 35.16872255388635,
    lng: 136.9209144530072,
    hourlyRate: 100,
    rates: {
      weekday: "昼(6-18時) 60分 100円 / 夜(18-6時) 60分 200円",
      holiday: "60分 200円"
    },
    maxRate: { weekday: 800, holiday: 900 },
    note: "夜間は別途最大料金あり（平日900円 / 休日1000円）",
    hours: "24時間"
  },
  {
    name: "名古屋市営大須駐車場",
    address: "愛知県名古屋市中区大須3丁目14-12",
    lat: 35.161846164019394,
    lng: 136.90340495929925,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 300円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "7:00-22:00"
  },
  {
    name: "名鉄協商パーキング キング観光サウザンド栄若宮大通店",
    address: "愛知県名古屋市中区栄5丁目26-26",
    lat: 35.16310379392671,
    lng: 136.9122831555505,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "NPC24H クイック錦3丁目パーキング",
    address: "愛知県名古屋市中区錦3丁目5-19",
    lat: 35.175063714786745,
    lng: 136.90733479509285,
    hourlyRate: 800,
    rates: { weekday: "15分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "鈴木不動産コインパーキング 大須",
    address: "愛知県名古屋市中区大須3丁目4",
    lat: 35.161244020386064,
    lng: 136.9053513348734,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間"
  },
  {
    name: "鈴木不動産コインパーキング 大須2",
    address: "愛知県名古屋市中区大須3丁目11-2",
    lat: 35.16109479921114,
    lng: 136.90448241374233,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 大須第13駐車場",
    address: "愛知県名古屋市中区大須3丁目5-30",
    lat: 35.161522232286075,
    lng: 136.90517862326394,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ大須赤門通",
    address: "愛知県名古屋市中区大須3丁目30-7",
    lat: 35.16048404324727,
    lng: 136.90549989186556,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 330円" },
    maxRate: { weekday: 1000, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "セントラルパーキング 栄",
    address: "愛知県名古屋市中区栄4丁目15-6",
    lat: 35.16800577901316,
    lng: 136.91029345381477,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "20分 100円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  }
];
