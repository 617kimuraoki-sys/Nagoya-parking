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
  }
];
