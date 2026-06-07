// 駐車場データ
// hourlyRate: 並び替え用に正規化した平日基準の1時間料金（円/h）
// rates.weekday / rates.holiday: 表示用の料金テキスト
// maxRate.weekday / maxRate.holiday: 最大料金（円）。「なし」は null
// placeFid: Google Maps の FID（"0x...:0x..." 形式。ピンポイントURL用、PC・モバイル共通）
// placeCid: Google Maps の Place CID（10進数。フォールバック用）
// note: 補足（時間帯別料金など）
const parkingData = [
  {
    "name": "名古屋市営久屋駐車場",
    "address": "愛知県名古屋市中区栄3丁目5",
    "lat": 35.168381,
    "lng": 136.907593,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "7:00-24:00",
    "placeCid": "8045847241425575909",
    "placeFid": "0x600370d173994c83:0x6fa8976ff63a5fe5"
  },
  {
    "name": "名鉄協商パーキング 池田公園PB",
    "address": "愛知県名古屋市中区栄4丁目8",
    "lat": 35.166924,
    "lng": 136.913092,
    "hourlyRate": 100,
    "rates": {
      "weekday": "昼(6-18時) 60分 100円 / 夜(18-6時) 60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 900
    },
    "note": "夜間は別途最大料金あり（平日900円 / 休日1000円）",
    "hours": "24時間",
    "placeCid": "433290737141809363",
    "placeFid": "0x600370c55a942baf:0x6035ba137ce00d3"
  },
  {
    "name": "名古屋市営大須駐車場",
    "address": "愛知県名古屋市中区大須3丁目14-12",
    "lat": 35.161163,
    "lng": 136.90271,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "7:00-22:00",
    "placeCid": "5084908855813814860",
    "placeFid": "0x600370ccd56077f1:0x469139a9d2053a4c"
  },
  {
    "name": "名鉄協商パーキング キング観光サウザンド栄若宮大通店",
    "address": "愛知県名古屋市中区栄5丁目26-26",
    "lat": 35.162132,
    "lng": 136.912476,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 1100
    },
    "hours": "24時間",
    "placeCid": "12824244123971162831",
    "placeFid": "0x600371dde9f9b267:0xb1f8de15c23112cf"
  },
  {
    "name": "NPC24H クイック錦3丁目パーキング",
    "address": "愛知県名古屋市中区錦3丁目5-19",
    "lat": 35.17276,
    "lng": 136.907425,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間",
    "placeCid": "6681927664520791921",
    "placeFid": "0x600370d5dde9e815:0x5cbaf9cefa9e0771"
  },
  {
    "name": "鈴木不動産コインパーキング 大須",
    "address": "愛知県名古屋市中区大須3丁目4",
    "lat": 35.1572233,
    "lng": 136.9034248,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間",
    "placeCid": "17709381697394650179",
    "placeFid": "0x600370ccf51447f3:0xf5c45cd351032c43"
  },
  {
    "name": "鈴木不動産コインパーキング 大須2",
    "address": "愛知県名古屋市中区大須3丁目11-2",
    "lat": 35.1609742,
    "lng": 136.9044985,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間",
    "placeCid": "7306708982803373275",
    "placeFid": "0x6003711b718ae115:0x6566a51b75269cdb"
  },
  {
    "name": "三井のリパーク 大須第13駐車場",
    "address": "愛知県名古屋市中区大須3丁目5-30",
    "lat": 35.161358,
    "lng": 136.905334,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間",
    "placeCid": "7076298928687942227",
    "placeFid": "0x6003710efcb32915:0x6234106240ec0a53"
  },
  {
    "name": "タイムズ大須赤門通",
    "address": "愛知県名古屋市中区大須3丁目30-7",
    "lat": 35.160275,
    "lng": 136.905542,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 330円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1800
    },
    "hours": "24時間",
    "placeCid": "4718547592727150776",
    "placeFid": "0x600370cc7e655555:0x417ba6092046c0b8"
  },
  {
    "name": "セントラルパーキング 栄",
    "address": "愛知県名古屋市中区栄4丁目15-6",
    "lat": 35.1671914,
    "lng": 136.9101453,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "placeCid": "10694634155120255169",
    "placeFid": "0x600370d0332ea587:0x946af919fab3e0c1"
  },
  {
    "name": "1017パーキング 駐車場",
    "address": "愛知県名古屋市東区東桜1丁目10-16",
    "lat": 35.17252,
    "lng": 136.910217,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "placeCid": "5594029923395058465",
    "placeFid": "0x600370d71d9dbe05:0x4da1fc93aede3b21"
  },
  {
    "name": "タイムズ栄4丁目",
    "address": "愛知県名古屋市中区栄4-5",
    "lat": 35.1690463,
    "lng": 136.9125961,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 1700,
      "holiday": 1700
    },
    "hours": "24時間",
    "placeCid": "793233650285598500",
    "placeFid": "0x600370cd6605fb6b:0xb0221cd5d28d724"
  },
  {
    "name": "タイムズ栄4丁目第5",
    "address": "愛知県名古屋市中区栄4-2",
    "lat": 35.168861,
    "lng": 136.91127,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1900,
      "holiday": 1200
    },
    "hours": "24時間",
    "placeCid": "10411052126918142394",
    "placeFid": "0x6003715d11216a0b:0x907b7cbfd307e9ba"
  },
  {
    "name": "タイムズ栄第41",
    "address": "愛知県名古屋市中区栄4-5",
    "lat": 35.168915,
    "lng": 136.912384,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間",
    "placeCid": "5741646384598225829",
    "placeFid": "0x600370da9d6d099f:0x4fae6cf75be213a5"
  },
  {
    "name": "タイムズ栄第46",
    "address": "愛知県名古屋市中区栄3-28",
    "lat": 35.163837,
    "lng": 136.906403,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間",
    "placeCid": "17708141545662105488",
    "placeFid": "0x600370cd901fa729:0xf5bff4e9fd86c790"
  },
  {
    "name": "タイムズ栄3丁目第5",
    "address": "愛知県名古屋市中区栄3-19",
    "lat": 35.165451,
    "lng": 136.90419,
    "hourlyRate": 1750,
    "rates": {
      "weekday": "12分 350円",
      "holiday": "12分 350円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間",
    "placeCid": "16003481223995443925",
    "placeFid": "0x60037159c22d7725:0xde17c96215e1cad5"
  },
  {
    "name": "タイムズ栄第40",
    "address": "愛知県名古屋市中区栄3-22",
    "lat": 35.164101,
    "lng": 136.902969,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1700,
      "holiday": 1700
    },
    "hours": "24時間",
    "placeCid": "8193557497652026366",
    "placeFid": "0x6003772d35988353:0x71b55d21fe499bfe"
  },
  {
    "name": "タイムズ大須第4",
    "address": "愛知県名古屋市中区大須2-13",
    "lat": 35.160313,
    "lng": 136.900375,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 1100
    },
    "hours": "24時間",
    "placeCid": "4073354089518942967",
    "placeFid": "0x600377325910877b:0x388775f67e294af7"
  },
  {
    "name": "タイムズ大須3丁目第2",
    "address": "愛知県名古屋市中区大須3-1",
    "lat": 35.1585042,
    "lng": 136.9016701,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 2000
    },
    "hours": "24時間",
    "placeCid": "16841389224939340840",
    "placeFid": "0x60037732b61e4435:0xe9b8a2454499c428"
  },
  {
    "name": "タイムズ大須2丁目第3",
    "address": "愛知県名古屋市中区大須2-30",
    "lat": 35.158539,
    "lng": 136.901108,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 2200
    },
    "hours": "24時間",
    "placeCid": "4769024794599402034",
    "placeFid": "0x60037733714126d7:0x422efac88720aa32"
  },
  {
    "name": "タイムズ万松寺",
    "address": "愛知県名古屋市中区大須3-30",
    "lat": 35.159481,
    "lng": 136.905502,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 330円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1900
    },
    "hours": "24時間",
    "placeCid": "5672196306615835659",
    "placeFid": "0x600371b5651206bd:0x4eb7b07d001e9c0b"
  },
  {
    "name": "タイムズ久屋大通駅北",
    "address": "愛知県名古屋市中区丸の内3-19",
    "lat": 35.174191,
    "lng": 136.906982,
    "hourlyRate": 1100,
    "rates": {
      "weekday": "12分 220円",
      "holiday": "12分 220円"
    },
    "maxRate": {
      "weekday": 2200,
      "holiday": 2200
    },
    "hours": "24時間",
    "placeCid": "11380600453470956412",
    "placeFid": "0x6003712f787b265d:0x9df003d0bfc92b7c"
  },
  {
    "name": "タイムズ広小路伏見",
    "address": "愛知県名古屋市中区栄1-5",
    "lat": 35.167938,
    "lng": 136.896957,
    "hourlyRate": 1050,
    "rates": {
      "weekday": "20分 350円",
      "holiday": "20分 350円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 1600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄竪三蔵通",
    "address": "愛知県名古屋市中区栄1-3",
    "lat": 35.16753,
    "lng": 136.894257,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄竪三蔵通第2",
    "address": "愛知県名古屋市中区栄1-9",
    "lat": 35.16621,
    "lng": 136.894379,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄第42",
    "address": "愛知県名古屋市中区栄1-9",
    "lat": 35.16621,
    "lng": 136.894379,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦第7",
    "address": "愛知県名古屋市中区錦1-6",
    "lat": 35.171425,
    "lng": 136.895294,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦第6",
    "address": "愛知県名古屋市中区錦1-16",
    "lat": 35.168674,
    "lng": 136.892975,
    "hourlyRate": 1050,
    "rates": {
      "weekday": "20分 350円",
      "holiday": "20分 350円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦第9",
    "address": "愛知県名古屋市中区錦1-7",
    "lat": 35.171326,
    "lng": 136.893753,
    "hourlyRate": 1050,
    "rates": {
      "weekday": "20分 350円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 2500,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦2丁目第7",
    "address": "愛知県名古屋市中区錦2-19",
    "lat": 35.168953,
    "lng": 136.900375,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2300,
      "holiday": 2300
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦2丁目",
    "address": "愛知県名古屋市中区錦2-8",
    "lat": 35.171577,
    "lng": 136.897766,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2500,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦3丁目第5",
    "address": "愛知県名古屋市中区錦3-10",
    "lat": 35.171886,
    "lng": 136.902435,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦長島町",
    "address": "愛知県名古屋市中区錦2-6",
    "lat": 35.171734,
    "lng": 136.900101,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2400,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦2丁目第11",
    "address": "愛知県名古屋市中区錦2-11",
    "lat": 35.170792,
    "lng": 136.900192,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2400,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦3丁目第2",
    "address": "愛知県名古屋市中区錦3-14",
    "lat": 35.171181,
    "lng": 136.906067,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦2丁目第12",
    "address": "愛知県名古屋市中区錦2-11",
    "lat": 35.170792,
    "lng": 136.900192,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦2丁目第8",
    "address": "愛知県名古屋市中区錦2-8",
    "lat": 35.171577,
    "lng": 136.897766,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2500,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦長者町",
    "address": "愛知県名古屋市中区錦2-11",
    "lat": 35.170792,
    "lng": 136.900192,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2400,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦3丁目第3",
    "address": "愛知県名古屋市中区錦3-7",
    "lat": 35.172115,
    "lng": 136.905975,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦長者町第2",
    "address": "愛知県名古屋市中区錦2-6",
    "lat": 35.171734,
    "lng": 136.900101,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名古屋駅前",
    "address": "愛知県名古屋市中村区名駅3-26",
    "lat": 35.172089,
    "lng": 136.885483,
    "hourlyRate": 2400,
    "rates": {
      "weekday": "10分 400円",
      "holiday": "10分 400円"
    },
    "maxRate": {
      "weekday": 2200,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅2丁目第5",
    "address": "愛知県名古屋市中村区名駅2-41",
    "lat": 35.174656,
    "lng": 136.884842,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 1400
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅3丁目",
    "address": "愛知県名古屋市中村区名駅3-24",
    "lat": 35.1715087,
    "lng": 136.8893177,
    "hourlyRate": 3000,
    "rates": {
      "weekday": "10分 500円",
      "holiday": "10分 500円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南1丁目",
    "address": "愛知県名古屋市中村区名駅南1-23",
    "lat": 35.1648223,
    "lng": 136.8890074,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1540,
      "holiday": 1540
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅2丁目第4",
    "address": "愛知県名古屋市中村区名駅2-42",
    "lat": 35.174423,
    "lng": 136.884125,
    "hourlyRate": 1500,
    "rates": {
      "weekday": "10分 250円",
      "holiday": "10分 250円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "JPタワー名古屋",
    "address": "愛知県名古屋市中村区名駅1-1",
    "lat": 35.1729749,
    "lng": 136.8824146,
    "hourlyRate": 700,
    "rates": {
      "weekday": "30分 350円",
      "holiday": "30分 350円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ椿町第12",
    "address": "愛知県名古屋市中村区椿町16",
    "lat": 35.16819,
    "lng": 136.881531,
    "hourlyRate": 2400,
    "rates": {
      "weekday": "10分 400円",
      "holiday": "10分 400円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅3丁目第5",
    "address": "愛知県名古屋市中村区名駅3-24",
    "lat": 35.172428,
    "lng": 136.886429,
    "hourlyRate": 2100,
    "rates": {
      "weekday": "10分 350円",
      "holiday": "10分 350円"
    },
    "maxRate": {
      "weekday": 1700,
      "holiday": 1700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅2丁目第2",
    "address": "愛知県名古屋市中村区名駅2-40",
    "lat": 35.174988,
    "lng": 136.88414,
    "hourlyRate": 1250,
    "rates": {
      "weekday": "12分 250円",
      "holiday": "12分 250円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ椿町第10",
    "address": "愛知県名古屋市中村区椿町10",
    "lat": 35.169025,
    "lng": 136.878464,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名古屋新幹線口",
    "address": "愛知県名古屋市中村区椿町16",
    "lat": 35.16819,
    "lng": 136.881531,
    "hourlyRate": 2100,
    "rates": {
      "weekday": "10分 350円",
      "holiday": "10分 350円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 1600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅5丁目",
    "address": "愛知県名古屋市中村区名駅5-7",
    "lat": 35.167396,
    "lng": 136.8908523,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1900,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅4丁目第7",
    "address": "愛知県名古屋市中村区名駅4-16",
    "lat": 35.170673,
    "lng": 136.888077,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅5丁目第2",
    "address": "愛知県名古屋市中村区名駅5-25",
    "lat": 35.168781,
    "lng": 136.891632,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 1600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南1丁目第3",
    "address": "愛知県名古屋市中村区名駅南1-5",
    "lat": 35.167255,
    "lng": 136.890518,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南第13",
    "address": "愛知県名古屋市中村区名駅南1-14",
    "lat": 35.167221,
    "lng": 136.888565,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南第11",
    "address": "愛知県名古屋市中村区名駅南4-3",
    "lat": 35.162167,
    "lng": 136.887665,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南第6",
    "address": "愛知県名古屋市中村区名駅南2-12",
    "lat": 35.164967,
    "lng": 136.886978,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南1丁目第2",
    "address": "愛知県名古屋市中村区名駅南1-20",
    "lat": 35.166061,
    "lng": 136.887497,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南第12",
    "address": "愛知県名古屋市中村区名駅南1-13",
    "lat": 35.166641,
    "lng": 136.888657,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1320,
      "holiday": 1320
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南第14",
    "address": "愛知県名古屋市中村区名駅南3-7",
    "lat": 35.161091,
    "lng": 136.890594,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南1丁目第7",
    "address": "愛知県名古屋市中村区名駅南1-5",
    "lat": 35.167255,
    "lng": 136.890518,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山",
    "address": "愛知県名古屋市中区金山2-12",
    "lat": 35.145252,
    "lng": 136.90538,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "22:00-07:00 夜間最大330円"
  },
  {
    "name": "タイムズ金山第３",
    "address": "愛知県名古屋市中区金山1-8",
    "lat": 35.146297,
    "lng": 136.899841,
    "hourlyRate": 330,
    "rates": {
      "weekday": "08:00-22:00 40分 220円 / 22:00-08:00 60分 110円",
      "holiday": "08:00-22:00 40分 220円 / 22:00-08:00 60分 110円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山２丁目",
    "address": "愛知県名古屋市中区金山2-10",
    "lat": 35.145065,
    "lng": 136.904251,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山町第４",
    "address": "愛知県名古屋市熱田区金山町1-8",
    "lat": 35.141308,
    "lng": 136.899551,
    "hourlyRate": 500,
    "rates": {
      "weekday": "08:00-17:00 30分 250円 / 17:00-08:00 30分 150円",
      "holiday": "08:00-17:00 30分 250円 / 17:00-08:00 30分 150円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山町",
    "address": "愛知県名古屋市熱田区金山町2-3",
    "lat": 35.14093,
    "lng": 136.903458,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": 770
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズSonosaki ヱ 金山",
    "address": "愛知県名古屋市熱田区沢下町5",
    "lat": 35.139496,
    "lng": 136.909348,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "21:00-08:00 夜間最大330円"
  },
  {
    "name": "三井のリパーク 金山駅南駐車場",
    "address": "愛知県名古屋市中区金山町1-1",
    "lat": 35.142838,
    "lng": 136.900131,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円 (06:00-01:00)",
      "holiday": "30分 300円 (06:00-01:00)"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "06:00-01:00"
  },
  {
    "name": "三井のリパーク 金山駅南第２",
    "address": "愛知県名古屋市熱田区金山町1-18-15",
    "lat": 35.140733,
    "lng": 136.899972,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 金山第１",
    "address": "愛知県名古屋市熱田区金山町1-5-1",
    "lat": 35.142101,
    "lng": 136.900345,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 金山第１４",
    "address": "愛知県名古屋市熱田区金山町2-3-11",
    "lat": 35.140835,
    "lng": 136.903351,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名古屋ゼロゲート",
    "address": "愛知県名古屋市中区栄3-28",
    "lat": 35.163837,
    "lng": 136.906403,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 2200
    },
    "hours": "24時間",
    "note": "平日昼最大1400円・夜最大800円 / 休日昼最大2200円・夜最大800円"
  },
  {
    "name": "タイムズ栄第２９",
    "address": "愛知県名古屋市中区栄5-4",
    "lat": 35.165379,
    "lng": 136.912323,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄３丁目第４",
    "address": "愛知県名古屋市中区栄3-25",
    "lat": 35.164036,
    "lng": 136.904678,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄３丁目第６",
    "address": "愛知県名古屋市中区栄3-25",
    "lat": 35.164036,
    "lng": 136.904678,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄３丁目第８",
    "address": "愛知県名古屋市中区栄3-25",
    "lat": 35.164036,
    "lng": 136.904678,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズアオキ上前津駅前店",
    "address": "愛知県名古屋市中区上前津1-3",
    "lat": 35.157192,
    "lng": 136.904114,
    "hourlyRate": 330,
    "rates": {
      "weekday": "08:00-21:00 20分 110円 / 21:00-08:00 60分 110円",
      "holiday": "08:00-21:00 20分 220円 / 21:00-08:00 60分 110円"
    },
    "maxRate": {
      "weekday": 1320,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ楽運寺",
    "address": "愛知県名古屋市中区大須4-10",
    "lat": 35.159344,
    "lng": 136.90657,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "10分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 2200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ大須第８",
    "address": "愛知県名古屋市中区大須3-27",
    "lat": 35.159206,
    "lng": 136.903793,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "20分 350円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "20:00-08:00 夜間最大300円"
  },
  {
    "name": "タイムズＳＡＫＡＥ",
    "address": "愛知県名古屋市中区錦3-23",
    "lat": 35.16927,
    "lng": 136.905106,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "30分 500円",
      "holiday": "30分 500円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 2500
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ丸の内１丁目",
    "address": "愛知県名古屋市中区丸の内1-3",
    "lat": 35.1771717,
    "lng": 136.8958671,
    "hourlyRate": 660,
    "rates": {
      "weekday": "06:00-14:00 20分 330円 / 14:00-22:00 30分 330円 / 22:00-06:00 60分 110円",
      "holiday": "06:00-14:00 20分 330円 / 14:00-22:00 30分 330円 / 22:00-06:00 60分 110円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "22:00-06:00 夜間最大330円"
  },
  {
    "name": "タイムズ丸の内２丁目第６",
    "address": "愛知県名古屋市中区丸の内2-2",
    "lat": 35.177032,
    "lng": 136.898376,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 800
    },
    "hours": "24時間",
    "note": "平日昼最大2000円・夜最大500円 / 休日昼最大800円・夜最大500円"
  },
  {
    "name": "タイムズ丸の内２丁目第７",
    "address": "愛知県名古屋市中区丸の内2-15",
    "lat": 35.174603,
    "lng": 136.898621,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "平日夜間最大700円 / 休日昼最大1000円・夜最大700円"
  },
  {
    "name": "タイムズ丸の内２丁目第９",
    "address": "愛知県名古屋市中区丸の内2-10",
    "lat": 35.175396,
    "lng": 136.898544,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "夜間最大400円 / 休日昼最大1000円"
  },
  {
    "name": "タイムズ丸の内２丁目第１０",
    "address": "愛知県名古屋市中区丸の内2-2",
    "lat": 35.177032,
    "lng": 136.898376,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 600
    },
    "hours": "24時間",
    "note": "平日昼最大2000円・夜最大400円 / 休日昼最大600円・夜最大400円"
  },
  {
    "name": "タイムズ丸の内３丁目",
    "address": "愛知県名古屋市中区丸の内3-17",
    "lat": 35.175068,
    "lng": 136.905655,
    "hourlyRate": 1250,
    "rates": {
      "weekday": "12分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": 1500
    },
    "hours": "24時間",
    "note": "夜間最大400円 / 休日昼最大1500円"
  },
  {
    "name": "タイムズ栄３丁目第１１",
    "address": "愛知県名古屋市中区栄3-12",
    "lat": 35.166229,
    "lng": 136.904175,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ白川公園東",
    "address": "愛知県名古屋市中区栄3-23",
    "lat": 35.164417,
    "lng": 136.904007,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄第３４",
    "address": "愛知県名古屋市中区栄3-21",
    "lat": 35.164719,
    "lng": 136.903076,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄３丁目第９",
    "address": "愛知県名古屋市中区栄3-22",
    "lat": 35.164101,
    "lng": 136.902969,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 2000
    },
    "hours": "24時間",
    "note": "平日09:00-18:00最大1400円 / 休日09:00-18:00最大2000円"
  },
  {
    "name": "タイムズ栄４丁目第６",
    "address": "愛知県名古屋市中区栄4-11",
    "lat": 35.167145,
    "lng": 136.912186,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄５丁目",
    "address": "愛知県名古屋市中区栄5-7",
    "lat": 35.1626646,
    "lng": 136.9149464,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間",
    "note": "平日08:00-20:00最大1000円"
  },
  {
    "name": "タイムズ新栄第１１",
    "address": "愛知県名古屋市中区新栄1-10",
    "lat": 35.167572,
    "lng": 136.916443,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ新栄１丁目第６",
    "address": "愛知県名古屋市中区新栄1-30",
    "lat": 35.164307,
    "lng": 136.916824,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ新栄１丁目第５",
    "address": "愛知県名古屋市中区新栄1-48",
    "lat": 35.161747,
    "lng": 136.918488,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 990,
      "holiday": null
    },
    "hours": "24時間",
    "note": "平日08:00-18:00最大990円"
  },
  {
    "name": "タイムズ新栄第１３",
    "address": "愛知県名古屋市中区新栄2-9",
    "lat": 35.168938,
    "lng": 136.921967,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間",
    "note": "08:00-20:00最大1000円"
  },
  {
    "name": "タイムズ新栄第１５",
    "address": "愛知県名古屋市中区新栄2-24",
    "lat": 35.167194,
    "lng": 136.920578,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "08:00-00:00 20分110円 / 00:00-08:00 60分110円。夜間最大220円"
  },
  {
    "name": "タイムズ新栄第４",
    "address": "愛知県名古屋市中区新栄2-10",
    "lat": 35.168388,
    "lng": 136.921722,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ丸の内３丁目第２",
    "address": "愛知県名古屋市中区丸の内3-10",
    "lat": 35.175709,
    "lng": 136.903244,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 2300,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "平日07:00-19:00最大2300円 / 休日07:00-19:00最大1000円"
  },
  {
    "name": "タイムズ丸の内３丁目第６",
    "address": "愛知県名古屋市中区丸の内3-14",
    "lat": 35.174824,
    "lng": 136.902145,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ丸の内３丁目第７",
    "address": "愛知県名古屋市中区丸の内3-2",
    "lat": 35.177364,
    "lng": 136.903076,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 700
    },
    "hours": "24時間",
    "note": "平日08:00-19:00最大1800円 / 休日08:00-19:00最大700円"
  },
  {
    "name": "タイムズ大津通",
    "address": "愛知県名古屋市中区丸の内3-4",
    "lat": 35.177502,
    "lng": 136.90538,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ大須２丁目第９",
    "address": "愛知県名古屋市中区大須2-30",
    "lat": 35.158539,
    "lng": 136.901108,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 2200
    },
    "hours": "24時間",
    "note": "平日08:00-18:00最大1100円 / 休日08:00-18:00最大2200円"
  },
  {
    "name": "タイムズ大須２丁目第５",
    "address": "愛知県名古屋市中区大須2-9",
    "lat": 35.161026,
    "lng": 136.899551,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "20:00-08:00最大400円"
  },
  {
    "name": "タイムズ大須２丁目第４",
    "address": "愛知県名古屋市中区大須2-24",
    "lat": 35.159355,
    "lng": 136.898895,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "note": "20:00-08:00最大500円"
  },
  {
    "name": "タイムズ大須スケートリンク",
    "address": "愛知県名古屋市中区門前町1-60",
    "lat": 35.157749,
    "lng": 136.898727,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間",
    "note": "平日07:00-19:00最大700円"
  },
  {
    "name": "熱田神宮 無料駐車場（東門）",
    "address": "愛知県名古屋市熱田区神宮1丁目1-1",
    "lat": 35.125946,
    "lng": 136.910858,
    "hourlyRate": 0,
    "rates": {
      "weekday": "無料",
      "holiday": "無料"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "7:00-17:00",
    "note": "約300台収容の公式無料駐車場。年末年始・大型祭事時は閉鎖"
  },
  {
    "name": "名鉄協商パーキング 神宮前駅西PB",
    "address": "愛知県名古屋市熱田区神宮3丁目6",
    "lat": 35.124577,
    "lng": 136.912155,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 神宮前第6",
    "address": "愛知県名古屋市熱田区神宮3丁目",
    "lat": 35.1238673,
    "lng": 136.9110684,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間",
    "note": "17:00-8:00 最大300円"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮西",
    "address": "愛知県名古屋市熱田区白鳥2丁目12-16",
    "lat": 35.125769,
    "lng": 136.906777,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ熱田神宮北",
    "address": "愛知県名古屋市熱田区森後町6",
    "lat": 35.12904,
    "lng": 136.907333,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 550
    },
    "hours": "24時間",
    "note": "19:00-8:00 最大330円"
  },
  {
    "name": "タイムズ神宮前駅北",
    "address": "愛知県名古屋市熱田区三本松町1",
    "lat": 35.128201,
    "lng": 136.912094,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 550
    },
    "hours": "24時間",
    "note": "19:00-8:00 最大330円"
  },
  {
    "name": "三井のリパーク 熱田神宮西駅前",
    "address": "愛知県名古屋市熱田区旗屋町507",
    "lat": 35.129639,
    "lng": 136.905807,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間",
    "note": "19:00-8:00 最大300円"
  },
  {
    "name": "三井のリパーク 熱田駅前",
    "address": "愛知県名古屋市熱田区旗屋町",
    "lat": 35.1314437,
    "lng": 136.9053023,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間",
    "note": "19:00-8:00 最大400円"
  },
  {
    "name": "三井のリパーク 名古屋神宮2丁目",
    "address": "愛知県名古屋市熱田区神宮2丁目",
    "lat": 35.1238673,
    "lng": 136.9110684,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋神宮2丁目第3",
    "address": "愛知県名古屋市熱田区神宮2丁目",
    "lat": 35.1238673,
    "lng": 136.9110684,
    "hourlyRate": 200,
    "rates": {
      "weekday": "昼(8-20時) 60分 200円 / 夜(20-8時) 60分 100円",
      "holiday": "昼(8-20時) 60分 200円 / 夜(20-8時) 60分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "矢場公園駐車場",
    "address": "愛知県名古屋市中区栄4丁目16-1",
    "lat": 35.166573,
    "lng": 136.909561,
    "hourlyRate": 540,
    "rates": {
      "weekday": "30分 270円",
      "holiday": "30分 270円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1700
    },
    "hours": "24時間",
    "note": "平日6:00-22:00最大1300円 / 休日6:00-22:00最大1700円 / 夜間22:00-6:00最大500円"
  },
  {
    "name": "タイムズナゴヤドーム駅前",
    "address": "愛知県名古屋市東区大幸3丁目1",
    "lat": 35.190063,
    "lng": 136.949707,
    "hourlyRate": 200,
    "rates": {
      "weekday": "昼(8-0時) 30分 100円 / 夜(0-8時) 60分 100円",
      "holiday": "昼(8-0時) 30分 100円 / 夜(0-8時) 60分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間",
    "note": "イベント開催日は料金が変わります。現地カレンダーを確認推奨"
  },
  {
    "name": "タイムズナゴヤドーム駅前第3",
    "address": "愛知県名古屋市東区大幸4丁目1",
    "lat": 35.189541,
    "lng": 136.952209,
    "hourlyRate": 200,
    "rates": {
      "weekday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円",
      "holiday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間",
    "note": "イベント開催日は料金が変わります。現地カレンダーを確認推奨"
  },
  {
    "name": "タイムズナゴヤドーム駅前第5",
    "address": "愛知県名古屋市東区大幸4丁目14",
    "lat": 35.189777,
    "lng": 136.953552,
    "hourlyRate": 200,
    "rates": {
      "weekday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円",
      "holiday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間",
    "note": "イベント開催日は料金が変わります。現地カレンダーを確認推奨"
  },
  {
    "name": "名鉄協商パーキング 古出来町",
    "address": "愛知県名古屋市東区古出来2丁目2",
    "lat": 35.181709,
    "lng": 136.940552,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク ナゴヤドーム前",
    "address": "愛知県名古屋市東区矢田南2丁目13-10",
    "lat": 35.18465,
    "lng": 136.944794,
    "hourlyRate": 200,
    "rates": {
      "weekday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円",
      "holiday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 300
    },
    "hours": "24時間",
    "note": "イベント開催日は最大3,000円。現地カレンダーを確認推奨"
  },
  {
    "name": "三井のリパーク 矢田南",
    "address": "愛知県名古屋市東区矢田南2丁目12-12",
    "lat": 35.1837,
    "lng": 136.9467,
    "hourlyRate": 200,
    "rates": {
      "weekday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円",
      "holiday": "昼(8-22時) 30分 100円 / 夜(22-8時) 60分 100円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 300
    },
    "hours": "24時間",
    "note": "イベント開催日は最大2,500円。現地カレンダーを確認推奨"
  },
  {
    "name": "三井のリパーク ナゴヤドーム南",
    "address": "愛知県名古屋市千種区萱場2丁目14-22",
    "lat": 35.18364,
    "lng": 136.94809,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 400
    },
    "hours": "24時間",
    "note": "イベント開催日は最大2,500円。現地カレンダーを確認推奨"
  },
  {
    "name": "三井のリパーク 大曽根第2",
    "address": "愛知県名古屋市北区大曽根3丁目",
    "lat": 35.1895088,
    "lng": 136.9356159,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 750,
      "holiday": 750
    },
    "hours": "24時間",
    "note": "夜間(20-8時)最大400円"
  },
  {
    "name": "名鉄協商パーキング 今池1丁目",
    "address": "愛知県名古屋市千種区今池1丁目",
    "lat": 35.168449,
    "lng": 136.933624,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間",
    "note": "8:00-18:00最大1100円 / 18:00-8:00最大800円"
  },
  {
    "name": "タイムズ今池第11",
    "address": "愛知県名古屋市千種区今池1丁目29-15",
    "lat": 35.167469,
    "lng": 136.935471,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "駐車後6時間以内最大1000円"
  },
  {
    "name": "名鉄協商パーキング 今池3丁目第2",
    "address": "愛知県名古屋市千種区今池3丁目37",
    "lat": 35.163452,
    "lng": 136.933258,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間",
    "note": "18:00-8:00最大300円"
  },
  {
    "name": "三井のリパーク 今池3丁目",
    "address": "愛知県名古屋市千種区今池3丁目",
    "lat": 35.165161,
    "lng": 136.934204,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間",
    "note": "20:00-8:00最大300円"
  },
  {
    "name": "三井のリパーク 今池第20",
    "address": "愛知県名古屋市千種区今池2丁目",
    "lat": 35.167156,
    "lng": 136.930222,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "入庫後12時間以内最大1000円"
  },
  {
    "name": "三井のリパーク 今池5丁目第3",
    "address": "愛知県名古屋市千種区今池5丁目",
    "lat": 35.1677918,
    "lng": 136.9360031,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間",
    "note": "19:00-7:00最大600円"
  },
  {
    "name": "JTP今池No.3",
    "address": "愛知県名古屋市千種区今池4丁目10",
    "lat": 35.169594,
    "lng": 136.938248,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間",
    "note": "最大料金は6時間毎に適用"
  },
  {
    "name": "三井のリパーク 名古屋名駅1丁目",
    "address": "愛知県名古屋市中村区名駅1丁目1",
    "lat": 35.169002,
    "lng": 136.8790656,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅2丁目第3",
    "address": "愛知県名古屋市中村区名駅2丁目20",
    "lat": 35.174541,
    "lng": 136.883835,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅4丁目",
    "address": "愛知県名古屋市中村区名駅4丁目2",
    "lat": 35.171474,
    "lng": 136.888031,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅南第2",
    "address": "愛知県名古屋市中村区名駅南1丁目15",
    "lat": 35.167297,
    "lng": 136.889404,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 名駅南2丁目",
    "address": "愛知県名古屋市中村区名駅南2丁目8",
    "lat": 35.1663618,
    "lng": 136.8893119,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 名古屋駅西",
    "address": "愛知県名古屋市中村区椿町5",
    "lat": 35.1746343,
    "lng": 136.8757268,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南2丁目",
    "address": "愛知県名古屋市中村区名駅南2丁目14",
    "lat": 35.165234,
    "lng": 136.886276,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅1丁目",
    "address": "愛知県名古屋市中村区名駅1丁目16",
    "lat": 35.170776,
    "lng": 136.882492,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅4丁目第3",
    "address": "愛知県名古屋市中村区名駅4丁目13",
    "lat": 35.169231,
    "lng": 136.887726,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅南第2",
    "address": "愛知県名古屋市中村区名駅南1丁目19",
    "lat": 35.166622,
    "lng": 136.887482,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ那古野1丁目",
    "address": "愛知県名古屋市中村区那古野1丁目30",
    "lat": 35.173122,
    "lng": 136.89151,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 名駅3丁目",
    "address": "愛知県名古屋市中村区名駅3丁目5",
    "lat": 35.173775,
    "lng": 136.888138,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ矢場町第2",
    "address": "愛知県名古屋市中区矢場町3丁目7",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ矢場町第3",
    "address": "愛知県名古屋市中区矢場町4丁目8",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 矢場町第2",
    "address": "愛知県名古屋市中区矢場町2丁目5",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 矢場町第3",
    "address": "愛知県名古屋市中区矢場町6丁目3",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 栄4丁目",
    "address": "愛知県名古屋市中区栄4丁目3",
    "lat": 35.168224,
    "lng": 136.91124,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 栄5丁目",
    "address": "愛知県名古屋市中区栄5丁目3",
    "lat": 35.165333,
    "lng": 136.911438,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄4丁目第2",
    "address": "愛知県名古屋市中区栄4丁目7",
    "lat": 35.167515,
    "lng": 136.914383,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄5丁目第2",
    "address": "愛知県名古屋市中区栄5丁目12",
    "lat": 35.164185,
    "lng": 136.91156,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1600
    },
    "hours": "24時間"
  },
  {
    "name": "セントラルパーキング 矢場町",
    "address": "愛知県名古屋市中区矢場町1丁目2",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 栄南矢場町",
    "address": "愛知県名古屋市中区栄5丁目20",
    "lat": 35.163261,
    "lng": 136.912582,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 栄2丁目",
    "address": "愛知県名古屋市中区栄2丁目12",
    "lat": 35.1663061,
    "lng": 136.9018456,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 栄3丁目",
    "address": "愛知県名古屋市中区栄3丁目2",
    "lat": 35.1651014,
    "lng": 136.9026974,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 新栄2丁目",
    "address": "愛知県名古屋市中区新栄2丁目3",
    "lat": 35.1665211,
    "lng": 136.9196787,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 栄2丁目",
    "address": "愛知県名古屋市中区栄2丁目5",
    "lat": 35.166969,
    "lng": 136.902023,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 栄3丁目",
    "address": "愛知県名古屋市中区栄3丁目20",
    "lat": 35.165363,
    "lng": 136.903091,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 栄センター",
    "address": "愛知県名古屋市中区栄3丁目17",
    "lat": 35.165588,
    "lng": 136.906647,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 新栄1丁目",
    "address": "愛知県名古屋市中区新栄1丁目8",
    "lat": 35.1658447,
    "lng": 136.9194268,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 金山南",
    "address": "愛知県名古屋市熱田区金山町1丁目12",
    "lat": 35.1414188,
    "lng": 136.9014371,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 金山駅前第2",
    "address": "愛知県名古屋市中区金山1丁目3",
    "lat": 35.146614,
    "lng": 136.901779,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 金山2丁目",
    "address": "愛知県名古屋市中区金山2丁目5",
    "lat": 35.1443723,
    "lng": 136.905833,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山第5",
    "address": "愛知県名古屋市中区金山1丁目8",
    "lat": 35.146297,
    "lng": 136.899841,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山駅南",
    "address": "愛知県名古屋市熱田区金山町2丁目8",
    "lat": 35.14032,
    "lng": 136.904434,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 金山",
    "address": "愛知県名古屋市熱田区沢下町8",
    "lat": 35.138824,
    "lng": 136.907761,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 大須2丁目",
    "address": "愛知県名古屋市中区大須2丁目18",
    "lat": 35.1600073,
    "lng": 136.8990542,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 大須4丁目",
    "address": "愛知県名古屋市中区大須4丁目5",
    "lat": 35.160179,
    "lng": 136.909836,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 大須3丁目",
    "address": "愛知県名古屋市中区大須3丁目20",
    "lat": 35.1597527,
    "lng": 136.9040194,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ大須1丁目第2",
    "address": "愛知県名古屋市中区大須1丁目12",
    "lat": 35.161419,
    "lng": 136.894623,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 大須観音前",
    "address": "愛知県名古屋市中区大須2丁目3",
    "lat": 35.161674,
    "lng": 136.900345,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 大須3丁目第8",
    "address": "愛知県名古屋市中区大須3丁目8",
    "lat": 35.161354,
    "lng": 136.906113,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 上前津第3",
    "address": "愛知県名古屋市中区上前津2丁目4",
    "lat": 35.156651,
    "lng": 136.908447,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ熱田神宮南",
    "address": "愛知県名古屋市熱田区神宮3丁目5",
    "lat": 35.127178,
    "lng": 136.911209,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 熱田旗屋",
    "address": "愛知県名古屋市熱田区旗屋2丁目10",
    "lat": 35.1294033,
    "lng": 136.9060443,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 熱田白鳥",
    "address": "愛知県名古屋市熱田区白鳥2丁目3",
    "lat": 35.125069,
    "lng": 136.904526,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ熱田伝馬",
    "address": "愛知県名古屋市熱田区伝馬2丁目4",
    "lat": 35.119293,
    "lng": 136.911942,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 熱田",
    "address": "愛知県名古屋市熱田区神宮1丁目8",
    "lat": 35.125538,
    "lng": 136.909073,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ今池第2",
    "address": "愛知県名古屋市千種区今池2丁目3",
    "lat": 35.167953,
    "lng": 136.929733,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ今池1丁目",
    "address": "愛知県名古屋市千種区今池1丁目8",
    "lat": 35.1648,
    "lng": 136.9302,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 今池1丁目",
    "address": "愛知県名古屋市千種区今池1丁目20",
    "lat": 35.167538,
    "lng": 136.932442,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 今池",
    "address": "愛知県名古屋市千種区今池4丁目2",
    "lat": 35.170795,
    "lng": 136.939316,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ今池3丁目",
    "address": "愛知県名古屋市千種区今池3丁目15",
    "lat": 35.1615,
    "lng": 136.9328,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 錦1丁目",
    "address": "愛知県名古屋市中区錦1丁目15",
    "lat": 35.168743,
    "lng": 136.892395,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 錦3丁目",
    "address": "愛知県名古屋市中区錦3丁目10",
    "lat": 35.1730211,
    "lng": 136.903539,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 丸の内",
    "address": "愛知県名古屋市中区丸の内2丁目18",
    "lat": 35.173637,
    "lng": 136.898727,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 東桜",
    "address": "愛知県名古屋市中区東桜1丁目12",
    "lat": 35.169834,
    "lng": 136.917816,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ鶴舞３丁目",
    "address": "愛知県名古屋市昭和区鶴舞3-17",
    "lat": 35.150842,
    "lng": 136.919719,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 220,
      "holiday": 220
    },
    "hours": "24時間",
    "note": "夜間のみ最大220円"
  },
  {
    "name": "タイムズゲオ御器所店",
    "address": "愛知県名古屋市昭和区御器所通3-13",
    "lat": 35.149712,
    "lng": 136.936127,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間",
    "note": "夜間（20:00-8:00）60分110円、夜間最大300円"
  },
  {
    "name": "タイムズ川名",
    "address": "愛知県名古屋市昭和区檀渓通1-38",
    "lat": 35.146983,
    "lng": 136.947217,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 660
    },
    "hours": "24時間",
    "note": "昼間（8:00-22:00）最大660円、夜間最大330円"
  },
  {
    "name": "三井のリパーク 鶴舞２丁目",
    "address": "愛知県名古屋市昭和区鶴舞2丁目15-9",
    "lat": 35.151237,
    "lng": 136.914352,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間",
    "note": "夜間最大300円"
  },
  {
    "name": "三井のリパーク 鶴舞第3",
    "address": "愛知県名古屋市中区鶴舞2丁目18",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 鶴舞3丁目第2",
    "address": "愛知県名古屋市昭和区鶴舞3-4",
    "lat": 35.1522877,
    "lng": 136.9164418,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 鶴舞",
    "address": "愛知県名古屋市中区鶴舞3丁目2",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 御器所1丁目",
    "address": "愛知県名古屋市昭和区御器所1丁目5",
    "lat": 35.149174,
    "lng": 136.919006,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ御器所第2",
    "address": "愛知県名古屋市昭和区御器所2丁目8",
    "lat": 35.147667,
    "lng": 136.922623,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 御器所",
    "address": "愛知県名古屋市昭和区御器所3丁目2",
    "lat": 35.149418,
    "lng": 136.9254,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 御器所",
    "address": "愛知県名古屋市昭和区御器所4丁目5",
    "lat": 35.1472595,
    "lng": 136.9269554,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ川名第2",
    "address": "愛知県名古屋市昭和区川名1丁目3",
    "lat": 35.146717,
    "lng": 136.958298,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 川名",
    "address": "愛知県名古屋市昭和区川名2丁目5",
    "lat": 35.1517536,
    "lng": 136.9470926,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 川名",
    "address": "愛知県名古屋市昭和区川名3丁目8",
    "lat": 35.1475,
    "lng": 136.8968,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ覚王山",
    "address": "愛知県名古屋市千種区山門町1-11",
    "lat": 35.168743,
    "lng": 136.953033,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "夜間（18:00-8:00）最大300円"
  },
  {
    "name": "タイムズ千早第２",
    "address": "愛知県名古屋市中区千代田5-14",
    "lat": 35.158401,
    "lng": 136.918732,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 800
    },
    "hours": "24時間",
    "note": "平日昼間（7:00-18:00）最大1500円、休日昼間最大800円、夜間最大200円"
  },
  {
    "name": "三井のリパーク 覚王山駅前第4",
    "address": "愛知県名古屋市千種区山門町2丁目22",
    "lat": 35.16708,
    "lng": 136.951996,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 400
    },
    "hours": "24時間",
    "note": "夜間（20:00-8:00）最大400円"
  },
  {
    "name": "三井のリパーク 覚王山第2",
    "address": "愛知県名古屋市千種区山門町2-5",
    "lat": 35.168015,
    "lng": 136.952209,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 覚王山",
    "address": "愛知県名古屋市千種区観月町1-55-2",
    "lat": 35.1663104,
    "lng": 136.9526898,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 1400
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 覚王山",
    "address": "愛知県名古屋市千種区末盛通2丁目8",
    "lat": 35.166309,
    "lng": 136.956284,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ末盛第2",
    "address": "愛知県名古屋市千種区末盛通3丁目5",
    "lat": 35.165985,
    "lng": 136.957916,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "リパーク 覚王山通",
    "address": "愛知県名古屋市千種区覚王山通3丁目20",
    "lat": 35.167645,
    "lng": 136.946106,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 末盛",
    "address": "愛知県名古屋市千種区末盛通4丁目2",
    "lat": 35.1646219,
    "lng": 136.9608492,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ池下",
    "address": "愛知県名古屋市千種区池下1-10",
    "lat": 35.168194,
    "lng": 136.944119,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ池下第７",
    "address": "愛知県名古屋市千種区池下1-1",
    "lat": 35.16938,
    "lng": 136.943542,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間",
    "note": "12時間最大1200円"
  },
  {
    "name": "三井のリパーク 池下１丁目",
    "address": "愛知県名古屋市千種区池下1丁目4-3",
    "lat": 35.168694,
    "lng": 136.944885,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間",
    "note": "入庫後12時間以内1300円"
  },
  {
    "name": "名鉄協商パーキング 池下",
    "address": "愛知県名古屋市千種区春岡1-5",
    "lat": 35.166805,
    "lng": 136.9460156,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 千種",
    "address": "愛知県名古屋市千種区千種3丁目18",
    "lat": 35.161579,
    "lng": 136.932709,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ吹上第2",
    "address": "愛知県名古屋市千種区吹上1丁目5",
    "lat": 35.159554,
    "lng": 136.926102,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ吹上第3",
    "address": "愛知県名古屋市千種区吹上2丁目8",
    "lat": 35.158993,
    "lng": 136.929733,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 吹上",
    "address": "愛知県名古屋市千種区吹上3丁目3",
    "lat": 35.159302,
    "lng": 136.924927,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 吹上",
    "address": "愛知県名古屋市千種区吹上4丁目5",
    "lat": 35.159302,
    "lng": 136.924927,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ池下第2",
    "address": "愛知県名古屋市千種区池下1丁目3",
    "lat": 35.168606,
    "lng": 136.945129,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ池下第3",
    "address": "愛知県名古屋市千種区池下2丁目8",
    "lat": 35.168644,
    "lng": 136.945938,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 池下",
    "address": "愛知県名古屋市千種区四谷通1丁目5",
    "lat": 35.1686988,
    "lng": 136.9448337,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 池下",
    "address": "愛知県名古屋市千種区池下3丁目2",
    "lat": 35.168526,
    "lng": 136.94426,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ星が丘テラス前",
    "address": "愛知県名古屋市千種区星が丘元町15",
    "lat": 35.161949,
    "lng": 136.986313,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 550
    },
    "hours": "24時間",
    "note": "夜間（20:00-9:00）最大550円"
  },
  {
    "name": "タイムズ星が丘駅前第４",
    "address": "愛知県名古屋市千種区井上町4",
    "lat": 35.162445,
    "lng": 136.983017,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間",
    "note": "夜間（19:00-8:00）60分110円、夜間最大300円"
  },
  {
    "name": "三井のリパーク 星ヶ丘駅前",
    "address": "愛知県名古屋市千種区井上町126",
    "lat": 35.163258,
    "lng": 136.985687,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "昼間（8:00-20:00）最大1000円、夜間最大300円"
  },
  {
    "name": "三井のリパーク 星が丘第2",
    "address": "愛知県名古屋市千種区星が丘元町4-5",
    "lat": 35.160835,
    "lng": 136.982529,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 本山第３",
    "address": "愛知県名古屋市千種区稲舟通1-5",
    "lat": 35.163006,
    "lng": 136.961716,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間",
    "note": "昼間（8:00-20:00）最大800円"
  },
  {
    "name": "NPC24H 橋本町１丁目パーキング",
    "address": "愛知県名古屋市千種区橋本町1丁目",
    "lat": 35.165054,
    "lng": 136.966203,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ本山第２",
    "address": "愛知県名古屋市千種区見附町1-1",
    "lat": 35.162937,
    "lng": 136.963089,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ本山第3",
    "address": "愛知県名古屋市千種区本山2丁目8",
    "lat": 35.166756,
    "lng": 136.965775,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 本山",
    "address": "愛知県名古屋市千種区本山3丁目3",
    "lat": 35.1612,
    "lng": 136.951,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 本山",
    "address": "愛知県名古屋市千種区本山4丁目5",
    "lat": 35.1632523,
    "lng": 136.9623259,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 本山",
    "address": "愛知県名古屋市千種区本山1丁目18",
    "lat": 35.166756,
    "lng": 136.965775,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名港",
    "address": "愛知県名古屋市港区名港1-2",
    "lat": 35.098397,
    "lng": 136.885269,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間",
    "note": "昼間（8:00-18:00）最大600円、夜間最大200円"
  },
  {
    "name": "タイムズ名古屋港駅北",
    "address": "愛知県名古屋市港区浜2-1",
    "lat": 35.096275,
    "lng": 136.882233,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 650,
      "holiday": 650
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋港水族館前",
    "address": "愛知県名古屋市港区入船2丁目3-22",
    "lat": 35.092716,
    "lng": 136.880402,
    "hourlyRate": 800,
    "rates": {
      "weekday": "25分 330円",
      "holiday": "25分 330円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間",
    "note": "入庫後3時間以内最大1000円（繰返）"
  },
  {
    "name": "三井のリパーク 名古屋港第2",
    "address": "愛知県名古屋市港区港明1丁目3",
    "lat": 35.111023,
    "lng": 136.890915,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 名港",
    "address": "愛知県名古屋市港区浜2-7",
    "lat": 35.088,
    "lng": 136.8808,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 550
    },
    "hours": "24時間",
    "note": "12時間以内最大550円"
  },
  {
    "name": "NPC24H 名古屋港",
    "address": "愛知県名古屋市港区港明1丁目5",
    "lat": 35.110893,
    "lng": 136.889984,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ入船２丁目",
    "address": "愛知県名古屋市港区入船2-1",
    "lat": 35.094471,
    "lng": 136.880783,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 金城ふ頭",
    "address": "愛知県名古屋市港区金城ふ頭3丁目1",
    "lat": 35.051914,
    "lng": 136.852753,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 金城ふ頭",
    "address": "愛知県名古屋市港区金城ふ頭1丁目5",
    "lat": 35.054092,
    "lng": 136.844055,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ入船2丁目",
    "address": "愛知県名古屋市港区入船2丁目8",
    "lat": 35.093498,
    "lng": 136.880661,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ八事本町",
    "address": "愛知県名古屋市昭和区八事本町83",
    "lat": 35.140491,
    "lng": 136.96283,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ八事天道",
    "address": "愛知県名古屋市天白区八事天道403",
    "lat": 35.134914,
    "lng": 136.96257,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": 770
    },
    "hours": "24時間",
    "note": "夜間（19:00-8:00）最大300円"
  },
  {
    "name": "三井のリパーク 八事石坂",
    "address": "愛知県名古屋市昭和区広路町字石坂28-3",
    "lat": 35.138355,
    "lng": 136.959976,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間",
    "note": "夜間最大400円"
  },
  {
    "name": "三井のリパーク 八事第2",
    "address": "愛知県名古屋市天白区八事山1丁目5",
    "lat": 35.136135,
    "lng": 136.969131,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 八事石坂",
    "address": "愛知県名古屋市昭和区広路町字石坂4-16",
    "lat": 35.137169,
    "lng": 136.962418,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 八事",
    "address": "愛知県名古屋市昭和区山花町2丁目5",
    "lat": 35.152603,
    "lng": 136.950729,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ八事石坂第２",
    "address": "愛知県名古屋市昭和区広路町石坂11",
    "lat": 35.137421,
    "lng": 136.961044,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ山手通",
    "address": "愛知県名古屋市昭和区山手通5-14",
    "lat": 35.137,
    "lng": 136.9275,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間",
    "note": "夜間（19:00-7:00）最大300円"
  },
  {
    "name": "三井のリパーク いりなか",
    "address": "愛知県名古屋市昭和区広路通1丁目5",
    "lat": 35.149456,
    "lng": 136.938522,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング いりなか",
    "address": "愛知県名古屋市昭和区広路本町1丁目15",
    "lat": 35.147907,
    "lng": 136.939041,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H いりなか",
    "address": "愛知県名古屋市昭和区広路本町4丁目2",
    "lat": 35.149078,
    "lng": 136.94249,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名古屋城第2",
    "address": "愛知県名古屋市西区名城2丁目5",
    "lat": 35.172565,
    "lng": 136.881195,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名古屋城第3",
    "address": "愛知県名古屋市西区名城1丁目3",
    "lat": 35.172565,
    "lng": 136.881195,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋城西第８",
    "address": "愛知県名古屋市西区城西1丁目11-13",
    "lat": 35.184132,
    "lng": 136.893295,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間",
    "note": "夜間最大300円"
  },
  {
    "name": "三井のリパーク 名古屋城第2",
    "address": "愛知県名古屋市北区名城1丁目8",
    "lat": 35.189117,
    "lng": 136.901443,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 浅間町駅前",
    "address": "愛知県名古屋市西区浅間1-2",
    "lat": 35.183884,
    "lng": 136.890684,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 名古屋城",
    "address": "愛知県名古屋市西区名城1丁目18",
    "lat": 35.1878,
    "lng": 136.8988,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ二の丸",
    "address": "愛知県名古屋市西区二の丸3丁目8",
    "lat": 35.226116,
    "lng": 136.881836,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ円頓寺第2",
    "address": "愛知県名古屋市西区那古野1丁目5",
    "lat": 35.176556,
    "lng": 136.89238,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ四間道",
    "address": "愛知県名古屋市西区那古野2丁目8",
    "lat": 35.176994,
    "lng": 136.88826,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 那古野２丁目",
    "address": "愛知県名古屋市西区那古野2丁目23",
    "lat": 35.1791856,
    "lng": 136.8870115,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間",
    "note": "夜間（22:00-翌）60分110円、入庫後12時間以内最大1200円"
  },
  {
    "name": "三井のリパーク 四間道",
    "address": "愛知県名古屋市西区那古野3丁目3",
    "lat": 35.175659,
    "lng": 136.891785,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 那古野1丁目",
    "address": "愛知県名古屋市西区那古野1-5",
    "lat": 35.176556,
    "lng": 136.89238,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 900
    },
    "hours": "24時間",
    "note": "昼間（8:00-20:00）平日最大1400円、休日最大900円"
  },
  {
    "name": "NPC24H 円頓寺",
    "address": "愛知県名古屋市西区花の木2丁目8",
    "lat": 35.188496,
    "lng": 136.887665,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ那古野第2",
    "address": "愛知県名古屋市西区那古野1丁目35",
    "lat": 35.175957,
    "lng": 136.892258,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 栄生1丁目第3",
    "address": "愛知県名古屋市西区栄生1丁目3",
    "lat": 35.185642,
    "lng": 136.878738,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ那古野2丁目",
    "address": "愛知県名古屋市西区那古野2丁目20",
    "lat": 35.1760014,
    "lng": 136.8903591,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ栄生第2",
    "address": "愛知県名古屋市西区栄生2丁目5",
    "lat": 35.183376,
    "lng": 136.873352,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ高岳第2",
    "address": "愛知県名古屋市東区泉1丁目5",
    "lat": 35.177509,
    "lng": 136.912048,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ高岳第3",
    "address": "愛知県名古屋市東区泉2丁目8",
    "lat": 35.177551,
    "lng": 136.91774,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 葵第12",
    "address": "愛知県名古屋市東区葵3丁目13-22",
    "lat": 35.172466,
    "lng": 136.930954,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 1600
    },
    "hours": "24時間",
    "note": "夜間最大500円"
  },
  {
    "name": "三井のリパーク 高岳第2",
    "address": "愛知県名古屋市東区泉1丁目20",
    "lat": 35.174614,
    "lng": 136.913589,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 泉１丁目第１",
    "address": "愛知県名古屋市東区泉1-22",
    "lat": 35.174419,
    "lng": 136.910873,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 高岳",
    "address": "愛知県名古屋市東区葵2丁目8",
    "lat": 35.172211,
    "lng": 136.92627,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ葵3丁目第3",
    "address": "愛知県名古屋市東区葵3丁目3",
    "lat": 35.173008,
    "lng": 136.928619,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ東区役所前",
    "address": "愛知県名古屋市東区葵1丁目18",
    "lat": 35.17223,
    "lng": 136.920288,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ黒川第2",
    "address": "愛知県名古屋市北区黒川本通3丁目5",
    "lat": 35.198742,
    "lng": 136.91095,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ黒川第3",
    "address": "愛知県名古屋市北区黒川本通4丁目8",
    "lat": 35.199684,
    "lng": 136.911682,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 黒川駅南",
    "address": "愛知県名古屋市北区田幡2丁目15",
    "lat": 35.196198,
    "lng": 136.911774,
    "hourlyRate": 375,
    "rates": {
      "weekday": "40分 250円",
      "holiday": "40分 250円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 黒川第2",
    "address": "愛知県名古屋市北区黒川本通5丁目5",
    "lat": 35.202263,
    "lng": 136.911545,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 黒川",
    "address": "愛知県名古屋市北区黒川本通1-36",
    "lat": 35.19635,
    "lng": 136.91333,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間",
    "note": "12時間以内最大800円"
  },
  {
    "name": "NPC24H 黒川",
    "address": "愛知県名古屋市北区黒川本通6丁目3",
    "lat": 35.196011,
    "lng": 136.913162,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ黒川駅前",
    "address": "愛知県名古屋市北区黒川本通2丁目18",
    "lat": 35.19796,
    "lng": 136.911179,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ黒川北",
    "address": "愛知県名古屋市北区黒川本通7丁目5",
    "lat": 35.196011,
    "lng": 136.913162,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ砂田橋第2",
    "address": "愛知県名古屋市東区砂田橋1丁目5",
    "lat": 35.187515,
    "lng": 136.95668,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ砂田橋第3",
    "address": "愛知県名古屋市東区砂田橋2丁目8",
    "lat": 35.190193,
    "lng": 136.957458,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 砂田橋",
    "address": "愛知県名古屋市東区砂田橋3丁目3",
    "lat": 35.189384,
    "lng": 136.960739,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 砂田橋第2",
    "address": "愛知県名古屋市東区砂田橋4丁目5",
    "lat": 35.188587,
    "lng": 136.963593,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 砂田橋",
    "address": "愛知県名古屋市東区砂田橋1丁目20",
    "lat": 35.187515,
    "lng": 136.95668,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 砂田橋",
    "address": "愛知県名古屋市東区砂田橋2丁目20",
    "lat": 35.190193,
    "lng": 136.957458,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ砂田橋南",
    "address": "愛知県名古屋市東区砂田橋2丁目3",
    "lat": 35.190193,
    "lng": 136.957458,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ藤が丘第2",
    "address": "愛知県名古屋市名東区藤が丘1丁目5",
    "lat": 35.184807,
    "lng": 137.01825,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ藤が丘第3",
    "address": "愛知県名古屋市名東区藤が丘2丁目8",
    "lat": 35.184807,
    "lng": 137.01825,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 藤が丘",
    "address": "愛知県名古屋市名東区藤見が丘43",
    "lat": 35.181675,
    "lng": 137.021744,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 400
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 藤が丘第2",
    "address": "愛知県名古屋市名東区藤が丘4丁目5",
    "lat": 35.184807,
    "lng": 137.01825,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 藤が丘駅南",
    "address": "愛知県名古屋市名東区藤が丘142-8",
    "lat": 35.182182,
    "lng": 137.020569,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間",
    "note": "昼間（8:00-20:00）最大1200円"
  },
  {
    "name": "NPC24H 上社第１パーキング",
    "address": "愛知県名古屋市名東区上社2-203",
    "lat": 35.174603,
    "lng": 137.010956,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 藤が丘第3",
    "address": "愛知県名古屋市名東区藤が丘3丁目15",
    "lat": 35.184807,
    "lng": 137.01825,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ藤が丘東",
    "address": "愛知県名古屋市名東区藤が丘6丁目5",
    "lat": 35.184879,
    "lng": 137.019592,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ上社第2",
    "address": "愛知県名古屋市名東区上社1丁目5",
    "lat": 35.173752,
    "lng": 137.005753,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 上社",
    "address": "愛知県名古屋市名東区上社2丁目8",
    "lat": 35.175629,
    "lng": 137.009186,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 上社",
    "address": "愛知県名古屋市名東区上社3丁目3",
    "lat": 35.1739097,
    "lng": 137.0051539,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 上社",
    "address": "愛知県名古屋市名東区上社4丁目5",
    "lat": 35.170399,
    "lng": 137.007553,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ一社第2",
    "address": "愛知県名古屋市名東区一社1丁目5",
    "lat": 35.16663,
    "lng": 136.992416,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 一社",
    "address": "愛知県名古屋市名東区一社2丁目8",
    "lat": 35.16803,
    "lng": 136.99704,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 一社",
    "address": "愛知県名古屋市名東区一社3丁目3",
    "lat": 35.168911,
    "lng": 137.001419,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 一社",
    "address": "愛知県名古屋市名東区一社4丁目5",
    "lat": 35.167046,
    "lng": 137.000977,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ山王第2",
    "address": "愛知県名古屋市南区山王3丁目5",
    "lat": 35.095001,
    "lng": 136.931107,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ山王第3",
    "address": "愛知県名古屋市南区山王4丁目8",
    "lat": 35.095001,
    "lng": 136.931107,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 笠寺観音前",
    "address": "愛知県名古屋市南区笠寺町字上新町82",
    "lat": 35.099258,
    "lng": 136.935623,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 笠寺駅前",
    "address": "愛知県名古屋市南区立脇町1-19-2",
    "lat": 35.097046,
    "lng": 136.926697,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 山王",
    "address": "愛知県名古屋市南区山王5丁目3",
    "lat": 35.095001,
    "lng": 136.931107,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ笠寺第2",
    "address": "愛知県名古屋市南区笠寺町1丁目5",
    "lat": 35.096527,
    "lng": 136.936584,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 笠寺",
    "address": "愛知県名古屋市南区笠寺町2丁目8",
    "lat": 35.096527,
    "lng": 136.936584,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 笠寺",
    "address": "愛知県名古屋市南区笠寺町3丁目3",
    "lat": 35.1115,
    "lng": 136.9035,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 笠寺",
    "address": "愛知県名古屋市南区呼続1丁目5",
    "lat": 35.112923,
    "lng": 136.927887,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅南第3",
    "address": "愛知県名古屋市中村区名駅南2丁目22",
    "lat": 35.1642,
    "lng": 136.889816,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名駅5丁目第3",
    "address": "愛知県名古屋市中村区名駅5丁目15",
    "lat": 35.170433,
    "lng": 136.890594,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 名駅南",
    "address": "愛知県名古屋市中村区名駅南1丁目8",
    "lat": 35.166767,
    "lng": 136.890564,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 名駅4丁目",
    "address": "愛知県名古屋市中村区名駅4丁目20",
    "lat": 35.169827,
    "lng": 136.889114,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 栄3丁目第2",
    "address": "愛知県名古屋市中区栄3丁目14",
    "lat": 35.166428,
    "lng": 136.90657,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ新栄3丁目",
    "address": "愛知県名古屋市中区新栄3丁目5",
    "lat": 35.169461,
    "lng": 136.926397,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 栄南",
    "address": "愛知県名古屋市中区栄3丁目8",
    "lat": 35.167469,
    "lng": 136.905273,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 新栄",
    "address": "愛知県名古屋市中区新栄2丁目15",
    "lat": 35.166634,
    "lng": 136.921066,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 新栄1丁目第2",
    "address": "愛知県名古屋市中区新栄1丁目15",
    "lat": 35.167072,
    "lng": 136.917953,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 金山2丁目第2",
    "address": "愛知県名古屋市中区金山2丁目18",
    "lat": 35.145538,
    "lng": 136.904221,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ金山南第2",
    "address": "愛知県名古屋市熱田区金山町1丁目25",
    "lat": 35.141369,
    "lng": 136.900681,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 金山北",
    "address": "愛知県名古屋市中区金山1丁目12",
    "lat": 35.144794,
    "lng": 136.901627,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 大須1丁目",
    "address": "愛知県名古屋市中区大須1丁目5",
    "lat": 35.1629434,
    "lng": 136.9018514,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ大須4丁目",
    "address": "愛知県名古屋市中区大須4丁目8",
    "lat": 35.15905,
    "lng": 136.908524,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 大須南",
    "address": "愛知県名古屋市中区大須2丁目28",
    "lat": 35.158096,
    "lng": 136.900223,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 錦2丁目",
    "address": "愛知県名古屋市中区錦2丁目15",
    "lat": 35.169815,
    "lng": 136.899124,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ錦1丁目",
    "address": "愛知県名古屋市中区錦1丁目8",
    "lat": 35.170372,
    "lng": 136.893707,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 伏見",
    "address": "愛知県名古屋市中区錦1丁目20",
    "lat": 35.168739,
    "lng": 136.896866,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ鶴舞公園前",
    "address": "愛知県名古屋市中区鶴舞4丁目18",
    "lat": 35.16861,
    "lng": 136.910278,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ覚王山通第4",
    "address": "愛知県名古屋市千種区覚王山通7丁目5",
    "lat": 35.167645,
    "lng": 136.946106,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 本山第2",
    "address": "愛知県名古屋市千種区本山5丁目2",
    "lat": 35.166756,
    "lng": 136.965775,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ八事第4",
    "address": "愛知県名古屋市昭和区八事本町6丁目3",
    "lat": 35.140572,
    "lng": 136.963211,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋城北",
    "address": "愛知県名古屋市北区名城4丁目2",
    "lat": 35.189117,
    "lng": 136.901443,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ花の木",
    "address": "愛知県名古屋市西区花の木3丁目5",
    "lat": 35.190422,
    "lng": 136.887207,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ黒川南",
    "address": "愛知県名古屋市北区黒川本通8丁目3",
    "lat": 35.196011,
    "lng": 136.913162,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋城西１丁目",
    "address": "愛知県名古屋市西区城西１丁目１０－１１",
    "lat": 35.1850429,
    "lng": 136.894096,
    "hourlyRate": 528,
    "rates": {
      "weekday": "25分 220円",
      "holiday": "25分 220円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 300
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋城西第７",
    "address": "愛知県名古屋市西区城西２丁目２０－２６",
    "lat": 35.186684,
    "lng": 136.893158,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ城西",
    "address": "愛知県名古屋市西区城西２丁目１９",
    "lat": 35.186726,
    "lng": 136.893845,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ幅下１丁目",
    "address": "愛知県名古屋市西区幅下１丁目１０",
    "lat": 35.182335,
    "lng": 136.891418,
    "hourlyRate": 250,
    "rates": {
      "weekday": "60分 250円",
      "holiday": "60分 250円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ名城２丁目",
    "address": "愛知県名古屋市西区名城２丁目５",
    "lat": 35.172565,
    "lng": 136.881195,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 栄１丁目",
    "address": "愛知県名古屋市中区栄１丁目１０－８",
    "lat": 35.166752,
    "lng": 136.89595,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 2000
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 栄第２８",
    "address": "愛知県名古屋市中区栄１丁目２３－７",
    "lat": 35.164989,
    "lng": 136.89743,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 1700,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 栄Ｍ",
    "address": "愛知県名古屋市中区栄４丁目１６",
    "lat": 35.165929,
    "lng": 136.910029,
    "hourlyRate": 540,
    "rates": {
      "weekday": "30分 270円",
      "holiday": "30分 270円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1700
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 栄東",
    "address": "愛知県名古屋市中区栄４丁目３",
    "lat": 35.168224,
    "lng": 136.91124,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1400
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋丸の内第３２",
    "address": "愛知県名古屋市中区丸の内３丁目７－１６",
    "lat": 35.176064,
    "lng": 136.905884,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 1500
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 三蔵通パーキング",
    "address": "愛知県名古屋市中区栄２丁目１２－３３",
    "lat": 35.165977,
    "lng": 136.900208,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 1700
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 栄三丁目パーキング",
    "address": "愛知県名古屋市中区栄３丁目７－２０",
    "lat": 35.166943,
    "lng": 136.906601,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 1600
    },
    "hours": "7時〜23時"
  },
  {
    "name": "タイムズＡＯＩ名古屋病院",
    "address": "愛知県名古屋市東区泉２丁目２",
    "lat": 35.178394,
    "lng": 136.915527,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ徳川１丁目",
    "address": "愛知県名古屋市東区徳川１丁目１０",
    "lat": 35.181313,
    "lng": 136.923416,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 750,
      "holiday": 750
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ筒井２丁目",
    "address": "愛知県名古屋市東区筒井２丁目１２",
    "lat": 35.1744,
    "lng": 136.925369,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 990,
      "holiday": 990
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ新出来２丁目",
    "address": "愛知県名古屋市東区新出来２丁目３",
    "lat": 35.181454,
    "lng": 136.931824,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 550
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋丸の内１丁目",
    "address": "愛知県名古屋市中区丸の内１丁目１５",
    "lat": 35.173294,
    "lng": 136.89444,
    "hourlyRate": 1800,
    "rates": {
      "weekday": "10分 300円",
      "holiday": "10分 300円"
    },
    "maxRate": {
      "weekday": 2700,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 覚王山駅前第５",
    "address": "愛知県名古屋市千種区西山元町２丁目５４",
    "lat": 35.168591,
    "lng": 136.951797,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 300
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 覚王山駅前第６",
    "address": "愛知県名古屋市千種区月見坂町２丁目４－２",
    "lat": 35.167244,
    "lng": 136.955994,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 400
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 千種２丁目",
    "address": "愛知県名古屋市千種区千種２丁目１２－１４",
    "lat": 35.160839,
    "lng": 136.928665,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 覚王山第３",
    "address": "愛知県名古屋市千種区覚王山通４丁目",
    "lat": 35.167645,
    "lng": 136.946106,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ高見",
    "address": "愛知県名古屋市千種区高見２丁目１０",
    "lat": 35.169544,
    "lng": 136.944519,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ鶴舞４丁目",
    "address": "愛知県名古屋市昭和区鶴舞４丁目３４",
    "lat": 35.151356,
    "lng": 136.924561,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 昭和区役所北",
    "address": "愛知県名古屋市昭和区鶴羽町３丁目１",
    "lat": 35.151707,
    "lng": 136.934784,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 鶴舞駅前",
    "address": "愛知県名古屋市中区千代田５丁目２３",
    "lat": 35.156792,
    "lng": 136.917877,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋千代田５丁目",
    "address": "愛知県名古屋市中区千代田５丁目２４",
    "lat": 35.1576648,
    "lng": 136.9183403,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ山脇町",
    "address": "愛知県名古屋市昭和区山脇町６丁目",
    "lat": 35.153587,
    "lng": 136.924576,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ狭間町",
    "address": "愛知県名古屋市昭和区狭間町１丁目",
    "lat": 35.155308,
    "lng": 136.924911,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 千種２丁目第３",
    "address": "愛知県名古屋市千種区千種２丁目１０－１２",
    "lat": 35.161625,
    "lng": 136.929932,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ星が丘駅前第５",
    "address": "愛知県名古屋市千種区星が丘元町８",
    "lat": 35.159512,
    "lng": 136.981201,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 1100
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ本山第４",
    "address": "愛知県名古屋市千種区本山２丁目",
    "lat": 35.166756,
    "lng": 136.965775,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 新守山駅前",
    "address": "愛知県名古屋市守山区新守町７２",
    "lat": 35.207748,
    "lng": 136.951828,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 大幸",
    "address": "愛知県名古屋市東区大幸２丁目３",
    "lat": 35.191265,
    "lng": 136.948578,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 八事富士見",
    "address": "愛知県名古屋市昭和区八事富士見１００１番",
    "lat": 35.143299,
    "lng": 136.969635,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 八事石坂第２",
    "address": "愛知県名古屋市天白区八事石坂１１３",
    "lat": 35.136082,
    "lng": 136.964249,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 元八事４丁目",
    "address": "愛知県名古屋市天白区元八事４丁目９５",
    "lat": 35.13039,
    "lng": 136.97731,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 黒川駅北",
    "address": "愛知県名古屋市北区敷島町３９番２",
    "lat": 35.197964,
    "lng": 136.909637,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ清水１丁目",
    "address": "愛知県名古屋市北区清水１丁目２２",
    "lat": 35.186424,
    "lng": 136.908875,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 900
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋田幡２丁目第３",
    "address": "愛知県名古屋市北区田幡２丁目",
    "lat": 35.196277,
    "lng": 136.9096492,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅第４０",
    "address": "愛知県名古屋市中村区名駅２丁目３３－５",
    "lat": 35.175255,
    "lng": 136.88266,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 1300
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅西第２９",
    "address": "愛知県名古屋市中村区則武１丁目７－１０",
    "lat": 35.172504,
    "lng": 136.877991,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 1800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名駅南４丁目",
    "address": "愛知県名古屋市中村区名駅南４丁目３－４",
    "lat": 35.162116,
    "lng": 136.8872986,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 名古屋一番３丁目",
    "address": "愛知県名古屋市中村区名駅５丁目",
    "lat": 35.1700525,
    "lng": 136.8910399,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 太閤３丁目第３",
    "address": "愛知県名古屋市中村区太閤３丁目１２",
    "lat": 35.165642,
    "lng": 136.879272,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1000
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 今池南",
    "address": "愛知県名古屋市千種区今池南２８－１１",
    "lat": 35.1631021,
    "lng": 136.9380123,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 600
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 千種駅南",
    "address": "愛知県名古屋市千種区今池１丁目２",
    "lat": 35.169506,
    "lng": 136.931625,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 1200
    },
    "hours": "24時間"
  },
  {
    "name": "タイムズ今池第３",
    "address": "愛知県名古屋市千種区今池１丁目４",
    "lat": 35.169243,
    "lng": 136.932526,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 今池４丁目",
    "address": "愛知県名古屋市千種区今池４丁目１５",
    "lat": 35.1692292,
    "lng": 136.9401952,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 700
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 今池２丁目",
    "address": "愛知県名古屋市千種区今池２丁目８",
    "lat": 35.167081,
    "lng": 136.9317051,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 大須３丁目第６",
    "address": "愛知県名古屋市中区大須３丁目１１－２",
    "lat": 35.160908,
    "lng": 136.90451,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  },
  {
    "name": "三井のリパーク 大須３丁目第２",
    "address": "愛知県名古屋市中区大須３丁目１７",
    "lat": 35.160175,
    "lng": 136.90387,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 400
    },
    "hours": "24時間"
  },
  {
    "name": "名鉄協商パーキング 大須第５",
    "address": "愛知県名古屋市中区大須２丁目２０",
    "lat": 35.159752,
    "lng": 136.900299,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 1700
    },
    "hours": "24時間"
  },
  {
    "name": "NPC24H 大須",
    "address": "愛知県名古屋市中区大須２丁目１５",
    "lat": 35.160255,
    "lng": 136.901505,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
    },
    "hours": "24時間"
  }
];
