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
,
  {
    "name": "タイムズ千代田町",
    "address": "愛知県名古屋市熱田区千代田町2",
    "lat": 35.136757,
    "lng": 136.891663,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0030331/"
  },
  {
    "name": "タイムズ切戸町3丁目",
    "address": "愛知県名古屋市熱田区切戸町3-118",
    "lat": 35.13327,
    "lng": 136.887695,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0041637/"
  },
  {
    "name": "タイムズ熱田リハビリテーション病院第2",
    "address": "愛知県名古屋市熱田区比々野町15",
    "lat": 35.134563,
    "lng": 136.891602,
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
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0076700/"
  },
  {
    "name": "タイムズ明野町第3",
    "address": "愛知県名古屋市熱田区明野町17",
    "lat": 35.137257,
    "lng": 136.891907,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0032847/"
  },
  {
    "name": "タイムズ熱田リハビリテーション病院第1",
    "address": "愛知県名古屋市熱田区比々野町33",
    "lat": 35.134182,
    "lng": 136.891876,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0076699/"
  },
  {
    "name": "タイムズ神野町2丁目",
    "address": "愛知県名古屋市熱田区神野町2-18",
    "lat": 35.130508,
    "lng": 136.890289,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0038268/"
  }
,
  {
    "name": "タイムズ三洋堂新開橋店",
    "address": "愛知県名古屋市瑞穂区新開町18",
    "lat": 35.123974,
    "lng": 136.917191,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0060777/"
  },
  {
    "name": "タイムズカインズ名古屋堀田店（屋上）",
    "address": "愛知県名古屋市瑞穂区新開町24",
    "lat": 35.121849,
    "lng": 136.917007,
    "hourlyRate": 300,
    "rates": {
      "weekday": "60分 300円",
      "holiday": "60分 300円"
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0066488/"
  },
  {
    "name": "タイムズ神宮前駅北",
    "address": "愛知県名古屋市熱田区三本松町1",
    "lat": 35.128201,
    "lng": 136.912094,
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
    "source": "https://times-info.net/P23-aichi/C109/park-detail-BUK0051995/"
  },
  {
    "name": "タイムズ花目町1丁目第2",
    "address": "愛知県名古屋市瑞穂区花目町1-4",
    "lat": 35.119843,
    "lng": 136.922531,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 440,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0049536/"
  },
  {
    "name": "タイムズ豆田町",
    "address": "愛知県名古屋市瑞穂区豆田町3-14",
    "lat": 35.131039,
    "lng": 136.923264,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0028395/"
  },
  {
    "name": "タイムズ亀城町第1",
    "address": "愛知県名古屋市瑞穂区亀城町1-6",
    "lat": 35.135418,
    "lng": 136.920395,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0033515/"
  }
,
  {
    "name": "タイムズ三条1丁目第2",
    "address": "愛知県名古屋市南区三条1-8",
    "lat": 35.105076,
    "lng": 136.901184,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0031668/"
  }
,
  {
    "name": "タイムズ露橋1丁目第2",
    "address": "愛知県名古屋市中川区露橋1-5",
    "lat": 35.151276,
    "lng": 136.887833,
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0052221/"
  }
,
  {
    "name": "タイムズ大磯通",
    "address": "愛知県名古屋市南区大磯通6-7",
    "lat": 35.102673,
    "lng": 136.928024,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0033394/"
  },
  {
    "name": "タイムズ笠寺駅前第3",
    "address": "愛知県名古屋市南区寺部通1-19",
    "lat": 35.097332,
    "lng": 136.927887,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 450,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0072704/"
  },
  {
    "name": "タイムズあかのれん新瑞橋店",
    "address": "愛知県名古屋市南区駈上1-1",
    "lat": 35.116127,
    "lng": 136.9375,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0043445/"
  },
  {
    "name": "タイムズ砂口町",
    "address": "愛知県名古屋市南区砂口町23",
    "lat": 35.094013,
    "lng": 136.94191,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0033927/"
  },
  {
    "name": "タイムズ太田町",
    "address": "愛知県名古屋市瑞穂区太田町2-10",
    "lat": 35.137341,
    "lng": 136.92128,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0028692/"
  },
  {
    "name": "タイムズ滝子メディカルステーション",
    "address": "愛知県名古屋市昭和区滝子通3-2",
    "lat": 35.139935,
    "lng": 136.923462,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 200,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0071372/"
  },
  {
    "name": "タイムズ白金3丁目",
    "address": "愛知県名古屋市昭和区白金3-7",
    "lat": 35.14275,
    "lng": 136.91507,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 880,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0042486/"
  },
  {
    "name": "タイムズ白金2丁目第2",
    "address": "愛知県名古屋市昭和区白金2-10",
    "lat": 35.144707,
    "lng": 136.914886,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0035112/"
  },
  {
    "name": "タイムズ滝子通",
    "address": "愛知県名古屋市昭和区滝子通4-17",
    "lat": 35.140053,
    "lng": 136.925674,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0017755/"
  },
  {
    "name": "タイムズ富士見第4",
    "address": "愛知県名古屋市中区富士見町13",
    "lat": 35.152428,
    "lng": 136.906265,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 990,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0030954/"
  },
  {
    "name": "タイムズ菊園町1丁目",
    "address": "愛知県名古屋市昭和区菊園町1-17",
    "lat": 35.138229,
    "lng": 136.937759,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0021777/"
  }
,
  {
    "name": "タイムズ洲雲町",
    "address": "愛知県名古屋市瑞穂区洲雲町1-6",
    "lat": 35.139835,
    "lng": 136.928116,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0018459/"
  },
  {
    "name": "タイムズ駒場町",
    "address": "愛知県名古屋市瑞穂区駒場町5-3",
    "lat": 35.137077,
    "lng": 136.930847,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0023039/"
  },
  {
    "name": "タイムズ阿由知通山路整形外科",
    "address": "愛知県名古屋市昭和区阿由知通2-6",
    "lat": 35.154629,
    "lng": 136.934143,
    "hourlyRate": 660,
    "rates": {
      "weekday": "30分 330円",
      "holiday": "30分 330円"
    },
    "maxRate": {
      "weekday": 1650,
      "holiday": 880
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0040995/"
  },
  {
    "name": "タイムズ御器所駅前第4",
    "address": "愛知県名古屋市昭和区広路通1-15",
    "lat": 35.14975,
    "lng": 136.939056,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0040719/"
  },
  {
    "name": "タイムズ道徳",
    "address": "愛知県名古屋市南区豊田1-6",
    "lat": 35.107105,
    "lng": 136.909592,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0030284/"
  }
,
  {
    "name": "タイムズ狭間町",
    "address": "愛知県名古屋市昭和区狭間町14",
    "lat": 35.155628,
    "lng": 136.925339,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0022757/"
  },
  {
    "name": "タイムズ鶴舞4丁目",
    "address": "愛知県名古屋市昭和区鶴舞4-34",
    "lat": 35.151356,
    "lng": 136.924561,
    "hourlyRate": 450,
    "rates": {
      "weekday": "20分 150円",
      "holiday": "20分 150円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0065632/"
  },
  {
    "name": "タイムズ曙町1丁目",
    "address": "愛知県名古屋市昭和区曙町1-28",
    "lat": 35.155369,
    "lng": 136.930588,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0049628/"
  },
  {
    "name": "名古屋市中小企業振興会館 西駐車場",
    "address": "愛知県名古屋市昭和区吹上町1",
    "lat": 35.157143,
    "lng": 136.928497,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 2000,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0024694/"
  },
  {
    "name": "吹上駐車場",
    "address": "愛知県名古屋市昭和区吹上町2-6",
    "lat": 35.15604,
    "lng": 136.932709,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 2000,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0033203/"
  },
  {
    "name": "名古屋市中小企業振興会館 構内駐車場",
    "address": "愛知県名古屋市千種区吹上2-6",
    "lat": 35.158901,
    "lng": 136.929688,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 2000,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0024693/"
  },
  {
    "name": "タイムズ千早第2",
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0032752/"
  },
  {
    "name": "タイムズゲオ御器所店",
    "address": "愛知県名古屋市昭和区御器所通3-13",
    "lat": 35.149712,
    "lng": 136.936127,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0021931/"
  },
  {
    "name": "タイムズ御器所駅前",
    "address": "愛知県名古屋市昭和区阿由知通4-2",
    "lat": 35.149265,
    "lng": 136.933319,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0022987/"
  },
  {
    "name": "タイムズファミリーマート御器所駅前",
    "address": "愛知県名古屋市昭和区阿由知通3-22",
    "lat": 35.149891,
    "lng": 136.933395,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0045228/"
  }
,
  {
    "name": "タイムズイオンタウン千種",
    "address": "愛知県名古屋市千種区千種2-16",
    "lat": 35.16135,
    "lng": 136.924301,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0071137/"
  },
  {
    "name": "タイムズ城木町",
    "address": "愛知県名古屋市千種区城木町3-29",
    "lat": 35.158291,
    "lng": 136.942139,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0029336/"
  },
  {
    "name": "タイムズ千種2丁目第2",
    "address": "愛知県名古屋市千種区千種2-3",
    "lat": 35.163582,
    "lng": 136.926056,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 650,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0085938/"
  }
,
  {
    "name": "タイムズ八事天道",
    "address": "愛知県名古屋市天白区八事天道403",
    "lat": 35.134914,
    "lng": 136.96257,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 770,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0036102/"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0028068/"
  },
  {
    "name": "タイムズ山手通",
    "address": "愛知県名古屋市昭和区山手通5-14",
    "lat": 35.138447,
    "lng": 136.967728,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0035715/"
  },
  {
    "name": "タイムズ聖霊病院第2",
    "address": "愛知県名古屋市昭和区川名山町56",
    "lat": 35.145088,
    "lng": 136.955902,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0040074/"
  },
  {
    "name": "タイムズ吹上第2",
    "address": "愛知県名古屋市昭和区吹上町2-28",
    "lat": 35.155495,
    "lng": 136.933563,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0021999/"
  },
  {
    "name": "タイムズ恵方町",
    "address": "愛知県名古屋市昭和区恵方町1-1",
    "lat": 35.146046,
    "lng": 136.926559,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 400,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0070021/"
  }
,
  {
    "name": "日本赤十字社愛知医療センター名古屋第二病院第2",
    "address": "愛知県名古屋市昭和区山手通3-19",
    "lat": 35.143898,
    "lng": 136.96553,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0030375/"
  },
  {
    "name": "日本赤十字社愛知医療センター名古屋第二病院第1",
    "address": "愛知県名古屋市昭和区妙見町2-11",
    "lat": 35.145416,
    "lng": 136.965668,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0030374/"
  },
  {
    "name": "タイムズ妙見町第7",
    "address": "愛知県名古屋市昭和区妙見町53",
    "lat": 35.145493,
    "lng": 136.967361,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1800,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0084718/"
  },
  {
    "name": "タイムズ妙見町第4",
    "address": "愛知県名古屋市昭和区妙見町52",
    "lat": 35.145493,
    "lng": 136.967361,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 2200,
      "holiday": 900
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0022862/"
  },
  {
    "name": "タイムズ妙見町第3",
    "address": "愛知県名古屋市昭和区妙見町46-1",
    "lat": 35.146156,
    "lng": 136.967499,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0022024/"
  },
  {
    "name": "タイムズコナミスポーツクラブいりなか",
    "address": "愛知県名古屋市昭和区滝川町21",
    "lat": 35.144585,
    "lng": 136.958115,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0083872/"
  },
  {
    "name": "日本赤十字社愛知医療センター名古屋第二病院第5",
    "address": "愛知県名古屋市昭和区妙見町77",
    "lat": 35.144657,
    "lng": 136.967514,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0030378/"
  }
,
  {
    "name": "タイムズ植田山5丁目",
    "address": "愛知県名古屋市天白区植田山5-1913",
    "lat": 35.14217,
    "lng": 136.984772,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 440,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0050874/"
  },
  {
    "name": "タイムズ原第2",
    "address": "愛知県名古屋市天白区原4-1718",
    "lat": 35.121399,
    "lng": 136.993515,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0035637/"
  },
  {
    "name": "タイムズ原第4",
    "address": "愛知県名古屋市天白区原3-414",
    "lat": 35.122406,
    "lng": 136.992767,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0062855/"
  },
  {
    "name": "タイムズ原2丁目",
    "address": "愛知県名古屋市天白区原2-803",
    "lat": 35.124199,
    "lng": 136.994141,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
    },
    "maxRate": {
      "weekday": 880,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0051526/"
  },
  {
    "name": "タイムズ原1丁目",
    "address": "愛知県名古屋市天白区原1-1911",
    "lat": 35.125282,
    "lng": 136.996658,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0047924/"
  }
,
  {
    "name": "タイムズ一社",
    "address": "愛知県名古屋市名東区高社1-211",
    "lat": 35.169853,
    "lng": 136.994293,
    "hourlyRate": 1500,
    "rates": {
      "weekday": "20分 500円",
      "holiday": "20分 500円"
    },
    "maxRate": {
      "weekday": 200,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0016353/"
  },
  {
    "name": "タイムズ一社第5",
    "address": "愛知県名古屋市名東区高社1-260",
    "lat": 35.168369,
    "lng": 136.994995,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 1100,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0047570/"
  },
  {
    "name": "タイムズ一社第4",
    "address": "愛知県名古屋市名東区一社1-91",
    "lat": 35.167263,
    "lng": 136.99527,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0045789/"
  },
  {
    "name": "タイムズ一社2丁目第2",
    "address": "愛知県名古屋市名東区一社2-166",
    "lat": 35.166142,
    "lng": 136.99678,
    "hourlyRate": 330,
    "rates": {
      "weekday": "40分 220円",
      "holiday": "40分 220円"
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0065789/"
  },
  {
    "name": "タイムズ一社第6",
    "address": "愛知県名古屋市名東区一社2-60",
    "lat": 35.16769,
    "lng": 136.998825,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0049334/"
  },
  {
    "name": "タイムズ貴船",
    "address": "愛知県名古屋市名東区貴船2",
    "lat": 35.166805,
    "lng": 137.012863,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0036638/"
  }
,
  {
    "name": "タイムズ牧の里",
    "address": "愛知県名古屋市名東区牧の里2-2004",
    "lat": 35.151497,
    "lng": 137.005859,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0049614/"
  },
  {
    "name": "タイムズ高針",
    "address": "愛知県名古屋市名東区新宿1-8",
    "lat": 35.154205,
    "lng": 137.008911,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 900,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0016464/"
  },
  {
    "name": "タイムズ本郷駅前第2",
    "address": "愛知県名古屋市名東区本郷2-172",
    "lat": 35.175076,
    "lng": 137.013718,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 950,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0045921/"
  },
  {
    "name": "タイムズ上社第4",
    "address": "愛知県名古屋市名東区上社1-504",
    "lat": 35.173862,
    "lng": 137.005432,
    "hourlyRate": 440,
    "rates": {
      "weekday": "15分 110円",
      "holiday": "15分 110円"
    },
    "maxRate": {
      "weekday": 880,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0035167/"
  },
  {
    "name": "タイムズ本郷3丁目",
    "address": "愛知県名古屋市名東区本郷3-138",
    "lat": 35.174911,
    "lng": 137.016739,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0027930/"
  },
  {
    "name": "タイムズ植田1丁目",
    "address": "愛知県名古屋市天白区植田1-2127",
    "lat": 35.12817,
    "lng": 136.985046,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0024937/"
  },
  {
    "name": "タイムズ植田3丁目第2",
    "address": "愛知県名古屋市天白区植田3-1707",
    "lat": 35.127972,
    "lng": 136.987091,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0062277/"
  },
  {
    "name": "タイムズサンシャインＫＹＯＲＡＫＵ植田",
    "address": "愛知県名古屋市天白区植田3-1805",
    "lat": 35.127331,
    "lng": 136.987442,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0066831/"
  },
  {
    "name": "タイムズ植田3丁目",
    "address": "愛知県名古屋市天白区植田3-808",
    "lat": 35.12883,
    "lng": 136.988876,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0061054/"
  },
  {
    "name": "タイムズ徳兵衛植田店",
    "address": "愛知県名古屋市天白区植田3-1102",
    "lat": 35.128448,
    "lng": 136.98735,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0035330/"
  },
  {
    "name": "タイムズ塩釜口",
    "address": "愛知県名古屋市天白区塩釜口2-1301",
    "lat": 35.132442,
    "lng": 136.978363,
    "hourlyRate": 440,
    "rates": {
      "weekday": "15分 110円",
      "holiday": "15分 110円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0016108/"
  }
,
  {
    "name": "タイムズ井口",
    "address": "愛知県名古屋市天白区井口1-1508",
    "lat": 35.127155,
    "lng": 136.992691,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 770,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0017487/"
  },
  {
    "name": "タイムズ新池町第2",
    "address": "愛知県名古屋市千種区新池町1-19",
    "lat": 35.163609,
    "lng": 136.97496,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0019934/"
  },
  {
    "name": "タイムズ星が丘駅前第4",
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0061345/"
  },
  {
    "name": "タイムズ月見坂町1丁目",
    "address": "愛知県名古屋市千種区月見坂町1",
    "lat": 35.168118,
    "lng": 136.955795,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0064492/"
  },
  {
    "name": "タイムズ清住町第2",
    "address": "愛知県名古屋市千種区清住町3-38",
    "lat": 35.162308,
    "lng": 136.970047,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 450
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0039047/"
  },
  {
    "name": "タイムズ星が丘駅前第5",
    "address": "愛知県名古屋市千種区井上町78",
    "lat": 35.162167,
    "lng": 136.983902,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0070806/"
  },
  {
    "name": "タイムズ星ヶ丘駅前",
    "address": "愛知県名古屋市千種区井上町70",
    "lat": 35.162724,
    "lng": 136.984375,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
    },
    "maxRate": {
      "weekday": 990,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0047176/"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0053959/"
  },
  {
    "name": "タイムズ愛知学院大学歯学部附属病院第1",
    "address": "愛知県名古屋市千種区月見坂町2-15",
    "lat": 35.167244,
    "lng": 136.955994,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0059351/"
  },
  {
    "name": "タイムズ愛知学院大学歯学部附属病院第2",
    "address": "愛知県名古屋市千種区末盛通2-11",
    "lat": 35.166405,
    "lng": 136.95697,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0081822/"
  },
  {
    "name": "タイムズ加藤病院",
    "address": "愛知県名古屋市千種区観月町2-13",
    "lat": 35.165653,
    "lng": 136.956055,
    "hourlyRate": 880,
    "rates": {
      "weekday": "30分 440円",
      "holiday": "30分 440円"
    },
    "maxRate": {
      "weekday": 990,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0034940/"
  },
  {
    "name": "タイムズ楠元町東",
    "address": "愛知県名古屋市千種区楠元町1-27",
    "lat": 35.167873,
    "lng": 136.962341,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0083986/"
  },
  {
    "name": "タイムズ内山1丁目",
    "address": "愛知県名古屋市千種区内山1-7",
    "lat": 35.173981,
    "lng": 136.935684,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 650,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0075421/"
  }
,
  {
    "name": "タイムズ楠元町1丁目",
    "address": "愛知県名古屋市千種区楠元町1-48",
    "lat": 35.16711,
    "lng": 136.96228,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1000,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0050459/"
  },
  {
    "name": "タイムズ本山第2",
    "address": "愛知県名古屋市千種区見附町1-1",
    "lat": 35.162937,
    "lng": 136.963089,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0022738/"
  },
  {
    "name": "タイムズ徳川1丁目",
    "address": "愛知県名古屋市東区徳川1-10",
    "lat": 35.181313,
    "lng": 136.923416,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 750,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0030838/"
  },
  {
    "name": "タイムズYAMADA web.com 千種センター店",
    "address": "愛知県名古屋市千種区内山1-20",
    "lat": 35.172504,
    "lng": 136.935455,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0073326/"
  },
  {
    "name": "タイムズコメダ珈琲店葵店おかげ庵葵店",
    "address": "愛知県名古屋市東区葵3-12",
    "lat": 35.172729,
    "lng": 136.931976,
    "hourlyRate": 400,
    "rates": {
      "weekday": "15分 100円",
      "holiday": "15分 100円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0062932/"
  },
  {
    "name": "タイムズ豊前町",
    "address": "愛知県名古屋市東区豊前町2-37",
    "lat": 35.176872,
    "lng": 136.934418,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0021442/"
  },
  {
    "name": "タイムズ今池4丁目第2",
    "address": "愛知県名古屋市千種区今池4-8",
    "lat": 35.170528,
    "lng": 136.937836,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0065036/"
  },
  {
    "name": "タイムズ神田町",
    "address": "愛知県名古屋市千種区神田町11",
    "lat": 35.176468,
    "lng": 136.940216,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 600,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0044451/"
  },
  {
    "name": "タイムズ東部医療センター前第2",
    "address": "愛知県名古屋市千種区仲田1-6",
    "lat": 35.173115,
    "lng": 136.941772,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0084332/"
  },
  {
    "name": "タイムズ筒井町4丁目",
    "address": "愛知県名古屋市東区筒井町4-33",
    "lat": 35.177391,
    "lng": 136.931137,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0029996/"
  }
,
  {
    "name": "タイムズ清水",
    "address": "愛知県名古屋市北区清水5-4",
    "lat": 35.193043,
    "lng": 136.913834,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0017009/"
  },
  {
    "name": "タイムズドラッグスギヤマ白壁店",
    "address": "愛知県名古屋市東区芳野1-1",
    "lat": 35.183952,
    "lng": 136.919662,
    "hourlyRate": 550,
    "rates": {
      "weekday": "60分 550円",
      "holiday": "60分 550円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0034064/"
  },
  {
    "name": "タイムズコメダ珈琲白壁店",
    "address": "愛知県名古屋市東区白壁3-20",
    "lat": 35.183842,
    "lng": 136.917923,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0043179/"
  },
  {
    "name": "タイムズ今池第10",
    "address": "愛知県名古屋市千種区今池3-3",
    "lat": 35.167068,
    "lng": 136.934921,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0018484/"
  },
  {
    "name": "タイムズ東部医療センター前",
    "address": "愛知県名古屋市千種区高見1-1",
    "lat": 35.17321,
    "lng": 136.943512,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0069091/"
  },
  {
    "name": "タイムズナゴヤセントラルガーデン第2",
    "address": "愛知県名古屋市千種区高見2-1",
    "lat": 35.171146,
    "lng": 136.943741,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0078169/"
  },
  {
    "name": "タイムズナゴヤセントラルガーデン第1",
    "address": "愛知県名古屋市千種区高見2-2",
    "lat": 35.171093,
    "lng": 136.944901,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 1200
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0078168/"
  }
,
  {
    "name": "タイムズ白壁第3",
    "address": "愛知県名古屋市東区白壁3-10",
    "lat": 35.184464,
    "lng": 136.915466,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0032136/"
  },
  {
    "name": "タイムズ大杉1丁目",
    "address": "愛知県名古屋市北区大杉1-7",
    "lat": 35.185699,
    "lng": 136.915176,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0034241/"
  },
  {
    "name": "タイムズ黒川駅前第2",
    "address": "愛知県名古屋市北区田幡2-14",
    "lat": 35.196411,
    "lng": 136.910812,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 750,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0077216/"
  },
  {
    "name": "タイムズ黒川駅前",
    "address": "愛知県名古屋市北区田幡2-13",
    "lat": 35.196899,
    "lng": 136.911194,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
    },
    "maxRate": {
      "weekday": 750,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0077215/"
  },
  {
    "name": "タイムズ高見",
    "address": "愛知県名古屋市千種区高見2-10",
    "lat": 35.169544,
    "lng": 136.944519,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1000,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0013388/"
  },
  {
    "name": "タイムズ池下第9",
    "address": "愛知県名古屋市千種区池下1-7",
    "lat": 35.168365,
    "lng": 136.943268,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0035260/"
  }
,
  {
    "name": "タイムズ東外堀町",
    "address": "愛知県名古屋市東区東外堀町65",
    "lat": 35.180531,
    "lng": 136.909912,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1100,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0033678/"
  },
  {
    "name": "タイムズ小林内科",
    "address": "愛知県名古屋市北区黒川本通3-63",
    "lat": 35.199013,
    "lng": 136.912979,
    "hourlyRate": 330,
    "rates": {
      "weekday": "60分 330円",
      "holiday": "60分 330円"
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0040885/"
  },
  {
    "name": "タイムズ志賀町第2",
    "address": "愛知県名古屋市北区志賀町3-54",
    "lat": 35.200966,
    "lng": 136.916458,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0042484/"
  },
  {
    "name": "タイムズグンゼスポーツスカイガーディン",
    "address": "愛知県名古屋市西区又穂町6-8",
    "lat": 35.205227,
    "lng": 136.892548,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0067573/"
  },
  {
    "name": "タイムズ池下第6",
    "address": "愛知県名古屋市千種区池下1-7",
    "lat": 35.168365,
    "lng": 136.943268,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0030010/"
  },
  {
    "name": "タイムズ春岡1丁目第5",
    "address": "愛知県名古屋市千種区春岡1-12",
    "lat": 35.166615,
    "lng": 136.942169,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0039128/"
  },
  {
    "name": "タイムズ春岡1丁目第4",
    "address": "愛知県名古屋市千種区春岡1-12",
    "lat": 35.166615,
    "lng": 136.942169,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0027778/"
  }
,
  {
    "name": "タイムズ志賀町",
    "address": "愛知県名古屋市北区志賀町5-26",
    "lat": 35.202267,
    "lng": 136.917618,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0034114/"
  },
  {
    "name": "タイムズ大野町",
    "address": "愛知県名古屋市北区大野町2-5",
    "lat": 35.204338,
    "lng": 136.915894,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0031026/"
  },
  {
    "name": "タイムズ城北町",
    "address": "愛知県名古屋市西区城北町2-12",
    "lat": 35.197628,
    "lng": 136.895233,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0017647/"
  },
  {
    "name": "タイムズ香呑町",
    "address": "愛知県名古屋市西区香呑町4-112",
    "lat": 35.20401,
    "lng": 136.895065,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0083435/"
  },
  {
    "name": "タイムズ東片端第2",
    "address": "愛知県名古屋市東区東片端町13",
    "lat": 35.178795,
    "lng": 136.911926,
    "hourlyRate": 800,
    "rates": {
      "weekday": "15分 200円",
      "holiday": "15分 200円"
    },
    "maxRate": {
      "weekday": 1400,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0044409/"
  },
  {
    "name": "タイムズ泉1丁目第4",
    "address": "愛知県名古屋市東区泉1-4",
    "lat": 35.178078,
    "lng": 136.911972,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1400,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0027656/"
  },
  {
    "name": "タイムズ大津通",
    "address": "愛知県名古屋市中区丸の内3-4",
    "lat": 35.177502,
    "lng": 136.90538,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 2000,
      "holiday": 1800
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0030917/"
  },
  {
    "name": "タイムズ泉1丁目第6",
    "address": "愛知県名古屋市東区泉1-14",
    "lat": 35.175491,
    "lng": 136.909119,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 1900,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0065843/"
  },
  {
    "name": "タイムズ高岳北",
    "address": "愛知県名古屋市東区泉2-15",
    "lat": 35.176472,
    "lng": 136.915634,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0049895/"
  },
  {
    "name": "タイムズ城西",
    "address": "愛知県名古屋市西区城西2-19",
    "lat": 35.186726,
    "lng": 136.893845,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0017515/"
  }
,
  {
    "name": "タイムズ泉1丁目第8",
    "address": "愛知県名古屋市東区泉1-22",
    "lat": 35.174419,
    "lng": 136.910873,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1600,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0085845/"
  },
  {
    "name": "タイムズ東桜第8",
    "address": "愛知県名古屋市東区東桜1-2",
    "lat": 35.17297,
    "lng": 136.911118,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 2800
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0084134/"
  },
  {
    "name": "タイムズデニーズ高岳店",
    "address": "愛知県名古屋市東区泉2-27",
    "lat": 35.174538,
    "lng": 136.91478,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 1600,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0076765/"
  },
  {
    "name": "タイムズ久屋大通パーク観光バス乗降場",
    "address": "愛知県名古屋市中区錦3-5",
    "lat": 35.17318,
    "lng": 136.907089,
    "hourlyRate": 3000,
    "rates": {
      "weekday": "20分 1000円",
      "holiday": "20分 1000円"
    },
    "maxRate": {
      "weekday": 8000,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0052336/"
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
      "holiday": 1320
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0047073/"
  },
  {
    "name": "タイムズ栄第34",
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0014833/"
  },
  {
    "name": "タイムズ安井4丁目",
    "address": "愛知県名古屋市北区安井4-18",
    "lat": 35.208775,
    "lng": 136.920547,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0042433/"
  }
,
  {
    "name": "タイムズ花の木",
    "address": "愛知県名古屋市西区花の木2-16",
    "lat": 35.188992,
    "lng": 136.890778,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0026452/"
  },
  {
    "name": "タイムズ花の木第3",
    "address": "愛知県名古屋市西区花の木2-9",
    "lat": 35.188389,
    "lng": 136.886993,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0049259/"
  },
  {
    "name": "タイムズ花の木2丁目",
    "address": "愛知県名古屋市西区花の木2-9",
    "lat": 35.188389,
    "lng": 136.886993,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0081618/"
  },
  {
    "name": "タイムズ浄心駅前",
    "address": "愛知県名古屋市西区上名古屋2-21",
    "lat": 35.192936,
    "lng": 136.891037,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0043177/"
  },
  {
    "name": "タイムズ児玉3丁目",
    "address": "愛知県名古屋市西区児玉3-38",
    "lat": 35.194424,
    "lng": 136.880569,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0071342/"
  },
  {
    "name": "タイムズ鳥見町",
    "address": "愛知県名古屋市西区鳥見町1-7",
    "lat": 35.201439,
    "lng": 136.889908,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0025825/"
  },
  {
    "name": "タイムズ枇杷島1丁目",
    "address": "愛知県名古屋市西区枇杷島1-12",
    "lat": 35.189926,
    "lng": 136.871826,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0026545/"
  },
  {
    "name": "タイムズ城西4丁目",
    "address": "愛知県名古屋市西区城西4-26",
    "lat": 35.192192,
    "lng": 136.895248,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 880,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0020868/"
  },
  {
    "name": "タイムズ上名古屋2丁目",
    "address": "愛知県名古屋市西区上名古屋2-16",
    "lat": 35.193665,
    "lng": 136.894424,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0018656/"
  },
  {
    "name": "タイムズ上名古屋1丁目第2",
    "address": "愛知県名古屋市西区上名古屋1-11",
    "lat": 35.19421,
    "lng": 136.896591,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0044537/"
  },
  {
    "name": "タイムズ宝田町",
    "address": "愛知県名古屋市瑞穂区宝田町6-1",
    "lat": 35.129314,
    "lng": 136.926331,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0027452/"
  }
,
  {
    "name": "タイムズ栄生駅北",
    "address": "愛知県名古屋市西区栄生2-11",
    "lat": 35.185432,
    "lng": 136.873657,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0083839/"
  }
,
  {
    "name": "タイムズ市大病院南",
    "address": "愛知県名古屋市瑞穂区川澄町1-10",
    "lat": 35.138248,
    "lng": 136.936783,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0024927/"
  },
  {
    "name": "タイムズ藤成通",
    "address": "愛知県名古屋市昭和区藤成通5-11",
    "lat": 35.141571,
    "lng": 136.942673,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0019009/"
  },
  {
    "name": "タイムズ鳴海",
    "address": "愛知県名古屋市緑区鳴海町向田110",
    "lat": 35.07843,
    "lng": 136.950745,
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
    "source": "https://times-info.net/P23-aichi/C114/park-detail-BUK0033772/"
  },
  {
    "name": "タイムズ平岩病院",
    "address": "愛知県名古屋市緑区鳴海町相原町22",
    "lat": 35.078514,
    "lng": 136.952805,
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
    "source": "https://times-info.net/P23-aichi/C114/park-detail-BUK0064604/"
  },
  {
    "name": "タイムズ大高駅東",
    "address": "愛知県名古屋市緑区大高町鷲津山25",
    "lat": 35.068043,
    "lng": 136.941132,
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
    "source": "https://times-info.net/P23-aichi/C114/park-detail-BUK0035996/"
  },
  {
    "name": "タイムズコノミヤ笠寺店",
    "address": "愛知県名古屋市南区前浜通3-8",
    "lat": 35.094593,
    "lng": 136.930405,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0075873/"
  }
,
  {
    "name": "タイムズ丸の内3丁目第4",
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
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0043859/"
  },
  {
    "name": "タイムズ烏森駅前",
    "address": "愛知県名古屋市中川区烏森町四反畑127",
    "lat": 35.15173,
    "lng": 136.863281,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0075639/"
  },
  {
    "name": "タイムズ烏森町1丁目",
    "address": "愛知県名古屋市中村区烏森町1-21",
    "lat": 35.155853,
    "lng": 136.86235,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0044478/"
  },
  {
    "name": "タイムズ松葉町",
    "address": "愛知県名古屋市中川区松葉町2-19",
    "lat": 35.151863,
    "lng": 136.864777,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0030282/"
  },
  {
    "name": "タイムズ中村大正町",
    "address": "愛知県名古屋市中村区大正町4-42",
    "lat": 35.161922,
    "lng": 136.874023,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0075261/"
  }
,
  {
    "name": "タイムズ栄第40",
    "address": "愛知県名古屋市中区栄3-22",
    "lat": 35.164101,
    "lng": 136.902969,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1700,
      "holiday": 900
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0022263/"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0068451/"
  },
  {
    "name": "タイムズ栄3丁目第9",
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
      "holiday": 900
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0062890/"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0046996/"
  },
  {
    "name": "タイムズ松原2丁目第3",
    "address": "愛知県名古屋市中区松原2-19",
    "lat": 35.155006,
    "lng": 136.89447,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0086191/"
  }
,
  {
    "name": "タイムズ松重町",
    "address": "愛知県名古屋市中村区松重町4",
    "lat": 35.158894,
    "lng": 136.892105,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0058704/"
  },
  {
    "name": "タイムズコメダ珈琲店日置橋店",
    "address": "愛知県名古屋市中区松原1-1",
    "lat": 35.15823,
    "lng": 136.893143,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0068108/"
  },
  {
    "name": "タイムズ運河町",
    "address": "愛知県名古屋市中川区運河町210",
    "lat": 35.15958,
    "lng": 136.885101,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 900,
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0083223/"
  },
  {
    "name": "タイムズ柳堀町",
    "address": "愛知県名古屋市中川区柳堀町1",
    "lat": 35.156647,
    "lng": 136.88652,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0034200/"
  },
  {
    "name": "タイムズ松原2丁目第2",
    "address": "愛知県名古屋市中区松原2-20",
    "lat": 35.1548,
    "lng": 136.895676,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0042443/"
  },
  {
    "name": "タイムズヤマナカ松原店",
    "address": "愛知県名古屋市中区松原2-21",
    "lat": 35.154621,
    "lng": 136.896667,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0044310/"
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0081319/"
  }
,
  {
    "name": "タイムズ橘第5",
    "address": "愛知県名古屋市中区橘1-4",
    "lat": 35.15527,
    "lng": 136.900192,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0041272/"
  },
  {
    "name": "タイムズ大須2丁目第3",
    "address": "愛知県名古屋市中区大須2-30",
    "lat": 35.158539,
    "lng": 136.901108,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 1100,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0037871/"
  },
  {
    "name": "タイムズ橘第6",
    "address": "愛知県名古屋市中区橘1-3",
    "lat": 35.155674,
    "lng": 136.898773,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0045270/"
  },
  {
    "name": "タイムズ中区松原三丁目店",
    "address": "愛知県名古屋市中区松原3-6",
    "lat": 35.153366,
    "lng": 136.898407,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 1200,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0074740/"
  },
  {
    "name": "タイムズ松原",
    "address": "愛知県名古屋市中区松原3-6",
    "lat": 35.153366,
    "lng": 136.898407,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0022373/"
  },
  {
    "name": "タイムズ大須第8",
    "address": "愛知県名古屋市中区大須3-27",
    "lat": 35.159206,
    "lng": 136.903793,
    "hourlyRate": 1000,
    "rates": {
      "weekday": "15分 250円",
      "holiday": "15分 250円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002624/"
  },
  {
    "name": "タイムズ大須3丁目第5",
    "address": "愛知県名古屋市中区大須3-21",
    "lat": 35.159634,
    "lng": 136.904343,
    "hourlyRate": 750,
    "rates": {
      "weekday": "20分 250円",
      "holiday": "20分 250円"
    },
    "maxRate": {
      "weekday": 1100,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0085438/"
  }
,
  {
    "name": "タイムズ駒方町",
    "address": "愛知県名古屋市昭和区駒方町2",
    "lat": 35.146751,
    "lng": 136.948547,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0071399/"
  },
  {
    "name": "タイムズ川名",
    "address": "愛知県名古屋市昭和区檀渓通1-38",
    "lat": 35.147354,
    "lng": 136.947296,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0022722/"
  },
  {
    "name": "タイムズ隼人町第3",
    "address": "愛知県名古屋市昭和区隼人町12",
    "lat": 35.143291,
    "lng": 136.953506,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0086333/"
  }
,
  {
    "name": "タイムズ大金町",
    "address": "愛知県名古屋市西区大金町3-68",
    "lat": 35.204613,
    "lng": 136.890137,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0068702/"
  },
  {
    "name": "タイムズ天塚町",
    "address": "愛知県名古屋市西区天塚町2-27",
    "lat": 35.199978,
    "lng": 136.895172,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0040492/"
  }
,
  {
    "name": "タイムズ新出来2丁目",
    "address": "愛知県名古屋市東区新出来2-3",
    "lat": 35.181454,
    "lng": 136.931824,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0043515/"
  },
  {
    "name": "タイムズ徳川町",
    "address": "愛知県名古屋市東区徳川町806",
    "lat": 35.183178,
    "lng": 136.931183,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0049299/"
  }
,
  {
    "name": "タイムズ入船2丁目",
    "address": "愛知県名古屋市港区入船2-1",
    "lat": 35.094471,
    "lng": 136.880783,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0028250/"
  },
  {
    "name": "タイムズ名港西倉",
    "address": "愛知県名古屋市港区西倉町1",
    "lat": 35.095039,
    "lng": 136.878494,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 700,
      "holiday": 900
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0035860/"
  },
  {
    "name": "タイムズ名港",
    "address": "愛知県名古屋市港区名港1-2",
    "lat": 35.098198,
    "lng": 136.885422,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 600,
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0022406/"
  }
,
  {
    "name": "タイムズ藤が丘第8",
    "address": "愛知県名古屋市名東区明が丘57",
    "lat": 35.182556,
    "lng": 137.018127,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0030701/"
  },
  {
    "name": "タイムズ藤が丘第2",
    "address": "愛知県名古屋市名東区藤が丘141",
    "lat": 35.183147,
    "lng": 137.020447,
    "hourlyRate": 440,
    "rates": {
      "weekday": "15分 110円",
      "holiday": "15分 110円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0016079/"
  },
  {
    "name": "タイムズ藤が丘メディカルステーション",
    "address": "愛知県名古屋市名東区藤見が丘25",
    "lat": 35.180508,
    "lng": 137.023193,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C115/park-detail-BUK0064226/"
  }
,
  {
    "name": "タイムズ平針3丁目",
    "address": "愛知県名古屋市天白区平針3-1606",
    "lat": 35.121578,
    "lng": 137.007645,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 400,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0025543/"
  },
  {
    "name": "タイムズ名古屋記念病院立体駐車場",
    "address": "愛知県名古屋市天白区平針4-305",
    "lat": 35.121983,
    "lng": 137.006378,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0081811/"
  },
  {
    "name": "タイムズ名古屋記念病院平面駐車場",
    "address": "愛知県名古屋市天白区平針4-305",
    "lat": 35.121983,
    "lng": 137.006378,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0081813/"
  },
  {
    "name": "タイムズ平針1丁目第3",
    "address": "愛知県名古屋市天白区平針1",
    "lat": 35.126652,
    "lng": 137.002396,
    "hourlyRate": 200,
    "rates": {
      "weekday": "60分 200円",
      "holiday": "60分 200円"
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0077247/"
  },
  {
    "name": "タイムズイオンタウン有松（4Ｆ）",
    "address": "愛知県名古屋市緑区鳴海町有松裏200",
    "lat": 35.067921,
    "lng": 136.971954,
    "hourlyRate": 300,
    "rates": {
      "weekday": "60分 300円",
      "holiday": "60分 300円"
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
    "source": "https://times-info.net/P23-aichi/C114/park-detail-BUK0079198/"
  },
  {
    "name": "タイムズイオンタウン有松（5Ｆ・6Ｆ）",
    "address": "愛知県名古屋市緑区鳴海町有松裏200",
    "lat": 35.067921,
    "lng": 136.971954,
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
    "source": "https://times-info.net/P23-aichi/C114/park-detail-BUK0079212/"
  }
,
  {
    "name": "タイムズ那古野2丁目",
    "address": "愛知県名古屋市西区那古野2-23",
    "lat": 35.174938,
    "lng": 136.888123,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1200,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0043700/"
  },
  {
    "name": "タイムズデニーズ小田井店",
    "address": "愛知県名古屋市西区上小田井2-31",
    "lat": 35.218975,
    "lng": 136.87944,
    "hourlyRate": 330,
    "rates": {
      "weekday": "60分 330円",
      "holiday": "60分 330円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0034474/"
  },
  {
    "name": "タイムズ幅下1丁目",
    "address": "愛知県名古屋市西区幅下1-10",
    "lat": 35.182335,
    "lng": 136.891418,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0026091/"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0061283/"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0037589/"
  }
,
  {
    "name": "タイムズスギ薬局上小田井店",
    "address": "愛知県名古屋市西区八筋町282",
    "lat": 35.221809,
    "lng": 136.876907,
    "hourlyRate": 400,
    "rates": {
      "weekday": "15分 100円",
      "holiday": "15分 100円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0069244/"
  },
  {
    "name": "タイムズ柳橋市場前",
    "address": "愛知県名古屋市中村区名駅4-14",
    "lat": 35.169376,
    "lng": 136.88826,
    "hourlyRate": 1800,
    "rates": {
      "weekday": "10分 300円",
      "holiday": "10分 300円"
    },
    "maxRate": {
      "weekday": 1700,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0072320/"
  }
,
  {
    "name": "タイムズ新道1丁目",
    "address": "愛知県名古屋市西区新道1-14",
    "lat": 35.182148,
    "lng": 136.887802,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 850,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0040559/"
  },
  {
    "name": "タイムズ新道1丁目第3",
    "address": "愛知県名古屋市西区新道1-13",
    "lat": 35.181683,
    "lng": 136.887848,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0082386/"
  },
  {
    "name": "タイムズ丸の内2丁目第10",
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0076464/"
  }
,
  {
    "name": "タイムズ菊井1丁目第3",
    "address": "愛知県名古屋市西区菊井1-24",
    "lat": 35.181278,
    "lng": 136.882874,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0043585/"
  },
  {
    "name": "タイムズ丸の内2丁目第9",
    "address": "愛知県名古屋市中区丸の内2-10",
    "lat": 35.175396,
    "lng": 136.898544,
    "hourlyRate": 1400,
    "rates": {
      "weekday": "15分 350円",
      "holiday": "15分 350円"
    },
    "maxRate": {
      "weekday": 400,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0074420/"
  },
  {
    "name": "タイムズ名城病院",
    "address": "愛知県名古屋市中区三の丸1-3",
    "lat": 35.18074,
    "lng": 136.899673,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0081696/"
  }
,
  {
    "name": "タイムズ名駅2丁目第7",
    "address": "愛知県名古屋市西区名駅2-20",
    "lat": 35.176678,
    "lng": 136.881546,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1100,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0059089/"
  }
,
  {
    "name": "タイムズ名駅2丁目第8",
    "address": "愛知県名古屋市西区名駅2-29",
    "lat": 35.175964,
    "lng": 136.884338,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1300,
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
    "source": "https://times-info.net/P23-aichi/C104/park-detail-BUK0062184/"
  },
  {
    "name": "ＪＰタワー名古屋",
    "address": "愛知県名古屋市中村区名駅1-1",
    "lat": 35.171032,
    "lng": 136.881989,
    "hourlyRate": 700,
    "rates": {
      "weekday": "30分 350円",
      "holiday": "30分 350円"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0037929/"
  },
  {
    "name": "タイムズ則武第4",
    "address": "愛知県名古屋市中村区則武1-4",
    "lat": 35.172829,
    "lng": 136.878693,
    "hourlyRate": 1200,
    "rates": {
      "weekday": "15分 300円",
      "holiday": "15分 300円"
    },
    "maxRate": {
      "weekday": 1400,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0024037/"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0044548/"
  }
,
  {
    "name": "タイムズ則武2丁目",
    "address": "愛知県名古屋市中村区則武2-3",
    "lat": 35.171013,
    "lng": 136.877869,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1600,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0060570/"
  },
  {
    "name": "クルーズパーキング竹橋町",
    "address": "愛知県名古屋市中村区竹橋町2",
    "lat": 35.169533,
    "lng": 136.877426,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0086638/"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0044920/"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0064750/"
  },
  {
    "name": "Ｖｄｒｕｇ錦二丁目店",
    "address": "愛知県名古屋市中区錦2-6",
    "lat": 35.171734,
    "lng": 136.900101,
    "hourlyRate": 1320,
    "rates": {
      "weekday": "15分 330円",
      "holiday": "15分 330円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0051747/"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0067689/"
  }
,
  {
    "name": "タイムズ竹橋町第5",
    "address": "愛知県名古屋市中村区竹橋町20",
    "lat": 35.168709,
    "lng": 136.875504,
    "hourlyRate": 660,
    "rates": {
      "weekday": "20分 220円",
      "holiday": "20分 220円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0078491/"
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
      "holiday": 1400
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0061291/"
  }
,
  {
    "name": "名古屋セントラル病院第2",
    "address": "愛知県名古屋市中村区太閤3-7",
    "lat": 35.165241,
    "lng": 136.87944,
    "hourlyRate": 600,
    "rates": {
      "weekday": "60分 600円",
      "holiday": "60分 600円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0037457/"
  }
,
  {
    "name": "名古屋セントラル病院第1",
    "address": "愛知県名古屋市中村区太閤3-7",
    "lat": 35.165241,
    "lng": 136.87944,
    "hourlyRate": 600,
    "rates": {
      "weekday": "60分 600円",
      "holiday": "60分 600円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0037456/"
  },
  {
    "name": "名古屋セントラル病院第3",
    "address": "愛知県名古屋市中村区太閤1-19",
    "lat": 35.165871,
    "lng": 136.881287,
    "hourlyRate": 600,
    "rates": {
      "weekday": "60分 600円",
      "holiday": "60分 600円"
    },
    "maxRate": {
      "weekday": 400,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0033004/"
  },
  {
    "name": "キング観光サウザンド栄住吉店",
    "address": "愛知県名古屋市中区栄3-2",
    "lat": 35.168377,
    "lng": 136.903992,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
    },
    "maxRate": {
      "weekday": 1400,
      "holiday": 2200
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0029575/"
  },
  {
    "name": "タイムズＳＡＫＡＥ",
    "address": "愛知県名古屋市中区錦3-23",
    "lat": 35.16927,
    "lng": 136.905106,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1500,
      "holiday": 2500
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0073455/"
  }
,
  {
    "name": "クルーズパーキング栄",
    "address": "愛知県名古屋市中区栄3-23",
    "lat": 35.164417,
    "lng": 136.904007,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 400,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0085603/"
  },
  {
    "name": "クルーズパーキング栄三丁目",
    "address": "愛知県名古屋市中区栄3-23",
    "lat": 35.164417,
    "lng": 136.904007,
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
    "capacity": 10,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0085593/"
  }
,
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
      "holiday": 900
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0059003/"
  },
  {
    "name": "タイムズ錦第6",
    "address": "愛知県名古屋市中区錦1-16",
    "lat": 35.168674,
    "lng": 136.892975,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1600,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0021170/"
  }
,
  {
    "name": "タイムズ名駅南第17",
    "address": "愛知県名古屋市中村区名駅南1-16",
    "lat": 35.167885,
    "lng": 136.888885,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 1500,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0085949/"
  }
,
  {
    "name": "キング観光サウザンド名古屋駅柳橋店",
    "address": "愛知県名古屋市中村区名駅4-11",
    "lat": 35.169884,
    "lng": 136.8871,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
    },
    "maxRate": {
      "weekday": 800,
      "holiday": 800
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0057016/"
  }
,
  {
    "name": "タイムズ東桜2丁目第2",
    "address": "愛知県名古屋市東区東桜2-3",
    "lat": 35.173756,
    "lng": 136.918121,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
    },
    "maxRate": {
      "weekday": 1300,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0056977/"
  }
,
  {
    "name": "タイムズ寿元寺",
    "address": "愛知県名古屋市東区東桜2-16",
    "lat": 35.171581,
    "lng": 136.917633,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 1400,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0084340/"
  },
  {
    "name": "タイムズ本住寺",
    "address": "愛知県名古屋市東区東桜2-18",
    "lat": 35.170403,
    "lng": 136.918564,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0071394/"
  },
  {
    "name": "タイムズ葵1丁目第2",
    "address": "愛知県名古屋市東区葵1-25",
    "lat": 35.170685,
    "lng": 136.921967,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0036061/"
  },
  {
    "name": "タイムズ葵1丁目第3",
    "address": "愛知県名古屋市東区葵1-23",
    "lat": 35.1703,
    "lng": 136.921722,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1300,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0070341/"
  },
  {
    "name": "タイムズ葵1丁目",
    "address": "愛知県名古屋市東区葵1-13",
    "lat": 35.171879,
    "lng": 136.923691,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0030663/"
  }
,
  {
    "name": "キング観光サウザンド栄東新町店",
    "address": "愛知県名古屋市中区新栄1-1",
    "lat": 35.168819,
    "lng": 136.915131,
    "hourlyRate": 600,
    "rates": {
      "weekday": "30分 300円",
      "holiday": "30分 300円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0032178/"
  },
  {
    "name": "タイムズ新栄第4",
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002546/"
  },
  {
    "name": "タイムズ新栄第15",
    "address": "愛知県名古屋市中区新栄2-24",
    "lat": 35.167194,
    "lng": 136.920578,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0025317/"
  },
  {
    "name": "タイムズ葵3丁目",
    "address": "愛知県名古屋市東区葵3-20",
    "lat": 35.170177,
    "lng": 136.927063,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 1500,
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0022950/"
  }
,
  {
    "name": "タイムズ千種駅南",
    "address": "愛知県名古屋市千種区今池1-22",
    "lat": 35.168678,
    "lng": 136.93074,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0084220/"
  }
,
  {
    "name": "タイムズ今池2丁目第4",
    "address": "愛知県名古屋市千種区今池2-13",
    "lat": 35.167274,
    "lng": 136.929276,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0085112/"
  }
,
  {
    "name": "タイムズ大杉町",
    "address": "愛知県名古屋市北区大杉町1-8",
    "lat": 35.19101,
    "lng": 136.915894,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0034007/"
  },
  {
    "name": "タイムズ大蔵町第3",
    "address": "愛知県名古屋市北区大蔵町34",
    "lat": 35.195564,
    "lng": 136.919586,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0047711/"
  },
  {
    "name": "タイムズ大蔵町第2",
    "address": "愛知県名古屋市北区大蔵町10",
    "lat": 35.195267,
    "lng": 136.91954,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C103/park-detail-BUK0046938/"
  }
,
  {
    "name": "タイムズ桜本町",
    "address": "愛知県名古屋市南区桜本町37",
    "lat": 35.102146,
    "lng": 136.935181,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0048614/"
  }
,
  {
    "name": "タイムズ植田東1丁目",
    "address": "愛知県名古屋市天白区植田東1-1013",
    "lat": 0,
    "lng": 0,
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
    "source": "https://times-info.net/P23-aichi/C116/park-detail-BUK0047381/"
  }
,
  {
    "name": "タイムズ南十番町ショッピングプラザ",
    "address": "愛知県名古屋市港区南十番町1-1",
    "lat": 35.117973,
    "lng": 136.882858,
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0024828/"
  },
  {
    "name": "タイムズモール9番街 北",
    "address": "愛知県名古屋市港区七番町1-3",
    "lat": 35.117603,
    "lng": 136.886353,
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0022397/"
  },
  {
    "name": "タイムズ金城ふ頭大型車",
    "address": "愛知県名古屋市港区金城ふ頭3-2",
    "lat": 35.047249,
    "lng": 136.849808,
    "hourlyRate": 0,
    "rates": {
      "weekday": "",
      "holiday": ""
    },
    "maxRate": {
      "weekday": 3960,
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0026695/"
  }
,
  {
    "name": "タイムズモール9番街 中央",
    "address": "愛知県名古屋市港区七番町1-3",
    "lat": 35.117603,
    "lng": 136.886353,
    "hourlyRate": 200,
    "rates": {
      "weekday": "30分 100円",
      "holiday": "30分 100円"
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
    "source": "https://times-info.net/P23-aichi/C111/park-detail-BUK0022396/"
  }
,
  {
    "name": "タイムズ喜多の湯・山王温泉",
    "address": "愛知県名古屋市中川区山王1-6",
    "lat": 35.153137,
    "lng": 136.89035,
    "hourlyRate": 330,
    "rates": {
      "weekday": "60分 330円",
      "holiday": "60分 330円"
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0039282/"
  },
  {
    "name": "タイムズ妙音通",
    "address": "愛知県名古屋市瑞穂区妙音通2-46",
    "lat": 35.116814,
    "lng": 136.927124,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0034027/"
  }
,
  {
    "name": "タイムズ苗代町",
    "address": "愛知県名古屋市瑞穂区苗代町11",
    "lat": 35.118629,
    "lng": 136.925415,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0035219/"
  },
  {
    "name": "タイムズ呼続元町",
    "address": "愛知県名古屋市南区呼続元町9",
    "lat": 35.114994,
    "lng": 136.931854,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0033327/"
  },
  {
    "name": "タイムズ塩入町",
    "address": "愛知県名古屋市瑞穂区塩入町6",
    "lat": 35.118938,
    "lng": 136.920364,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0030408/"
  },
  {
    "name": "タイムズ露橋1丁目",
    "address": "愛知県名古屋市中川区露橋1-24",
    "lat": 35.152836,
    "lng": 136.886093,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0034840/"
  }
,
  {
    "name": "タイムズ山王通",
    "address": "愛知県名古屋市昭和区福江1-7",
    "lat": 35.149822,
    "lng": 136.913696,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0029659/"
  }
,
  {
    "name": "クルーズパーキング白金",
    "address": "愛知県名古屋市昭和区白金2-4",
    "lat": 35.146633,
    "lng": 136.917252,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
    },
    "maxRate": {
      "weekday": 700,
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
    "source": "https://times-info.net/P23-aichi/C107/park-detail-BUK0086635/"
  }
,
  {
    "name": "タイムズ名南病院第3",
    "address": "愛知県名古屋市南区五条町2",
    "lat": 35.102123,
    "lng": 136.902863,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0082070/"
  },
  {
    "name": "タイムズ名南病院第2",
    "address": "愛知県名古屋市南区五条町2",
    "lat": 35.102123,
    "lng": 136.902863,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0082069/"
  },
  {
    "name": "タイムズ名南病院第4",
    "address": "愛知県名古屋市南区南陽通5-1",
    "lat": 35.102184,
    "lng": 136.901779,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0082071/"
  },
  {
    "name": "タイムズ名南病院第1",
    "address": "愛知県名古屋市南区南陽通5-2",
    "lat": 35.100746,
    "lng": 136.901596,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0082068/"
  },
  {
    "name": "タイムズ道徳通2丁目",
    "address": "愛知県名古屋市南区道徳通2-1",
    "lat": 35.100807,
    "lng": 136.904984,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 880,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0026523/"
  },
  {
    "name": "名古屋共立病院第5駐車場",
    "address": "愛知県名古屋市中川区法華2-89",
    "lat": 35.125103,
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
    "source": "https://times-info.net/P23-aichi/C110/park-detail-BUK0049760/"
  }
,
  {
    "name": "タイムズ芝町",
    "address": "愛知県名古屋市南区芝町1",
    "lat": 35.099072,
    "lng": 136.942535,
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
    "source": "https://times-info.net/P23-aichi/C112/park-detail-BUK0047966/"
  },
  {
    "name": "タイムズ新瑞橋西",
    "address": "愛知県名古屋市瑞穂区妙音通4-47",
    "lat": 35.117409,
    "lng": 136.934357,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 800,
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0078295/"
  },
  {
    "name": "タイムズｕ ＡＲＡＴＡＭＡＢＡＳＨＩ",
    "address": "愛知県名古屋市瑞穂区洲山町2-20",
    "lat": 35.118004,
    "lng": 136.938446,
    "hourlyRate": 440,
    "rates": {
      "weekday": "30分 220円",
      "holiday": "30分 220円"
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
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0022682/"
  }
,
  {
    "name": "クルーズパーキング名駅",
    "address": "愛知県名古屋市中村区名駅5-22",
    "lat": 35.17128,
    "lng": 136.891953,
    "hourlyRate": 900,
    "rates": {
      "weekday": "20分 300円",
      "holiday": "20分 300円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 2400
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0086631/"
  }
,
  {
    "name": "タイムズ錦第9",
    "address": "愛知県名古屋市中区錦1-7",
    "lat": 35.171326,
    "lng": 136.893753,
    "hourlyRate": 880,
    "rates": {
      "weekday": "15分 220円",
      "holiday": "15分 220円"
    },
    "maxRate": {
      "weekday": 2500,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0046062/"
  }
,
  {
    "name": "タイムズ畑江通第3",
    "address": "愛知県名古屋市中村区畑江通7-6",
    "lat": 35.15781,
    "lng": 136.861206,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 550,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0026202/"
  }
,
  {
    "name": "タイムズ偕行会城西病院",
    "address": "愛知県名古屋市中村区北畑町4-1",
    "lat": 35.159004,
    "lng": 136.865616,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0049705/"
  },
  {
    "name": "タイムズ北畑町",
    "address": "愛知県名古屋市中村区北畑町4-20",
    "lat": 35.158115,
    "lng": 136.865692,
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0019533/"
  },
  {
    "name": "タイムズ城西病院前",
    "address": "愛知県名古屋市中村区名西通3-16",
    "lat": 35.159817,
    "lng": 136.865005,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
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
    "source": "https://times-info.net/P23-aichi/C105/park-detail-BUK0064071/"
  }
,
  {
    "name": "タイムズ栄3丁目第8",
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0062586/"
  }
,
  {
    "name": "タイムズスシロー名古屋新栄店",
    "address": "愛知県名古屋市中区新栄1-39",
    "lat": 35.163212,
    "lng": 136.915802,
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
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0072699/"
  }
,
  {
    "name": "タイムズ千代田第2",
    "address": "愛知県名古屋市中区千代田1-12",
    "lat": 35.15979,
    "lng": 136.911377,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0002607/"
  }
,
  {
    "name": "タイムズヤマナカつるまい店",
    "address": "愛知県名古屋市中区千代田2-20",
    "lat": 35.156807,
    "lng": 136.912109,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0079831/"
  }
,
  {
    "name": "タイムズスギ薬局上前津店",
    "address": "愛知県名古屋市中区富士見町3",
    "lat": 35.15419,
    "lng": 136.906937,
    "hourlyRate": 300,
    "rates": {
      "weekday": "60分 300円",
      "holiday": "60分 300円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0075084/"
  }
,
  {
    "name": "タイムズ富士見第3",
    "address": "愛知県名古屋市中区富士見町9",
    "lat": 35.153351,
    "lng": 136.905243,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0030578/"
  }
,
  {
    "name": "タイムズ伊勢山2丁目",
    "address": "愛知県名古屋市中区伊勢山2-9",
    "lat": 35.147953,
    "lng": 136.900742,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0035616/"
  },
  {
    "name": "タイムズ伊勢山2丁目第2",
    "address": "愛知県名古屋市中区伊勢山2-13",
    "lat": 35.147392,
    "lng": 136.900757,
    "hourlyRate": 220,
    "rates": {
      "weekday": "60分 220円",
      "holiday": "60分 220円"
    },
    "maxRate": {
      "weekday": 1200,
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0044042/"
  }
,
  {
    "name": "タイムズ金山第2",
    "address": "愛知県名古屋市中区金山1-7",
    "lat": 35.145706,
    "lng": 136.900818,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0013413/"
  },
  {
    "name": "タイムズスギ薬局金山北店",
    "address": "愛知県名古屋市中区金山2-3",
    "lat": 35.146645,
    "lng": 136.905289,
    "hourlyRate": 600,
    "rates": {
      "weekday": "20分 200円",
      "holiday": "20分 200円"
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
    "source": "https://times-info.net/P23-aichi/C106/park-detail-BUK0075039/"
  }
,
  {
    "name": "タイムズ出来町",
    "address": "愛知県名古屋市東区出来町3-3",
    "lat": 35.181992,
    "lng": 136.938477,
    "hourlyRate": 330,
    "rates": {
      "weekday": "20分 110円",
      "holiday": "20分 110円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0016214/"
  }
,
  {
    "name": "タイムズ矢田南3丁目",
    "address": "愛知県名古屋市東区矢田南3-7",
    "lat": 35.185444,
    "lng": 136.943497,
    "hourlyRate": 220,
    "rates": {
      "weekday": "30分 110円",
      "holiday": "30分 110円"
    },
    "maxRate": {
      "weekday": 300,
      "holiday": 2200
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0043828/"
  }
,
  {
    "name": "タイムズ矢田4丁目第2",
    "address": "愛知県名古屋市東区矢田4-4",
    "lat": 35.194344,
    "lng": 136.942169,
    "hourlyRate": 500,
    "rates": {
      "weekday": "30分 250円",
      "holiday": "30分 250円"
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
    "source": "https://times-info.net/P23-aichi/C102/park-detail-BUK0048249/"
  }
,
  {
    "name": "愛知学院大学歯学部附属病院北",
    "address": "愛知県名古屋市千種区姫池通3-6",
    "lat": 35.16721,
    "lng": 136.957214,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0056949/"
  },
  {
    "name": "愛知学院大学歯学部附属病院南",
    "address": "愛知県名古屋市千種区田代本通1-5",
    "lat": 35.165302,
    "lng": 136.956818,
    "hourlyRate": 800,
    "rates": {
      "weekday": "30分 400円",
      "holiday": "30分 400円"
    },
    "maxRate": {
      "weekday": 300,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0056951/"
  }
,
  {
    "name": "タイムズ園山町1丁目",
    "address": "愛知県名古屋市千種区園山町1-14",
    "lat": 35.159019,
    "lng": 136.967728,
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0051751/"
  },
  {
    "name": "タイムズ朝岡団地",
    "address": "愛知県名古屋市千種区朝岡町3-92",
    "lat": 35.160576,
    "lng": 136.966599,
    "hourlyRate": 400,
    "rates": {
      "weekday": "30分 200円",
      "holiday": "30分 200円"
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
    "source": "https://times-info.net/P23-aichi/C101/park-detail-BUK0085026/"
  },
  {
    "name": "タイムズ釜塚町２丁目",
    "address": "愛知県名古屋市瑞穂区釜塚町2-44",
    "lat": 35.115959,
    "lng": 136.943314,
    "hourlyRate": 300,
    "rates": {
      "weekday": "40分 200円",
      "holiday": "40分 200円"
    },
    "maxRate": {
      "weekday": 500,
      "holiday": 500
    },
    "hours": "24時間",
    "capacity": 9,
    "payment": {
      "cash": true,
      "credit": true,
      "qr": true
    },
    "placeCid": "",
    "placeFid": "",
    "note": "",
    "source": "https://times-info.net/P23-aichi/C108/park-detail-BUK0080344/"
  },
  {
    "name": "名鉄協商パーキング 名駅南第７",
    "address": "愛知県名古屋市中村区名駅南1-11",
    "lat": 35.166412,
    "lng": 136.889572,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1300, "holiday": null },
    "hours": "24時間",
    "capacity": 21,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大600円（時間帯あり）",
    "source": "https://mkp.jp/search/detail/002548-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅２丁目第７",
    "address": "愛知県名古屋市西区名駅2-28",
    "lat": 35.175293,
    "lng": 136.885254,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1300, "holiday": null },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/002766-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅２丁目",
    "address": "愛知県名古屋市西区名駅2-27",
    "lat": 35.176041,
    "lng": 136.885345,
    "hourlyRate": 800,
    "rates": { "weekday": "15分 200円", "holiday": "15分 200円" },
    "maxRate": { "weekday": 1400, "holiday": null },
    "hours": "24時間",
    "capacity": 25,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/001962-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅３丁目ＰＢ",
    "address": "愛知県名古屋市中村区名駅3-9",
    "lat": 35.173923,
    "lng": 136.886444,
    "hourlyRate": 800,
    "rates": { "weekday": "15分 200円", "holiday": "15分 200円" },
    "maxRate": { "weekday": 1500, "holiday": 1500 },
    "hours": "24時間",
    "capacity": 86,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/004040-0/"
  },
  {
    "name": "名鉄協商パーキング 名古屋市営久屋",
    "address": "愛知県名古屋市中区栄3-5-12",
    "lat": 35.168533,
    "lng": 136.908096,
    "hourlyRate": 600,
    "rates": { "weekday": "30分 300円", "holiday": "30分 300円" },
    "maxRate": { "weekday": 1500, "holiday": null },
    "hours": "07:00〜24:00",
    "capacity": 486,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/004634-0/"
  },
  {
    "name": "名鉄協商パーキング ナディアパーク",
    "address": "愛知県名古屋市中区栄3-18-1",
    "lat": 35.165493,
    "lng": 136.90538,
    "hourlyRate": 600,
    "rates": { "weekday": "30分 300円", "holiday": "30分 300円" },
    "maxRate": { "weekday": 1500, "holiday": null },
    "hours": "24時間",
    "capacity": 420,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/001181-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅４丁目",
    "address": "愛知県名古屋市中村区名駅4-16",
    "lat": 35.170673,
    "lng": 136.888077,
    "hourlyRate": 1200,
    "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/001528-0/"
  },
  {
    "name": "名鉄協商パーキング 上社第３",
    "address": "愛知県名古屋市名東区上社1-702",
    "lat": 35.174389,
    "lng": 137.007339,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 400, "holiday": 400 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "最大料金は夜間（18:00-08:00）のみ",
    "source": "https://mkp.jp/search/detail/003008-0/"
  },
  {
    "name": "名鉄協商パーキング 名古屋市中央卸売市場前",
    "address": "愛知県名古屋市中川区柳川町14",
    "lat": 35.137787,
    "lng": 136.897232,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/003141-0/"
  },
  {
    "name": "名鉄協商パーキング 堀田駅東第７",
    "address": "愛知県名古屋市瑞穂区苗代町27",
    "lat": 35.117054,
    "lng": 136.923798,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（00:00-08:00）",
    "source": "https://mkp.jp/search/detail/005335-0/"
  },
  {
    "name": "名鉄協商パーキング 丸田町第３",
    "address": "愛知県名古屋市中区栄5-23",
    "lat": 35.162273,
    "lng": 136.914978,
    "hourlyRate": 300,
    "rates": { "weekday": "20分 100円（昼）/ 60分 100円（夜）", "holiday": "20分 100円（昼）/ 60分 100円（夜）" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼08:00-20:00最大1000円、夜最大500円",
    "source": "https://mkp.jp/search/detail/002306-0/"
  },
  {
    "name": "名鉄協商パーキング 当知町",
    "address": "愛知県名古屋市港区当知町8-64-3",
    "lat": 35.110172,
    "lng": 136.838974,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003332-0/"
  },
  {
    "name": "名鉄協商パーキング 名古屋市中央卸売市場前第２",
    "address": "愛知県名古屋市熱田区川並町313-1",
    "lat": 35.135834,
    "lng": 136.896149,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/004082-0/"
  },
  {
    "name": "名鉄協商パーキング 藤が丘駅南第４",
    "address": "愛知県名古屋市名東区藤見が丘57",
    "lat": 35.180515,
    "lng": 137.021469,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 20,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "12時間最大700円",
    "source": "https://mkp.jp/search/detail/004895-0/"
  },
  {
    "name": "名鉄協商パーキング 小幡駅南第３",
    "address": "愛知県名古屋市守山区小幡常燈14-15",
    "lat": 35.199368,
    "lng": 136.97348,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大600円（21:00-08:00）",
    "source": "https://mkp.jp/search/detail/005564-0/"
  },
  {
    "name": "名鉄協商パーキング 野並駅北第２",
    "address": "愛知県名古屋市天白区野並2-266",
    "lat": 35.104424,
    "lng": 136.955261,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/004256-0/"
  },
  {
    "name": "名鉄協商パーキング 道徳駅前第３",
    "address": "愛知県名古屋市南区道徳新町7-59",
    "lat": 35.104576,
    "lng": 136.90892,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（21:00-08:00）",
    "source": "https://mkp.jp/search/detail/005549-0/"
  },
  {
    "name": "名鉄協商パーキング 藤が丘駅西第７",
    "address": "愛知県名古屋市名東区藤が丘1-2",
    "lat": 35.184807,
    "lng": 137.01825,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 19,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/004934-0/"
  },
  {
    "name": "名鉄協商パーキング 志賀本通駅前第２",
    "address": "愛知県名古屋市北区志賀本通2丁目30",
    "lat": 35.196609,
    "lng": 136.919708,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大900円",
    "source": "https://mkp.jp/search/detail/004270-0/"
  },
  {
    "name": "名鉄協商パーキング 鳴海駅南",
    "address": "愛知県名古屋市緑区鳴海町向田216-1",
    "lat": 35.077469,
    "lng": 136.949265,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/003738-0/"
  },
  {
    "name": "名鉄協商パーキング 神宮前駅東街区立体駐車場",
    "address": "愛知県名古屋市熱田区三本松町18",
    "lat": 35.124977,
    "lng": 136.91301,
    "hourlyRate": 300,
    "rates": { "weekday": "30分 150円", "holiday": "30分 150円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 130,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "最初の60分300円",
    "source": "https://mkp.jp/search/detail/004507-0/"
  },
  {
    "name": "名鉄協商パーキング 平郷町",
    "address": "愛知県名古屋市瑞穂区平郷町1-7",
    "lat": 35.132141,
    "lng": 136.920105,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 16,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/003935-0/"
  },
  {
    "name": "名鉄協商パーキング 新瑞橋第１１",
    "address": "愛知県名古屋市瑞穂区洲山町1-38-10",
    "lat": 35.119064,
    "lng": 136.938324,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/005847-0/"
  },
  {
    "name": "名鉄協商パーキング 北山町第３",
    "address": "愛知県名古屋市昭和区北山町2丁目17-15",
    "lat": 35.153194,
    "lng": 136.933197,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003523-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂区役所駅東",
    "address": "愛知県名古屋市瑞穂区東栄町8-3",
    "lat": 35.132591,
    "lng": 136.934967,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/005337-0/"
  },
  {
    "name": "名鉄協商パーキング 神宮東パークハイツ",
    "address": "愛知県名古屋市熱田区六野2-6",
    "lat": 35.13134,
    "lng": 136.915131,
    "hourlyRate": 200,
    "rates": { "weekday": "30分 100円", "holiday": "30分 100円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（20:00-08:00）、入庫30分無料",
    "source": "https://mkp.jp/search/detail/003617-0/"
  },
  {
    "name": "名鉄協商パーキング 六番町駅前",
    "address": "愛知県名古屋市熱田区六番3-101-1",
    "lat": 35.121143,
    "lng": 136.886795,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003815-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂公園第４",
    "address": "愛知県名古屋市瑞穂区萩山町3-68-1",
    "lat": 35.126442,
    "lng": 136.943359,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "07:45〜21:45",
    "capacity": 46,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "入庫30分無料・当日24:00まで最大500円",
    "source": "https://mkp.jp/search/detail/004644-0/"
  },
  {
    "name": "名鉄協商パーキング 塩付通６丁目",
    "address": "愛知県名古屋市昭和区塩付通6-47-2",
    "lat": 35.142242,
    "lng": 136.937271,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大900円（08:00-18:00）、夜最大300円",
    "source": "https://mkp.jp/search/detail/005913-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅前（立駐）",
    "address": "愛知県名古屋市西区名駅2-21",
    "lat": 35.176254,
    "lng": 136.881104,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 },
    "hours": "24時間",
    "capacity": 257,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1300円",
    "source": "https://mkp.jp/search/detail/002591-0/"
  },
  {
    "name": "名鉄協商パーキング 中日ビル駐車場",
    "address": "愛知県名古屋市中区栄4-1-1",
    "lat": 35.168846,
    "lng": 136.909363,
    "hourlyRate": 600,
    "rates": { "weekday": "30分 300円", "holiday": "30分 300円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "07:00〜24:00",
    "capacity": 225,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/004696-0/"
  },
  {
    "name": "名鉄協商パーキング セントラルパーク駐車場",
    "address": "愛知県名古屋市中区丸の内3-19-15",
    "lat": 35.174175,
    "lng": 136.907532,
    "hourlyRate": 800,
    "rates": { "weekday": "15分 200円", "holiday": "15分 200円" },
    "maxRate": { "weekday": 1600, "holiday": 1900 },
    "hours": "24時間",
    "capacity": 570,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼08:00-21:00最大/夜60分100円",
    "source": "https://mkp.jp/search/detail/004740-0/"
  },
  {
    "name": "名鉄協商パーキング 名古屋市営大須",
    "address": "愛知県名古屋市中区大須3-14-12",
    "lat": 35.161163,
    "lng": 136.90271,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 300円" },
    "maxRate": { "weekday": 1000, "holiday": null },
    "hours": "07:00〜22:00",
    "capacity": 198,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日最大1000円（07:00-22:00）",
    "source": "https://mkp.jp/search/detail/004635-0/"
  },
  {
    "name": "名鉄協商パーキング 新栄３丁目",
    "address": "愛知県名古屋市中区新栄3-18",
    "lat": 35.1665,
    "lng": 136.924698,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大600円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/002555-0/"
  },
  {
    "name": "名鉄協商パーキング 栄Ｍ",
    "address": "愛知県名古屋市中区栄4-16",
    "lat": 35.16626,
    "lng": 136.910156,
    "hourlyRate": 540,
    "rates": { "weekday": "30分 270円", "holiday": "30分 270円" },
    "maxRate": { "weekday": 1300, "holiday": 1700 },
    "hours": "24時間",
    "capacity": 139,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（22:00-06:00）",
    "source": "https://mkp.jp/search/detail/001214-0/"
  },
  {
    "name": "名鉄協商パーキング 栄東",
    "address": "愛知県名古屋市中区栄4-3",
    "lat": 35.168224,
    "lng": 136.91124,
    "hourlyRate": 800,
    "rates": { "weekday": "15分 200円", "holiday": "15分 200円" },
    "maxRate": { "weekday": 1800, "holiday": 1400 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大1000円（19:00-08:00）",
    "source": "https://mkp.jp/search/detail/001823-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅４丁目第１１",
    "address": "愛知県名古屋市中村区名駅4-4",
    "lat": 35.170341,
    "lng": 136.886246,
    "hourlyRate": 2700,
    "rates": { "weekday": "10分 450円", "holiday": "10分 450円" },
    "maxRate": { "weekday": 3300, "holiday": 3300 },
    "hours": "24時間",
    "capacity": 30,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大3300円",
    "source": "https://mkp.jp/search/detail/004375-0/"
  },
  {
    "name": "名鉄協商パーキング 栄１丁目",
    "address": "愛知県名古屋市中区栄1-16",
    "lat": 35.16571,
    "lng": 136.89444,
    "hourlyRate": 800,
    "rates": { "weekday": "15分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1400, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 23,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/002163-0/"
  },
  {
    "name": "名鉄協商パーキング 愛知県産業労働センター",
    "address": "愛知県名古屋市中村区名駅4-4",
    "lat": 35.170341,
    "lng": 136.886246,
    "hourlyRate": 640,
    "rates": { "weekday": "30分 320円", "holiday": "30分 320円" },
    "maxRate": { "weekday": 2340, "holiday": 2340 },
    "hours": "24時間",
    "capacity": 123,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間60分130円（23:00-07:00）",
    "source": "https://mkp.jp/search/detail/002856-0/"
  },
  {
    "name": "名鉄協商パーキング 大須第１２",
    "address": "愛知県名古屋市中区大須2-15",
    "lat": 35.160255,
    "lng": 136.901505,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/002283-0/"
  },
  {
    "name": "名鉄協商パーキング 白川公園",
    "address": "愛知県名古屋市中区栄2-10",
    "lat": 35.165779,
    "lng": 136.898376,
    "hourlyRate": 800,
    "rates": { "weekday": "15分 200円", "holiday": "15分 200円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 },
    "hours": "24時間",
    "capacity": 13,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（18:00-07:00）",
    "source": "https://mkp.jp/search/detail/001934-0/"
  },
  {
    "name": "名鉄協商パーキング 明治２丁目",
    "address": "愛知県名古屋市南区明治2-29",
    "lat": 35.109871,
    "lng": 136.908203,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/005286-0/"
  },
  {
    "name": "名鉄協商パーキング 千種駅北",
    "address": "愛知県名古屋市千種区内山3-22",
    "lat": 35.171238,
    "lng": 136.932175,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大900円/夜最大500円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/001559-0/"
  },
  {
    "name": "名鉄協商パーキング 千種公園北",
    "address": "愛知県名古屋市千種区北千種1-8-27",
    "lat": 35.179035,
    "lng": 136.942184,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 17,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/004888-0/"
  },
  {
    "name": "名鉄協商パーキング 千種駅南",
    "address": "愛知県名古屋市千種区今池1-2",
    "lat": 35.169506,
    "lng": 136.931625,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "12時間最大1200円",
    "source": "https://mkp.jp/search/detail/002056-0/"
  },
  {
    "name": "名鉄協商パーキング 千種１丁目",
    "address": "愛知県名古屋市千種区千種1-23",
    "lat": 35.164074,
    "lng": 136.927612,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/003086-0/"
  },
  {
    "name": "名鉄協商パーキング 千種駅南第３",
    "address": "愛知県名古屋市千種区今池2-13-15",
    "lat": 35.167255,
    "lng": 136.929031,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 18,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大800円（07:00-18:00）、夜最大300円",
    "source": "https://mkp.jp/search/detail/003913-0/"
  },
  {
    "name": "名鉄協商パーキング 千種駅北第８",
    "address": "愛知県名古屋市千種区内山3-18",
    "lat": 35.170635,
    "lng": 136.932693,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1400, "holiday": 1400 },
    "hours": "24時間",
    "capacity": 15,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/003181-0/"
  },
  {
    "name": "名鉄協商パーキング 千種駅北第４",
    "address": "愛知県名古屋市千種区内山3-22",
    "lat": 35.171238,
    "lng": 136.932175,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/002325-0/"
  },
  {
    "name": "名鉄協商パーキング 千種１丁目第４",
    "address": "愛知県名古屋市千種区千種1-29-3",
    "lat": 35.16256,
    "lng": 136.930054,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/005418-0/"
  },
  {
    "name": "名鉄協商パーキング 千種駅南第２",
    "address": "愛知県名古屋市千種区今池2-3",
    "lat": 35.167953,
    "lng": 136.929733,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大800円/夜最大200円（18:00-07:00）",
    "source": "https://mkp.jp/search/detail/002138-0/"
  },
  {
    "name": "名鉄協商パーキング 楠元町２丁目",
    "address": "愛知県名古屋市千種区楠元町2-52",
    "lat": 35.165787,
    "lng": 136.960281,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大900円（09:00-18:00）、夜最大300円",
    "source": "https://mkp.jp/search/detail/005710-0/"
  },
  {
    "name": "名鉄協商パーキング 名古屋大学西第３",
    "address": "愛知県名古屋市昭和区宮東町33-1",
    "lat": 35.155739,
    "lng": 136.959732,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大700円（08:00-20:00）、夜最大300円",
    "source": "https://mkp.jp/search/detail/005875-0/"
  },
  {
    "name": "名鉄協商パーキング 広池町",
    "address": "愛知県名古屋市昭和区広池町34-3",
    "lat": 35.143211,
    "lng": 136.927734,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円",
    "source": "https://mkp.jp/search/detail/004692-0/"
  },
  {
    "name": "名鉄協商パーキング 花見通",
    "address": "愛知県名古屋市昭和区花見通2-28",
    "lat": 35.146461,
    "lng": 136.952118,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円",
    "source": "https://mkp.jp/search/detail/004074-0/"
  },
  {
    "name": "名鉄協商パーキング 名古屋大学西",
    "address": "愛知県名古屋市昭和区福原町2-9",
    "lat": 35.156937,
    "lng": 136.960342,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/003569-0/"
  },
  {
    "name": "名鉄協商パーキング 市大病院東",
    "address": "愛知県名古屋市昭和区塩付通7-28",
    "lat": 35.140236,
    "lng": 136.937653,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/005120-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞３丁目第５",
    "address": "愛知県名古屋市昭和区鶴舞3-21",
    "lat": 35.150673,
    "lng": 136.918213,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/003961-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所北第４",
    "address": "愛知県名古屋市昭和区北山町3-2",
    "lat": 35.152386,
    "lng": 136.934906,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円（19:00-08:00）",
    "source": "https://mkp.jp/search/detail/005143-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞３丁目第２",
    "address": "愛知県名古屋市昭和区鶴舞3-4",
    "lat": 35.151909,
    "lng": 136.918716,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 1000 },
    "hours": "24時間",
    "capacity": 15,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/003235-0/"
  },
  {
    "name": "名鉄協商パーキング STATION Ai",
    "address": "愛知県名古屋市昭和区鶴舞1丁目2-32",
    "lat": 35.152573,
    "lng": 136.918533,
    "hourlyRate": 0,
    "rates": { "weekday": "料金要確認", "holiday": "料金要確認" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 72,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "料金要確認（公式サイト参照）",
    "source": "https://mkp.jp/search/detail/004774-2/"
  },
  {
    "name": "名鉄協商パーキング 上社",
    "address": "愛知県名古屋市名東区上社1-503",
    "lat": 35.173862,
    "lng": 137.005432,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 800 },
    "hours": "24時間",
    "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日最大900円/休日最大800円（24時間）",
    "source": "https://mkp.jp/search/detail/001893-0/"
  },
  {
    "name": "名鉄協商パーキング 名東郵便局南",
    "address": "愛知県名古屋市名東区一社4-254",
    "lat": 35.165703,
    "lng": 137.0056,
    "hourlyRate": 200,
    "rates": { "weekday": "30分 100円", "holiday": "30分 100円" },
    "maxRate": { "weekday": 700, "holiday": 700 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（17:00-08:00）",
    "source": "https://mkp.jp/search/detail/005941-0/"
  },
  {
    "name": "名鉄協商パーキング 一社駅北",
    "address": "愛知県名古屋市名東区高社2-87",
    "lat": 35.169945,
    "lng": 136.996384,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円（昼）/ 60分 100円（夜）", "holiday": "60分 200円（昼）/ 60分 100円（夜）" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大600円/夜最大300円",
    "source": "https://mkp.jp/search/detail/002663-0/"
  },
  {
    "name": "名鉄協商パーキング 梅森坂",
    "address": "愛知県名古屋市名東区梅森坂3-2003",
    "lat": 35.144459,
    "lng": 137.018753,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/004112-0/"
  },
  {
    "name": "名鉄協商パーキング 一社駅東",
    "address": "愛知県名古屋市名東区一社2-64",
    "lat": 35.16769,
    "lng": 136.998825,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大800円/夜最大300円（19:00-08:00）",
    "source": "https://mkp.jp/search/detail/003443-0/"
  },
  {
    "name": "名鉄協商パーキング 梅森荘",
    "address": "愛知県名古屋市名東区梅森坂4-102",
    "lat": 35.141159,
    "lng": 137.021378,
    "hourlyRate": 200,
    "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/004667-0/"
  },
  {
    "name": "名鉄協商パーキング 十六銀行名東支店",
    "address": "愛知県名古屋市名東区引山2-601",
    "lat": 35.191742,
    "lng": 137.002136,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円（昼）/ 60分 100円（夜）", "holiday": "最大300円（昼）/ 60分 100円（夜）" },
    "maxRate": { "weekday": null, "holiday": 300 },
    "hours": "24時間",
    "capacity": 16,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（15:00-09:00）",
    "source": "https://mkp.jp/search/detail/004631-0/"
  },
  {
    "name": "名鉄協商パーキング 金山橋",
    "address": "愛知県名古屋市熱田区波寄町25",
    "lat": 35.1413,
    "lng": 136.903778,
    "hourlyRate": 600,
    "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 },
    "hours": "24時間",
    "capacity": 42,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大1200円（08:00-17:00）、夜最大600円",
    "source": "https://mkp.jp/search/detail/005109-0/"
  },
  {
    "name": "名鉄協商パーキング 神宮前第６",
    "address": "愛知県名古屋市熱田区神宮4-30",
    "lat": 35.120384,
    "lng": 136.912796,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 15,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（17:00-08:00）",
    "source": "https://mkp.jp/search/detail/004071-0/"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮西",
    "address": "愛知県名古屋市熱田区白鳥2-12-16",
    "lat": 35.125774,
    "lng": 136.906784,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 600, "holiday": 800 },
    "hours": "24時間",
    "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日最大600円/休日最大800円（当日24時まで）",
    "source": "https://mkp.jp/search/detail/005106-0/"
  },
  {
    "name": "名鉄協商パーキング 日比野駅前第２",
    "address": "愛知県名古屋市熱田区大宝1-1",
    "lat": 35.133331,
    "lng": 136.89389,
    "hourlyRate": 300,
    "rates": { "weekday": "20分 100円", "holiday": "20分 100円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/003312-0/"
  },
  {
    "name": "名鉄協商パーキング 日比野駅前第４",
    "address": "愛知県名古屋市熱田区大宝1-1",
    "lat": 35.133331,
    "lng": 136.89389,
    "hourlyRate": 300,
    "rates": { "weekday": "20分 100円", "holiday": "20分 100円" },
    "maxRate": { "weekday": null, "holiday": null },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/005958-0/"
  },
  {
    "name": "名鉄協商パーキング 徳重",
    "address": "愛知県名古屋市緑区鶴が沢1-2210",
    "lat": 35.093349,
    "lng": 137.0,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "24時間",
    "capacity": 20,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（19:00-08:00）",
    "source": "https://mkp.jp/search/detail/002987-0/"
  },
  {
    "name": "名鉄協商パーキング 徳重第２",
    "address": "愛知県名古屋市緑区鶴が沢1-2102",
    "lat": 35.093311,
    "lng": 137.00061,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 },
    "hours": "24時間",
    "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（19:00-08:00）",
    "source": "https://mkp.jp/search/detail/003658-0/"
  },
  {
    "name": "名鉄協商パーキング 浦里４丁目",
    "address": "愛知県名古屋市緑区浦里4-171",
    "lat": 35.087852,
    "lng": 136.94519,
    "hourlyRate": 300,
    "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大600円/夜最大500円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/004846-0/"
  },
  {
    "name": "名鉄協商パーキング 浦里３丁目",
    "address": "愛知県名古屋市緑区浦里3-26",
    "lat": 35.087391,
    "lng": 136.948288,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 21,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大800円/夜最大400円（21:00-09:00）",
    "source": "https://mkp.jp/search/detail/005245-0/"
  },
  {
    "name": "名鉄協商パーキング 守山いつき病院",
    "address": "愛知県名古屋市守山区守山2-18",
    "lat": 35.200825,
    "lng": 136.959961,
    "hourlyRate": 300,
    "rates": { "weekday": "60分 300円", "holiday": "60分 300円" },
    "maxRate": { "weekday": null, "holiday": 400 },
    "hours": "24時間",
    "capacity": 75,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/004805-0/"
  },
  {
    "name": "名鉄協商パーキング 小幡駅南",
    "address": "愛知県名古屋市守山区小幡南1-20",
    "lat": 35.200035,
    "lng": 136.976517,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 },
    "hours": "24時間",
    "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大900円",
    "source": "https://mkp.jp/search/detail/002930-0/"
  },
  {
    "name": "名鉄協商パーキング 小幡駅南第２",
    "address": "愛知県名古屋市守山区小幡南1-16",
    "lat": 35.199539,
    "lng": 136.97438,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 },
    "hours": "24時間",
    "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/005151-0/"
  },
  {
    "name": "名鉄協商パーキング 守山小学校北",
    "address": "愛知県名古屋市守山区大屋敷7",
    "lat": 35.201885,
    "lng": 136.964417,
    "hourlyRate": 400,
    "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 },
    "hours": "24時間",
    "capacity": 16,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/005066-0/"
  },
  {
    "name": "名鉄協商パーキング 山田３丁目",
    "address": "愛知県名古屋市北区山田3-13",
    "lat": 35.197792, "lng": 136.939987,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/005187-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根駅前",
    "address": "愛知県名古屋市北区大曽根3-10",
    "lat": 35.190384, "lng": 136.936111,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "3時間最大1000円",
    "source": "https://mkp.jp/search/detail/004116-0/"
  },
  {
    "name": "名鉄協商パーキング 山田２丁目",
    "address": "愛知県名古屋市北区山田2-3-45",
    "lat": 35.194992, "lng": 136.93515,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/004924-0/"
  },
  {
    "name": "名鉄協商パーキング 志賀公園南",
    "address": "愛知県名古屋市北区西志賀町5-49",
    "lat": 35.201401, "lng": 136.906296,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/003677-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根第１４",
    "address": "愛知県名古屋市北区山田1-1803",
    "lat": 35.194454, "lng": 136.936142,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/003962-0/"
  },
  {
    "name": "名鉄協商パーキング 清水５丁目",
    "address": "愛知県名古屋市北区清水5-28",
    "lat": 35.192574, "lng": 136.915161,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 24,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003354-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根３丁目",
    "address": "愛知県名古屋市北区大曽根3-1304",
    "lat": 35.191853, "lng": 136.93512,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "",
    "source": "https://mkp.jp/search/detail/005730-0/"
  },
  {
    "name": "名鉄協商パーキング 安井１丁目",
    "address": "愛知県名古屋市北区安井1丁目25-5",
    "lat": 35.209747, "lng": 136.916901,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/005420-0/"
  },
  {
    "name": "名鉄協商パーキング 東志賀小学校前",
    "address": "愛知県名古屋市北区長喜町1-6",
    "lat": 35.202969, "lng": 136.915894,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/005419-0/"
  },
  {
    "name": "名鉄協商パーキング 西区役所前",
    "address": "愛知県名古屋市西区花の木2-17",
    "lat": 35.189499, "lng": 136.890793,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/003058-0/"
  },
  {
    "name": "名鉄協商パーキング 名西１丁目",
    "address": "愛知県名古屋市西区名西1-20",
    "lat": 35.18845, "lng": 136.878418,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/003175-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅２丁目第１１",
    "address": "愛知県名古屋市西区名駅2-25",
    "lat": 35.176559, "lng": 136.883484,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大1000円（08:00-18:00）、夜最大400円",
    "source": "https://mkp.jp/search/detail/001967-0/"
  },
  {
    "name": "名鉄協商パーキング 上名古屋３丁目",
    "address": "愛知県名古屋市西区上名古屋3-15",
    "lat": 35.195938, "lng": 136.89296,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 500, "holiday": 400 }, "hours": "24時間", "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大200円（19:00-08:00）",
    "source": "https://mkp.jp/search/detail/003923-0/"
  },
  {
    "name": "名鉄協商パーキング 名西２丁目第３",
    "address": "愛知県名古屋市西区名西2-28",
    "lat": 35.191193, "lng": 136.881226,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/004113-0/"
  },
  {
    "name": "名鉄協商パーキング 上名古屋１丁目",
    "address": "愛知県名古屋市西区上名古屋1丁目10",
    "lat": 35.193676, "lng": 136.896622,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円（12時間最大500円）",
    "source": "https://mkp.jp/search/detail/005353-0/"
  },
  {
    "name": "名鉄協商パーキング ルーセントタワー駐車場",
    "address": "愛知県名古屋市西区牛島町6",
    "lat": 35.174583, "lng": 136.881226,
    "hourlyRate": 600, "rates": { "weekday": "30分 300円", "holiday": "30分 300円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 }, "hours": "24時間", "capacity": 354,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1600円",
    "source": "https://mkp.jp/search/detail/002565-0/"
  },
  {
    "name": "名鉄協商パーキング 名鉄病院北駐車場",
    "address": "愛知県名古屋市西区栄生2-25",
    "lat": 35.185677, "lng": 136.871094,
    "hourlyRate": 100, "rates": { "weekday": "60分 100円", "holiday": "60分 100円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 98,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "12時間最大1000円",
    "source": "https://mkp.jp/search/detail/002900-0/"
  },
  {
    "name": "名鉄協商パーキング 東片端北",
    "address": "愛知県名古屋市東区橦木町1-19",
    "lat": 35.179459, "lng": 136.913239,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1400, "holiday": 1400 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1400円",
    "source": "https://mkp.jp/search/detail/003320-0/"
  },
  {
    "name": "名鉄協商パーキング 新出来第３",
    "address": "愛知県名古屋市東区新出来2-8",
    "lat": 35.182472, "lng": 136.932877,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003215-0/"
  },
  {
    "name": "名鉄協商パーキング 東大手駅前",
    "address": "愛知県名古屋市東区三の丸4-3",
    "lat": 35.184006, "lng": 136.908691,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1200円",
    "source": "https://mkp.jp/search/detail/003248-0/"
  },
  {
    "name": "名鉄協商パーキング 東片端北第２",
    "address": "愛知県名古屋市東区橦木町1-16",
    "lat": 35.179459, "lng": 136.913239,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼最大1200円/夜最大400円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/005592-0/"
  },
  {
    "name": "名鉄協商パーキング 芳野３丁目",
    "address": "愛知県名古屋市東区芳野3-16",
    "lat": 35.188332, "lng": 136.927231,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円（昼）/ 180分 100円（夜）", "holiday": "60分 200円（昼）/ 180分 100円（夜）" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003768-0/"
  },
  {
    "name": "名鉄協商パーキング 代官町第９",
    "address": "愛知県名古屋市東区代官町23",
    "lat": 35.176991, "lng": 136.923706,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大400円（18:00-08:00）",
    "source": "https://mkp.jp/search/detail/004698-0/"
  },
  {
    "name": "名鉄協商パーキング 代官町第３",
    "address": "愛知県名古屋市東区代官町25",
    "lat": 35.176956, "lng": 136.92482,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/002220-0/"
  },
  {
    "name": "名鉄協商パーキング 東大手駅前第２",
    "address": "愛知県名古屋市東区三の丸4丁目",
    "lat": 35.185791, "lng": 136.907898,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 }, "hours": "24時間", "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1300円",
    "source": "https://mkp.jp/search/detail/005640-0/"
  },
  {
    "name": "名鉄協商パーキング 大幸東団地第２",
    "address": "愛知県名古屋市東区砂田橋3-2-2",
    "lat": 35.187958, "lng": 136.959778,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 13,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/005164-0/"
  },
  {
    "name": "名鉄協商パーキング 名鉄桜駅東",
    "address": "愛知県名古屋市南区桜本町2-12-2",
    "lat": 35.107033, "lng": 136.935806,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/005584-0/"
  },
  {
    "name": "名鉄協商パーキング 東又兵ヱ町",
    "address": "愛知県名古屋市南区東又兵ヱ町4-39",
    "lat": 35.098137, "lng": 136.921341,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円",
    "source": "https://mkp.jp/search/detail/003779-0/"
  },
  {
    "name": "名鉄協商パーキング 明円町",
    "address": "愛知県名古屋市南区明円町13",
    "lat": 35.100945, "lng": 136.9431,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/005006-0/"
  },
  {
    "name": "名鉄協商パーキング 呼続第２",
    "address": "愛知県名古屋市南区呼続2-1",
    "lat": 35.113445, "lng": 136.93071,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003345-0/"
  },
  {
    "name": "名鉄協商パーキング 宝生荘東",
    "address": "愛知県名古屋市南区中割町1-10",
    "lat": 35.088078, "lng": 136.915329,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/005063-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴里駅前第２",
    "address": "愛知県名古屋市南区元桜田町4-14",
    "lat": 35.105293, "lng": 136.943726,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 17,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/002656-0/"
  },
  {
    "name": "名鉄協商パーキング 東又兵ヱ町第２",
    "address": "愛知県名古屋市南区東又兵ヱ町2-41",
    "lat": 35.098137, "lng": 136.921341,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/005255-0/"
  },
  {
    "name": "名鉄協商パーキング 中島新町",
    "address": "愛知県名古屋市中川区中島新町3-1903",
    "lat": 35.125858, "lng": 136.850021,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 15,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/005096-0/"
  },
  {
    "name": "名鉄協商パーキング 西日置２丁目",
    "address": "愛知県名古屋市中川区西日置2-7",
    "lat": 35.156544, "lng": 136.891174,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 15,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/003095-0/"
  },
  {
    "name": "名鉄協商パーキング 名港第２",
    "address": "愛知県名古屋市港区名港2-11",
    "lat": 35.096474, "lng": 136.88298,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（22:00-08:00）",
    "source": "https://mkp.jp/search/detail/002868-0/"
  },
  {
    "name": "名鉄協商パーキング 名港",
    "address": "愛知県名古屋市港区浜2-7",
    "lat": 35.096264, "lng": 136.881607,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 550, "holiday": 550 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "12時間最大550円",
    "source": "https://mkp.jp/search/detail/002716-0/"
  },
  {
    "name": "名鉄協商パーキング 港区役所駅西",
    "address": "愛知県名古屋市港区港栄1-6",
    "lat": 35.106049, "lng": 136.883118,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/002597-0/"
  },
  {
    "name": "名鉄協商パーキング 港区役所駅東第３",
    "address": "愛知県名古屋市港区港楽2-6",
    "lat": 35.104301, "lng": 136.885376,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 13,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円（20:00-08:00）",
    "source": "https://mkp.jp/search/detail/004738-0/"
  },
  {
    "name": "名鉄協商パーキング 港北町２丁目",
    "address": "愛知県名古屋市港区港北町2-40",
    "lat": 35.107224, "lng": 136.860062,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/005466-0/"
  },
  {
    "name": "名鉄協商パーキング 港北駅前",
    "address": "愛知県名古屋市港区川西通5-8",
    "lat": 35.113876, "lng": 136.862076,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/005631-0/"
  },
  {
    "name": "名鉄協商パーキング 東海通駅前",
    "address": "愛知県名古屋市港区七番町4-13",
    "lat": 35.115017, "lng": 136.886734,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 20,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/002331-0/"
  },
  {
    "name": "名鉄協商パーキング 港楽２丁目",
    "address": "愛知県名古屋市港区港楽2-1",
    "lat": 35.103928, "lng": 136.887207,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円",
    "source": "https://mkp.jp/search/detail/005051-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂区役所駅西",
    "address": "愛知県名古屋市瑞穂区北原町3-1",
    "lat": 35.131935, "lng": 136.933075,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/003762-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂運動場西第２",
    "address": "愛知県名古屋市瑞穂区甲山町1-38",
    "lat": 35.124149, "lng": 136.934555,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/002905-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂運動場東駅前",
    "address": "愛知県名古屋市瑞穂区八勝通3-22",
    "lat": 35.124004, "lng": 136.949661,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/005146-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂公園第３",
    "address": "愛知県名古屋市瑞穂区山下通5-4",
    "lat": 35.121059, "lng": 136.942871,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "07:45-21:45", "capacity": 96,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "当日最大500円",
    "source": "https://mkp.jp/search/detail/004643-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂公園第１",
    "address": "愛知県名古屋市瑞穂区豊岡通3-28",
    "lat": 35.123611, "lng": 136.94162,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "07:45-21:45", "capacity": 423,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "当日最大500円",
    "source": "https://mkp.jp/search/detail/004641-0/"
  },
  {
    "name": "名鉄協商パーキング 瑞穂公園第５",
    "address": "愛知県名古屋市瑞穂区田辺通3-4",
    "lat": 35.128281, "lng": 136.945023,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "07:45-21:45", "capacity": 100,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "当日最大500円",
    "source": "https://mkp.jp/search/detail/004645-0/"
  },
  {
    "name": "名鉄協商パーキング 中村荘",
    "address": "愛知県名古屋市中村区乾出町4-9",
    "lat": 35.164982, "lng": 136.856018,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円",
    "source": "https://mkp.jp/search/detail/004279-0/"
  },
  {
    "name": "名鉄協商パーキング 中村公園第１３",
    "address": "愛知県名古屋市中村区乾出町1-18",
    "lat": 35.16758, "lng": 136.856125,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 30,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/004203-0/"
  },
  {
    "name": "名鉄協商パーキング 藤江町第７",
    "address": "愛知県名古屋市中村区藤江町3-169",
    "lat": 35.173431, "lng": 136.860306,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/004002-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅南第２５",
    "address": "愛知県名古屋市中村区名駅南1-18",
    "lat": 35.167175, "lng": 136.887527,
    "hourlyRate": 900, "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 1500, "holiday": 1000 }, "hours": "24時間", "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "平日昼最大1500円・休日昼最大1000円・夜間最大600円",
    "source": "https://mkp.jp/search/detail/004837-0/"
  },
  {
    "name": "名鉄協商パーキング 中村日赤南第２",
    "address": "愛知県名古屋市中村区元中村町1-69-8",
    "lat": 35.169613, "lng": 136.861115,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003668-0/"
  },
  {
    "name": "名鉄協商パーキング 愛知信用金庫中村支店",
    "address": "愛知県名古屋市中村区椿町19",
    "lat": 35.167679, "lng": 136.879852,
    "hourlyRate": 1000, "rates": { "weekday": "30分 500円（昼間）", "holiday": "30分 500円（昼間）" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "昼間30分500円・夜間60分200円・最初20分無料",
    "source": "https://mkp.jp/search/detail/003613-0/"
  },
  {
    "name": "名鉄協商パーキング 名城大学南",
    "address": "愛知県名古屋市天白区八幡山832",
    "lat": 35.133137, "lng": 136.974365,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大900円・夜間最大500円",
    "source": "https://mkp.jp/search/detail/005352-0/"
  },
  {
    "name": "名鉄協商パーキング 天白公園東側駐車場",
    "address": "愛知県名古屋市天白区天白町大字平針字黒石",
    "lat": 35.117531, "lng": 137.007324,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円（最初60分無料）", "holiday": "40分 200円（最初60分無料）" },
    "maxRate": { "weekday": 500, "holiday": 600 }, "hours": "06:00-00:00", "capacity": 28,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "最初60分無料・平日12h最大500円・休日12h最大600円",
    "source": "https://mkp.jp/search/detail/010005-0/"
  },
  {
    "name": "名鉄協商パーキング 元八事",
    "address": "愛知県名古屋市天白区元八事1-123",
    "lat": 35.121204, "lng": 136.962387,
    "hourlyRate": 200, "rates": { "weekday": "24時間最大300円", "holiday": "24時間最大300円" },
    "maxRate": { "weekday": 300, "holiday": 300 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大300円（格安）",
    "source": "https://mkp.jp/search/detail/005277-0/"
  },
  {
    "name": "名鉄協商パーキング おおね荘",
    "address": "愛知県名古屋市天白区大根町75-1313",
    "lat": 35.112278, "lng": 136.990936,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 15,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003429-0/"
  },
  {
    "name": "名鉄協商パーキング 元八事第２",
    "address": "愛知県名古屋市天白区元八事5-115",
    "lat": 35.130135, "lng": 136.977829,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円",
    "source": "https://mkp.jp/search/detail/004042-0/"
  },
  {
    "name": "名鉄協商パーキング 島田２丁目第２",
    "address": "愛知県名古屋市天白区島田2-618",
    "lat": 35.123062, "lng": 136.976898,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 }, "hours": "24時間", "capacity": 14,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大900円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/004289-0/"
  },
  {
    "name": "名鉄協商パーキング 平針３丁目",
    "address": "愛知県名古屋市天白区平針3-2209",
    "lat": 35.120735, "lng": 137.007263,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円",
    "source": "https://mkp.jp/search/detail/003941-0/"
  },
  {
    "name": "名鉄協商パーキング 植田（コイン）",
    "address": "愛知県名古屋市天白区植田3-1503",
    "lat": 35.127014, "lng": 136.989822,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 28,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "昼間最大700円・夜間最大500円",
    "source": "https://mkp.jp/search/detail/001890-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根第１０",
    "address": "愛知県名古屋市北区大曽根3-17",
    "lat": 35.193192, "lng": 136.934616,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大900円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/003133-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根２丁目第２",
    "address": "愛知県名古屋市北区大曽根2-4",
    "lat": 35.189045, "lng": 136.930695,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 700 }, "hours": "24時間", "capacity": 19,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日昼最大800円・休日昼最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/002285-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根第１７",
    "address": "愛知県名古屋市北区山田1-1-36",
    "lat": 35.193748, "lng": 136.934708,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "12時間最大1000円",
    "source": "https://mkp.jp/search/detail/005775-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根１丁目第５",
    "address": "愛知県名古屋市北区大曽根1-21",
    "lat": 35.19006, "lng": 136.929718,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "夜間最大500円・休日昼最大700円",
    "source": "https://mkp.jp/search/detail/005018-0/"
  },
  {
    "name": "名鉄協商パーキング 大曽根第１１",
    "address": "愛知県名古屋市東区矢田1-4",
    "lat": 35.192886, "lng": 136.938492,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1600, "holiday": 1600 }, "hours": "24時間", "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1600円・夜間最大500円",
    "source": "https://mkp.jp/search/detail/003135-0/"
  },
  {
    "name": "名鉄協商パーキング 伏見通錦",
    "address": "愛知県名古屋市中区錦1-5-15",
    "lat": 35.17136, "lng": 136.896912,
    "hourlyRate": 2400, "rates": { "weekday": "10分 400円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 3500, "holiday": 1400 }, "hours": "24時間", "capacity": 19,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日昼最大3500円・休日昼最大1400円・夜間最大1100円",
    "source": "https://mkp.jp/search/detail/004394-0/"
  },
  {
    "name": "名鉄協商パーキング 伏見第３",
    "address": "愛知県名古屋市中区栄2-8",
    "lat": 35.166794, "lng": 136.899429,
    "hourlyRate": 1200, "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 2000, "holiday": 1600 }, "hours": "24時間", "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日昼最大2000円・休日昼最大1600円・夜間最大500円",
    "source": "https://mkp.jp/search/detail/001943-0/"
  },
  {
    "name": "名鉄協商パーキング 伏見通御園",
    "address": "愛知県名古屋市中区栄1-11-7",
    "lat": 35.166832, "lng": 136.897232,
    "hourlyRate": 1800, "rates": { "weekday": "10分 300円", "holiday": "10分 300円" },
    "maxRate": { "weekday": 1900, "holiday": 1900 }, "hours": "24時間", "capacity": 22,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1900円・3時間最大1300円",
    "source": "https://mkp.jp/search/detail/004577-0/"
  },
  {
    "name": "名鉄協商パーキング 伏見通西大須第２",
    "address": "愛知県名古屋市中区松原1-14",
    "lat": 35.157909, "lng": 136.897858,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1100, "holiday": 1100 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大1100円",
    "source": "https://mkp.jp/search/detail/005481-0/"
  },
  {
    "name": "名鉄協商パーキング 伏屋駅前",
    "address": "愛知県名古屋市中川区伏屋4-401",
    "lat": 35.140598, "lng": 136.826843,
    "hourlyRate": 400, "rates": { "weekday": "15分 100円", "holiday": "15分 100円" },
    "maxRate": { "weekday": 400, "holiday": 400 }, "hours": "24時間", "capacity": 31,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大400円",
    "source": "https://mkp.jp/search/detail/003038-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞公園秋の池駐車場",
    "address": "愛知県名古屋市昭和区鶴舞1丁目1",
    "lat": 35.154156, "lng": 136.917221,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円（最初30分100円）", "holiday": "30分 200円（最初30分100円）" },
    "maxRate": { "weekday": 1000, "holiday": 1500 }, "hours": "06:00-00:00", "capacity": 42,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日最大1000円・休日最大1500円",
    "source": "https://mkp.jp/search/detail/004627-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞公園駐車場",
    "address": "愛知県名古屋市昭和区鶴舞1丁目1",
    "lat": 35.154156, "lng": 136.917221,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1400, "holiday": null }, "hours": "24時間", "capacity": 150,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "平日09-17最大1400円・大型車別料金",
    "source": "https://mkp.jp/search/detail/004575-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞４丁目第４",
    "address": "愛知県名古屋市昭和区鶴舞4-1212",
    "lat": 35.151356, "lng": 136.924561,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 800 }, "hours": "24時間", "capacity": 13,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日当日最大600円・休日当日最大800円",
    "source": "https://mkp.jp/search/detail/005722-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞２丁目第２",
    "address": "愛知県名古屋市昭和区鶴舞2-5-1",
    "lat": 35.152386, "lng": 136.915146,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大900円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/005858-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞３丁目第３",
    "address": "愛知県名古屋市昭和区鶴舞3-2",
    "lat": 35.152073, "lng": 136.918076,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大300円",
    "source": "https://mkp.jp/search/detail/003504-0/"
  },
  {
    "name": "名鉄協商パーキング 鶴舞第３",
    "address": "愛知県名古屋市中区千代田5-21",
    "lat": 35.157089, "lng": 136.91655,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1300円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/002844-0/"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮北第２",
    "address": "愛知県名古屋市熱田区森後町3",
    "lat": 35.129551, "lng": 136.906876,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/005872-0/"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮北",
    "address": "愛知県名古屋市熱田区森後町11",
    "lat": 35.128815, "lng": 136.90889,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "最大料金なし",
    "source": "https://mkp.jp/search/detail/002791-0/"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮南第４",
    "address": "愛知県名古屋市熱田区神戸町303",
    "lat": 35.121647, "lng": 136.906876,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 400, "holiday": 400 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大400円",
    "source": "https://mkp.jp/search/detail/004701-0/"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮南",
    "address": "愛知県名古屋市熱田区須賀町202",
    "lat": 35.122402, "lng": 136.905701,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/003479-0/"
  },
  {
    "name": "名鉄協商パーキング 熱田神宮南第３",
    "address": "愛知県名古屋市熱田区木之免町707",
    "lat": 35.122051, "lng": 136.904526,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/005484-0/"
  },
  {
    "name": "名鉄協商パーキング 六番町第２",
    "address": "愛知県名古屋市熱田区六番3-7",
    "lat": 35.122059, "lng": 136.887314,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 28,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/002260-0/"
  },
  {
    "name": "名鉄協商パーキング 神宮前駅西ＰＢ",
    "address": "愛知県名古屋市熱田区神宮3-6",
    "lat": 35.124577, "lng": 136.912155,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 400,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/004515-0/"
  },
  {
    "name": "名鉄協商パーキング 神宮前北",
    "address": "愛知県名古屋市熱田区神宮3-4",
    "lat": 35.126644, "lng": 136.910995,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 39,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大1000円",
    "source": "https://mkp.jp/search/detail/004503-0/"
  },
  {
    "name": "名鉄協商パーキング 大須４丁目",
    "address": "愛知県名古屋市中区大須4-3",
    "lat": 35.160313, "lng": 136.907776,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "最大料金なし",
    "source": "https://mkp.jp/search/detail/002665-0/"
  },
  {
    "name": "名鉄協商パーキング 大須３丁目",
    "address": "愛知県名古屋市中区大須3-26-26",
    "lat": 35.159256, "lng": 136.903076,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "10分 200円" },
    "maxRate": { "weekday": 1500, "holiday": null }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "平日昼最大1500円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/004873-0/"
  },
  {
    "name": "名鉄協商パーキング 大須１丁目第５",
    "address": "愛知県名古屋市中区大須1-7",
    "lat": 35.161644, "lng": 136.897614,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1100, "holiday": 1400 }, "hours": "24時間", "capacity": 18,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日昼最大1100円・休日昼最大1400円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/005699-0/"
  },
  {
    "name": "名鉄協商パーキング 大須１丁目第２",
    "address": "愛知県名古屋市中区大須1-2",
    "lat": 35.161804, "lng": 136.893524,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1000円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/002861-0/"
  },
  {
    "name": "名鉄協商パーキング 大須第１６",
    "address": "愛知県名古屋市中区大須3-37",
    "lat": 35.158852, "lng": 136.902069,
    "hourlyRate": 1200, "rates": { "weekday": "15分 300円（昼間）", "holiday": "15分 300円（昼間）" },
    "maxRate": { "weekday": 1500, "holiday": 1500 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "昼間最大1500円・夜間最大500円",
    "source": "https://mkp.jp/search/detail/003576-0/"
  },
  {
    "name": "名鉄協商パーキング 大須１丁目第７",
    "address": "愛知県名古屋市中区大須1-6-14",
    "lat": 35.161682, "lng": 136.896317,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円（昼間）", "holiday": "20分 200円（昼間）" },
    "maxRate": { "weekday": 1100, "holiday": 1100 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1100円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/005920-0/"
  },
  {
    "name": "名鉄協商パーキング 大須第２３",
    "address": "愛知県名古屋市中区大須3-12",
    "lat": 35.160713, "lng": 136.904007,
    "hourlyRate": 900, "rates": { "weekday": "20分 300円", "holiday": "20分 400円" },
    "maxRate": { "weekday": 1500, "holiday": null }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日昼最大1500円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/004201-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅南第５",
    "address": "愛知県名古屋市中村区名駅南2-3",
    "lat": 35.165184, "lng": 136.89064,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 }, "hours": "24時間", "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1200円・夜間最大600円",
    "source": "https://mkp.jp/search/detail/002150-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅南第２０",
    "address": "愛知県名古屋市中村区名駅南1-11",
    "lat": 35.166412, "lng": 136.889572,
    "hourlyRate": 900, "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 1200, "holiday": 850 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日昼最大1200円・休日昼最大850円・夜間最大800円",
    "source": "https://mkp.jp/search/detail/005911-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅南第１９",
    "address": "愛知県名古屋市中村区名駅南2-11",
    "lat": 35.165287, "lng": 136.887558,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1400, "holiday": 1000 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日24時間最大1400円・休日24時間最大1000円",
    "source": "https://mkp.jp/search/detail/005616-0/"
  },
  {
    "name": "名鉄協商パーキング 名駅３丁目第２",
    "address": "愛知県名古屋市中村区名駅3-26",
    "lat": 35.172089, "lng": 136.885483,
    "hourlyRate": 2400, "rates": { "weekday": "10分 400円", "holiday": "10分 400円" },
    "maxRate": { "weekday": 1800, "holiday": 1400 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日3時間最大1800円・休日3時間最大1400円",
    "source": "https://mkp.jp/search/detail/001969-0/"
  },
  {
    "name": "名鉄協商パーキング 久屋南第６（軽専用）",
    "address": "愛知県名古屋市中区栄5-18",
    "lat": 35.163231, "lng": 136.91069,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1000, "holiday": 1000 }, "hours": "24時間", "capacity": 3,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "軽自動車専用・4時間最大1000円",
    "source": "https://mkp.jp/search/detail/005372-0/"
  },
  {
    "name": "名鉄協商パーキング 栄４丁目第２",
    "address": "愛知県名古屋市中区栄4-8",
    "lat": 35.167175, "lng": 136.913284,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 900, "holiday": 900 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "最大900円",
    "source": "https://mkp.jp/search/detail/002193-0/"
  },
  {
    "name": "名鉄協商パーキング 栄２丁目第６",
    "address": "愛知県名古屋市中区栄2-1",
    "lat": 35.16766, "lng": 136.898132,
    "hourlyRate": 800, "rates": { "weekday": "15分 200円", "holiday": "15分 200円" },
    "maxRate": { "weekday": 1800, "holiday": 1800 }, "hours": "24時間", "capacity": 12,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1800円・夜間最大900円",
    "source": "https://mkp.jp/search/detail/004360-0/"
  },
  {
    "name": "名鉄協商パーキング 栄２丁目第５",
    "address": "愛知県名古屋市中区栄2-1",
    "lat": 35.16766, "lng": 136.898132,
    "hourlyRate": 1200, "rates": { "weekday": "15分 300円", "holiday": "15分 300円" },
    "maxRate": { "weekday": 2000, "holiday": 2000 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大2000円・夜間最大700円",
    "source": "https://mkp.jp/search/detail/004323-0/"
  },
  {
    "name": "名鉄協商パーキング 栄２丁目",
    "address": "愛知県名古屋市中区栄2-4",
    "lat": 35.167973, "lng": 136.901657,
    "hourlyRate": 2400, "rates": { "weekday": "10分 400円", "holiday": "30分 300円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "夜間最大1200円",
    "source": "https://mkp.jp/search/detail/002773-0/"
  },
  {
    "name": "名鉄協商パーキング 久屋大通庭園",
    "address": "愛知県名古屋市中区大須4-4",
    "lat": 35.161045, "lng": 136.908569,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円（昼間）", "holiday": "30分 200円（昼間）" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 18,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "昼30分200円・夜60分100円",
    "source": "https://mkp.jp/search/detail/003702-0/"
  },
  {
    "name": "名鉄協商パーキング 栄４丁目第７",
    "address": "愛知県名古屋市中区栄4-9",
    "lat": 35.167774, "lng": 136.9133,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 }, "hours": "24時間", "capacity": 15,
    "payment": { "cash": true, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "12時間最大1200円",
    "source": "https://mkp.jp/search/detail/003408-0/"
  },
  {
    "name": "名鉄協商パーキング 久屋南第２",
    "address": "愛知県名古屋市中区栄5-13",
    "lat": 35.163849, "lng": 136.910675,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1200, "holiday": 1200 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "6時間最大1200円",
    "source": "https://mkp.jp/search/detail/001599-0/"
  },
  {
    "name": "名鉄協商パーキング 太閤４丁目",
    "address": "愛知県名古屋市中村区太閤4-15",
    "lat": 35.166679, "lng": 136.87616,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 20,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/002793-0/"
  },
  {
    "name": "名鉄協商パーキング 太閤通駅前",
    "address": "愛知県名古屋市中村区太閤通4-15",
    "lat": 35.167896, "lng": 136.871063,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/002518-0/"
  },
  {
    "name": "名鉄協商パーキング 椿町第７",
    "address": "愛知県名古屋市中村区椿町21-17",
    "lat": 35.168346, "lng": 136.878937,
    "hourlyRate": 900, "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": null, "holiday": null }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "最大料金なし",
    "source": "https://mkp.jp/search/detail/004866-0/"
  },
  {
    "name": "名鉄協商パーキング 椿町第３",
    "address": "愛知県名古屋市中村区椿町18-11",
    "lat": 35.167603, "lng": 136.880447,
    "hourlyRate": 1800, "rates": { "weekday": "10分 300円", "holiday": "10分 300円" },
    "maxRate": { "weekday": 3000, "holiday": 3000 }, "hours": "24時間", "capacity": 17,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "3時間最大1900円・24時間最大3000円",
    "source": "https://mkp.jp/search/detail/003826-0/"
  },
  {
    "name": "名鉄協商パーキング 椿町第５",
    "address": "愛知県名古屋市中村区椿町10",
    "lat": 35.169025, "lng": 136.878464,
    "hourlyRate": 900, "rates": { "weekday": "20分 300円", "holiday": "20分 300円" },
    "maxRate": { "weekday": 1700, "holiday": 1700 }, "hours": "24時間", "capacity": 10,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "3時間最大1700円",
    "source": "https://mkp.jp/search/detail/005623-0/"
  },
  {
    "name": "名鉄協商パーキング 覚王山",
    "address": "愛知県名古屋市千種区観月町1-55-2",
    "lat": 35.166046, "lng": 136.953232,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1400, "holiday": 1400 }, "hours": "24時間", "capacity": 28,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大1400円・夜間最大600円",
    "source": "https://mkp.jp/search/detail/002927-0/"
  },
  {
    "name": "名鉄協商パーキング 覚王山第３",
    "address": "愛知県名古屋市千種区姫池通3-4-3",
    "lat": 35.167953, "lng": 136.957199,
    "hourlyRate": 600, "rates": { "weekday": "20分 200円", "holiday": "20分 200円" },
    "maxRate": { "weekday": 1300, "holiday": 1300 }, "hours": "24時間", "capacity": 9,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大1300円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/005022-0/"
  },
  {
    "name": "名鉄協商パーキング 今池３丁目",
    "address": "愛知県名古屋市千種区今池3-30",
    "lat": 35.16465, "lng": 136.932312,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/005204-0/"
  },
  {
    "name": "名鉄協商パーキング 東山公園北第３",
    "address": "愛知県名古屋市千種区新池町2-35",
    "lat": 35.162067, "lng": 136.976089,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 1000 }, "hours": "24時間", "capacity": 21,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日最大800円・休日最大1000円",
    "source": "https://mkp.jp/search/detail/005453-0/"
  },
  {
    "name": "名鉄協商パーキング 振甫町",
    "address": "愛知県名古屋市千種区振甫町1-35",
    "lat": 35.176163, "lng": 136.95166,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 500, "holiday": 500 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大500円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/003798-0/"
  },
  {
    "name": "名鉄協商パーキング 南明町",
    "address": "愛知県名古屋市千種区南明町2-12",
    "lat": 35.160015, "lng": 136.943619,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 7,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003980-0/"
  },
  {
    "name": "名鉄協商パーキング 京命",
    "address": "愛知県名古屋市千種区京命1-7",
    "lat": 35.186115, "lng": 136.986664,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 600, "holiday": 600 }, "hours": "24時間", "capacity": 13,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大600円",
    "source": "https://mkp.jp/search/detail/003294-0/"
  },
  {
    "name": "名鉄協商パーキング 橋本町３丁目",
    "address": "愛知県名古屋市千種区橋本町3-42-1",
    "lat": 35.163151, "lng": 136.966858,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 11,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "昼間最大800円・夜間最大400円",
    "source": "https://mkp.jp/search/detail/005967-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所３丁目",
    "address": "愛知県名古屋市昭和区御器所3",
    "lat": 35.147758, "lng": 136.924744,
    "hourlyRate": 200, "rates": { "weekday": "60分 200円", "holiday": "60分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 8,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/005635-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所西",
    "address": "愛知県名古屋市昭和区紅梅町2-11-1",
    "lat": 35.14904, "lng": 136.930298,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 6,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円",
    "source": "https://mkp.jp/search/detail/003644-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所駅南",
    "address": "愛知県名古屋市昭和区阿由知通4-10",
    "lat": 35.148121, "lng": 136.933289,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 3,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/004663-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所北第７",
    "address": "愛知県名古屋市昭和区北山町3-35-2",
    "lat": 35.152122, "lng": 136.936478,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/005641-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所駅西",
    "address": "愛知県名古屋市昭和区東畑町2-19-6",
    "lat": 35.150455, "lng": 136.93161,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 700, "holiday": 700 }, "hours": "24時間", "capacity": 18,
    "payment": { "cash": false, "credit": true, "qr": true },
    "placeCid": "", "placeFid": "", "note": "24時間最大700円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/010013-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所１丁目第４",
    "address": "愛知県名古屋市昭和区御器所1-20",
    "lat": 35.147621, "lng": 136.917877,
    "hourlyRate": 400, "rates": { "weekday": "30分 200円", "holiday": "30分 200円" },
    "maxRate": { "weekday": 800, "holiday": 400 }, "hours": "24時間", "capacity": 4,
    "payment": { "cash": true, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "平日最大800円・休日最大400円",
    "source": "https://mkp.jp/search/detail/004285-0/"
  },
  {
    "name": "名鉄協商パーキング 御器所２丁目第２",
    "address": "愛知県名古屋市昭和区御器所2-14",
    "lat": 35.147106, "lng": 136.92099,
    "hourlyRate": 300, "rates": { "weekday": "40分 200円", "holiday": "40分 200円" },
    "maxRate": { "weekday": 800, "holiday": 800 }, "hours": "24時間", "capacity": 5,
    "payment": { "cash": false, "credit": true, "qr": false },
    "placeCid": "", "placeFid": "", "note": "24時間最大800円・夜間最大300円",
    "source": "https://mkp.jp/search/detail/003047-0/"
  }
];
