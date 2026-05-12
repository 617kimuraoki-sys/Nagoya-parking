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
  }
];
