// 駐車場データ
// hourlyRate: 並び替え用に正規化した平日基準の1時間料金（円/h）
// rates.weekday / rates.holiday: 表示用の料金テキスト
// maxRate.weekday / maxRate.holiday: 最大料金（円）。「なし」は null
// placeFid: Google Maps の FID（"0x...:0x..." 形式。ピンポイントURL用、PC・モバイル共通）
// placeCid: Google Maps の Place CID（10進数。フォールバック用）
// note: 補足（時間帯別料金など）
const parkingData = [
  {
    name: "名古屋市営久屋駐車場",
    address: "愛知県名古屋市中区栄3丁目5",
    lat: 35.1683349,
    lng: 136.9087304,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "7:00-24:00",
    placeCid: "8045847241425575909",
    placeFid: "0x600370d173994c83:0x6fa8976ff63a5fe5"
  },
  {
    name: "名鉄協商パーキング 池田公園PB",
    address: "愛知県名古屋市中区栄4丁目8",
    lat: 35.1669754,
    lng: 136.9136962,
    hourlyRate: 100,
    rates: {
      weekday: "昼(6-18時) 60分 100円 / 夜(18-6時) 60分 200円",
      holiday: "60分 200円"
    },
    maxRate: { weekday: 800, holiday: 900 },
    note: "夜間は別途最大料金あり（平日900円 / 休日1000円）",
    hours: "24時間",
    placeCid: "433290737141809363",
    placeFid: "0x600370c55a942baf:0x6035ba137ce00d3"
  },
  {
    name: "名古屋市営大須駐車場",
    address: "愛知県名古屋市中区大須3丁目14-12",
    lat: 35.1608753,
    lng: 136.9029133,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 300円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "7:00-22:00",
    placeCid: "5084908855813814860",
    placeFid: "0x600370ccd56077f1:0x469139a9d2053a4c"
  },
  {
    name: "名鉄協商パーキング キング観光サウザンド栄若宮大通店",
    address: "愛知県名古屋市中区栄5丁目26-26",
    lat: 35.1622138,
    lng: 136.9118363,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 1100 },
    hours: "24時間",
    placeCid: "12824244123971162831",
    placeFid: "0x600371dde9f9b267:0xb1f8de15c23112cf"
  },
  {
    name: "NPC24H クイック錦3丁目パーキング",
    address: "愛知県名古屋市中区錦3丁目5-19",
    lat: 35.1729482,
    lng: 136.9073314,
    hourlyRate: 800,
    rates: { weekday: "15分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間",
    placeCid: "6681927664520791921",
    placeFid: "0x600370d5dde9e815:0x5cbaf9cefa9e0771"
  },
  {
    name: "鈴木不動産コインパーキング 大須",
    address: "愛知県名古屋市中区大須3丁目4",
    lat: 35.1609295,
    lng: 136.9052065,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間",
    placeCid: "17709381697394650179",
    placeFid: "0x600370ccf51447f3:0xf5c45cd351032c43"
  },
  {
    name: "鈴木不動産コインパーキング 大須2",
    address: "愛知県名古屋市中区大須3丁目11-2",
    lat: 35.1609742,
    lng: 136.9044985,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間",
    placeCid: "7306708982803373275",
    placeFid: "0x6003711b718ae115:0x6566a51b75269cdb"
  },
  {
    name: "三井のリパーク 大須第13駐車場",
    address: "愛知県名古屋市中区大須3丁目5-30",
    lat: 35.1613681,
    lng: 136.9051763,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間",
    placeCid: "7076298928687942227",
    placeFid: "0x6003710efcb32915:0x6234106240ec0a53"
  },
  {
    name: "タイムズ大須赤門通",
    address: "愛知県名古屋市中区大須3丁目30-7",
    lat: 35.1602750,
    lng: 136.9055420,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 330円" },
    maxRate: { weekday: 1000, holiday: 1800 },
    hours: "24時間",
    placeCid: "4718547592727150776",
    placeFid: "0x600370cc7e655555:0x417ba6092046c0b8"
  },
  {
    name: "セントラルパーキング 栄",
    address: "愛知県名古屋市中区栄4丁目15-6",
    lat: 35.1671914,
    lng: 136.9101453,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "20分 100円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    placeCid: "10694634155120255169",
    placeFid: "0x600370d0332ea587:0x946af919fab3e0c1"
  },
  {
    name: "1017パーキング 駐車場",
    address: "愛知県名古屋市東区東桜1丁目10-16",
    lat: 35.1724147,
    lng: 136.9101653,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    placeCid: "5594029923395058465",
    placeFid: "0x600370d71d9dbe05:0x4da1fc93aede3b21"
  },
  {
    name: "タイムズ栄4丁目",
    address: "愛知県名古屋市中区栄4-5",
    lat: 35.1687810,
    lng: 136.9119220,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 1700, holiday: 1700 },
    hours: "24時間",
    placeCid: "793233650285598500",
    placeFid: "0x600370cd6605fb6b:0xb0221cd5d28d724"
  },
  {
    name: "タイムズ栄4丁目第5",
    address: "愛知県名古屋市中区栄4-2",
    lat: 35.1685690,
    lng: 136.9113220,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1900, holiday: 1200 },
    hours: "24時間",
    placeCid: "10411052126918142394",
    placeFid: "0x6003715d11216a0b:0x907b7cbfd307e9ba"
  },
  {
    name: "タイムズ栄第41",
    address: "愛知県名古屋市中区栄4-5",
    lat: 35.1691190,
    lng: 136.9125470,
    hourlyRate: 1200,
    rates: { weekday: "15分 300円", holiday: "15分 300円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間",
    placeCid: "5741646384598225829",
    placeFid: "0x600370da9d6d099f:0x4fae6cf75be213a5"
  },
  {
    name: "タイムズ栄第46",
    address: "愛知県名古屋市中区栄3-28",
    lat: 35.1639560,
    lng: 136.9059060,
    hourlyRate: 660,
    rates: { weekday: "20分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間",
    placeCid: "17708141545662105488",
    placeFid: "0x600370cd901fa729:0xf5bff4e9fd86c790"
  },
  {
    name: "タイムズ栄3丁目第5",
    address: "愛知県名古屋市中区栄3-19",
    lat: 35.1657080,
    lng: 136.9041720,
    hourlyRate: 1750,
    rates: { weekday: "12分 350円", holiday: "12分 350円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間",
    placeCid: "16003481223995443925",
    placeFid: "0x60037159c22d7725:0xde17c96215e1cad5"
  },
  {
    name: "タイムズ栄第40",
    address: "愛知県名古屋市中区栄3-22",
    lat: 35.1643750,
    lng: 136.9026360,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1700, holiday: 1700 },
    hours: "24時間",
    placeCid: "8193557497652026366",
    placeFid: "0x6003772d35988353:0x71b55d21fe499bfe"
  },
  {
    name: "タイムズ大須第4",
    address: "愛知県名古屋市中区大須2-13",
    lat: 35.1605470,
    lng: 136.9002780,
    hourlyRate: 220,
    rates: { weekday: "60分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 800, holiday: 1100 },
    hours: "24時間",
    placeCid: "4073354089518942967",
    placeFid: "0x600377325910877b:0x388775f67e294af7"
  },
  {
    name: "タイムズ大須3丁目第2",
    address: "愛知県名古屋市中区大須3-1",
    lat: 35.1619220,
    lng: 136.9022170,
    hourlyRate: 660,
    rates: { weekday: "20分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1000, holiday: 2000 },
    hours: "24時間",
    placeCid: "16841389224939340840",
    placeFid: "0x60037732b61e4435:0xe9b8a2454499c428"
  },
  {
    name: "タイムズ大須2丁目第3",
    address: "愛知県名古屋市中区大須2-30",
    lat: 35.1585470,
    lng: 136.9007610,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1100, holiday: 2200 },
    hours: "24時間",
    placeCid: "4769024794599402034",
    placeFid: "0x60037733714126d7:0x422efac88720aa32"
  },
  {
    name: "タイムズ万松寺",
    address: "愛知県名古屋市中区大須3-30",
    lat: 35.1593610,
    lng: 136.9058810,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 330円" },
    maxRate: { weekday: 1000, holiday: 1900 },
    hours: "24時間",
    placeCid: "5672196306615835659",
    placeFid: "0x600371b5651206bd:0x4eb7b07d001e9c0b"
  },
  {
    name: "タイムズ久屋大通駅北",
    address: "愛知県名古屋市中区丸の内3-19",
    lat: 35.1746170,
    lng: 136.9070830,
    hourlyRate: 1100,
    rates: { weekday: "12分 220円", holiday: "12分 220円" },
    maxRate: { weekday: 2200, holiday: 2200 },
    hours: "24時間",
    placeCid: "11380600453470956412",
    placeFid: "0x6003712f787b265d:0x9df003d0bfc92b7c"
  },
  {
    name: "タイムズ広小路伏見",
    address: "愛知県名古屋市中区栄1-5",
    lat: 35.1680440,
    lng: 136.8968190,
    hourlyRate: 1050,
    rates: { weekday: "20分 350円", holiday: "20分 350円" },
    maxRate: { weekday: 1600, holiday: 1600 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄竪三蔵通",
    address: "愛知県名古屋市中区栄1-3",
    lat: 35.1670580,
    lng: 136.8938360,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1800, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄竪三蔵通第2",
    address: "愛知県名古屋市中区栄1-9",
    lat: 35.1663292,
    lng: 136.8937921,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1800, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄第42",
    address: "愛知県名古屋市中区栄1-9",
    lat: 35.1661060,
    lng: 136.8940830,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1800, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦第7",
    address: "愛知県名古屋市中区錦1-6",
    lat: 35.1714670,
    lng: 136.8958500,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: null, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦第6",
    address: "愛知県名古屋市中区錦1-16",
    lat: 35.1690440,
    lng: 136.8933080,
    hourlyRate: 1050,
    rates: { weekday: "20分 350円", holiday: "20分 350円" },
    maxRate: { weekday: 1600, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦第9",
    address: "愛知県名古屋市中区錦1-7",
    lat: 35.1717330,
    lng: 136.8938940,
    hourlyRate: 1050,
    rates: { weekday: "20分 350円", holiday: "30分 250円" },
    maxRate: { weekday: 2500, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦2丁目第7",
    address: "愛知県名古屋市中区錦2-19",
    lat: 35.1689360,
    lng: 136.9008690,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2300, holiday: 2300 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦2丁目",
    address: "愛知県名古屋市中区錦2-8",
    lat: 35.1717440,
    lng: 136.8982780,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2500, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦3丁目第5",
    address: "愛知県名古屋市中区錦3-10",
    lat: 35.1722610,
    lng: 136.9026080,
    hourlyRate: 900,
    rates: { weekday: "20分 300円", holiday: "20分 300円" },
    maxRate: { weekday: 2000, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦長島町",
    address: "愛知県名古屋市中区錦2-6",
    lat: 35.1716670,
    lng: 136.8996110,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2400, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦2丁目第11",
    address: "愛知県名古屋市中区錦2-11",
    lat: 35.1711440,
    lng: 136.8999440,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2400, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ錦3丁目第2",
    address: "愛知県名古屋市中区錦3-14",
    lat: 35.1715330,
    lng: 136.9060420,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ錦2丁目第12",
    address: "愛知県名古屋市中区錦2-11",
    lat: 35.1708440,
    lng: 136.8997080,
    hourlyRate: 1200,
    rates: { weekday: "15分 300円", holiday: "15分 300円" },
    maxRate: { weekday: 1500, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦2丁目第8",
    address: "愛知県名古屋市中区錦2-8",
    lat: 35.1719580,
    lng: 136.8980080,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2500, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦長者町",
    address: "愛知県名古屋市中区錦2-11",
    lat: 35.1707110,
    lng: 136.9005909,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2400, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ錦3丁目第3",
    address: "愛知県名古屋市中区錦3-7",
    lat: 35.1717250,
    lng: 136.9059250,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ錦長者町第2",
    address: "愛知県名古屋市中区錦2-6",
    lat: 35.1715250,
    lng: 136.9006190,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ名古屋駅前",
    address: "愛知県名古屋市中村区名駅3-26",
    lat: 35.1722830,
    lng: 136.8852360,
    hourlyRate: 2400,
    rates: { weekday: "10分 400円", holiday: "10分 400円" },
    maxRate: { weekday: 2200, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅2丁目第5",
    address: "愛知県名古屋市中村区名駅2-41",
    lat: 35.1750250,
    lng: 136.8849030,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1400, holiday: 1400 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅3丁目",
    address: "愛知県名古屋市中村区名駅3-24",
    lat: 35.1722199,
    lng: 136.8869292,
    hourlyRate: 3000,
    rates: { weekday: "10分 500円", holiday: "10分 500円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南1丁目",
    address: "愛知県名古屋市中村区名駅南1-23",
    lat: 35.1665420,
    lng: 136.8867190,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1540, holiday: 1540 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅2丁目第4",
    address: "愛知県名古屋市中村区名駅2-42",
    lat: 35.1745110,
    lng: 136.8838000,
    hourlyRate: 1500,
    rates: { weekday: "10分 250円", holiday: "10分 250円" },
    maxRate: { weekday: 2000, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "JPタワー名古屋",
    address: "愛知県名古屋市中村区名駅1-1",
    lat: 35.1731071,
    lng: 136.8821529,
    hourlyRate: 700,
    rates: { weekday: "30分 350円", holiday: "30分 350円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ椿町第12",
    address: "愛知県名古屋市中村区椿町16",
    lat: 35.1683491,
    lng: 136.8815477,
    hourlyRate: 2400,
    rates: { weekday: "10分 400円", holiday: "10分 400円" },
    maxRate: { weekday: 1800, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅3丁目第5",
    address: "愛知県名古屋市中村区名駅3-24",
    lat: 35.1725250,
    lng: 136.8867440,
    hourlyRate: 2100,
    rates: { weekday: "10分 350円", holiday: "10分 350円" },
    maxRate: { weekday: 1700, holiday: 1700 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅2丁目第2",
    address: "愛知県名古屋市中村区名駅2-40",
    lat: 35.1752346,
    lng: 136.8838502,
    hourlyRate: 1250,
    rates: { weekday: "12分 250円", holiday: "12分 250円" },
    maxRate: { weekday: 2000, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "タイムズ椿町第10",
    address: "愛知県名古屋市中村区椿町10",
    lat: 35.1691640,
    lng: 136.8781970,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1500, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "タイムズ名古屋新幹線口",
    address: "愛知県名古屋市中村区椿町16",
    lat: 35.1681640,
    lng: 136.8811470,
    hourlyRate: 2100,
    rates: { weekday: "10分 350円", holiday: "10分 350円" },
    maxRate: { weekday: 1600, holiday: 1600 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅5丁目",
    address: "愛知県名古屋市中村区名駅5-7",
    lat: 35.1707979,
    lng: 136.8916348,
    hourlyRate: 660,
    rates: { weekday: "20分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1900, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅4丁目第7",
    address: "愛知県名古屋市中村区名駅4-16",
    lat: 35.1704807,
    lng: 136.8881735,
    hourlyRate: 1200,
    rates: { weekday: "15分 300円", holiday: "15分 300円" },
    maxRate: { weekday: 1800, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅5丁目第2",
    address: "愛知県名古屋市中村区名駅5-25",
    lat: 35.1686640,
    lng: 136.8917140,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 1600, holiday: 1600 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南1丁目第3",
    address: "愛知県名古屋市中村区名駅南1-5",
    lat: 35.1674720,
    lng: 136.8908420,
    hourlyRate: 880,
    rates: { weekday: "15分 220円", holiday: "15分 220円" },
    maxRate: { weekday: 1400, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南第13",
    address: "愛知県名古屋市中村区名駅南1-14",
    lat: 35.1670360,
    lng: 136.8889390,
    hourlyRate: 900,
    rates: { weekday: "20分 300円", holiday: "20分 300円" },
    maxRate: { weekday: 1300, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南第11",
    address: "愛知県名古屋市中村区名駅南4-3",
    lat: 35.1623780,
    lng: 136.8877000,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南第6",
    address: "愛知県名古屋市中村区名駅南2-12",
    lat: 35.1650720,
    lng: 136.8871170,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南1丁目第2",
    address: "愛知県名古屋市中村区名駅南1-20",
    lat: 35.1662970,
    lng: 136.8873810,
    hourlyRate: 880,
    rates: { weekday: "15分 220円", holiday: "15分 220円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南第12",
    address: "愛知県名古屋市中村区名駅南1-13",
    lat: 35.1667750,
    lng: 136.8889905,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1320, holiday: 1320 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南第14",
    address: "愛知県名古屋市中村区名駅南3-7",
    lat: 35.1614403,
    lng: 136.8907106,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南1丁目第7",
    address: "愛知県名古屋市中村区名駅南1-5",
    lat: 35.1673140,
    lng: 136.8912440,
    hourlyRate: 880,
    rates: { weekday: "15分 220円", holiday: "15分 220円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間"
  },

  // ===== 金山エリア =====
  {
    name: "タイムズ金山",
    address: "愛知県名古屋市中区金山2-12",
    lat: 35.142136,
    lng: 136.908483,
    hourlyRate: 220,
    rates: { weekday: "30分 110円", holiday: "30分 110円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "22:00-07:00 夜間最大330円"
  },
  {
    name: "タイムズ金山第３",
    address: "愛知県名古屋市中区金山1-8",
    lat: 35.143256,
    lng: 136.902347,
    hourlyRate: 330,
    rates: { weekday: "08:00-22:00 40分 220円 / 22:00-08:00 60分 110円", holiday: "08:00-22:00 40分 220円 / 22:00-08:00 60分 110円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ金山２丁目",
    address: "愛知県名古屋市中区金山2-10",
    lat: 35.141969,
    lng: 136.907097,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "タイムズ金山町第４",
    address: "愛知県名古屋市熱田区金山町1-8",
    lat: 35.138331,
    lng: 136.902597,
    hourlyRate: 500,
    rates: { weekday: "08:00-17:00 30分 250円 / 17:00-08:00 30分 150円", holiday: "08:00-17:00 30分 250円 / 17:00-08:00 30分 150円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "タイムズ金山町",
    address: "愛知県名古屋市熱田区金山町2-3",
    lat: 35.137703,
    lng: 136.906678,
    hourlyRate: 220,
    rates: { weekday: "60分 220円", holiday: "60分 220円" },
    maxRate: { weekday: 770, holiday: 770 },
    hours: "24時間"
  },
  {
    name: "タイムズSonosaki ヱ 金山",
    address: "愛知県名古屋市熱田区沢下町5",
    lat: 35.136508,
    lng: 136.912583,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "21:00-08:00 夜間最大330円"
  },
  {
    name: "三井のリパーク 金山駅南駐車場",
    address: "愛知県名古屋市中区金山町1-1",
    lat: 35.142585,
    lng: 136.899736,
    hourlyRate: 600,
    rates: { weekday: "30分 300円 (06:00-01:00)", holiday: "30分 300円 (06:00-01:00)" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "06:00-01:00"
  },
  {
    name: "三井のリパーク 金山駅南第２",
    address: "愛知県名古屋市熱田区金山町1-18-15",
    lat: 35.140733,
    lng: 136.899972,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 金山第１",
    address: "愛知県名古屋市熱田区金山町1-5-1",
    lat: 35.141835,
    lng: 136.900158,
    hourlyRate: 880,
    rates: { weekday: "15分 220円", holiday: "15分 220円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 金山第１４",
    address: "愛知県名古屋市熱田区金山町2-3-11",
    lat: 35.140724,
    lng: 136.903185,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 700, holiday: 600 },
    hours: "24時間"
  },

  // ===== 栄・矢場町 追加 =====
  {
    name: "タイムズ名古屋ゼロゲート",
    address: "愛知県名古屋市中区栄3-28",
    lat: 35.160794,
    lng: 136.908864,
    hourlyRate: 900,
    rates: { weekday: "20分 300円", holiday: "20分 300円" },
    maxRate: { weekday: 1400, holiday: 2200 },
    hours: "24時間",
    note: "平日昼最大1400円・夜最大800円 / 休日昼最大2200円・夜最大800円"
  },
  {
    name: "タイムズ栄第２９",
    address: "愛知県名古屋市中区栄5-4",
    lat: 35.162675,
    lng: 136.915161,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄３丁目第４",
    address: "愛知県名古屋市中区栄3-25",
    lat: 35.161019,
    lng: 136.907903,
    hourlyRate: 900,
    rates: { weekday: "20分 300円", holiday: "20分 300円" },
    maxRate: { weekday: 1300, holiday: 1900 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄３丁目第６",
    address: "愛知県名古屋市中区栄3-25",
    lat: 35.160417,
    lng: 136.907794,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄３丁目第８",
    address: "愛知県名古屋市中区栄3-25",
    lat: 35.1604,
    lng: 136.908053,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },

  // ===== 上前津・大須 追加 =====
  {
    name: "タイムズアオキ上前津駅前店",
    address: "愛知県名古屋市中区上前津1-3",
    lat: 35.154061,
    lng: 136.907319,
    hourlyRate: 330,
    rates: { weekday: "08:00-21:00 20分 110円 / 21:00-08:00 60分 110円", holiday: "08:00-21:00 20分 220円 / 21:00-08:00 60分 110円" },
    maxRate: { weekday: 1320, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ楽運寺",
    address: "愛知県名古屋市中区大須4-10",
    lat: 35.156375,
    lng: 136.909936,
    hourlyRate: 900,
    rates: { weekday: "20分 300円", holiday: "10分 300円" },
    maxRate: { weekday: 1500, holiday: 2200 },
    hours: "24時間"
  },
  {
    name: "タイムズ大須第８",
    address: "愛知県名古屋市中区大須3-27",
    lat: 35.156189,
    lng: 136.906664,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "20分 350円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "20:00-08:00 夜間最大300円"
  },

  // ===== 錦・丸の内 追加 =====
  {
    name: "タイムズＳＡＫＡＥ",
    address: "愛知県名古屋市中区錦3-23",
    lat: 35.166375,
    lng: 136.907864,
    hourlyRate: 1000,
    rates: { weekday: "30分 500円", holiday: "30分 500円" },
    maxRate: { weekday: 1500, holiday: 2500 },
    hours: "24時間"
  },
  {
    name: "タイムズ丸の内１丁目",
    address: "愛知県名古屋市中区丸の内1-3",
    lat: 35.174136,
    lng: 136.8988,
    hourlyRate: 660,
    rates: { weekday: "06:00-14:00 20分 330円 / 14:00-22:00 30分 330円 / 22:00-06:00 60分 110円", holiday: "06:00-14:00 20分 330円 / 14:00-22:00 30分 330円 / 22:00-06:00 60分 110円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "22:00-06:00 夜間最大330円"
  },
  {
    name: "タイムズ丸の内２丁目第６",
    address: "愛知県名古屋市中区丸の内2-2",
    lat: 35.173564,
    lng: 136.900869,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2000, holiday: 800 },
    hours: "24時間",
    note: "平日昼最大2000円・夜最大500円 / 休日昼最大800円・夜最大500円"
  },
  {
    name: "タイムズ丸の内２丁目第７",
    address: "愛知県名古屋市中区丸の内2-15",
    lat: 35.17175,
    lng: 136.901897,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 700, holiday: 1000 },
    hours: "24時間",
    note: "平日夜間最大700円 / 休日昼最大1000円・夜最大700円"
  },
  {
    name: "タイムズ丸の内２丁目第９",
    address: "愛知県名古屋市中区丸の内2-10",
    lat: 35.172447,
    lng: 136.901228,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: null, holiday: 1000 },
    hours: "24時間",
    note: "夜間最大400円 / 休日昼最大1000円"
  },
  {
    name: "タイムズ丸の内２丁目第１０",
    address: "愛知県名古屋市中区丸の内2-2",
    lat: 35.174194,
    lng: 136.900789,
    hourlyRate: 1400,
    rates: { weekday: "15分 350円", holiday: "15分 350円" },
    maxRate: { weekday: 2000, holiday: 600 },
    hours: "24時間",
    note: "平日昼最大2000円・夜最大400円 / 休日昼最大600円・夜最大400円"
  },
  {
    name: "タイムズ丸の内３丁目",
    address: "愛知県名古屋市中区丸の内3-17",
    lat: 35.17185,
    lng: 136.908925,
    hourlyRate: 1250,
    rates: { weekday: "12分 250円", holiday: "15分 250円" },
    maxRate: { weekday: null, holiday: 1500 },
    hours: "24時間",
    note: "夜間最大400円 / 休日昼最大1500円"
  },

  // ===== 栄エリア 追加 =====
  {
    name: "タイムズ栄３丁目第１１",
    address: "愛知県名古屋市中区栄3-12",
    lat: 35.162864,
    lng: 136.906653,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1500, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "タイムズ白川公園東",
    address: "愛知県名古屋市中区栄3-23",
    lat: 35.161725,
    lng: 136.906669,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄第３４",
    address: "愛知県名古屋市中区栄3-21",
    lat: 35.16175,
    lng: 136.905825,
    hourlyRate: 1200,
    rates: { weekday: "15分 300円", holiday: "15分 300円" },
    maxRate: { weekday: 1800, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄３丁目第９",
    address: "愛知県名古屋市中区栄3-22",
    lat: 35.160608,
    lng: 136.906436,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1400, holiday: 2000 },
    hours: "24時間",
    note: "平日09:00-18:00最大1400円 / 休日09:00-18:00最大2000円"
  },
  {
    name: "タイムズ栄４丁目第６",
    address: "愛知県名古屋市中区栄4-11",
    lat: 35.163611,
    lng: 136.914983,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄５丁目",
    address: "愛知県名古屋市中区栄5-7",
    lat: 35.162044,
    lng: 136.917186,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "24時間",
    note: "平日08:00-20:00最大1000円"
  },

  // ===== 新栄エリア =====
  {
    name: "タイムズ新栄第１１",
    address: "愛知県名古屋市中区新栄1-10",
    lat: 35.164528,
    lng: 136.918872,
    hourlyRate: 660,
    rates: { weekday: "20分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1100, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "タイムズ新栄１丁目第６",
    address: "愛知県名古屋市中区新栄1-30",
    lat: 35.161222,
    lng: 136.919603,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "タイムズ新栄１丁目第５",
    address: "愛知県名古屋市中区新栄1-48",
    lat: 35.158825,
    lng: 136.921917,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 990, holiday: null },
    hours: "24時間",
    note: "平日08:00-18:00最大990円"
  },
  {
    name: "タイムズ新栄第１３",
    address: "愛知県名古屋市中区新栄2-9",
    lat: 35.165803,
    lng: 136.925042,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "24時間",
    note: "08:00-20:00最大1000円"
  },
  {
    name: "タイムズ新栄第１５",
    address: "愛知県名古屋市中区新栄2-24",
    lat: 35.163861,
    lng: 136.923667,
    hourlyRate: 330,
    rates: { weekday: "20分 110円", holiday: "20分 110円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "08:00-00:00 20分110円 / 00:00-08:00 60分110円。夜間最大220円"
  },
  {
    name: "タイムズ新栄第４",
    address: "愛知県名古屋市中区新栄2-10",
    lat: 35.164769,
    lng: 136.924836,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },

  // ===== 久屋エリア (丸の内3丁目 追加) =====
  {
    name: "タイムズ丸の内３丁目第２",
    address: "愛知県名古屋市中区丸の内3-10",
    lat: 35.172206,
    lng: 136.905808,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 2300, holiday: 1000 },
    hours: "24時間",
    note: "平日07:00-19:00最大2300円 / 休日07:00-19:00最大1000円"
  },
  {
    name: "タイムズ丸の内３丁目第６",
    address: "愛知県名古屋市中区丸の内3-14",
    lat: 35.171939,
    lng: 136.905028,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1100, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ丸の内３丁目第７",
    address: "愛知県名古屋市中区丸の内3-2",
    lat: 35.173867,
    lng: 136.90555,
    hourlyRate: 1000,
    rates: { weekday: "15分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1800, holiday: 700 },
    hours: "24時間",
    note: "平日08:00-19:00最大1800円 / 休日08:00-19:00最大700円"
  },
  {
    name: "タイムズ大津通",
    address: "愛知県名古屋市中区丸の内3-4",
    lat: 35.173708,
    lng: 136.908539,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1800, holiday: 2000 },
    hours: "24時間"
  },

  // ===== 大須エリア 追加 =====
  {
    name: "タイムズ大須２丁目第９",
    address: "愛知県名古屋市中区大須2-30",
    lat: 35.157136,
    lng: 136.90185,
    hourlyRate: 1000,
    rates: { weekday: "30分 250円", holiday: "15分 250円" },
    maxRate: { weekday: 1100, holiday: 2200 },
    hours: "24時間",
    note: "平日08:00-18:00最大1100円 / 休日08:00-18:00最大2200円"
  },
  {
    name: "タイムズ大須２丁目第５",
    address: "愛知県名古屋市中区大須2-9",
    lat: 35.159828,
    lng: 136.901278,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "20:00-08:00最大400円"
  },
  {
    name: "タイムズ大須２丁目第４",
    address: "愛知県名古屋市中区大須2-24",
    lat: 35.157756,
    lng: 136.901839,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間",
    note: "20:00-08:00最大500円"
  },
  {
    name: "タイムズ大須スケートリンク",
    address: "愛知県名古屋市中区門前町1-60",
    lat: 35.154106,
    lng: 136.901711,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間",
    note: "平日07:00-19:00最大700円"
  },

  // ===== 熱田神宮エリア =====
  {
    name: "熱田神宮 無料駐車場（東門）",
    address: "愛知県名古屋市熱田区神宮1丁目1-1",
    lat: 35.1278,
    lng: 136.9115,
    hourlyRate: 0,
    rates: { weekday: "無料", holiday: "無料" },
    maxRate: { weekday: null, holiday: null },
    hours: "7:00-17:00",
    note: "約300台収容の公式無料駐車場。年末年始・大型祭事時は閉鎖"
  },
  {
    name: "名鉄協商パーキング 神宮前駅西PB",
    address: "愛知県名古屋市熱田区神宮3丁目6",
    lat: 35.1249,
    lng: 136.9067,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 神宮前第6",
    address: "愛知県名古屋市熱田区神宮3丁目",
    lat: 35.1252,
    lng: 136.9079,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間",
    note: "17:00-8:00 最大300円"
  },
  {
    name: "名鉄協商パーキング 熱田神宮西",
    address: "愛知県名古屋市熱田区白鳥2丁目12-16",
    lat: 35.1263,
    lng: 136.9031,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 600, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ熱田神宮北",
    address: "愛知県名古屋市熱田区森後町6",
    lat: 35.1296,
    lng: 136.9092,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 550, holiday: 550 },
    hours: "24時間",
    note: "19:00-8:00 最大330円"
  },
  {
    name: "タイムズ神宮前駅北",
    address: "愛知県名古屋市熱田区三本松町1",
    lat: 35.1256,
    lng: 136.9087,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 550, holiday: 550 },
    hours: "24時間",
    note: "19:00-8:00 最大330円"
  },
  {
    name: "三井のリパーク 熱田神宮西駅前",
    address: "愛知県名古屋市熱田区旗屋町507",
    lat: 35.1238,
    lng: 136.9054,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間",
    note: "19:00-8:00 最大300円"
  },
  {
    name: "三井のリパーク 熱田駅前",
    address: "愛知県名古屋市熱田区旗屋町",
    lat: 35.1219,
    lng: 136.9117,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間",
    note: "19:00-8:00 最大400円"
  },
  {
    name: "三井のリパーク 名古屋神宮2丁目",
    address: "愛知県名古屋市熱田区神宮2丁目",
    lat: 35.1245,
    lng: 136.9094,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋神宮2丁目第3",
    address: "愛知県名古屋市熱田区神宮2丁目",
    lat: 35.1242,
    lng: 136.9090,
    hourlyRate: 200,
    rates: {
      weekday: "昼(8-20時) 60分 200円 / 夜(20-8時) 60分 100円",
      holiday: "昼(8-20時) 60分 200円 / 夜(20-8時) 60分 100円"
    },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },

  // ===== 矢場町エリア追加分 =====
  {
    name: "矢場公園駐車場",
    address: "愛知県名古屋市中区栄4丁目16-1",
    lat: 35.1609,
    lng: 136.9111,
    hourlyRate: 540,
    rates: { weekday: "30分 270円", holiday: "30分 270円" },
    maxRate: { weekday: 1300, holiday: 1700 },
    hours: "24時間",
    note: "平日6:00-22:00最大1300円 / 休日6:00-22:00最大1700円 / 夜間22:00-6:00最大500円"
  },
  {
    name: "タイムズナゴヤドーム駅前",
    address: "愛知県名古屋市東区大幸3丁目1",
    lat: 35.1857,
    lng: 136.9479,
    hourlyRate: 200,
    rates: { weekday: "昼(8-0時) 30分 100円 / 夜(0-8時) 60分 100円", holiday: "昼(8-0時) 30分 100円 / 夜(0-8時) 60分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間",
    note: "イベント開催日は料金が変わります。現地カレンダーを確認推奨"
  },
  {
    name: "タイムズナゴヤドーム駅前第3",
    address: "愛知県名古屋市東区大幸4丁目1",
    lat: 35.1872,
    lng: 136.9490,
    hourlyRate: 200,
    rates: { weekday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円", holiday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間",
    note: "イベント開催日は料金が変わります。現地カレンダーを確認推奨"
  },
  {
    name: "タイムズナゴヤドーム駅前第5",
    address: "愛知県名古屋市東区大幸4丁目14",
    lat: 35.1876,
    lng: 136.9504,
    hourlyRate: 200,
    rates: { weekday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円", holiday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間",
    note: "イベント開催日は料金が変わります。現地カレンダーを確認推奨"
  },
  {
    name: "名鉄協商パーキング 古出来町",
    address: "愛知県名古屋市東区古出来2丁目2",
    lat: 35.1831,
    lng: 136.9440,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク ナゴヤドーム前",
    address: "愛知県名古屋市東区矢田南2丁目13-10",
    lat: 35.1839,
    lng: 136.9472,
    hourlyRate: 200,
    rates: { weekday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円", holiday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円" },
    maxRate: { weekday: 300, holiday: 300 },
    hours: "24時間",
    note: "イベント開催日は最大3,000円。現地カレンダーを確認推奨"
  },
  {
    name: "三井のリパーク 矢田南",
    address: "愛知県名古屋市東区矢田南2丁目12-12",
    lat: 35.1837,
    lng: 136.9467,
    hourlyRate: 200,
    rates: { weekday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円", holiday: "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円" },
    maxRate: { weekday: 300, holiday: 300 },
    hours: "24時間",
    note: "イベント開催日は最大2,500円。現地カレンダーを確認推奨"
  },
  {
    name: "三井のリパーク ナゴヤドーム南",
    address: "愛知県名古屋市千種区萱場2丁目14-22",
    lat: 35.1800,
    lng: 136.9491,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 400, holiday: 400 },
    hours: "24時間",
    note: "イベント開催日は最大2,500円。現地カレンダーを確認推奨"
  },
  {
    name: "三井のリパーク 大曽根第2",
    address: "愛知県名古屋市北区大曽根3丁目",
    lat: 35.1940,
    lng: 136.9445,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 750, holiday: 750 },
    hours: "24時間",
    note: "夜間(20-8時)最大400円"
  },

  // ===== 今池エリア =====
  {
    name: "名鉄協商パーキング 今池1丁目",
    address: "愛知県名古屋市千種区今池1丁目",
    lat: 35.1627,
    lng: 136.9323,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間",
    note: "8:00-18:00最大1100円 / 18:00-8:00最大800円"
  },
  {
    name: "タイムズ今池第11",
    address: "愛知県名古屋市千種区今池1丁目29-15",
    lat: 35.1622,
    lng: 136.9318,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間",
    note: "駐車後6時間以内最大1000円"
  },
  {
    name: "名鉄協商パーキング 今池3丁目第2",
    address: "愛知県名古屋市千種区今池3丁目37",
    lat: 35.1606,
    lng: 136.9335,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間",
    note: "18:00-8:00最大300円"
  },
  {
    name: "三井のリパーク 今池3丁目",
    address: "愛知県名古屋市千種区今池3丁目",
    lat: 35.1604,
    lng: 136.9342,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間",
    note: "20:00-8:00最大300円"
  },
  {
    name: "三井のリパーク 今池第20",
    address: "愛知県名古屋市千種区今池2丁目",
    lat: 35.1619,
    lng: 136.9330,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間",
    note: "入庫後12時間以内最大1000円"
  },
  {
    name: "三井のリパーク 今池5丁目第3",
    address: "愛知県名古屋市千種区今池5丁目",
    lat: 35.1579,
    lng: 136.9337,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間",
    note: "19:00-7:00最大600円"
  },
  {
    name: "JTP今池No.3",
    address: "愛知県名古屋市千種区今池4丁目10",
    lat: 35.1594,
    lng: 136.9340,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間",
    note: "最大料金は6時間毎に適用"
  },

  // ===== 名駅エリア 追加 =====
  {
    name: "三井のリパーク 名古屋名駅1丁目",
    address: "愛知県名古屋市中村区名駅1丁目1",
    lat: 35.1722,
    lng: 136.8820,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1800, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名駅2丁目第3",
    address: "愛知県名古屋市中村区名駅2丁目20",
    lat: 35.1706,
    lng: 136.8825,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1800, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名駅4丁目",
    address: "愛知県名古屋市中村区名駅4丁目2",
    lat: 35.1686,
    lng: 136.8817,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1400, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名駅南第2",
    address: "愛知県名古屋市中村区名駅南1丁目15",
    lat: 35.1668,
    lng: 136.8838,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 名駅南2丁目",
    address: "愛知県名古屋市中村区名駅南2丁目8",
    lat: 35.1652,
    lng: 136.8852,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "NPC24H 名古屋駅西",
    address: "愛知県名古屋市中村区椿町5",
    lat: 35.1715,
    lng: 136.8778,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 300円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南2丁目",
    address: "愛知県名古屋市中村区名駅南2丁目14",
    lat: 35.1645,
    lng: 136.8862,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅1丁目",
    address: "愛知県名古屋市中村区名駅1丁目16",
    lat: 35.1718,
    lng: 136.8830,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅4丁目第3",
    address: "愛知県名古屋市中村区名駅4丁目13",
    lat: 35.1679,
    lng: 136.8830,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1400, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅南第2",
    address: "愛知県名古屋市中村区名駅南1丁目19",
    lat: 35.1660,
    lng: 136.8845,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ那古野1丁目",
    address: "愛知県名古屋市中村区那古野1丁目30",
    lat: 35.1740,
    lng: 136.8855,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 名駅3丁目",
    address: "愛知県名古屋市中村区名駅3丁目5",
    lat: 35.1695,
    lng: 136.8820,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },

  // ===== 矢場町エリア 追加 =====
  {
    name: "タイムズ矢場町第2",
    address: "愛知県名古屋市中区矢場町3丁目7",
    lat: 35.1617,
    lng: 136.9108,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1200, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "タイムズ矢場町第3",
    address: "愛知県名古屋市中区矢場町4丁目8",
    lat: 35.1605,
    lng: 136.9115,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1200, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 矢場町第2",
    address: "愛知県名古屋市中区矢場町2丁目5",
    lat: 35.1628,
    lng: 136.9095,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 矢場町第3",
    address: "愛知県名古屋市中区矢場町6丁目3",
    lat: 35.1599,
    lng: 136.9120,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 栄4丁目",
    address: "愛知県名古屋市中区栄4丁目3",
    lat: 35.1640,
    lng: 136.9080,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1200, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 栄5丁目",
    address: "愛知県名古屋市中区栄5丁目3",
    lat: 35.1625,
    lng: 136.9105,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1200, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄4丁目第2",
    address: "愛知県名古屋市中区栄4丁目7",
    lat: 35.1638,
    lng: 136.9102,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1300, holiday: 1900 },
    hours: "24時間"
  },
  {
    name: "タイムズ栄5丁目第2",
    address: "愛知県名古屋市中区栄5丁目12",
    lat: 35.1618,
    lng: 136.9125,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1100, holiday: 1600 },
    hours: "24時間"
  },
  {
    name: "セントラルパーキング 矢場町",
    address: "愛知県名古屋市中区矢場町1丁目2",
    lat: 35.1640,
    lng: 136.9090,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "NPC24H 栄南矢場町",
    address: "愛知県名古屋市中区栄5丁目20",
    lat: 35.1610,
    lng: 136.9138,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 栄2丁目",
    address: "愛知県名古屋市中区栄2丁目12",
    lat: 35.1680,
    lng: 136.9060,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 栄3丁目",
    address: "愛知県名古屋市中区栄3丁目2",
    lat: 35.1666,
    lng: 136.9060,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1300, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 新栄2丁目",
    address: "愛知県名古屋市中区新栄2丁目3",
    lat: 35.1620,
    lng: 136.9180,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 栄2丁目",
    address: "愛知県名古屋市中区栄2丁目5",
    lat: 35.1692,
    lng: 136.9065,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 栄3丁目",
    address: "愛知県名古屋市中区栄3丁目20",
    lat: 35.1649,
    lng: 136.9088,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1300, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "NPC24H 栄センター",
    address: "愛知県名古屋市中区栄3丁目17",
    lat: 35.1658,
    lng: 136.9085,
    hourlyRate: 750,
    rates: { weekday: "20分 250円", holiday: "20分 250円" },
    maxRate: { weekday: 1500, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 新栄1丁目",
    address: "愛知県名古屋市中区新栄1丁目8",
    lat: 35.1648,
    lng: 136.9175,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },

  // ===== 金山エリア 追加 =====
  {
    name: "三井のリパーク 金山南",
    address: "愛知県名古屋市熱田区金山町1丁目12",
    lat: 35.1420,
    lng: 136.8908,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 金山駅前第2",
    address: "愛知県名古屋市中区金山1丁目3",
    lat: 35.1445,
    lng: 136.8905,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 金山2丁目",
    address: "愛知県名古屋市中区金山2丁目5",
    lat: 35.1440,
    lng: 136.8918,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ金山第5",
    address: "愛知県名古屋市中区金山1丁目8",
    lat: 35.1438,
    lng: 136.8895,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ金山駅南",
    address: "愛知県名古屋市熱田区金山町2丁目8",
    lat: 35.1425,
    lng: 136.8915,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "NPC24H 金山",
    address: "愛知県名古屋市熱田区沢下町8",
    lat: 35.1385,
    lng: 136.8925,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 大須2丁目",
    address: "愛知県名古屋市中区大須2丁目18",
    lat: 35.1608,
    lng: 136.9010,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 大須4丁目",
    address: "愛知県名古屋市中区大須4丁目5",
    lat: 35.1570,
    lng: 136.9040,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 大須3丁目",
    address: "愛知県名古屋市中区大須3丁目20",
    lat: 35.1592,
    lng: 136.9058,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ大須1丁目第2",
    address: "愛知県名古屋市中区大須1丁目12",
    lat: 35.1625,
    lng: 136.9005,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 大須観音前",
    address: "愛知県名古屋市中区大須2丁目3",
    lat: 35.1600,
    lng: 136.8998,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 大須3丁目第8",
    address: "愛知県名古屋市中区大須3丁目8",
    lat: 35.1595,
    lng: 136.9030,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 上前津第3",
    address: "愛知県名古屋市中区上前津2丁目4",
    lat: 35.1542,
    lng: 136.9088,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },

  // ===== 熱田エリア 追加 =====
  {
    name: "タイムズ熱田神宮南",
    address: "愛知県名古屋市熱田区神宮3丁目5",
    lat: 35.1265,
    lng: 136.9092,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 熱田旗屋",
    address: "愛知県名古屋市熱田区旗屋2丁目10",
    lat: 35.1258,
    lng: 136.9078,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 熱田白鳥",
    address: "愛知県名古屋市熱田区白鳥2丁目3",
    lat: 35.1305,
    lng: 136.9120,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ熱田伝馬",
    address: "愛知県名古屋市熱田区伝馬2丁目4",
    lat: 35.1248,
    lng: 136.9035,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間"
  },
  {
    name: "NPC24H 熱田",
    address: "愛知県名古屋市熱田区神宮1丁目8",
    lat: 35.1280,
    lng: 136.9068,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間"
  },
  {
    name: "タイムズ今池第2",
    address: "愛知県名古屋市千種区今池2丁目3",
    lat: 35.1638,
    lng: 136.9312,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "タイムズ今池1丁目",
    address: "愛知県名古屋市千種区今池1丁目8",
    lat: 35.1648,
    lng: 136.9302,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 今池1丁目",
    address: "愛知県名古屋市千種区今池1丁目20",
    lat: 35.1642,
    lng: 136.9310,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "NPC24H 今池",
    address: "愛知県名古屋市千種区今池4丁目2",
    lat: 35.1598,
    lng: 136.9335,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ今池3丁目",
    address: "愛知県名古屋市千種区今池3丁目15",
    lat: 35.1615,
    lng: 136.9328,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },

  // ===== 錦・伏見エリア 追加 =====
  {
    name: "三井のリパーク 錦1丁目",
    address: "愛知県名古屋市中区錦1丁目15",
    lat: 35.1705,
    lng: 136.8990,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 錦3丁目",
    address: "愛知県名古屋市中区錦3丁目10",
    lat: 35.1718,
    lng: 136.9068,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },

  // ===== 久屋エリア 追加 =====
  {
    name: "三井のリパーク 丸の内",
    address: "愛知県名古屋市中区丸の内2丁目18",
    lat: 35.1740,
    lng: 136.9060,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 東桜",
    address: "愛知県名古屋市中区東桜1丁目12",
    lat: 35.1718,
    lng: 136.9138,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },

  // ===== 鶴舞・御器所・川名エリア =====
  {
    name: "タイムズ鶴舞３丁目",
    address: "愛知県名古屋市昭和区鶴舞3-17",
    lat: 35.1552, lng: 136.9062,
    hourlyRate: 220,
    rates: { weekday: "30分 110円", holiday: "30分 110円" },
    maxRate: { weekday: 220, holiday: 220 },
    hours: "24時間",
    note: "夜間のみ最大220円"
  },
  {
    name: "タイムズゲオ御器所店",
    address: "愛知県名古屋市昭和区御器所通3-13",
    lat: 35.1535, lng: 136.9058,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間",
    note: "夜間（20:00-8:00）60分110円、夜間最大300円"
  },
  {
    name: "タイムズ川名",
    address: "愛知県名古屋市昭和区檀渓通1-38",
    lat: 35.1520, lng: 136.9055,
    hourlyRate: 330,
    rates: { weekday: "20分 110円", holiday: "20分 110円" },
    maxRate: { weekday: 660, holiday: 660 },
    hours: "24時間",
    note: "昼間（8:00-22:00）最大660円、夜間最大330円"
  },
  {
    name: "三井のリパーク 鶴舞２丁目",
    address: "愛知県名古屋市昭和区鶴舞2丁目15-9",
    lat: 35.1548, lng: 136.9070,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間",
    note: "夜間最大300円"
  },
  {
    name: "三井のリパーク 鶴舞第3",
    address: "愛知県名古屋市中区鶴舞2丁目18",
    lat: 35.1530, lng: 136.9060,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 鶴舞3丁目第2",
    address: "愛知県名古屋市昭和区鶴舞3-4",
    lat: 35.1510, lng: 136.9050,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 900, holiday: 1000 },
    hours: "24時間"
  },
  {
    name: "NPC24H 鶴舞",
    address: "愛知県名古屋市中区鶴舞3丁目2",
    lat: 35.1522, lng: 136.9048,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 御器所1丁目",
    address: "愛知県名古屋市昭和区御器所1丁目5",
    lat: 35.1515, lng: 136.9038,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ御器所第2",
    address: "愛知県名古屋市昭和区御器所2丁目8",
    lat: 35.1502, lng: 136.9032,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 御器所",
    address: "愛知県名古屋市昭和区御器所3丁目2",
    lat: 35.1490, lng: 136.9028,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 御器所",
    address: "愛知県名古屋市昭和区御器所4丁目5",
    lat: 35.1480, lng: 136.9020,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ川名第2",
    address: "愛知県名古屋市昭和区川名1丁目3",
    lat: 35.1495, lng: 136.8992,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 川名",
    address: "愛知県名古屋市昭和区川名2丁目5",
    lat: 35.1485, lng: 136.8978,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 川名",
    address: "愛知県名古屋市昭和区川名3丁目8",
    lat: 35.1475, lng: 136.8968,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ覚王山",
    address: "愛知県名古屋市千種区山門町1-11",
    lat: 35.1645, lng: 136.9428,
    hourlyRate: 330,
    rates: { weekday: "20分 110円", holiday: "20分 110円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間",
    note: "夜間（18:00-8:00）最大300円"
  },
  {
    name: "タイムズ千早第２",
    address: "愛知県名古屋市中区千代田5-14",
    lat: 35.1638, lng: 136.9432,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1500, holiday: 800 },
    hours: "24時間",
    note: "平日昼間（7:00-18:00）最大1500円、休日昼間最大800円、夜間最大200円"
  },
  {
    name: "三井のリパーク 覚王山駅前第4",
    address: "愛知県名古屋市千種区山門町2丁目22",
    lat: 35.1630, lng: 136.9438,
    hourlyRate: 800,
    rates: { weekday: "15分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 400, holiday: 400 },
    hours: "24時間",
    note: "夜間（20:00-8:00）最大400円"
  },
  {
    name: "三井のリパーク 覚王山第2",
    address: "愛知県名古屋市千種区山門町2-5",
    lat: 35.1625, lng: 136.9440,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 覚王山",
    address: "愛知県名古屋市千種区観月町1-55-2",
    lat: 35.1622, lng: 136.9425,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1400, holiday: 1400 },
    hours: "24時間"
  },
  {
    name: "NPC24H 覚王山",
    address: "愛知県名古屋市千種区末盛通2丁目8",
    lat: 35.1618, lng: 136.9415,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ末盛第2",
    address: "愛知県名古屋市千種区末盛通3丁目5",
    lat: 35.1612, lng: 136.9408,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "リパーク 覚王山通",
    address: "愛知県名古屋市千種区覚王山通3丁目20",
    lat: 35.1628, lng: 136.9435,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 末盛",
    address: "愛知県名古屋市千種区末盛通4丁目2",
    lat: 35.1605, lng: 136.9402,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // ===== 千種・吹上・池下エリア =====
  {
    name: "タイムズ池下",
    address: "愛知県名古屋市千種区池下1-10",
    lat: 35.1698, lng: 136.9278,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ池下第７",
    address: "愛知県名古屋市千種区池下1-1",
    lat: 35.1690, lng: 136.9285,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間",
    note: "12時間最大1200円"
  },
  {
    name: "三井のリパーク 池下１丁目",
    address: "愛知県名古屋市千種区池下1丁目4-3",
    lat: 35.1705, lng: 136.9270,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間",
    note: "入庫後12時間以内1300円"
  },
  {
    name: "名鉄協商パーキング 池下",
    address: "愛知県名古屋市千種区春岡1-5",
    lat: 35.1710, lng: 136.9265,
    hourlyRate: 800,
    rates: { weekday: "15分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "NPC24H 千種",
    address: "愛知県名古屋市千種区千種3丁目18",
    lat: 35.1692, lng: 136.9272,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ吹上第2",
    address: "愛知県名古屋市千種区吹上1丁目5",
    lat: 35.1650, lng: 136.9210,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ吹上第3",
    address: "愛知県名古屋市千種区吹上2丁目8",
    lat: 35.1642, lng: 136.9215,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 吹上",
    address: "愛知県名古屋市千種区吹上3丁目3",
    lat: 35.1635, lng: 136.9220,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 吹上",
    address: "愛知県名古屋市千種区吹上4丁目5",
    lat: 35.1628, lng: 136.9225,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ池下第2",
    address: "愛知県名古屋市千種区池下1丁目3",
    lat: 35.1675, lng: 136.9335,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ池下第3",
    address: "愛知県名古屋市千種区池下2丁目8",
    lat: 35.1668, lng: 136.9342,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 池下",
    address: "愛知県名古屋市千種区四谷通1丁目5",
    lat: 35.1660, lng: 136.9355,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 池下",
    address: "愛知県名古屋市千種区池下3丁目2",
    lat: 35.1662, lng: 136.9348,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },

  // ===== 星ヶ丘・本山エリア =====
  {
    name: "タイムズ星が丘テラス前",
    address: "愛知県名古屋市千種区星が丘元町15",
    lat: 35.1660, lng: 136.9620,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 550, holiday: 550 },
    hours: "24時間",
    note: "夜間（20:00-9:00）最大550円"
  },
  {
    name: "タイムズ星が丘駅前第４",
    address: "愛知県名古屋市千種区井上町4",
    lat: 35.1652, lng: 136.9628,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間",
    note: "夜間（19:00-8:00）60分110円、夜間最大300円"
  },
  {
    name: "三井のリパーク 星ヶ丘駅前",
    address: "愛知県名古屋市千種区井上町126",
    lat: 35.1645, lng: 136.9635,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間",
    note: "昼間（8:00-20:00）最大1000円、夜間最大300円"
  },
  {
    name: "三井のリパーク 星が丘第2",
    address: "愛知県名古屋市千種区星が丘元町4-5",
    lat: 35.1638, lng: 136.9640,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 本山第３",
    address: "愛知県名古屋市千種区稲舟通1-5",
    lat: 35.1648, lng: 136.9615,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間",
    note: "昼間（8:00-20:00）最大800円"
  },
  {
    name: "NPC24H 橋本町１丁目パーキング",
    address: "愛知県名古屋市千種区橋本町1丁目",
    lat: 35.1655, lng: 136.9610,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ本山第２",
    address: "愛知県名古屋市千種区見附町1-1",
    lat: 35.1625, lng: 136.9498,
    hourlyRate: 330,
    rates: { weekday: "20分 110円", holiday: "20分 110円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "タイムズ本山第3",
    address: "愛知県名古屋市千種区本山2丁目8",
    lat: 35.1618, lng: 136.9505,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 本山",
    address: "愛知県名古屋市千種区本山3丁目3",
    lat: 35.1612, lng: 136.9510,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 本山",
    address: "愛知県名古屋市千種区本山4丁目5",
    lat: 35.1605, lng: 136.9515,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 本山",
    address: "愛知県名古屋市千種区本山1丁目18",
    lat: 35.1622, lng: 136.9490,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名港",
    address: "愛知県名古屋市港区名港1-2",
    lat: 35.0878, lng: 136.8815,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間",
    note: "昼間（8:00-18:00）最大600円、夜間最大200円"
  },
  {
    name: "タイムズ名古屋港駅北",
    address: "愛知県名古屋市港区浜2-1",
    lat: 35.0885, lng: 136.8825,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 650, holiday: 650 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋港水族館前",
    address: "愛知県名古屋市港区入船2丁目3-22",
    lat: 35.0892, lng: 136.8830,
    hourlyRate: 800,
    rates: { weekday: "25分 330円", holiday: "25分 330円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間",
    note: "入庫後3時間以内最大1000円（繰返）"
  },
  {
    name: "三井のリパーク 名古屋港第2",
    address: "愛知県名古屋市港区港明1丁目3",
    lat: 35.0900, lng: 136.8822,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 名港",
    address: "愛知県名古屋市港区浜2-7",
    lat: 35.0880, lng: 136.8808,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 550, holiday: 550 },
    hours: "24時間",
    note: "12時間以内最大550円"
  },
  {
    name: "NPC24H 名古屋港",
    address: "愛知県名古屋市港区港明1丁目5",
    lat: 35.0870, lng: 136.8800,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ入船２丁目",
    address: "愛知県名古屋市港区入船2-1",
    lat: 35.0542, lng: 136.8672,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 700, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 金城ふ頭",
    address: "愛知県名古屋市港区金城ふ頭3丁目1",
    lat: 35.0535, lng: 136.8680,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 金城ふ頭",
    address: "愛知県名古屋市港区金城ふ頭1丁目5",
    lat: 35.0548, lng: 136.8665,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ入船2丁目",
    address: "愛知県名古屋市港区入船2丁目8",
    lat: 35.0862, lng: 136.8805,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },

  // ===== 八事・いりなかエリア =====
  {
    name: "タイムズ八事本町",
    address: "愛知県名古屋市昭和区八事本町83",
    lat: 35.1390, lng: 136.9415,
    hourlyRate: 220,
    rates: { weekday: "60分 220円", holiday: "60分 220円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ八事天道",
    address: "愛知県名古屋市天白区八事天道403",
    lat: 35.1382, lng: 136.9420,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 770, holiday: 770 },
    hours: "24時間",
    note: "夜間（19:00-8:00）最大300円"
  },
  {
    name: "三井のリパーク 八事石坂",
    address: "愛知県名古屋市昭和区広路町字石坂28-3",
    lat: 35.1375, lng: 136.9425,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間",
    note: "夜間最大400円"
  },
  {
    name: "三井のリパーク 八事第2",
    address: "愛知県名古屋市天白区八事山1丁目5",
    lat: 35.1368, lng: 136.9430,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 八事石坂",
    address: "愛知県名古屋市昭和区広路町字石坂4-16",
    lat: 35.1365, lng: 136.9408,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 200円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "NPC24H 八事",
    address: "愛知県名古屋市昭和区山花町2丁目5",
    lat: 35.1358, lng: 136.9402,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ八事石坂第２",
    address: "愛知県名古屋市昭和区広路町石坂11",
    lat: 35.1378, lng: 136.9268,
    hourlyRate: 220,
    rates: { weekday: "60分 220円", holiday: "60分 220円" },
    maxRate: { weekday: 600, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "タイムズ山手通",
    address: "愛知県名古屋市昭和区山手通5-14",
    lat: 35.1370, lng: 136.9275,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間",
    note: "夜間（19:00-7:00）最大300円"
  },
  {
    name: "三井のリパーク いりなか",
    address: "愛知県名古屋市昭和区広路通1丁目5",
    lat: 35.1382, lng: 136.9255,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング いりなか",
    address: "愛知県名古屋市昭和区広路本町1丁目15",
    lat: 35.1385, lng: 136.9262,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H いりなか",
    address: "愛知県名古屋市昭和区広路本町4丁目2",
    lat: 35.1362, lng: 136.9280,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名古屋城第2",
    address: "愛知県名古屋市西区名城2丁目5",
    lat: 35.1862, lng: 136.9002,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ名古屋城第3",
    address: "愛知県名古屋市西区名城1丁目3",
    lat: 35.1875, lng: 136.8992,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋城西第８",
    address: "愛知県名古屋市西区城西1丁目11-13",
    lat: 35.1855, lng: 136.8985,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間",
    note: "夜間最大300円"
  },
  {
    name: "三井のリパーク 名古屋城第2",
    address: "愛知県名古屋市北区名城1丁目8",
    lat: 35.1890, lng: 136.9005,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 浅間町駅前",
    address: "愛知県名古屋市西区浅間1-2",
    lat: 35.1848, lng: 136.9010,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },
  {
    name: "NPC24H 名古屋城",
    address: "愛知県名古屋市西区名城1丁目18",
    lat: 35.1878, lng: 136.8988,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "タイムズ二の丸",
    address: "愛知県名古屋市西区二の丸3丁目8",
    lat: 35.1848, lng: 136.8978,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "タイムズ円頓寺第2",
    address: "愛知県名古屋市西区那古野1丁目5",
    lat: 35.1778, lng: 136.8895,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ四間道",
    address: "愛知県名古屋市西区那古野2丁目8",
    lat: 35.1770, lng: 136.8888,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 那古野２丁目",
    address: "愛知県名古屋市西区那古野2丁目23",
    lat: 35.1775, lng: 136.8900,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間",
    note: "夜間（22:00-翌）60分110円、入庫後12時間以内最大1200円"
  },
  {
    name: "三井のリパーク 四間道",
    address: "愛知県名古屋市西区那古野3丁目3",
    lat: 35.1762, lng: 136.8882,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 那古野1丁目",
    address: "愛知県名古屋市西区那古野1-5",
    lat: 35.1768, lng: 136.8878,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 1400, holiday: 900 },
    hours: "24時間",
    note: "昼間（8:00-20:00）平日最大1400円、休日最大900円"
  },
  {
    name: "NPC24H 円頓寺",
    address: "愛知県名古屋市西区花の木2丁目8",
    lat: 35.1760, lng: 136.8870,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ那古野第2",
    address: "愛知県名古屋市西区那古野1丁目35",
    lat: 35.1772, lng: 136.8910,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 栄生1丁目第3",
    address: "愛知県名古屋市西区栄生1丁目3",
    lat: 35.1750, lng: 136.8860,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ那古野2丁目",
    address: "愛知県名古屋市西区那古野2丁目20",
    lat: 35.1765, lng: 136.8895,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ栄生第2",
    address: "愛知県名古屋市西区栄生2丁目5",
    lat: 35.1742, lng: 136.8852,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },

  // ===== 高岳・泉エリア =====
  {
    name: "タイムズ高岳第2",
    address: "愛知県名古屋市東区泉1丁目5",
    lat: 35.1758, lng: 136.9192,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ高岳第3",
    address: "愛知県名古屋市東区泉2丁目8",
    lat: 35.1748, lng: 136.9198,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 葵第12",
    address: "愛知県名古屋市東区葵3丁目13-22",
    lat: 35.1738, lng: 136.9205,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1600, holiday: 1600 },
    hours: "24時間",
    note: "夜間最大500円"
  },
  {
    name: "三井のリパーク 高岳第2",
    address: "愛知県名古屋市東区泉1丁目20",
    lat: 35.1755, lng: 136.9185,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 泉１丁目第１",
    address: "愛知県名古屋市東区泉1-22",
    lat: 35.1742, lng: 136.9155,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: null, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 高岳",
    address: "愛知県名古屋市東区葵2丁目8",
    lat: 35.1732, lng: 136.9162,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ葵3丁目第3",
    address: "愛知県名古屋市東区葵3丁目3",
    lat: 35.1722, lng: 136.9168,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ東区役所前",
    address: "愛知県名古屋市東区葵1丁目18",
    lat: 35.1738, lng: 136.9148,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ黒川第2",
    address: "愛知県名古屋市北区黒川本通3丁目5",
    lat: 35.1962, lng: 136.9050,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ黒川第3",
    address: "愛知県名古屋市北区黒川本通4丁目8",
    lat: 35.1955, lng: 136.9055,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 黒川駅南",
    address: "愛知県名古屋市北区田幡2丁目15",
    lat: 35.1968, lng: 136.9045,
    hourlyRate: 375,
    rates: { weekday: "40分 250円", holiday: "40分 250円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 黒川第2",
    address: "愛知県名古屋市北区黒川本通5丁目5",
    lat: 35.1948, lng: 136.9060,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 黒川",
    address: "愛知県名古屋市北区黒川本通1-36",
    lat: 35.1975, lng: 136.9040,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間",
    note: "12時間以内最大800円"
  },
  {
    name: "NPC24H 黒川",
    address: "愛知県名古屋市北区黒川本通6丁目3",
    lat: 35.1942, lng: 136.9065,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ黒川駅前",
    address: "愛知県名古屋市北区黒川本通2丁目18",
    lat: 35.1965, lng: 136.9042,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ黒川北",
    address: "愛知県名古屋市北区黒川本通7丁目5",
    lat: 35.1935, lng: 136.9072,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // ===== 砂田橋エリア（ドーム） =====
  {
    name: "タイムズ砂田橋第2",
    address: "愛知県名古屋市東区砂田橋1丁目5",
    lat: 35.1812, lng: 136.9438,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ砂田橋第3",
    address: "愛知県名古屋市東区砂田橋2丁目8",
    lat: 35.1805, lng: 136.9445,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 砂田橋",
    address: "愛知県名古屋市東区砂田橋3丁目3",
    lat: 35.1798, lng: 136.9452,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 砂田橋第2",
    address: "愛知県名古屋市東区砂田橋4丁目5",
    lat: 35.1790, lng: 136.9458,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 砂田橋",
    address: "愛知県名古屋市東区砂田橋1丁目20",
    lat: 35.1808, lng: 136.9432,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 砂田橋",
    address: "愛知県名古屋市東区砂田橋2丁目20",
    lat: 35.1802, lng: 136.9448,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ砂田橋南",
    address: "愛知県名古屋市東区砂田橋2丁目3",
    lat: 35.1775, lng: 136.9465,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // ===== 藤が丘・上社・一社エリア =====
  {
    name: "タイムズ藤が丘第2",
    address: "愛知県名古屋市名東区藤が丘1丁目5",
    lat: 35.1722, lng: 136.9968,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ藤が丘第3",
    address: "愛知県名古屋市名東区藤が丘2丁目8",
    lat: 35.1715, lng: 136.9975,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 藤が丘",
    address: "愛知県名古屋市名東区藤見が丘43",
    lat: 35.1708, lng: 136.9982,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 600, holiday: 400 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 藤が丘第2",
    address: "愛知県名古屋市名東区藤が丘4丁目5",
    lat: 35.1702, lng: 136.9988,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 藤が丘駅南",
    address: "愛知県名古屋市名東区藤が丘142-8",
    lat: 35.1718, lng: 136.9965,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間",
    note: "昼間（8:00-20:00）最大1200円"
  },
  {
    name: "NPC24H 上社第１パーキング",
    address: "愛知県名古屋市名東区上社2-203",
    lat: 35.1695, lng: 136.9992,
    hourlyRate: 220,
    rates: { weekday: "30分 110円", holiday: "30分 110円" },
    maxRate: { weekday: 700, holiday: 500 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 藤が丘第3",
    address: "愛知県名古屋市名東区藤が丘3丁目15",
    lat: 35.1705, lng: 136.9985,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ藤が丘東",
    address: "愛知県名古屋市名東区藤が丘6丁目5",
    lat: 35.1688, lng: 136.9995,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ上社第2",
    address: "愛知県名古屋市名東区上社1丁目5",
    lat: 35.1762, lng: 136.9822,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 上社",
    address: "愛知県名古屋市名東区上社2丁目8",
    lat: 35.1755, lng: 136.9828,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 上社",
    address: "愛知県名古屋市名東区上社3丁目3",
    lat: 35.1748, lng: 136.9835,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 上社",
    address: "愛知県名古屋市名東区上社4丁目5",
    lat: 35.1742, lng: 136.9840,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ一社第2",
    address: "愛知県名古屋市名東区一社1丁目5",
    lat: 35.1732, lng: 136.9742,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 一社",
    address: "愛知県名古屋市名東区一社2丁目8",
    lat: 35.1725, lng: 136.9748,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 一社",
    address: "愛知県名古屋市名東区一社3丁目3",
    lat: 35.1718, lng: 136.9755,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 一社",
    address: "愛知県名古屋市名東区一社4丁目5",
    lat: 35.1712, lng: 136.9760,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ山王第2",
    address: "愛知県名古屋市南区山王3丁目5",
    lat: 35.1288, lng: 136.8958,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ山王第3",
    address: "愛知県名古屋市南区山王4丁目8",
    lat: 35.1280, lng: 136.8965,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 笠寺観音前",
    address: "愛知県名古屋市南区笠寺町字上新町82",
    lat: 35.1295, lng: 136.8950,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 笠寺駅前",
    address: "愛知県名古屋市南区立脇町1-19-2",
    lat: 35.1302, lng: 136.8942,
    hourlyRate: 200,
    rates: { weekday: "60分 200円", holiday: "60分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "NPC24H 山王",
    address: "愛知県名古屋市南区山王5丁目3",
    lat: 35.1272, lng: 136.8970,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ笠寺第2",
    address: "愛知県名古屋市南区笠寺町1丁目5",
    lat: 35.1130, lng: 136.9025,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 笠寺",
    address: "愛知県名古屋市南区笠寺町2丁目8",
    lat: 35.1122, lng: 136.9030,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 笠寺",
    address: "愛知県名古屋市南区笠寺町3丁目3",
    lat: 35.1115, lng: 136.9035,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 笠寺",
    address: "愛知県名古屋市南区呼続1丁目5",
    lat: 35.1138, lng: 136.9018,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // ===== 既存エリア補強 =====
  {
    name: "三井のリパーク 名駅南第3",
    address: "愛知県名古屋市中村区名駅南2丁目22",
    lat: 35.1638, lng: 136.8870,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ名駅5丁目第3",
    address: "愛知県名古屋市中村区名駅5丁目15",
    lat: 35.1652, lng: 136.8805,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 900, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 名駅南",
    address: "愛知県名古屋市中村区名駅南1丁目8",
    lat: 35.1672, lng: 136.8832,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 名駅4丁目",
    address: "愛知県名古屋市中村区名駅4丁目20",
    lat: 35.1675, lng: 136.8822,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1400, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 栄3丁目第2",
    address: "愛知県名古屋市中区栄3丁目14",
    lat: 35.1655, lng: 136.9082,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ新栄3丁目",
    address: "愛知県名古屋市中区新栄3丁目5",
    lat: 35.1608, lng: 136.9225,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 栄南",
    address: "愛知県名古屋市中区栄3丁目8",
    lat: 35.1660, lng: 136.9075,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1500, holiday: null },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 新栄",
    address: "愛知県名古屋市中区新栄2丁目15",
    lat: 35.1618, lng: 136.9215,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 新栄1丁目第2",
    address: "愛知県名古屋市中区新栄1丁目15",
    lat: 35.1632, lng: 136.9170,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 金山2丁目第2",
    address: "愛知県名古屋市中区金山2丁目18",
    lat: 35.1432, lng: 136.8928,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ金山南第2",
    address: "愛知県名古屋市熱田区金山町1丁目25",
    lat: 35.1415, lng: 136.8905,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 金山北",
    address: "愛知県名古屋市中区金山1丁目12",
    lat: 35.1448, lng: 136.8898,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 大須1丁目",
    address: "愛知県名古屋市中区大須1丁目5",
    lat: 35.1628, lng: 136.9002,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ大須4丁目",
    address: "愛知県名古屋市中区大須4丁目8",
    lat: 35.1568, lng: 136.9038,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 大須南",
    address: "愛知県名古屋市中区大須2丁目28",
    lat: 35.1595, lng: 136.9015,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 錦2丁目",
    address: "愛知県名古屋市中区錦2丁目15",
    lat: 35.1715, lng: 136.9038,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ錦1丁目",
    address: "愛知県名古屋市中区錦1丁目8",
    lat: 35.1708, lng: 136.8995,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },
  {
    name: "NPC24H 伏見",
    address: "愛知県名古屋市中区錦1丁目20",
    lat: 35.1700, lng: 136.9002,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 2000, holiday: null },
    hours: "24時間"
  },

  // ===== 追加10件（各エリア補完） =====
  {
    name: "タイムズ鶴舞公園前",
    address: "愛知県名古屋市中区鶴舞4丁目18",
    lat: 35.1506, lng: 136.9045,
    hourlyRate: 300,
    rates: { weekday: "20分 100円", holiday: "20分 100円" },
    maxRate: { weekday: 800, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ覚王山通第4",
    address: "愛知県名古屋市千種区覚王山通7丁目5",
    lat: 35.1598, lng: 136.9458,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 本山第2",
    address: "愛知県名古屋市千種区本山5丁目2",
    lat: 35.1600, lng: 136.9520,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ八事第4",
    address: "愛知県名古屋市昭和区八事本町6丁目3",
    lat: 35.1352, lng: 136.9388,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋城北",
    address: "愛知県名古屋市北区名城4丁目2",
    lat: 35.1905, lng: 136.9025,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "タイムズ花の木",
    address: "愛知県名古屋市西区花の木3丁目5",
    lat: 35.1752, lng: 136.8865,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ黒川南",
    address: "愛知県名古屋市北区黒川本通8丁目3",
    lat: 35.1928, lng: 136.9078,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // ===== 400件補完分（実在チェーンのみ） =====

  // 名古屋城・城西エリア
  {
    name: "三井のリパーク 名古屋城西１丁目",
    address: "愛知県名古屋市西区城西１丁目１０－１１",
    lat: 35.1857, lng: 136.8968,
    hourlyRate: 528,
    rates: { weekday: "25分 220円", holiday: "25分 220円" },
    maxRate: { weekday: 300, holiday: 300 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋城西第７",
    address: "愛知県名古屋市西区城西２丁目２０－２６",
    lat: 35.1847, lng: 136.8982,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ城西",
    address: "愛知県名古屋市西区城西２丁目１９",
    lat: 35.1843, lng: 136.8978,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "タイムズ幅下１丁目",
    address: "愛知県名古屋市西区幅下１丁目１０",
    lat: 35.1830, lng: 136.8958,
    hourlyRate: 250,
    rates: { weekday: "60分 250円", holiday: "60分 250円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ名城２丁目",
    address: "愛知県名古屋市西区名城２丁目５",
    lat: 35.1868, lng: 136.8963,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },

  // 栄・丸の内エリア
  {
    name: "三井のリパーク 栄１丁目",
    address: "愛知県名古屋市中区栄１丁目１０－８",
    lat: 35.1689, lng: 136.9000,
    hourlyRate: 1200,
    rates: { weekday: "15分 300円", holiday: "15分 300円" },
    maxRate: { weekday: 2000, holiday: 2000 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 栄第２８",
    address: "愛知県名古屋市中区栄１丁目２３－７",
    lat: 35.1693, lng: 136.9007,
    hourlyRate: 900,
    rates: { weekday: "20分 300円", holiday: "20分 300円" },
    maxRate: { weekday: 1700, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 栄Ｍ",
    address: "愛知県名古屋市中区栄４丁目１６",
    lat: 35.1656, lng: 136.9081,
    hourlyRate: 540,
    rates: { weekday: "30分 270円", holiday: "30分 270円" },
    maxRate: { weekday: 1300, holiday: 1700 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 栄東",
    address: "愛知県名古屋市中区栄４丁目３",
    lat: 35.1660, lng: 136.9089,
    hourlyRate: 800,
    rates: { weekday: "15分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 1800, holiday: 1400 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋丸の内第３２",
    address: "愛知県名古屋市中区丸の内３丁目７－１６",
    lat: 35.1705, lng: 136.8985,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1500, holiday: 1500 },
    hours: "24時間"
  },
  {
    name: "NPC24H 三蔵通パーキング",
    address: "愛知県名古屋市中区栄２丁目１２－３３",
    lat: 35.1673, lng: 136.8971,
    hourlyRate: 660,
    rates: { weekday: "20分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 1500, holiday: 1700 },
    hours: "24時間"
  },
  {
    name: "NPC24H 栄三丁目パーキング",
    address: "愛知県名古屋市中区栄３丁目７－２０",
    lat: 35.1679, lng: 136.9044,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 1600, holiday: 1600 },
    hours: "7時〜23時"
  },

  // 高岳・泉・徳川エリア
  {
    name: "タイムズＡＯＩ名古屋病院",
    address: "愛知県名古屋市東区泉２丁目２",
    lat: 35.1740, lng: 136.9138,
    hourlyRate: 600,
    rates: { weekday: "30分 300円", holiday: "30分 300円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ徳川１丁目",
    address: "愛知県名古屋市東区徳川１丁目１０",
    lat: 35.1786, lng: 136.9208,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 750, holiday: 750 },
    hours: "24時間"
  },
  {
    name: "タイムズ筒井２丁目",
    address: "愛知県名古屋市東区筒井２丁目１２",
    lat: 35.1762, lng: 136.9181,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 990, holiday: 990 },
    hours: "24時間"
  },
  {
    name: "タイムズ新出来２丁目",
    address: "愛知県名古屋市東区新出来２丁目３",
    lat: 35.1754, lng: 136.9215,
    hourlyRate: 220,
    rates: { weekday: "60分 220円", holiday: "60分 220円" },
    maxRate: { weekday: 550, holiday: 550 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋丸の内１丁目",
    address: "愛知県名古屋市中区丸の内１丁目１５",
    lat: 35.1714, lng: 136.9048,
    hourlyRate: 1800,
    rates: { weekday: "10分 300円", holiday: "10分 300円" },
    maxRate: { weekday: 2700, holiday: 900 },
    hours: "24時間"
  },

  // 覚王山・千種エリア
  {
    name: "三井のリパーク 覚王山駅前第５",
    address: "愛知県名古屋市千種区西山元町２丁目５４",
    lat: 35.1638, lng: 136.9401,
    hourlyRate: 500,
    rates: { weekday: "30分 250円", holiday: "30分 250円" },
    maxRate: { weekday: 300, holiday: 300 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 覚王山駅前第６",
    address: "愛知県名古屋市千種区月見坂町２丁目４－２",
    lat: 35.1636, lng: 136.9391,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 400, holiday: 400 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 千種２丁目",
    address: "愛知県名古屋市千種区千種２丁目１２－１４",
    lat: 35.1625, lng: 136.9353,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 覚王山第３",
    address: "愛知県名古屋市千種区覚王山通４丁目",
    lat: 35.1615, lng: 136.9426,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "タイムズ高見",
    address: "愛知県名古屋市千種区高見２丁目１０",
    lat: 35.1635, lng: 136.9455,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // 鶴舞エリア
  {
    name: "タイムズ鶴舞４丁目",
    address: "愛知県名古屋市昭和区鶴舞４丁目３４",
    lat: 35.1548, lng: 136.9165,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 昭和区役所北",
    address: "愛知県名古屋市昭和区鶴羽町３丁目１",
    lat: 35.1530, lng: 136.9257,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 鶴舞駅前",
    address: "愛知県名古屋市中区千代田５丁目２３",
    lat: 35.1563, lng: 136.9175,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋千代田５丁目",
    address: "愛知県名古屋市中区千代田５丁目２４",
    lat: 35.1561, lng: 136.9172,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },
  {
    name: "タイムズ山脇町",
    address: "愛知県名古屋市昭和区山脇町６丁目",
    lat: 35.1512, lng: 136.9108,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 700, holiday: null },
    hours: "24時間"
  },
  {
    name: "タイムズ狭間町",
    address: "愛知県名古屋市昭和区狭間町１丁目",
    lat: 35.1520, lng: 136.9095,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // 星が丘・本山エリア
  {
    name: "三井のリパーク 千種２丁目第３",
    address: "愛知県名古屋市千種区千種２丁目１０－１２",
    lat: 35.1621, lng: 136.9360,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ星が丘駅前第５",
    address: "愛知県名古屋市千種区星が丘元町８",
    lat: 35.1605, lng: 136.9749,
    hourlyRate: 440,
    rates: { weekday: "30分 220円", holiday: "30分 220円" },
    maxRate: { weekday: 1100, holiday: 1100 },
    hours: "24時間"
  },
  {
    name: "タイムズ本山第４",
    address: "愛知県名古屋市千種区本山２丁目",
    lat: 35.1581, lng: 136.9510,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },

  // バンテリンドーム・大幸エリア
  {
    name: "三井のリパーク 新守山駅前",
    address: "愛知県名古屋市守山区新守町７２",
    lat: 35.2031, lng: 136.9572,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "NPC24H 大幸",
    address: "愛知県名古屋市東区大幸２丁目３",
    lat: 35.1882, lng: 136.9462,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 500, holiday: 500 },
    hours: "24時間"
  },

  // 八事・天白エリア
  {
    name: "三井のリパーク 八事富士見",
    address: "愛知県名古屋市昭和区八事富士見１００１番",
    lat: 35.1401, lng: 136.9552,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 八事石坂第２",
    address: "愛知県名古屋市天白区八事石坂１１３",
    lat: 35.1387, lng: 136.9531,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 元八事４丁目",
    address: "愛知県名古屋市天白区元八事４丁目９５",
    lat: 35.1378, lng: 136.9509,
    hourlyRate: 330,
    rates: { weekday: "40分 220円", holiday: "40分 220円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },

  // 黒川・北区エリア
  {
    name: "三井のリパーク 黒川駅北",
    address: "愛知県名古屋市北区敷島町３９番２",
    lat: 35.1990, lng: 136.9122,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "タイムズ清水１丁目",
    address: "愛知県名古屋市北区清水１丁目２２",
    lat: 35.1965, lng: 136.9089,
    hourlyRate: 220,
    rates: { weekday: "60分 220円", holiday: "60分 220円" },
    maxRate: { weekday: 900, holiday: 900 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋田幡２丁目第３",
    address: "愛知県名古屋市北区田幡２丁目",
    lat: 35.1975, lng: 136.9110,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },

  // 名駅エリア補強
  {
    name: "三井のリパーク 名駅第４０",
    address: "愛知県名古屋市中村区名駅２丁目３３－５",
    lat: 35.1717, lng: 136.8836,
    hourlyRate: 600,
    rates: { weekday: "20分 200円", holiday: "20分 200円" },
    maxRate: { weekday: 1300, holiday: 1300 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名駅西第２９",
    address: "愛知県名古屋市中村区則武１丁目７－１０",
    lat: 35.1724, lng: 136.8804,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1800, holiday: 1800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名駅南４丁目",
    address: "愛知県名古屋市中村区名駅南４丁目３－４",
    lat: 35.1645, lng: 136.8841,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 名古屋一番３丁目",
    address: "愛知県名古屋市中村区名駅５丁目",
    lat: 35.1695, lng: 136.8870,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 太閤３丁目第３",
    address: "愛知県名古屋市中村区太閤３丁目１２",
    lat: 35.1698, lng: 136.8778,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1000, holiday: 1000 },
    hours: "24時間"
  },

  // 今池・千種エリア
  {
    name: "三井のリパーク 今池南",
    address: "愛知県名古屋市千種区今池南２８－１１",
    lat: 35.1588, lng: 136.9293,
    hourlyRate: 300,
    rates: { weekday: "40分 200円", holiday: "40分 200円" },
    maxRate: { weekday: 600, holiday: 600 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 千種駅南",
    address: "愛知県名古屋市千種区今池１丁目２",
    lat: 35.1601, lng: 136.9277,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 1200, holiday: 1200 },
    hours: "24時間"
  },
  {
    name: "タイムズ今池第３",
    address: "愛知県名古屋市千種区今池１丁目４",
    lat: 35.1591, lng: 136.9285,
    hourlyRate: 200,
    rates: { weekday: "30分 100円", holiday: "30分 100円" },
    maxRate: { weekday: 600, holiday: null },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 今池４丁目",
    address: "愛知県名古屋市千種区今池４丁目１５",
    lat: 35.1598, lng: 136.9302,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 700, holiday: 700 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 今池２丁目",
    address: "愛知県名古屋市千種区今池２丁目８",
    lat: 35.1595, lng: 136.9290,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },

  // 大須エリア補強
  {
    name: "三井のリパーク 大須３丁目第６",
    address: "愛知県名古屋市中区大須３丁目１１－２",
    lat: 35.1600, lng: 136.8996,
    hourlyRate: 660,
    rates: { weekday: "20分 220円", holiday: "20分 220円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  },
  {
    name: "三井のリパーク 大須３丁目第２",
    address: "愛知県名古屋市中区大須３丁目１７",
    lat: 35.1604, lng: 136.8989,
    hourlyRate: 800,
    rates: { weekday: "15分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 1300, holiday: 400 },
    hours: "24時間"
  },
  {
    name: "名鉄協商パーキング 大須第５",
    address: "愛知県名古屋市中区大須２丁目２０",
    lat: 35.1610, lng: 136.8982,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "15分 200円" },
    maxRate: { weekday: 800, holiday: 1700 },
    hours: "24時間"
  },
  {
    name: "NPC24H 大須",
    address: "愛知県名古屋市中区大須２丁目１５",
    lat: 35.1608, lng: 136.8977,
    hourlyRate: 400,
    rates: { weekday: "30分 200円", holiday: "30分 200円" },
    maxRate: { weekday: 800, holiday: 800 },
    hours: "24時間"
  }
];
