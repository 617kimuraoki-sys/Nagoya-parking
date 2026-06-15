// 駐車場データ
// hourlyRate: 並び替え用に正規化した平日基準の1時間料金（円/h）
// rates.weekday / rates.holiday: 表示用の料金テキスト
// maxRate.weekday / maxRate.holiday: 最大料金（円）。「なし」は null
// capacity: 収容台数（台）
// payment.cash: 現金払い可否 / payment.credit: クレジットカード可否 / payment.qr: QRコード決済可否
// placeFid: Google Maps の FID（"0x...:0x..." 形式。ピンポイントURL用、PC・モバイル共通）
// placeCid: Google Maps の Place CID（10進数。フォールバック用）
// note: 補足（時間帯別料金など）
// source: 料金確認元の公式サイトURL（必須・メンテナンス時に再確認するURL）
const parkingData = [
  {
    "name": "タイムズ名駅４丁目第７",
    "address": "愛知県名古屋市中村区名駅4-16",
    "lat": 35.170673,
    "lng": 136.888077,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円（09:00-04:00）/ 40分 100円（04:00-09:00）",
      "holiday": "15分 300円（09:00-04:00）/ 40分 100円（04:00-09:00）"
    },
    "maxRate": { "weekday": 1800, "holiday": 1800 },
    "hours": "24時間",
    "capacity": 23,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0063316/"
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
    "maxRate": { "weekday": 2200, "holiday": 1500 },
    "hours": "24時間",
    "capacity": 13,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日最大は3時間2200円・休日最大は3時間1500円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0073894/"
  },
  {
    "name": "タイムズ中村町２丁目",
    "address": "愛知県名古屋市中村区中村町2-43",
    "lat": 35.173031,
    "lng": 136.859955,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0049812/"
  },
  {
    "name": "タイムズ名駅南第１３",
    "address": "愛知県名古屋市中村区名駅南1-14",
    "lat": 35.167221,
    "lng": 136.888565,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": { "weekday": 1300, "holiday": 900 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1300円・夜600円 / 休日昼(08-18時)最大900円・夜600円",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0029052/"
  },
  {
    "name": "タイムズ名駅南１丁目第３",
    "address": "愛知県名古屋市中村区名駅南1-5",
    "lat": 35.167255,
    "lng": 136.890518,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": { "weekday": 1400, "holiday": 900 },
    "hours": "24時間",
    "capacity": 14,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-17時)最大1400円・夜600円 / 休日昼(07-17時)最大900円・夜600円",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0042007/"
  },
  {
    "name": "タイムズ名駅南１丁目",
    "address": "愛知県名古屋市中村区名駅南1-23",
    "lat": 35.166649,
    "lng": 136.886078,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": { "weekday": 1540, "holiday": 1540 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-19時)最大1540円・夜(19-08時)最大440円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0038297/"
  },
  {
    "name": "タイムズ名駅３丁目",
    "address": "愛知県名古屋市中村区名駅3-24",
    "lat": 35.172428,
    "lng": 136.886429,
    "hourlyRate": 3000,
    "rates": {
      "weekday": "10分 500円（08:00-19:00）/ 30分 300円（19:00-08:00）",
      "holiday": "10分 500円（08:00-19:00）/ 30分 300円（19:00-08:00）"
    },
    "maxRate": { "weekday": 1100, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(19-08時)のみ最大1100円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0010180/"
  },
  {
    "name": "タイムズ名駅２丁目第４",
    "address": "愛知県名古屋市中村区名駅2-42",
    "lat": 35.174423,
    "lng": 136.884125,
    "hourlyRate": 1500,
    "rates": {
      "weekday": "10分 250円（08:00-19:00）/ 30分 150円（19:00-08:00）",
      "holiday": "10分 250円（08:00-19:00）/ 30分 150円（19:00-08:00）"
    },
    "maxRate": { "weekday": 2000, "holiday": 2000 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後4時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0041830/"
  },
  {
    "name": "タイムズ名駅２丁目第５",
    "address": "愛知県名古屋市中村区名駅2-41",
    "lat": 35.174656,
    "lng": 136.884842,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": { "weekday": 1400, "holiday": 500 },
    "hours": "24時間",
    "capacity": 19,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1400円 / 夜(18-08時)最大500円",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0045100/"
  },
  {
    "name": "タイムズ名駅５丁目",
    "address": "愛知県名古屋市中村区名駅5-7",
    "lat": 35.171356,
    "lng": 136.891495,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": { "weekday": 1900, "holiday": 800 },
    "hours": "24時間",
    "capacity": 14,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-19時)最大1900円・夜300円 / 休日昼(07-19時)最大800円・夜300円",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0045776/"
  },
  {
    "name": "タイムズ名駅５丁目第２",
    "address": "愛知県名古屋市中村区名駅5-25",
    "lat": 35.168781,
    "lng": 136.891632,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0048695/"
  },
  {
    "name": "タイムズ太閤第２",
    "address": "愛知県名古屋市中村区太閤1-19",
    "lat": 35.165871,
    "lng": 136.881287,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円（08:00-18:00）/ 30分 110円（18:00-08:00）",
      "holiday": "20分 220円（08:00-18:00）/ 30分 110円（18:00-08:00）"
    },
    "maxRate": { "weekday": 1320, "holiday": 1320 },
    "hours": "24時間",
    "capacity": 18,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大1320円・夜(18-08時)最大330円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0033015/"
  },
  {
    "name": "タイムズ太閤１丁目",
    "address": "愛知県名古屋市中村区太閤1-3",
    "lat": 35.166325,
    "lng": 136.882599,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": { "weekday": 1300, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "24時間最大1300円・夜(18-08時)最大400円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0022809/"
  },
  {
    "name": "タイムズウエルシア太閤",
    "address": "愛知県名古屋市中村区太閤1-20",
    "lat": 35.166718,
    "lng": 136.880569,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円（08:00-18:00）/ 30分 110円（18:00-08:00）",
      "holiday": "30分 220円（08:00-18:00）/ 30分 110円（18:00-08:00）"
    },
    "maxRate": { "weekday": 1210, "holiday": 1210 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大1210円・夜(18-08時)最大330円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0055579/"
  },
  {
    "name": "タイムズ椿町第２",
    "address": "愛知県名古屋市中村区椿町22",
    "lat": 35.167656,
    "lng": 136.879028,
    "hourlyRate": 1050,
    "rates": {
      "weekday": "20分 350円（08:00-18:00）/ 60分 300円（18:00-08:00）",
      "holiday": "20分 350円（08:00-18:00）/ 60分 300円（18:00-08:00）"
    },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 17,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大1600円・夜(18-08時)最大600円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0002575/"
  },
  {
    "name": "タイムズ椿町第１４",
    "address": "愛知県名古屋市中村区椿町14",
    "lat": 35.168774,
    "lng": 136.880478,
    "hourlyRate": 1050,
    "rates": {
      "weekday": "20分 350円",
      "holiday": "20分 350円"
    },
    "maxRate": { "weekday": 1500, "holiday": 1500 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後5時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0077065/"
  },
  {
    "name": "タイムズ烏森町５丁目",
    "address": "愛知県名古屋市中村区烏森町5-65",
    "lat": 35.156685,
    "lng": 136.854736,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": { "weekday": 550, "holiday": 550 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0029694/"
  },
  {
    "name": "タイムズ中村公園第３",
    "address": "愛知県名古屋市中村区東宿町2-87",
    "lat": 35.173965,
    "lng": 136.852493,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(18-08時)最大110円のみ設定（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0029863/"
  },
  {
    "name": "タイムズ岩塚第２",
    "address": "愛知県名古屋市中村区沖田町388",
    "lat": 35.15847,
    "lng": 136.854721,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "キャッシュレス専用 / 夜間(17-08時)最大300円",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0022712/"
  },
  {
    "name": "タイムズ本陣駅前第２",
    "address": "愛知県名古屋市中村区鳥居通2-8",
    "lat": 35.175941,
    "lng": 136.866455,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円（08:00-18:00）/ 30分 110円（18:00-08:00）",
      "holiday": "60分 220円（08:00-18:00）/ 30分 110円（18:00-08:00）"
    },
    "maxRate": { "weekday": 660, "holiday": 660 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "24時間最大660円・夜(18-08時)最大220円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0020908/"
  },
  {
    "name": "タイムズ本陣駅前",
    "address": "愛知県名古屋市中村区鳥居通2-32",
    "lat": 35.176643,
    "lng": 136.866074,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円（09:00-15:00）/ 60分 220円（15:00-09:00）",
      "holiday": "60分 220円"
    },
    "maxRate": { "weekday": 1650, "holiday": 990 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日最大1650円(当日24時迄) / 休日最大990円(当日24時迄)",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0020223/"
  },
  {
    "name": "タイムズ中村十王町",
    "address": "愛知県名古屋市中村区十王町3",
    "lat": 35.179531,
    "lng": 136.868896,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(19-08時)最大300円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0047820/"
  },
  {
    "name": "タイムズ黄金通",
    "address": "愛知県名古屋市中村区上米野町3-16",
    "lat": 35.166477,
    "lng": 136.872818,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0022322/"
  },
  {
    "name": "タイムズ岩塚",
    "address": "愛知県名古屋市中村区畑江通9-20",
    "lat": 35.157936,
    "lng": 136.855621,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円（08:00-18:00）/ 60分 110円（18:00-08:00）",
      "holiday": "30分 220円（08:00-18:00）/ 60分 110円（18:00-08:00）"
    },
    "maxRate": { "weekday": 660, "holiday": 660 },
    "hours": "24時間",
    "capacity": 15,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大660円・夜(18-08時)最大220円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0016422/"
  },
  {
    "name": "タイムズ名駅南第１２",
    "address": "愛知県名古屋市中村区名駅南1-13",
    "lat": 35.166641,
    "lng": 136.888657,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": { "weekday": 1320, "holiday": 550 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-19時)最大1320円 / 夜(19-08時)最大550円",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0027663/"
  },
  {
    "name": "タイムズ則武第６",
    "address": "愛知県名古屋市中村区則武1-4",
    "lat": 35.172829,
    "lng": 136.878693,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": { "weekday": 1400, "holiday": 1400 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後5時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0030772/"
  },
  {
    "name": "タイムズ中村松原町２丁目",
    "address": "愛知県名古屋市中村区松原町2-1",
    "lat": 35.176277,
    "lng": 136.872131,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": { "weekday": 660, "holiday": 660 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0049291/"
  },
  {
    "name": "タイムズ名駅南第６",
    "address": "愛知県名古屋市中村区名駅南2-12",
    "lat": 35.164967,
    "lng": 136.886978,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円（08:00-18:00）/ 60分 110円（18:00-08:00）",
      "holiday": "30分 300円（08:00-18:00）/ 60分 110円（18:00-08:00）"
    },
    "maxRate": { "weekday": 1300, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "24時間最大1300円・夜(18-08時)最大300円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0019010/"
  },
  {
    "name": "タイムズ岩塚駅東",
    "address": "愛知県名古屋市中村区畑江通9",
    "lat": 35.157417,
    "lng": 136.855682,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": { "weekday": 400, "holiday": 400 },
    "hours": "24時間",
    "capacity": 24,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(18-08時)最大200円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0085990/"
  },
  {
    "name": "タイムズ名駅南第１４",
    "address": "愛知県名古屋市中村区名駅南3-7",
    "lat": 35.161091,
    "lng": 136.890594,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0037722/"
  },
  {
    "name": "タイムズ栄３丁目第１１",
    "address": "愛知県名古屋市中区栄3-12",
    "lat": 35.166229,
    "lng": 136.904175,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 1500, "holiday": 1500 },
    "hours": "24時間",
    "capacity": 21,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後8時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0071828/"
  },
  {
    "name": "タイムズ栄１丁目第５",
    "address": "愛知県名古屋市中区栄1-24",
    "lat": 35.163315,
    "lng": 136.897446,
    "hourlyRate": 880,
    "rates": { "weekday": "15分 220円", "holiday": "15分 220円" },
    "maxRate": { "weekday": 1300, "holiday": 900 },
    "hours": "24時間",
    "capacity": 16,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1300円・夜500円 / 休日昼(08-18時)最大900円・夜500円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0051004/"
  },
  {
    "name": "タイムズ栄３丁目第４",
    "address": "愛知県名古屋市中区栄3-25",
    "lat": 35.164036,
    "lng": 136.904678,
    "hourlyRate": 900,
    "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 1300, "holiday": 1900 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1300円・夜700円 / 休日昼(08-18時)最大1900円・夜700円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0040660/"
  },
  {
    "name": "タイムズ栄４丁目第６",
    "address": "愛知県名古屋市中区栄4-11",
    "lat": 35.167145,
    "lng": 136.912186,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後5時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0062181/"
  },
  {
    "name": "タイムズ栄３丁目第６",
    "address": "愛知県名古屋市中区栄3-25",
    "lat": 35.164036,
    "lng": 136.904678,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後5時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0049819/"
  },
  {
    "name": "タイムズ栄４丁目",
    "address": "愛知県名古屋市中区栄4-5",
    "lat": 35.168915,
    "lng": 136.912384,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 1700, "holiday": 1700 },
    "hours": "24時間",
    "capacity": 19,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(06-18時)最大1700円・夜(18-06時)最大1400円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0026956/"
  },
  {
    "name": "タイムズ栄４丁目第５",
    "address": "愛知県名古屋市中区栄4-2",
    "lat": 35.168861,
    "lng": 136.91127,
    "hourlyRate": 1000,
    "rates": { "weekday": "15分 250円", "holiday": "15分 250円" },
    "maxRate": { "weekday": 1900, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(06-18時)最大1900円・夜1100円 / 休日昼(06-18時)最大1200円・夜1100円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0059272/"
  },
  {
    "name": "タイムズ栄第４６",
    "address": "愛知県名古屋市中区栄3-28",
    "lat": 35.163837,
    "lng": 136.906403,
    "hourlyRate": 660,
    "rates": { "weekday": "20分 220円", "holiday": "20分 220円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後3時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0031052/"
  },
  {
    "name": "タイムズ栄第２９",
    "address": "愛知県名古屋市中区栄5-4",
    "lat": 35.165379,
    "lng": 136.912323,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1100, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大1100円・夜(18-08時)最大900円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0010067/"
  },
  {
    "name": "タイムズ栄１丁目第８",
    "address": "愛知県名古屋市中区栄1-19",
    "lat": 35.16412,
    "lng": 136.892365,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 18,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "24時間最大1300円・夜(18-08時)最大700円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0079243/"
  },
  {
    "name": "タイムズ白川公園",
    "address": "愛知県名古屋市中区栄2-17",
    "lat": 35.164967,
    "lng": 136.899704,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 1500, "holiday": 2800 },
    "hours": "24時間",
    "capacity": 58,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日当日最大1500円・休日当日最大2800円（当日24時まで）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0075616/"
  },
  {
    "name": "タイムズ東洋パーキング",
    "address": "愛知県名古屋市中区栄2-7",
    "lat": 35.166874,
    "lng": 136.900589,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 2000, "holiday": 2000 },
    "hours": "24時間",
    "capacity": 92,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "24時間最大2000円・夜(20-07時)最大500円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0083044/"
  },
  {
    "name": "タイムズ栄５丁目",
    "address": "愛知県名古屋市中区栄5-7",
    "lat": 35.165497,
    "lng": 136.914612,
    "hourlyRate": 440,
    "rates": { "weekday": "30分 220円", "holiday": "30分 220円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-20時)最大1000円・夜(20-08時)最大500円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0039247/"
  },
  {
    "name": "タイムズ栄１丁目第４",
    "address": "愛知県名古屋市中区栄1-31",
    "lat": 35.163334,
    "lng": 136.89296,
    "hourlyRate": 500,
    "rates": { "weekday": "30分 250円", "holiday": "30分 250円" },
    "maxRate": { "weekday": 1400, "holiday": 900 },
    "hours": "24時間",
    "capacity": 24,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-19時)最大1400円・夜400円 / 休日昼(08-19時)最大900円・夜400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0043889/"
  },
  {
    "name": "タイムズ栄１丁目第７",
    "address": "愛知県名古屋市中区栄1-18",
    "lat": 35.165039,
    "lng": 136.893127,
    "hourlyRate": 500,
    "rates": { "weekday": "30分 250円", "holiday": "30分 250円" },
    "maxRate": { "weekday": 1300, "holiday": 900 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1300円・夜700円 / 休日昼(08-18時)最大900円・夜700円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0071388/"
  },
  {
    "name": "タイムズ栄第４２",
    "address": "愛知県名古屋市中区栄1-9",
    "lat": 35.16621,
    "lng": 136.894379,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 1800, "holiday": 1800 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-20時)最大1800円・夜(20-08時)最大900円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0026019/"
  },
  {
    "name": "タイムズ錦２丁目",
    "address": "愛知県名古屋市中区錦2-8",
    "lat": 35.171577,
    "lng": 136.897766,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 2500, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 22,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-20時)最大2500円・夜600円 / 休日昼(07-20時)最大1100円・夜600円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0020551/"
  },
  {
    "name": "タイムズ錦２丁目第１１",
    "address": "愛知県名古屋市中区錦2-11",
    "lat": 35.170792,
    "lng": 136.900192,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 2400, "holiday": 2400 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(07-18時)最大2400円・夜(18-07時)最大1200円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0064693/"
  },
  {
    "name": "タイムズ錦３丁目第２",
    "address": "愛知県名古屋市中区錦3-14",
    "lat": 35.171181,
    "lng": 136.906067,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(18-07時)最大2200円（繰り返し適用）・昼間は最大料金なし",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0030560/"
  },
  {
    "name": "タイムズ錦２丁目第７",
    "address": "愛知県名古屋市中区錦2-19",
    "lat": 35.168953,
    "lng": 136.900375,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 2300, "holiday": 2300 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間2300円・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0042494/"
  },
  {
    "name": "タイムズ錦２丁目第１２",
    "address": "愛知県名古屋市中区錦2-11",
    "lat": 35.170792,
    "lng": 136.900192,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 1800, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 20,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-18時)最大1800円・夜800円 / 休日昼(07-18時)最大1200円・夜800円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0081145/"
  },
  {
    "name": "タイムズ錦１丁目第３",
    "address": "愛知県名古屋市中区錦1-4",
    "lat": 35.172462,
    "lng": 136.896469,
    "hourlyRate": 2700,
    "rates": { "weekday": "10分 450円", "holiday": "10分 450円" },
    "maxRate": { "weekday": 3200, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 23,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-20時)最大3200円・夜500円 / 休日昼(08-20時)最大1000円・夜500円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0076039/"
  },
  {
    "name": "タイムズ錦３丁目第５",
    "address": "愛知県名古屋市中区錦3-10",
    "lat": 35.171886,
    "lng": 136.902435,
    "hourlyRate": 900,
    "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 2000, "holiday": 2000 },
    "hours": "24時間",
    "capacity": 14,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後24時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0047783/"
  },
  {
    "name": "タイムズ錦第７",
    "address": "愛知県名古屋市中区錦1-6",
    "lat": 35.171425,
    "lng": 136.895294,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": null, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 13,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日は昼間最大なし・夜(20-08時)最大400円 / 休日昼(08-20時)最大1200円・夜400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0027712/"
  },
  {
    "name": "タイムズ錦３丁目第３",
    "address": "愛知県名古屋市中区錦3-7",
    "lat": 35.172115,
    "lng": 136.905975,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(18-07時)最大2200円（繰り返し適用）・昼間は最大料金なし",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0044766/"
  },
  {
    "name": "タイムズ錦伊勢町通",
    "address": "愛知県名古屋市中区錦3-3",
    "lat": 35.173023,
    "lng": 136.904724,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大1600円・夜(18-08時)最大2400円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0066100/"
  },
  {
    "name": "タイムズ丸の内３丁目",
    "address": "愛知県名古屋市中区丸の内3-17",
    "lat": 35.175068,
    "lng": 136.905655,
    "hourlyRate": 1250,
    "rates": { "weekday": "12分 250円（07:00-22:00）/ 60分 110円（22:00-07:00）", "holiday": "15分 250円" },
    "maxRate": { "weekday": null, "holiday": 1500 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日は昼間最大なし・夜(22-07時)最大400円 / 休日昼(07-22時)最大1500円・夜400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0028528/"
  },
  {
    "name": "タイムズ丸の内１丁目",
    "address": "愛知県名古屋市中区丸の内1-3",
    "lat": 35.177177,
    "lng": 136.895859,
    "hourlyRate": 990,
    "rates": { "weekday": "20分 330円（06:00-14:00）/ 30分 330円（14:00-22:00）/ 60分 110円（22:00-06:00）", "holiday": "20分 330円（06:00-14:00）/ 30分 330円（14:00-22:00）/ 60分 110円（22:00-06:00）" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 42,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜(22-06時)最大330円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0032628/"
  },
  {
    "name": "タイムズ丸の内２丁目第６",
    "address": "愛知県名古屋市中区丸の内2-2",
    "lat": 35.177032,
    "lng": 136.898376,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 2000, "holiday": 800 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-19時)最大2000円・夜500円 / 休日昼(08-19時)最大800円・夜500円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0027073/"
  },
  {
    "name": "タイムズ丸の内２丁目第７",
    "address": "愛知県名古屋市中区丸の内2-15",
    "lat": 35.174603,
    "lng": 136.898621,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": null, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日は昼間最大なし・夜(18-07時)最大700円 / 休日昼(07-18時)最大1000円・夜700円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0047453/"
  },
  {
    "name": "タイムズ大須３丁目第２",
    "address": "愛知県名古屋市中区大須3-1",
    "lat": 35.161594,
    "lng": 136.902939,
    "hourlyRate": 660,
    "rates": { "weekday": "20分 220円", "holiday": "20分 220円" },
    "maxRate": { "weekday": 1000, "holiday": 2000 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-18時)最大1000円・夜400円 / 休日昼最大2000円・夜400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0024586/"
  },
  {
    "name": "タイムズ大須赤門通",
    "address": "愛知県名古屋市中区大須3-30",
    "lat": 35.159481,
    "lng": 136.905502,
    "hourlyRate": 440,
    "rates": { "weekday": "30分 220円", "holiday": "30分 330円" },
    "maxRate": { "weekday": 1000, "holiday": 1800 },
    "hours": "24時間",
    "capacity": 250,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0049418/"
  },
  {
    "name": "タイムズ大須第４",
    "address": "愛知県名古屋市中区大須2-13",
    "lat": 35.160313,
    "lng": 136.900375,
    "hourlyRate": 220,
    "rates": { "weekday": "60分 220円", "holiday": "20分 220円" },
    "maxRate": { "weekday": 800, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-18時)60分220円・最大800円(5h繰り返し) / 休日昼20分220円・最大1100円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002559/"
  },
  {
    "name": "タイムズ大須２丁目第５",
    "address": "愛知県名古屋市中区大須2-9",
    "lat": 35.161026,
    "lng": 136.899551,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(20:00-08:00)最大400円のみ",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0043474/"
  },
  {
    "name": "タイムズ大須２丁目第９",
    "address": "愛知県名古屋市中区大須2-30",
    "lat": 35.158539,
    "lng": 136.901108,
    "hourlyRate": 500,
    "rates": { "weekday": "30分 250円", "holiday": "15分 250円" },
    "maxRate": { "weekday": 1100, "holiday": 2200 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1100円・夜400円 / 休日昼最大2200円・夜400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0073176/"
  },
  {
    "name": "タイムズ大須２丁目第４",
    "address": "愛知県名古屋市中区大須2-24",
    "lat": 35.159355,
    "lng": 136.898895,
    "hourlyRate": 600,
    "rates": { "weekday": "30分 300円", "holiday": "30分 300円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "夜間(20:00-08:00)最大500円のみ",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0038525/"
  },
  {
    "name": "タイムズ大須第７",
    "address": "愛知県名古屋市中区大須3-8",
    "lat": 35.161354,
    "lng": 136.906113,
    "hourlyRate": 600,
    "rates": { "weekday": "30分 300円", "holiday": "30分 300円" },
    "maxRate": { "weekday": 1300, "holiday": 1500 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-19時)最大1300円・夜500円 / 休日昼最大1500円・夜500円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002612/"
  },
  {
    "name": "タイムズ大須１丁目第３",
    "address": "愛知県名古屋市中区大須1-16",
    "lat": 35.160431,
    "lng": 136.892899,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 14,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後24時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0069907/"
  },
  {
    "name": "タイムズ新栄第１３",
    "address": "愛知県名古屋市中区新栄2-9",
    "lat": 35.168938,
    "lng": 136.921967,
    "hourlyRate": 440,
    "rates": { "weekday": "30分 220円", "holiday": "30分 220円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "",
    "note": "昼間(08-20時)最大1000円・夜間最大300円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0024867/"
  },
  {
    "name": "タイムズ新栄２丁目第２",
    "address": "愛知県名古屋市中区新栄2-45",
    "lat": 35.161827,
    "lng": 136.921799,
    "hourlyRate": 500,
    "rates": { "weekday": "30分 250円", "holiday": "30分 250円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼間(08-18時)最大900円・夜間最大500円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0063451/"
  },
  {
    "name": "タイムズ新栄第１１",
    "address": "愛知県名古屋市中区新栄1-10",
    "lat": 35.167572,
    "lng": 136.916443,
    "hourlyRate": 660,
    "rates": { "weekday": "20分 220円", "holiday": "20分 220円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 18,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大1300円(24h) / 昼(06-18時)最大1100円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0017051/"
  },
  {
    "name": "タイムズ新栄１丁目第５",
    "address": "愛知県名古屋市中区新栄1-48",
    "lat": 35.161747,
    "lng": 136.918488,
    "hourlyRate": 330,
    "rates": { "weekday": "40分 220円", "holiday": "40分 220円" },
    "maxRate": { "weekday": 990, "holiday": 990 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)最大990円・夜最大440円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0044968/"
  },
  {
    "name": "タイムズ新栄１丁目第６",
    "address": "愛知県名古屋市中区新栄1-30",
    "lat": 35.164307,
    "lng": 136.916824,
    "hourlyRate": 500,
    "rates": { "weekday": "30分 250円", "holiday": "30分 250円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0048873/"
  },
  {
    "name": "タイムズ新栄３丁目",
    "address": "愛知県名古屋市中区新栄3-3",
    "lat": 35.16938,
    "lng": 136.92662,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 1100, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後24時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0070343/"
  },
  {
    "name": "タイムズ新栄第５",
    "address": "愛知県名古屋市中区新栄1-22",
    "lat": 35.165447,
    "lng": 136.917816,
    "hourlyRate": 330,
    "rates": { "weekday": "20分 110円", "holiday": "20分 110円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後24時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002557/"
  },
  {
    "name": "タイムズ橘２丁目",
    "address": "愛知県名古屋市中区橘2-2",
    "lat": 35.153225,
    "lng": 136.899979,
    "hourlyRate": 220,
    "rates": { "weekday": "60分 220円", "holiday": "60分 220円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 13,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-20時)60分220円・夜60分110円 / 最大1000円(24h)/夜最大400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0039956/"
  },
  {
    "name": "タイムズ正木３丁目",
    "address": "愛知県名古屋市中区正木3-13",
    "lat": 35.144878,
    "lng": 136.898743,
    "hourlyRate": 330,
    "rates": { "weekday": "20分 110円", "holiday": "20分 110円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-19時)最大900円・夜最大400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0029805/"
  },
  {
    "name": "タイムズアオキ上前津駅前店",
    "address": "愛知県名古屋市中区上前津1-3",
    "lat": 35.157192,
    "lng": 136.904114,
    "hourlyRate": 330,
    "rates": { "weekday": "20分 110円", "holiday": "20分 220円" },
    "maxRate": { "weekday": 1320, "holiday": null },
    "hours": "24時間",
    "capacity": 19,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-21時)20分110円・最大1320円(24時まで) / 休日昼20分220円・最大なし",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0031856/"
  },
  {
    "name": "タイムズ名駅５丁目第３",
    "address": "愛知県名古屋市中村区名駅5-17",
    "lat": 35.169792,
    "lng": 136.890106,
    "hourlyRate": 900,
    "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 1100, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後6時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0068051/"
  },
  {
    "name": "タイムズ千代田２丁目第３",
    "address": "愛知県名古屋市中区千代田2-16",
    "lat": 35.156601,
    "lng": 136.913986,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大1200円(24h繰り返し) / 夜(18-08時)最大600円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0036481/"
  },
  {
    "name": "タイムズ千代田１丁目第３",
    "address": "愛知県名古屋市中区千代田1-3",
    "lat": 35.161278,
    "lng": 136.911774,
    "hourlyRate": 660,
    "rates": { "weekday": "20分 220円", "holiday": "20分 220円" },
    "maxRate": { "weekday": 800, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 41,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後24時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0075813/"
  },
  {
    "name": "タイムズ丸の内３丁目第２",
    "address": "愛知県名古屋市中区丸の内3-10",
    "lat": 35.175709,
    "lng": 136.903244,
    "hourlyRate": 1000,
    "rates": { "weekday": "15分 250円", "holiday": "15分 250円" },
    "maxRate": { "weekday": 2300, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(07-19時)最大2300円・夜800円 / 休日昼最大1000円・夜800円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0037231/"
  },
  {
    "name": "タイムズ丸の内１丁目第３",
    "address": "愛知県名古屋市中区丸の内1-3",
    "lat": 35.177177,
    "lng": 136.895859,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1500, "holiday": 700 },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-19時)最大1500円・夜400円 / 休日昼最大700円・夜400円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0040458/"
  },
  {
    "name": "タイムズ丸の内３丁目第７",
    "address": "愛知県名古屋市中区丸の内3-2",
    "lat": 35.177364,
    "lng": 136.903076,
    "hourlyRate": 750,
    "rates": { "weekday": "20分 250円", "holiday": "20分 250円" },
    "maxRate": { "weekday": 1800, "holiday": 700 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-19時)最大1800円・夜500円 / 休日昼最大700円・夜500円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0052712/"
  },
  {
    "name": "タイムズ丸の内３丁目第６",
    "address": "愛知県名古屋市中区丸の内3-14",
    "lat": 35.174824,
    "lng": 136.902145,
    "hourlyRate": 1000,
    "rates": { "weekday": "15分 250円", "holiday": "15分 250円" },
    "maxRate": { "weekday": 1100, "holiday": 600 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日5時間以内最大1100円・休日5時間以内最大600円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0049510/"
  },
  {
    "name": "タイムズ丸の内３丁目第８",
    "address": "愛知県名古屋市中区丸の内3-17",
    "lat": 35.175068,
    "lng": 136.905655,
    "hourlyRate": 1000,
    "rates": { "weekday": "15分 250円", "holiday": "15分 250円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後4時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0063407/"
  },
  {
    "name": "タイムズ桜通大津第一生命ビルディング",
    "address": "愛知県名古屋市中区錦3-4",
    "lat": 35.1731,
    "lng": 136.905869,
    "hourlyRate": 700,
    "rates": { "weekday": "30分 350円", "holiday": "30分 350円" },
    "maxRate": { "weekday": 1400, "holiday": 1400 },
    "hours": "08:00〜22:00",
    "capacity": 27,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(09-21時)最大1400円・夜最大800円（繰り返し適用）",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0060840/"
  },
  {
    "name": "タイムズ桜通長者町",
    "address": "愛知県名古屋市中区錦2-3",
    "lat": 35.17271,
    "lng": 136.899994,
    "hourlyRate": 1400,
    "rates": { "weekday": "15分 350円", "holiday": "15分 350円" },
    "maxRate": { "weekday": 2400, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 24,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日最大2400円(24h) / 休日最大1200円(24h)",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0072519/"
  },
  {
    "name": "タイムズ椿町第１３",
    "address": "愛知県名古屋市中村区椿町4",
    "lat": 35.170387,
    "lng": 136.878265,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 1700, "holiday": 1700 },
    "hours": "24時間",
    "capacity": 15,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0066965/"
  },
  {
    "name": "タイムズ椿町第１２",
    "address": "愛知県名古屋市中村区椿町16",
    "lat": 35.16819,
    "lng": 136.881531,
    "hourlyRate": 2400,
    "rates": { "weekday": "10分 400円", "holiday": "10分 400円" },
    "maxRate": { "weekday": 1800, "holiday": 1800 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "昼(08-18時)10分400円・夜20分250円 / 最大1800円(5h繰り返し)",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0061152/"
  },
  {
    "name": "タイムズ名古屋新幹線口",
    "address": "愛知県名古屋市中村区椿町16",
    "lat": 35.168334,
    "lng": 136.882,
    "hourlyRate": 2100,
    "rates": { "weekday": "10分 350円", "holiday": "10分 350円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後5時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0073712/"
  },
  {
    "name": "タイムズ椿町第１１",
    "address": "愛知県名古屋市中村区椿町4",
    "lat": 35.170551,
    "lng": 136.878531,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0052830/"
  },
  {
    "name": "タイムズ広小路伏見",
    "address": "愛知県名古屋市中区栄1-5",
    "lat": 35.167938,
    "lng": 136.896957,
    "hourlyRate": 1050,
    "rates": { "weekday": "20分 350円", "holiday": "20分 350円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後4時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0032444/"
  },
  {
    "name": "タイムズ名駅南１丁目第２",
    "address": "愛知県名古屋市中村区名駅南1-20",
    "lat": 35.166061,
    "lng": 136.887497,
    "hourlyRate": 880,
    "rates": { "weekday": "15分 220円", "holiday": "15分 220円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後6時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0041162/"
  },
  {
    "name": "タイムズ名駅南第１１",
    "address": "愛知県名古屋市中村区名駅南4-3",
    "lat": 35.162167,
    "lng": 136.887665,
    "hourlyRate": 330,
    "rates": { "weekday": "40分 220円", "holiday": "40分 220円" },
    "maxRate": { "weekday": 1100, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 17,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後24時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0027621/"
  },
  {
    "name": "タイムズ名駅南１丁目第７",
    "address": "愛知県名古屋市中村区名駅南1-5",
    "lat": 35.167255,
    "lng": 136.890518,
    "hourlyRate": 880,
    "rates": { "weekday": "15分 220円", "holiday": "15分 220円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後12時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0070716/"
  },
  {
    "name": "タイムズ栄竪三蔵通",
    "address": "愛知県名古屋市中区栄1-3",
    "lat": 35.16753,
    "lng": 136.894257,
    "hourlyRate": 1000,
    "rates": { "weekday": "15分 250円", "holiday": "15分 250円" },
    "maxRate": { "weekday": 1800, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 67,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-18時)最大1800円・夜最大900円 / 休日昼最大1300円・夜最大900円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0037881/"
  },
  {
    "name": "タイムズ楽運寺",
    "address": "愛知県名古屋市中区大須4-10",
    "lat": 35.159344,
    "lng": 136.90657,
    "hourlyRate": 900,
    "rates": { "weekday": "20分 300円", "holiday": "10分 300円" },
    "maxRate": { "weekday": 1500, "holiday": 2200 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は5時間以内・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0071812/"
  },
  {
    "name": "タイムズ名古屋ゼロゲート",
    "address": "愛知県名古屋市中区栄3-28",
    "lat": 35.163837,
    "lng": 136.906403,
    "hourlyRate": 900,
    "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 1400, "holiday": 2200 },
    "hours": "24時間",
    "capacity": 87,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "平日昼(08-17時)最大1400円・夜800円 / 休日昼最大2200円・夜800円",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0071801/"
  },
  {
    "name": "タイムズ栄第４１",
    "address": "愛知県名古屋市中区栄4-5",
    "lat": 35.168915,
    "lng": 136.912384,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 1100, "holiday": 1100 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "",
    "note": "最大料金は駐車後3時間・繰り返し適用",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0023756/"
  }
,
  {
    "name": "タイムズ金山第4",
    "address": "愛知県名古屋市中区金山4-3",
    "lat": 35.143913,
    "lng": 136.905075,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0021171/"
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
      "weekday": 330,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002544/"
  },
  {
    "name": "タイムズ金山2丁目",
    "address": "愛知県名古屋市中区金山2-10",
    "lat": 35.145065,
    "lng": 136.904251,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0037086/"
  },
  {
    "name": "タイムズ金山5丁目第2",
    "address": "愛知県名古屋市中区金山5-15",
    "lat": 35.143898,
    "lng": 136.907013,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0028208/"
  },
  {
    "name": "タイムズ金山第3",
    "address": "愛知県名古屋市中区金山1-8",
    "lat": 35.146297,
    "lng": 136.899841,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0019663/"
  },
  {
    "name": "タイムズ六番町駅前",
    "address": "愛知県名古屋市熱田区六番1-11",
    "lat": 35.124329,
    "lng": 136.887894,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0020758/"
  },
  {
    "name": "タイムズ一番",
    "address": "愛知県名古屋市熱田区一番2-5",
    "lat": 35.123074,
    "lng": 136.899689,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0022092/"
  },
  {
    "name": "タイムズ一番2丁目",
    "address": "愛知県名古屋市熱田区一番2-2",
    "lat": 35.122234,
    "lng": 136.899857,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0042927/"
  },
  {
    "name": "タイムズ大宝2丁目",
    "address": "愛知県名古屋市熱田区大宝2-1",
    "lat": 35.130573,
    "lng": 136.896744,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0035531/"
  },
  {
    "name": "タイムズ白鳥公園",
    "address": "愛知県名古屋市熱田区熱田西町1",
    "lat": 35.131882,
    "lng": 136.897964,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0031128/"
  },
  {
    "name": "タイムズ大宝1丁目第2",
    "address": "愛知県名古屋市熱田区大宝1-6",
    "lat": 35.132416,
    "lng": 136.894897,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0021373/"
  },
  {
    "name": "タイムズ金山町第4",
    "address": "愛知県名古屋市熱田区金山町1-8",
    "lat": 35.141308,
    "lng": 136.899551,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 700
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0026225/"
  },
  {
    "name": "タイムズ中出町",
    "address": "愛知県名古屋市熱田区中出町1-68",
    "lat": 35.132286,
    "lng": 136.891678,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0050635/"
  },
  {
    "name": "タイムズ四番2丁目",
    "address": "愛知県名古屋市熱田区四番2-6",
    "lat": 35.122692,
    "lng": 136.890289,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0025410/"
  },
  {
    "name": "タイムズ花表町",
    "address": "愛知県名古屋市熱田区花表町16",
    "lat": 35.125412,
    "lng": 136.916245,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0028392/"
  },
  {
    "name": "タイムズ伝馬2丁目",
    "address": "愛知県名古屋市熱田区伝馬2-7",
    "lat": 35.119713,
    "lng": 136.910034,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0032816/"
  },
  {
    "name": "タイムズ切戸町2丁目",
    "address": "愛知県名古屋市熱田区切戸町2-19",
    "lat": 35.136127,
    "lng": 136.887543,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 440,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0047003/"
  },
  {
    "name": "タイムズ一番第3",
    "address": "愛知県名古屋市熱田区一番1-15",
    "lat": 35.126202,
    "lng": 136.89917,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0036219/"
  },
  {
    "name": "タイムズ比々野町",
    "address": "愛知県名古屋市熱田区比々野町52",
    "lat": 35.133255,
    "lng": 136.891891,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 990,
      "holiday": 550
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0049174/"
  },
  {
    "name": "タイムズ青池町3丁目",
    "address": "愛知県名古屋市熱田区青池町3-82",
    "lat": 35.132977,
    "lng": 136.889053,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0042571/"
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
      "weekday": 330,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0046212/"
  },
  {
    "name": "タイムズ名古屋中央卸売市場西",
    "address": "愛知県名古屋市熱田区千代田町17",
    "lat": 35.135098,
    "lng": 136.892639,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0079672/"
  },
  {
    "name": "タイムズ五本松",
    "address": "愛知県名古屋市熱田区五本松町1",
    "lat": 35.137039,
    "lng": 136.900543,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 750,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0023755/"
  },
  {
    "name": "タイムズ那古野第2",
    "address": "愛知県名古屋市西区那古野1-13",
    "lat": 35.176132,
    "lng": 136.890152,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 220,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0025810/"
  },
  {
    "name": "タイムズ円頓寺商店街南",
    "address": "愛知県名古屋市西区那古野1-20",
    "lat": 35.176086,
    "lng": 136.890778,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0064665/"
  },
  {
    "name": "タイムズ那古野2丁目第2",
    "address": "愛知県名古屋市西区那古野2-18",
    "lat": 35.175995,
    "lng": 136.888123,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0044121/"
  },
  {
    "name": "タイムズ泉3丁目第3",
    "address": "愛知県名古屋市東区泉3-2",
    "lat": 35.178062,
    "lng": 136.919327,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 400
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0047575/"
  },
  {
    "name": "タイムズ泉3丁目第2",
    "address": "愛知県名古屋市東区泉3-11",
    "lat": 35.176891,
    "lng": 136.918152,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0027257/"
  },
  {
    "name": "タイムズ泉1丁目第5",
    "address": "愛知県名古屋市東区泉1-1",
    "lat": 35.177601,
    "lng": 136.909073,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0043384/"
  },
  {
    "name": "タイムズフランテロゼ白壁",
    "address": "愛知県名古屋市東区白壁3-19",
    "lat": 35.183769,
    "lng": 136.916962,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0074896/"
  },
  {
    "name": "タイムズ筒井2丁目",
    "address": "愛知県名古屋市東区筒井2-12",
    "lat": 35.1744,
    "lng": 136.925369,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 990,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0022697/"
  },
  {
    "name": "タイムズ東桜第3",
    "address": "愛知県名古屋市東区東桜1-10",
    "lat": 35.172394,
    "lng": 136.909683,
    "hourlyRate": 1650,
    "rates": {
      "weekday": "12分 330円",
      "holiday": "12分 330円"
    },
    "maxRate": {
      "weekday": 330,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0014412/"
  },
  {
    "name": "タイムズナゴヤドーム前矢田駅",
    "address": "愛知県名古屋市東区矢田東3",
    "lat": 35.191414,
    "lng": 136.945709,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 2000
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0074748/"
  },
  {
    "name": "タイムズ万松寺",
    "address": "愛知県名古屋市中区大須3-30",
    "lat": 35.159481,
    "lng": 136.905502,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 1900
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0060734/"
  },
  {
    "name": "名古屋中郵便局駐車場",
    "address": "愛知県名古屋市中区大須3-1",
    "lat": 35.161594,
    "lng": 136.902939,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0033043/"
  },
  {
    "name": "タイムズ黒川本通",
    "address": "愛知県名古屋市北区黒川本通2-37",
    "lat": 35.198364,
    "lng": 136.91127,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0027690/"
  }
,
  {
    "name": "タイムズ今池第11",
    "address": "愛知県名古屋市千種区今池1-29",
    "lat": 35.167557,
    "lng": 136.935699,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0019575/"
  },
  {
    "name": "タイムズ今池南",
    "address": "愛知県名古屋市千種区今池南8",
    "lat": 35.164654,
    "lng": 136.940582,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0002537/"
  },
  {
    "name": "タイムズ今池4丁目",
    "address": "愛知県名古屋市千種区今池4-16",
    "lat": 35.168644,
    "lng": 136.94017,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0039209/"
  },
  {
    "name": "タイムズ今池3丁目",
    "address": "愛知県名古屋市千種区今池3-8",
    "lat": 35.166889,
    "lng": 136.93306,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 400
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0033838/"
  },
  {
    "name": "タイムズ今池2丁目第2",
    "address": "愛知県名古屋市千種区今池2-13",
    "lat": 35.167274,
    "lng": 136.929276,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0052627/"
  },
  {
    "name": "タイムズちくさ病院第2",
    "address": "愛知県名古屋市千種区今池5-34",
    "lat": 35.165585,
    "lng": 136.939117,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 400
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0074532/"
  },
  {
    "name": "タイムズ今池2丁目",
    "address": "愛知県名古屋市千種区今池2-1",
    "lat": 35.167923,
    "lng": 136.928787,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0045748/"
  },
  {
    "name": "タイムズ今池2丁目第3",
    "address": "愛知県名古屋市千種区今池2-3",
    "lat": 35.167953,
    "lng": 136.929733,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 950,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0070712/"
  },
  {
    "name": "タイムズ理容あいち会館",
    "address": "愛知県名古屋市千種区今池2-13",
    "lat": 35.167274,
    "lng": 136.929276,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0051534/"
  },
  {
    "name": "タイムズ池下第5",
    "address": "愛知県名古屋市千種区池下1-6",
    "lat": 35.168835,
    "lng": 136.94339,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1200,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0017602/"
  },
  {
    "name": "タイムズ池下",
    "address": "愛知県名古屋市千種区池下1-10",
    "lat": 35.168163,
    "lng": 136.944061,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0002586/"
  },
  {
    "name": "タイムズ池下第7",
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
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0032576/"
  },
  {
    "name": "タイムズ今池第6",
    "address": "愛知県名古屋市千種区今池5-15",
    "lat": 35.167099,
    "lng": 136.940918,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0013563/"
  },
  {
    "name": "タイムズ池下町",
    "address": "愛知県名古屋市千種区池下町2-35",
    "lat": 35.168598,
    "lng": 136.947281,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1300,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0032913/"
  },
  {
    "name": "タイムズ西山元町",
    "address": "愛知県名古屋市千種区西山元町2-7",
    "lat": 35.169666,
    "lng": 136.950729,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0029811/"
  },
  {
    "name": "タイムズ千種内山",
    "address": "愛知県名古屋市千種区内山1-20",
    "lat": 35.172504,
    "lng": 136.935455,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0029993/"
  },
  {
    "name": "タイムズ若水3丁目",
    "address": "愛知県名古屋市千種区若水3-9",
    "lat": 35.17643,
    "lng": 136.94725,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0049807/"
  },
  {
    "name": "タイムズ東山",
    "address": "愛知県名古屋市千種区東山通5-2",
    "lat": 35.160618,
    "lng": 136.973373,
    "hourlyRate": 1100,
    "rates": {
      "weekday": "30分 550円",
      "holiday": "30分 550円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0030277/"
  },
  {
    "name": "タイムズ日進通1丁目",
    "address": "愛知県名古屋市千種区日進通1-30",
    "lat": 35.161736,
    "lng": 136.941833,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0052547/"
  },
  {
    "name": "タイムズ東明町",
    "address": "愛知県名古屋市千種区東明町5-61",
    "lat": 35.164532,
    "lng": 136.97464,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 750,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0035913/"
  },
  {
    "name": "タイムズ覚王山",
    "address": "愛知県名古屋市千種区山門町1-11",
    "lat": 35.168743,
    "lng": 136.953033,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0030342/"
  },
  {
    "name": "タイムズＨＯＴＥＬルブラ王山",
    "address": "愛知県名古屋市千種区覚王山通8-18",
    "lat": 35.166687,
    "lng": 136.948441,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0075574/"
  },
  {
    "name": "タイムズ覚王山参道第2",
    "address": "愛知県名古屋市千種区山門町2-32",
    "lat": 35.167751,
    "lng": 136.952698,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0027398/"
  },
  {
    "name": "タイムズ円上町",
    "address": "愛知県名古屋市昭和区円上町23",
    "lat": 35.141373,
    "lng": 136.919159,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0051742/"
  },
  {
    "name": "タイムズ白金2丁目",
    "address": "愛知県名古屋市昭和区白金2-11",
    "lat": 35.144722,
    "lng": 136.915527,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0034239/"
  },
  {
    "name": "タイムズ御器所駅前第3",
    "address": "愛知県名古屋市昭和区東畑町2-27",
    "lat": 35.150455,
    "lng": 136.93161,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0036714/"
  },
  {
    "name": "タイムズ山脇町",
    "address": "愛知県名古屋市昭和区山脇町1-27",
    "lat": 35.153889,
    "lng": 136.925323,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0034765/"
  },
  {
    "name": "タイムズ鶴舞3丁目",
    "address": "愛知県名古屋市昭和区鶴舞3-17",
    "lat": 35.150951,
    "lng": 136.919434,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 220,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0017532/"
  },
  {
    "name": "タイムズ石仏町",
    "address": "愛知県名古屋市昭和区石仏町1-76",
    "lat": 35.144974,
    "lng": 136.936203,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0015947/"
  },
  {
    "name": "タイムズ八事石坂第2",
    "address": "愛知県名古屋市昭和区広路町石坂11",
    "lat": 35.137421,
    "lng": 136.961044,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 700
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0019171/"
  },
  {
    "name": "タイムズ桜山町第2",
    "address": "愛知県名古屋市昭和区桜山町5-103",
    "lat": 35.141136,
    "lng": 136.933945,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0030875/"
  },
  {
    "name": "タイムズ城下町",
    "address": "愛知県名古屋市南区城下町3-3",
    "lat": 35.100773,
    "lng": 136.927078,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0029492/"
  },
  {
    "name": "タイムズ豊田本町",
    "address": "愛知県名古屋市南区豊1-40",
    "lat": 35.112553,
    "lng": 136.91066,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0034809/"
  },
  {
    "name": "タイムズ三条1丁目",
    "address": "愛知県名古屋市南区三条1-4",
    "lat": 35.108429,
    "lng": 136.90242,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0027216/"
  },
  {
    "name": "タイムズ桜駅前",
    "address": "愛知県名古屋市南区呼続4-20",
    "lat": 35.106609,
    "lng": 136.934448,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0040523/"
  },
  {
    "name": "タイムズ名東本通",
    "address": "愛知県名古屋市名東区名東本通5-54",
    "lat": 35.159046,
    "lng": 137.000198,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0034531/"
  },
  {
    "name": "タイムズコープ上社店",
    "address": "愛知県名古屋市名東区上社1-301",
    "lat": 35.174442,
    "lng": 137.005051,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0035098/"
  },
  {
    "name": "タイムズ一社第3",
    "address": "愛知県名古屋市名東区高社1-218",
    "lat": 35.169418,
    "lng": 136.994507,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0045463/"
  },
  {
    "name": "タイムズ一社4丁目",
    "address": "愛知県名古屋市名東区一社4-90",
    "lat": 35.166901,
    "lng": 137.00206,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0033880/"
  },
  {
    "name": "タイムズ一社第2",
    "address": "愛知県名古屋市名東区一社3-5",
    "lat": 35.168911,
    "lng": 137.001419,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 400
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0018754/"
  },
  {
    "name": "タイムズ高社1丁目",
    "address": "愛知県名古屋市名東区高社1-129",
    "lat": 35.169949,
    "lng": 136.992569,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0074043/"
  },
  {
    "name": "タイムズ原第3",
    "address": "愛知県名古屋市天白区原4-1717",
    "lat": 35.121399,
    "lng": 136.993515,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0049833/"
  },
  {
    "name": "タイムズ平針2丁目",
    "address": "愛知県名古屋市天白区平針2-815",
    "lat": 35.124439,
    "lng": 137.005951,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 400
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0033082/"
  },
  {
    "name": "タイムズ原",
    "address": "愛知県名古屋市天白区原1-1801",
    "lat": 35.125393,
    "lng": 136.997711,
    "hourlyRate": 400,
    "rates": {
      "weekday": "15分 100円",
      "holiday": "15分 100円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0015555/"
  },
  {
    "name": "タイムズ野並駅前",
    "address": "愛知県名古屋市天白区野並2-429",
    "lat": 35.103283,
    "lng": 136.956161,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0019191/"
  },
  {
    "name": "タイムズ原1丁目第2",
    "address": "愛知県名古屋市天白区原1-508",
    "lat": 35.126366,
    "lng": 136.996841,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0048932/"
  },
  {
    "name": "タイムズビッグエス緑",
    "address": "愛知県名古屋市緑区徳重1-904",
    "lat": 35.090775,
    "lng": 136.999023,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 100
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C114/park-detail-BUK0064728/"
  }
,
  {
    "name": "タイムズ守山区役所前",
    "address": "愛知県名古屋市守山区小幡1-4",
    "lat": 35.202721,
    "lng": 136.976242,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C113/park-detail-BUK0043498/"
  },
  {
    "name": "タイムズ守山川宮町",
    "address": "愛知県名古屋市守山区川宮町81",
    "lat": 35.21022,
    "lng": 136.961563,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 650,
      "holiday": 350
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C113/park-detail-BUK0044976/"
  },
  {
    "name": "タイムズ守山",
    "address": "愛知県名古屋市守山区守山3-4",
    "lat": 35.19709,
    "lng": 136.958298,
    "hourlyRate": 440,
    "rates": {
      "weekday": "15分 110円",
      "holiday": "15分 110円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C113/park-detail-BUK0016036/"
  },
  {
    "name": "タイムズ八田駅南",
    "address": "愛知県名古屋市中川区柳森町2508",
    "lat": 35.14904,
    "lng": 136.855972,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0022007/"
  },
  {
    "name": "タイムズ八田駅南第2",
    "address": "愛知県名古屋市中川区八田町105",
    "lat": 35.149216,
    "lng": 136.855087,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0023323/"
  },
  {
    "name": "タイムズ小本駅前",
    "address": "愛知県名古屋市中川区小本1-10",
    "lat": 35.146908,
    "lng": 136.861679,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0075260/"
  },
  {
    "name": "タイムズMEGAドン・キホーテUNY東海通店(平面)",
    "address": "愛知県名古屋市港区港明1-10",
    "lat": 35.109085,
    "lng": 136.88855,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 900,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0084016/"
  },
  {
    "name": "タイムズMEGAドン・キホーテUNY東海通店(立体)",
    "address": "愛知県名古屋市港区港明1-10",
    "lat": 35.109085,
    "lng": 136.88855,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0084046/"
  },
  {
    "name": "タイムズ港陽3丁目",
    "address": "愛知県名古屋市港区港陽3-19",
    "lat": 35.099541,
    "lng": 136.885849,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0023946/"
  },
  {
    "name": "タイムズ中部ろうさい病院第2",
    "address": "愛知県名古屋市港区港明1-10",
    "lat": 35.109085,
    "lng": 136.88855,
    "hourlyRate": 600,
    "rates": {
      "weekday": "60分 600円",
      "holiday": "60分 600円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0042257/"
  },
  {
    "name": "タイムズ中部ろうさい病院第1",
    "address": "愛知県名古屋市港区港明1-10",
    "lat": 35.109085,
    "lng": 136.88855,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0042256/"
  }
,
  {
    "name": "タイムズ駒場町7丁目",
    "address": "愛知県名古屋市瑞穂区駒場町7-5",
    "lat": 35.136215,
    "lng": 136.932617,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0043896/"
  },
  {
    "name": "タイムズ北原町1丁目",
    "address": "愛知県名古屋市瑞穂区北原町1-28",
    "lat": 35.13139,
    "lng": 136.928757,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0031459/"
  },
  {
    "name": "タイムズ名古屋市博物館前",
    "address": "愛知県名古屋市瑞穂区瑞穂通1-9",
    "lat": 35.13665,
    "lng": 136.933517,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0044494/"
  }
,
  {
    "name": "名古屋共立病院第1駐車場",
    "address": "愛知県名古屋市中川区法華1-163",
    "lat": 35.127384,
    "lng": 136.848343,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0049762/"
  },
  {
    "name": "タイムズ掖済会病院北",
    "address": "愛知県名古屋市中川区昭明町3-15",
    "lat": 35.121784,
    "lng": 136.871002,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0039061/"
  },
  {
    "name": "タイムズ尾頭橋3丁目",
    "address": "愛知県名古屋市中川区尾頭橋3-9",
    "lat": 35.146019,
    "lng": 136.891312,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 650,
      "holiday": 350
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0024561/"
  },
  {
    "name": "タイムズ尾頭橋3丁目第4",
    "address": "愛知県名古屋市中川区尾頭橋3-2",
    "lat": 35.144913,
    "lng": 136.892334,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 330,
      "holiday": 600
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0066487/"
  },
  {
    "name": "タイムズ尾頭橋",
    "address": "愛知県名古屋市中川区尾頭橋3-5",
    "lat": 35.14415,
    "lng": 136.891449,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 880,
      "holiday": 1100
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0028537/"
  },
  {
    "name": "タイムズ八熊2丁目",
    "address": "愛知県名古屋市中川区八熊2-13",
    "lat": 35.142342,
    "lng": 136.890976,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 450,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0035597/"
  },
  {
    "name": "タイムズ尾頭橋3丁目第3",
    "address": "愛知県名古屋市中川区尾頭橋3-8",
    "lat": 35.145737,
    "lng": 136.891937,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0051766/"
  },
  {
    "name": "タイムズ野田1丁目",
    "address": "愛知県名古屋市中川区野田1-75",
    "lat": 35.144779,
    "lng": 136.845825,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0036443/"
  },
  {
    "name": "タイムズ上飯田東町第2",
    "address": "愛知県名古屋市北区上飯田東町5-42",
    "lat": 35.205158,
    "lng": 136.93486,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0041655/"
  },
  {
    "name": "タイムズ山田2丁目",
    "address": "愛知県名古屋市北区山田2-1",
    "lat": 35.194641,
    "lng": 136.934525,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 440
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0035977/"
  },
  {
    "name": "タイムズ金城町",
    "address": "愛知県名古屋市北区金城町3-3",
    "lat": 35.206333,
    "lng": 136.906189,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0034939/"
  },
  {
    "name": "タイムズ杉村1丁目",
    "address": "愛知県名古屋市北区杉村1-25",
    "lat": 35.189655,
    "lng": 136.923904,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0029799/"
  },
  {
    "name": "タイムズ大曽根3丁目",
    "address": "愛知県名古屋市北区大曽根3-7",
    "lat": 35.190647,
    "lng": 136.935425,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0032383/"
  },
  {
    "name": "タイムズデニーズ黒川店",
    "address": "愛知県名古屋市北区黒川本通4-13",
    "lat": 35.199684,
    "lng": 136.911682,
    "hourlyRate": 330,
    "rates": {
      "weekday": "60分 330円",
      "holiday": "60分 330円"
    },
    "maxRate": {
      "weekday": 440,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0032352/"
  },
  {
    "name": "タイムズ弥富通",
    "address": "愛知県名古屋市瑞穂区弥富通5-4",
    "lat": 35.119797,
    "lng": 136.956619,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0017835/"
  },
  {
    "name": "タイムズ中根",
    "address": "愛知県名古屋市瑞穂区弥富通5-54",
    "lat": 35.119751,
    "lng": 136.958145,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0020413/"
  },
  {
    "name": "タイムズ弥富通第2",
    "address": "愛知県名古屋市瑞穂区片坂町3-3",
    "lat": 35.117325,
    "lng": 136.946533,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0019257/"
  },
  {
    "name": "昭和郵便局駐車場",
    "address": "愛知県名古屋市昭和区桜山町6",
    "lat": 35.140579,
    "lng": 136.933411,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "30分 500円",
      "holiday": "30分 500円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 700
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0033044/"
  },
  {
    "name": "タイムズ広見町第2",
    "address": "愛知県名古屋市昭和区広見町6-63",
    "lat": 35.141003,
    "lng": 136.931549,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0045083/"
  },
  {
    "name": "タイムズ名古屋港駅北",
    "address": "愛知県名古屋市港区浜2-1",
    "lat": 35.096275,
    "lng": 136.882233,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 650,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0051592/"
  }
,
  {
    "name": "タイムズ大曽根すずらん通",
    "address": "愛知県名古屋市北区大曽根1-23",
    "lat": 35.190479,
    "lng": 136.928986,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0021229/"
  },
  {
    "name": "ＯＺパーキング",
    "address": "愛知県名古屋市北区大曽根4-1",
    "lat": 35.190762,
    "lng": 136.930893,
    "hourlyRate": 300,
    "rates": {
      "weekday": "20分 100円",
      "holiday": "20分 100円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 400
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0029871/"
  },
  {
    "name": "タイムズ名古屋タンメン若葉",
    "address": "愛知県名古屋市北区若葉通1-12",
    "lat": 35.196033,
    "lng": 136.922226,
    "hourlyRate": 2200,
    "rates": {
      "weekday": "15分 550円",
      "holiday": "15分 550円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0033994/"
  },
  {
    "name": "タイムズ九重町",
    "address": "愛知県名古屋市中川区九重町11",
    "lat": 35.156368,
    "lng": 136.873215,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 440,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0034417/"
  },
  {
    "name": "タイムズ角割町3丁目",
    "address": "愛知県名古屋市中村区角割町3-30",
    "lat": 35.155769,
    "lng": 136.866669,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 440,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0044202/"
  },
  {
    "name": "タイムズ露橋町",
    "address": "愛知県名古屋市中川区露橋町46",
    "lat": 35.151833,
    "lng": 136.882675,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0040776/"
  },
  {
    "name": "タイムズ瑞穂運動場西",
    "address": "愛知県名古屋市瑞穂区膳棚町1-5",
    "lat": 35.126038,
    "lng": 136.936417,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0033898/"
  },
  {
    "name": "瑞穂郵便局駐車場",
    "address": "愛知県名古屋市瑞穂区豊岡通2",
    "lat": 35.125427,
    "lng": 136.932831,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 700
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0072623/"
  },
  {
    "name": "タイムズ内方町",
    "address": "愛知県名古屋市瑞穂区内方町1-5",
    "lat": 35.123432,
    "lng": 136.936996,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": 220
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0019759/"
  }
,
  {
    "name": "タイムズ中味鋺",
    "address": "愛知県名古屋市北区中味鋺3-1115",
    "lat": 35.220722,
    "lng": 136.923355,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 440,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0039043/"
  },
  {
    "name": "タイムズ高杉町",
    "address": "愛知県名古屋市中川区高杉町119",
    "lat": 35.125103,
    "lng": 136.843033,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0052457/"
  },
  {
    "name": "名古屋共立病院第4駐車場",
    "address": "愛知県名古屋市中川区法華1-220",
    "lat": 35.12661,
    "lng": 136.847137,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0049764/"
  },
  {
    "name": "名古屋共立病院第3駐車場",
    "address": "愛知県名古屋市中川区法華1-216",
    "lat": 35.126141,
    "lng": 136.848053,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": null,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0049763/"
  },
  {
    "name": "タイムズ猪子石1丁目",
    "address": "愛知県名古屋市名東区猪子石1-214",
    "lat": 35.186123,
    "lng": 136.998856,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 200
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0048837/"
  }
,
  {
    "name": "タイムズドン・キホーテパウ中川山王店",
    "address": "愛知県名古屋市中川区山王4-5",
    "lat": 35.148224,
    "lng": 136.892181,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0035588/"
  },
  {
    "name": "タイムズスポーツデポ・ゴルフ5山王店",
    "address": "愛知県名古屋市中川区山王2-3",
    "lat": 35.150185,
    "lng": 136.893265,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0051522/"
  },
  {
    "name": "タイムズスポーツデポ・ゴルフ5山王店(3Ｆ・ＲＦ)",
    "address": "愛知県名古屋市中川区山王2-3",
    "lat": 35.150185,
    "lng": 136.893265,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0063894/"
  },
  {
    "name": "タイムズマクドナルド山王橋店",
    "address": "愛知県名古屋市中川区山王2-3",
    "lat": 35.150185,
    "lng": 136.893265,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 600
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0073897/"
  },
  {
    "name": "タイムズスギ薬局正木店",
    "address": "愛知県名古屋市中区正木1-2",
    "lat": 35.151207,
    "lng": 136.894577,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 200,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0075237/"
  },
  {
    "name": "タイムズ大曽根駅前",
    "address": "愛知県名古屋市東区矢田1-7",
    "lat": 35.192818,
    "lng": 136.939407,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 1000
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0082774/"
  }
,
  {
    "name": "タイムズ掖済会病院前第3",
    "address": "愛知県名古屋市中川区松年町4-50",
    "lat": 35.12072,
    "lng": 136.872559,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0048209/"
  },
  {
    "name": "タイムズ掖済会病院前",
    "address": "愛知県名古屋市中川区松年町4-57",
    "lat": 35.120758,
    "lng": 136.873932,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0026833/"
  },
  {
    "name": "タイムズ愛知県武道館前",
    "address": "愛知県名古屋市港区小割通1-5",
    "lat": 35.117111,
    "lng": 136.869019,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 660,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0039182/"
  }
,
  {
    "name": "タイムズ六番町駅前第2",
    "address": "愛知県名古屋市熱田区六番2-3",
    "lat": 35.122665,
    "lng": 136.88887,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0022833/"
  },
  {
    "name": "タイムズ大宝4丁目",
    "address": "愛知県名古屋市熱田区大宝4-16",
    "lat": 35.127384,
    "lng": 136.891693,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0022657/"
  },
  {
    "name": "タイムズ二番2丁目第2",
    "address": "愛知県名古屋市熱田区二番2-2",
    "lat": 35.123634,
    "lng": 136.892822,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0080275/"
  },
  {
    "name": "タイムズ大宝1丁目",
    "address": "愛知県名古屋市熱田区大宝1-7",
    "lat": 35.132179,
    "lng": 136.895126,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1100,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0021371/"
  },
  {
    "name": "タイムズ辰巳町",
    "address": "愛知県名古屋市港区辰巳町2",
    "lat": 35.112713,
    "lng": 136.894623,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0048231/"
  },
  {
    "name": "タイムズ大宝1丁目第3",
    "address": "愛知県名古屋市熱田区大宝1-8",
    "lat": 35.131927,
    "lng": 136.89592,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1000,
      "holiday": 300
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0031450/"
  },
  {
    "name": "タイムズ二番2丁目",
    "address": "愛知県名古屋市熱田区二番2-15",
    "lat": 35.121841,
    "lng": 136.894379,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 550,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0040478/"
  }
,
  {
    "name": "タイムズカインズ名古屋堀田店",
    "address": "愛知県名古屋市瑞穂区新開町24",
    "lat": 35.121849,
    "lng": 136.917007,
    "hourlyRate": 300,
    "rates": {
      "weekday": "60分 300円",
      "holiday": "60分 300円"
    },
    "maxRate": {
      "weekday": 600,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0024486/"
  },
  {
    "name": "タイムズ金山町",
    "address": "愛知県名古屋市熱田区金山町2-3",
    "lat": 35.14093,
    "lng": 136.903458,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0017241/"
  },
  {
    "name": "タイムズ白金",
    "address": "愛知県名古屋市昭和区白金2-13",
    "lat": 35.14476,
    "lng": 136.916779,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": null
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0019017/"
  },
  {
    "name": "タイムズ福江1丁目",
    "address": "愛知県名古屋市昭和区福江1-9",
    "lat": 35.148441,
    "lng": 136.913879,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 770,
      "holiday": 330
    },
    "hours": "24時間",
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0024798/"
  }
];
