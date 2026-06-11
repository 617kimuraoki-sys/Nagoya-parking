(function () {
  const listEl = document.getElementById("parking-list");
  const countEl = document.getElementById("result-count");
  const emptyEl = document.getElementById("empty-msg");
  const mapViewEl = document.getElementById("map-view");

  let currentSort = "price";
  let selectedAreas = new Set(); // 空 = 全件
  let currentDuration = null;
  let currentView = "list";
  let currentDayMode = "auto"; // "auto" | "weekday" | "holiday"
  let userLat = null;
  let userLng = null;
  let favorites = new Set(JSON.parse(localStorage.getItem("sakae-favs") || "[]"));
  let showFavOnly = false;

  // ---- 検索 ----

  let searchText = "";
  let searchFacility = null; // { name, lat, lng } | null

  const FACILITIES = [
    // ── 観光・レジャー ──
    { name: "東山動植物園",             alt: ["東山動物園","東山植物園","東山zoo"],                           lat: 35.1526, lng: 136.9485 },
    { name: "名古屋城",                 alt: ["名城公園","名城","なごやじょう","本丸御殿"],                   lat: 35.1855, lng: 136.8994 },
    { name: "名古屋港水族館",           alt: ["水族館","名古屋港","シャチ","イルカ","シャチのショー"],        lat: 35.0934, lng: 136.8823 },
    { name: "熱田神宮",                 alt: ["熱田","あつたじんぐう","熱田さん","草薙の剣"],                 lat: 35.1284, lng: 136.9083 },
    { name: "覚王山日泰寺",             alt: ["日泰寺","覚王山","覚王山フルーツパーラー","仏舎利"],           lat: 35.1640, lng: 136.9549 },
    { name: "徳川園",                   alt: ["徳川","蓬左文庫","徳川美術館","尾張徳川"],                     lat: 35.1812, lng: 136.9308 },
    { name: "鶴舞公園",                 alt: ["鶴舞","つるまい","鶴舞駅"],                                    lat: 35.1508, lng: 136.9090 },
    { name: "ノリタケの森",             alt: ["ノリタケ","noritake"],                                         lat: 35.1773, lng: 136.8854 },
    { name: "リニア・鉄道館",           alt: ["リニア鉄道館","鉄道館","リニア"],                              lat: 35.0869, lng: 136.8755 },
    { name: "ポートメッセなごや",       alt: ["ポートメッセ","名古屋国際展示場"],                             lat: 35.0876, lng: 136.8837 },
    { name: "名古屋市科学館",           alt: ["科学館","プラネタリウム"],                                     lat: 35.1668, lng: 136.9023 },
    { name: "名古屋市美術館",           alt: ["美術館"],                                                      lat: 35.1617, lng: 136.9020 },
    { name: "名古屋市博物館",           alt: ["市博物館","博物館"],                                           lat: 35.1196, lng: 136.9335 },
    { name: "名古屋市東山スカイタワー", alt: ["スカイタワー"],                                                lat: 35.1559, lng: 136.9473 },

    // ── エンタメ・ライブ会場 ──
    { name: "バンテリンドームナゴヤ",   alt: ["ナゴヤドーム","中日ドーム","ドーム","バンテリン","ドラゴンズ","野球"],  lat: 35.1856, lng: 136.9487 },
    { name: "日本ガイシホール",         alt: ["ガイシホール","ガイシスポーツプラザ","日本ガイシ"],             lat: 35.1391, lng: 136.9185 },
    { name: "名古屋国際会議場",         alt: ["白鳥公園","白鳥","センチュリーホール"],                         lat: 35.1395, lng: 136.9067 },
    { name: "Zepp Nagoya",              alt: ["ゼップ名古屋","zepp","ゼップ"],                                 lat: 35.1702, lng: 136.8851 },
    { name: "名古屋市公会堂",           alt: ["公会堂","鶴舞公会堂"],                                         lat: 35.1491, lng: 136.9084 },

    // ── ショッピング ──
    { name: "栄",                       alt: ["さかえ","サカエ","栄エリア"],                                   lat: 35.1679, lng: 136.9085 },
    { name: "大須商店街",               alt: ["大須観音","大須","おおす"],                                     lat: 35.1608, lng: 136.9030 },
    { name: "松坂屋名古屋店",           alt: ["松坂屋","まつざかや"],                                         lat: 35.1671, lng: 136.9090 },
    { name: "オアシス21",               alt: ["オアシス"],                                                     lat: 35.1695, lng: 136.9095 },
    { name: "久屋大通パーク",           alt: ["久屋大通","久屋","ひさやおおどおり"],                           lat: 35.1726, lng: 136.9101 },
    { name: "中部電力MIRAI TOWER",      alt: ["テレビ塔","名古屋テレビ塔","mirai tower","タワー"],             lat: 35.1725, lng: 136.9099 },
    { name: "ラシック",                 alt: ["LACHIC","lachic"],                                             lat: 35.1668, lng: 136.9082 },
    { name: "名古屋パルコ",             alt: ["パルコ","PARCO"],                                              lat: 35.1680, lng: 136.9057 },
    { name: "ミッドランドスクエア",     alt: ["ミッドランド"],                                                 lat: 35.1694, lng: 136.8842 },
    { name: "タカシマヤ ゲートタワーモール", alt: ["タカシマヤ","高島屋","ゲートタワー"],                       lat: 35.1707, lng: 136.8831 },
    { name: "名古屋ルーセントタワー",   alt: ["ルーセント","ルーセントタワー"],                               lat: 35.1724, lng: 136.8832 },
    { name: "エスカ",                   alt: ["esca"],                                                         lat: 35.1695, lng: 136.8813 },
    { name: "ユニモール",               alt: ["unimall"],                                                      lat: 35.1704, lng: 136.8834 },
    { name: "アスナル金山",             alt: ["アスナル","金山"],                                              lat: 35.1436, lng: 136.9044 },
    { name: "イオンモール熱田",         alt: ["イオン熱田","熱田イオン"],                                      lat: 35.1252, lng: 136.9076 },
    { name: "星ヶ丘テラス",             alt: ["星ヶ丘","ほしがおか"],                                         lat: 35.1641, lng: 136.9795 },
    { name: "矢場町",                   alt: ["矢場とん","やばちょう"],                                        lat: 35.1634, lng: 136.9046 },
    { name: "錦三丁目",                 alt: ["錦三","にしき","ニシキ","栄錦"],                                 lat: 35.1730, lng: 136.9070 },

    // ── 駅・交通 ──
    { name: "名古屋駅",                 alt: ["名駅","JR名古屋","ナゴヤ駅","なごや駅"],                        lat: 35.1709, lng: 136.8815 },
    { name: "金山駅",                   alt: ["金山","かなやま"],                                              lat: 35.1420, lng: 136.9026 },
    { name: "千種駅",                   alt: ["千種","ちくさ"],                                                lat: 35.1682, lng: 136.9343 },
    { name: "今池",                     alt: ["今池駅","いまいけ"],                                            lat: 35.1626, lng: 136.9312 },
    { name: "大曽根駅",                 alt: ["大曽根","おおぞね"],                                            lat: 35.1896, lng: 136.9335 },
    { name: "黒川駅",                   alt: ["黒川","くろかわ"],                                              lat: 35.1951, lng: 136.9063 },
    { name: "高岳駅",                   alt: ["高岳","たかおか"],                                              lat: 35.1786, lng: 136.9212 },
    { name: "伏見駅",                   alt: ["伏見","ふしみ"],                                                lat: 35.1668, lng: 136.8989 },
    { name: "丸の内駅",                 alt: ["丸の内","まるのうち"],                                          lat: 35.1757, lng: 136.8985 },
    { name: "本山駅",                   alt: ["本山","もとやま"],                                              lat: 35.1602, lng: 136.9630 },
    { name: "藤が丘駅",                 alt: ["藤が丘","ふじがおか"],                                          lat: 35.1807, lng: 137.0198 },

    // ── 大学・病院 ──
    { name: "名古屋大学",               alt: ["名大","めいだい","名大病院","名古屋大学病院"],                   lat: 35.1548, lng: 136.9661 },
    { name: "名城大学",                 alt: ["名城","めいじょう"],                                            lat: 35.1801, lng: 136.9479 },
    { name: "南山大学",                 alt: ["南山","なんざん"],                                              lat: 35.1436, lng: 136.9676 },
    { name: "中京大学",                 alt: ["中京","ちゅうきょう"],                                          lat: 35.1432, lng: 136.9663 },
    { name: "名古屋市立大学病院",       alt: ["市大病院","名市大","市立病院"],                                  lat: 35.1325, lng: 136.9320 },

    // ── スポーツ ──
    { name: "パロマ瑞穂スタジアム",     alt: ["瑞穂スタジアム","瑞穂","グランパス","サッカー"],                lat: 35.1359, lng: 136.9395 },
  ];

  function matchFacilities(q) {
    if (!q.trim()) return [];
    const lq = q.toLowerCase();
    return FACILITIES.filter(f => {
      return f.name.toLowerCase().includes(lq) ||
             f.alt.some(a => a.toLowerCase().includes(lq));
    }).slice(0, 6);
  }

  function matchParkings(q) {
    if (!q.trim()) return [];
    const lq = q.toLowerCase();
    return parkingData.filter(p =>
      p.name.toLowerCase().includes(lq) ||
      (p.address && p.address.includes(q))
    ).slice(0, 4);
  }

  function updateFacilityBadge() {
    const badge = document.getElementById("search-facility-badge");
    const nameEl = document.getElementById("search-facility-name");
    if (searchFacility) {
      nameEl.textContent = searchFacility.name;
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  }

  function renderSuggestions(q) {
    const dropdown = document.getElementById("search-dropdown");
    if (!q.trim()) { dropdown.hidden = true; return; }

    const facilities = matchFacilities(q);
    const parkings   = matchParkings(q);

    if (facilities.length === 0 && parkings.length === 0) {
      dropdown.innerHTML = '<div class="search-no-result">候補が見つかりません</div>';
      dropdown.hidden = false;
      return;
    }

    let html = "";
    if (facilities.length > 0) {
      html += '<div class="search-section-label">施設</div>';
      facilities.forEach(f => {
        html += `<button class="search-suggestion" data-type="facility" data-name="${f.name}" data-lat="${f.lat}" data-lng="${f.lng}">
          <span class="suggestion-icon">🏛️</span>
          <span class="suggestion-text">${f.name}</span>
          <span class="suggestion-sub">近くの駐車場を表示</span>
        </button>`;
      });
    }
    if (parkings.length > 0) {
      html += '<div class="search-section-label">駐車場</div>';
      parkings.forEach(p => {
        html += `<button class="search-suggestion" data-type="parking" data-name="${p.name}">
          <span class="suggestion-icon">🅿️</span>
          <span class="suggestion-text">${p.name}</span>
          <span class="suggestion-sub">${getArea(p)}</span>
        </button>`;
      });
    }

    dropdown.innerHTML = html;
    dropdown.hidden = false;

    dropdown.querySelectorAll(".search-suggestion").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        const input = document.getElementById("search-input");
        const clearBtn = document.getElementById("search-clear-btn");

        if (btn.dataset.type === "facility") {
          searchFacility = { name: btn.dataset.name, lat: +btn.dataset.lat, lng: +btn.dataset.lng };
          searchText = btn.dataset.name;
          input.value = btn.dataset.name;
        } else {
          searchFacility = null;
          searchText = btn.dataset.name;
          input.value = btn.dataset.name;
        }

        clearBtn.hidden = false;
        dropdown.hidden = true;
        updateFacilityBadge();
        render();
      });
    });
  }

  // 検索入力イベント
  const searchInput   = document.getElementById("search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const searchDropdown = document.getElementById("search-dropdown");

  searchInput.addEventListener("input", () => {
    const q = searchInput.value;
    searchClearBtn.hidden = !q;
    searchFacility = null;
    searchText = q;
    updateFacilityBadge();
    renderSuggestions(q);
    render();
  });

  searchInput.addEventListener("focus", () => {
    if (searchInput.value) renderSuggestions(searchInput.value);
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchText = "";
    searchFacility = null;
    searchClearBtn.hidden = true;
    searchDropdown.hidden = true;
    updateFacilityBadge();
    render();
    searchInput.focus();
  });

  document.addEventListener("click", e => {
    if (!e.target.closest("#search-container")) {
      searchDropdown.hidden = true;
    }
  });

  // ---- 現在地・距離 ----

  function calcDistance(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const φ1 = lat1 * Math.PI / 180, φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180, Δλ = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function formatDistance(m) {
    return m < 1000 ? `${Math.round(m)}m` : `${(m / 1000).toFixed(1)}km`;
  }

  function requestLocation(distBtn) {
    if (!navigator.geolocation) {
      alert("このブラウザは現在地取得に対応していません。");
      currentSort = "price";
      setActive(document.getElementById("sort-filters"),
        document.querySelector("#sort-filters [data-sort='price']"));
      return;
    }

    distBtn.textContent = "📍 取得中…";
    distBtn.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLat = pos.coords.latitude;
        userLng = pos.coords.longitude;
        distBtn.textContent = "📍 近い順";
        distBtn.disabled = false;
        updateUserMarker(false);
        render();
      },
      () => {
        alert("現在地を取得できませんでした。位置情報の許可を確認してください。");
        distBtn.textContent = "📍 近い順";
        distBtn.disabled = false;
        currentSort = "price";
        setActive(document.getElementById("sort-filters"),
          document.querySelector("#sort-filters [data-sort='price']"));
        render();
      },
      { timeout: 10000 }
    );
  }

  // ---- 地図 ----

  let leafletMap = null;
  let mapMarkers = [];
  let userMarker = null;
  let facilityMarker = null;

  const AREA_COLORS = {
    "栄":       "#2563eb",
    "錦・伏見": "#059669",
    "名駅":     "#7c3aed",
    "大須":     "#d97706",
    "久屋":     "#0891b2",
    "金山":     "#dc2626",
    "熱田":     "#c2410c",
    "ドーム":   "#db2777",
    "矢場町":   "#6366f1",
    "今池":     "#0d9488",
    "鶴舞":     "#e11d48",
    "覚王山":   "#b45309",
    "千種":     "#0e7490",
    "星ヶ丘":   "#be185d",
    "名古屋港": "#1d4ed8",
    "八事":     "#065f46",
    "名古屋城": "#78350f",
    "円頓寺":   "#4a044e",
    "高岳":     "#1e40af",
    "黒川":     "#166534",
    "藤が丘":   "#7c2d12",
    "山王":     "#713f12",
    "その他":   "#6b7280"
  };

  let tileLayer = null;

  function getTileUrl() {
    return (document.documentElement.getAttribute('data-theme') === 'light')
      ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  }

  function initMap() {
    if (leafletMap) return;
    leafletMap = L.map(mapViewEl, { zoomControl: true }).setView([35.168, 136.906], 14);
    tileLayer = L.tileLayer(getTileUrl(), {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19
    }).addTo(leafletMap);
    addMapLegend();
    addLocateControl();
  }

  document.documentElement.addEventListener('cm-theme', function () {
    if (tileLayer) tileLayer.setUrl(getTileUrl());
  });

  function addLocateControl() {
    const LocateControl = L.Control.extend({
      options: { position: "topleft" },
      onAdd: function () {
        const btn = L.DomUtil.create("button", "locate-btn");
        btn.title = "現在地を表示";
        btn.innerHTML = "📍";

        L.DomEvent.on(btn, "click", function (e) {
          L.DomEvent.stopPropagation(e);

          // すでに位置情報があれば現在地へ移動するだけ
          if (userLat !== null) {
            leafletMap.setView([userLat, userLng], 16, { animate: true });
            return;
          }

          if (!navigator.geolocation) {
            alert("このブラウザは現在地取得に対応していません。");
            return;
          }

          btn.disabled = true;
          btn.innerHTML = "⏳";

          navigator.geolocation.getCurrentPosition(
            (pos) => {
              userLat = pos.coords.latitude;
              userLng = pos.coords.longitude;
              btn.disabled = false;
              btn.innerHTML = "📍";
              updateUserMarker(true);
            },
            () => {
              btn.disabled = false;
              btn.innerHTML = "📍";
              alert("現在地を取得できませんでした。位置情報の許可を確認してください。");
            },
            { timeout: 10000 }
          );
        });

        return btn;
      }
    });
    new LocateControl().addTo(leafletMap);
  }

  function updateUserMarker(panTo) {
    if (!leafletMap || userLat === null) return;

    const latlng = [userLat, userLng];

    if (userMarker) {
      userMarker.setLatLng(latlng);
    } else {
      const icon = L.divIcon({
        className: "",
        html: '<div class="user-location-dot"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -12]
      });
      userMarker = L.marker(latlng, { icon, zIndexOffset: 1000 });
      userMarker.bindPopup("現在地");
      userMarker.addTo(leafletMap);
    }

    if (panTo) {
      leafletMap.setView(latlng, 16, { animate: true });
    }
  }

  function addMapLegend() {
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "map-legend");
      const items = Object.entries(AREA_COLORS)
        .filter(([area]) => area !== "その他")
        .map(([area, color]) =>
          `<div class="legend-item">
             <span class="legend-dot" style="background:${color}"></span>${area}
           </div>`
        ).join("");
      div.innerHTML = `
        <button class="legend-toggle" id="legend-toggle">凡例 ▼</button>
        <div class="legend-grid" id="legend-content" hidden>${items}</div>
      `;
      L.DomEvent.on(div.querySelector("#legend-toggle"), "click", function (e) {
        L.DomEvent.stopPropagation(e);
        const content = div.querySelector("#legend-content");
        const isHidden = content.hasAttribute("hidden");
        content.toggleAttribute("hidden", !isHidden);
        div.querySelector("#legend-toggle").textContent = isHidden ? "凡例 ▲" : "凡例 ▼";
      });
      return div;
    };
    legend.addTo(leafletMap);
  }

  function buildPopupHtml(p) {
    const area = getArea(p);
    const color = AREA_COLORS[area] || AREA_COLORS["その他"];
    const holiday = isHoliday();
    const rate = holiday ? p.rates.holiday : p.rates.weekday;
    const maxVal = holiday ? p.maxRate.holiday : p.maxRate.weekday;
    const maxStr = maxVal == null ? "なし" : `${maxVal.toLocaleString()}円`;

    let costHtml = "";
    if (currentDuration) {
      const r = calcCost(p, currentDuration);
      const badge = r.isMaxApplied
        ? '<span class="popup-badge">最大料金適用</span>'
        : "";
      costHtml = `
        <div class="popup-cost">
          ${currentDuration}時間 → <strong>${r.cost.toLocaleString()}円</strong>${badge}
        </div>`;
    }

    const hoursLine = p.hours
      ? `<div class="popup-meta">🕐 ${p.hours}</div>` : "";

    return `
      <div class="popup-card">
        <div class="popup-name">${p.name}</div>
        <span class="popup-area" style="background:${color}22;color:${color}">${area}</span>
        <div class="popup-meta">📍 ${p.address}</div>
        ${hoursLine}
        <div class="popup-rate">${rate}</div>
        <div class="popup-max">最大: ${maxStr}</div>
        ${costHtml}
        <a class="popup-map-link" href="${buildMapUrl(p)}" target="_blank" rel="noopener">
          📍 Googleマップで見る
        </a>
      </div>`;
  }

  function updateFacilityMarker() {
    if (facilityMarker) { facilityMarker.remove(); facilityMarker = null; }
    if (!leafletMap || !searchFacility) return;

    const icon = L.divIcon({
      className: "",
      html: '<div class="facility-pin">🏛️</div>',
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -20]
    });
    facilityMarker = L.marker([searchFacility.lat, searchFacility.lng], { icon, zIndexOffset: 900 });
    facilityMarker.bindPopup(`<div class="popup-card"><div class="popup-name">${searchFacility.name}</div></div>`, { maxWidth: 200 });
    facilityMarker.addTo(leafletMap);
  }

  function renderMap() {
    if (!leafletMap) return;

    // 既存マーカーを消去
    mapMarkers.forEach(m => m.remove());
    mapMarkers = [];

    const filtered = filterAndSort(parkingData);

    filtered.forEach(p => {
      if (!p.lat || !p.lng) return;
      const area = getArea(p);
      const color = AREA_COLORS[area] || AREA_COLORS["その他"];

      const marker = L.circleMarker([p.lat, p.lng], {
        radius: 9,
        fillColor: color,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.92
      });

      marker.bindPopup(buildPopupHtml(p), {
        maxWidth: 280,
        autoPanPaddingTopLeft: [10, 80]
      });

      marker.on("click", function () { this.openPopup(); });

      marker.addTo(leafletMap);
      mapMarkers.push(marker);
    });

    // 施設検索中 → 施設を中心にズーム
    if (searchFacility) {
      leafletMap.setView([searchFacility.lat, searchFacility.lng], 15, { animate: true });
      updateFacilityMarker();
    } else {
      // 通常 → フィルター後の件数に合わせてズーム
      updateFacilityMarker(); // 施設マーカーを消す
      if (mapMarkers.length > 0) {
        leafletMap.fitBounds(
          L.featureGroup(mapMarkers).getBounds().pad(0.12),
          { maxZoom: 16, animate: false }
        );
      }
    }

    // カウント更新
    countEl.textContent = `${filtered.length}件`;
    emptyEl.hidden = true;

    // 現在地マーカーを再表示（renderMapで消えないよう最後に呼ぶ）
    updateUserMarker(false);
  }

  // ---- ユーティリティ ----

  // 住所からエリアを判定
  function getArea(p) {
    const a = p.address;
    if (a.includes("中村区")) return "名駅";
    if (a.includes("金山") || a.includes("沢下町")) return "金山";
    if (a.includes("大須") || a.includes("上前津") || a.includes("門前町")) return "大須";
    if (/丸の内|東桜/.test(a) || /中区栄3丁目5(?!\d)/.test(a)) return "久屋";
    if (/中区錦|中区栄1[\-丁]/.test(a)) return "錦・伏見";
    if (a.includes("中区矢場町") || /中区栄[45]丁目/.test(a)) return "矢場町";
    if (a.includes("中区栄") || a.includes("中区新栄")) return "栄";
    if (a.includes("熱田区")) return "熱田";
    if (a.includes("東区大幸") || a.includes("東区矢田") || a.includes("東区古出来") || a.includes("千種区萱場") || a.includes("北区大曽根") || a.includes("東区砂田橋")) return "ドーム";
    if (a.includes("千種区今池")) return "今池";
    if (a.includes("中区鶴舞") || a.includes("中区千代田") || a.includes("昭和区鶴舞") || a.includes("昭和区御器所") || a.includes("昭和区川名") || a.includes("昭和区檀渓通")) return "鶴舞";
    if (a.includes("千種区覚王山") || a.includes("千種区末盛") || a.includes("千種区山門") || a.includes("千種区観月町")) return "覚王山";
    if (a.includes("千種区千種") || a.includes("千種区吹上") || a.includes("千種区池下") || a.includes("千種区四谷通") || a.includes("千種区春岡")) return "千種";
    if (a.includes("千種区星が丘") || a.includes("千種区井上町") || a.includes("千種区本山") || a.includes("千種区見附町") || a.includes("千種区稲舟通") || a.includes("千種区橋本町") || a.includes("千種区山添")) return "星ヶ丘";
    if (a.includes("港区")) return "名古屋港";
    if (a.includes("昭和区八事") || a.includes("天白区八事") || a.includes("昭和区山手通") || a.includes("昭和区山花") || a.includes("昭和区広路")) return "八事";
    if (a.includes("西区名城") || a.includes("西区二の丸") || a.includes("西区城西") || a.includes("西区浅間") || a.includes("北区名城")) return "名古屋城";
    if (a.includes("西区那古野") || a.includes("西区花の木") || a.includes("西区栄生")) return "円頓寺";
    if (a.includes("東区泉") || a.includes("東区葵") || a.includes("東区筒井")) return "高岳";
    if (a.includes("北区黒川") || a.includes("北区田幡")) return "黒川";
    if (a.includes("名東区藤が丘") || a.includes("名東区藤見が丘") || a.includes("名東区上社") || a.includes("名東区一社")) return "藤が丘";
    if (a.includes("南区山王") || a.includes("南区笠寺") || a.includes("南区笠寺町") || a.includes("南区立脇町") || a.includes("南区呼続")) return "山王";
    return "その他";
  }

  // 今日が休日かどうか（手動モード優先）
  function isHoliday() {
    if (currentDayMode === "weekday") return false;
    if (currentDayMode === "holiday") return true;
    const d = new Date().getDay();
    return d === 0 || d === 6;
  }

  // 駐車時間に対する試算料金
  function calcCost(p, hours) {
    if (!hours) return null;
    const useHoliday = isHoliday();
    const max = useHoliday ? p.maxRate.holiday : p.maxRate.weekday;
    const hourly = p.hourlyRate * hours;
    if (max == null) {
      return { cost: hourly, isMaxApplied: false };
    }
    if (max < hourly) {
      return { cost: max, isMaxApplied: true };
    }
    return { cost: hourly, isMaxApplied: false };
  }

  function buildMapUrl(p) {
    if (p.placeCid) {
      return `https://www.google.com/maps?cid=${p.placeCid}`;
    }
    if (p.placeFid) {
      const name = encodeURIComponent(p.name);
      return `https://www.google.com/maps/place/${name}/data=!4m2!3m1!1s${p.placeFid}`;
    }
    // 駐車場名＋住所で検索（名前がGoogleマップ登録名と一致すれば1件だけ表示される）
    const query = encodeURIComponent(p.name + " " + p.address);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  function formatMax(v) {
    return v == null ? "なし" : `${v.toLocaleString()}円`;
  }

  function toggleFavorite(name) {
    if (favorites.has(name)) {
      favorites.delete(name);
    } else {
      favorites.add(name);
    }
    localStorage.setItem("sakae-favs", JSON.stringify([...favorites]));
    // お気に入りのみ表示中に解除 → リスト更新
    renderList();
  }

  function rateRow(label, value) {
    return `
      <div class="rate-row">
        <span class="rate-row__label">${label}</span>
        <span class="rate-row__value">${value}</span>
      </div>
    `;
  }

  // ---- 並び替え・絞り込み ----

  function filterAndSort(data) {
    let list = data;

    if (searchFacility) {
      if (showFavOnly) list = list.filter((p) => favorites.has(p.name));
    } else if (searchText.trim()) {
      const lq = searchText.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(lq));
    } else {
      if (showFavOnly) {
        list = list.filter((p) => favorites.has(p.name));
      } else if (selectedAreas.size > 0) {
        list = list.filter((p) => selectedAreas.has(getArea(p)));
      }
    }

    list = [...list];

    if (searchFacility) {
      list.sort((a, b) => {
        const da = (a.lat && a.lng) ? calcDistance(searchFacility.lat, searchFacility.lng, a.lat, a.lng) : Infinity;
        const db = (b.lat && b.lng) ? calcDistance(searchFacility.lat, searchFacility.lng, b.lat, b.lng) : Infinity;
        return da - db;
      });
    } else if (currentSort === "price") {
      if (currentDuration) {
        list.sort((a, b) => {
          const ca = calcCost(a, currentDuration).cost;
          const cb = calcCost(b, currentDuration).cost;
          return ca - cb;
        });
      } else {
        list.sort((a, b) => a.hourlyRate - b.hourlyRate);
      }
    } else if (currentSort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name, "ja"));
    } else if (currentSort === "distance" && userLat !== null) {
      list.sort((a, b) => {
        const da = (a.lat && a.lng) ? calcDistance(userLat, userLng, a.lat, a.lng) : Infinity;
        const db = (b.lat && b.lng) ? calcDistance(userLat, userLng, b.lat, b.lng) : Infinity;
        return da - db;
      });
    }

    return list;
  }

  // ---- リスト描画 ----

  // ---- 詳細モーダル ----

  let detailModal = null;

  function buildDetailModal() {
    const el = document.createElement("div");
    el.id = "detail-modal";
    el.innerHTML = `
      <div class="detail-backdrop"></div>
      <div class="detail-sheet">
        <button class="detail-close" aria-label="閉じる">×</button>
        <div class="detail-body"></div>
      </div>
    `;
    document.body.appendChild(el);

    el.querySelector(".detail-backdrop").addEventListener("click", closeDetail);
    el.querySelector(".detail-close").addEventListener("click", closeDetail);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDetail();
    });

    return el;
  }

  function closeDetail() {
    if (!detailModal) return;
    detailModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function openDetail(p) {
    if (!detailModal) detailModal = buildDetailModal();

    const sameRate = p.rates.weekday === p.rates.holiday;
    const sameMax  = p.maxRate.weekday === p.maxRate.holiday;

    const ratesHtml = sameRate
      ? rateRow("料金", p.rates.weekday)
      : rateRow("平日料金", p.rates.weekday) + rateRow("休日料金", p.rates.holiday);

    const maxHtml = sameMax
      ? rateRow("最大料金", `<strong class="max">${formatMax(p.maxRate.weekday)}</strong>`)
      : rateRow("平日最大", `<strong class="max">${formatMax(p.maxRate.weekday)}</strong>`)
        + rateRow("休日最大", `<strong class="max">${formatMax(p.maxRate.holiday)}</strong>`);

    const pm = p.payment || {};
    const payBadges = [
      pm.cash    !== false ? '<span class="pay-badge pay-cash">現金</span>'    : '<span class="pay-badge pay-no">現金不可</span>',
      pm.credit  !== false ? '<span class="pay-badge pay-credit">カード</span>' : "",
      pm.qr      !== false ? '<span class="pay-badge pay-qr">QR</span>'        : "",
    ].filter(Boolean).join("");

    const capHtml = p.capacity ? `<div class="detail-row"><span class="detail-label">収容台数</span><span class="detail-value">${p.capacity}台</span></div>` : "";
    const noteHtml = p.note ? `<p class="detail-note">※ ${p.note}</p>` : "";
    const sourceLink = p.source ? `<a class="detail-link detail-link--sub" href="${p.source}" target="_blank" rel="noopener">公式サイトで確認する</a>` : "";

    detailModal.querySelector(".detail-body").innerHTML = `
      <div class="detail-header">
        <span class="detail-area">${getArea(p)}</span>
        <h2 class="detail-name">${p.name}</h2>
        <p class="detail-address">${p.address}</p>
      </div>
      <div class="detail-section">
        <div class="card__rates">${ratesHtml}${maxHtml}</div>
        ${noteHtml}
      </div>
      <div class="detail-section">
        <div class="detail-row"><span class="detail-label">営業時間</span><span class="detail-value">${p.hours || "—"}</span></div>
        ${capHtml}
        <div class="detail-row"><span class="detail-label">支払い</span><span class="detail-value detail-pay">${payBadges}</span></div>
      </div>
      <div class="detail-actions">
        <a class="detail-link detail-link--map" href="${buildMapUrl(p)}" target="_blank" rel="noopener">Googleマップで見る</a>
        ${sourceLink}
      </div>
    `;

    detailModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  // ---- カード描画 ----

  function renderCard(p) {
    const sameRate = p.rates.weekday === p.rates.holiday;
    const sameMax = p.maxRate.weekday === p.maxRate.holiday;

    const ratesHtml = sameRate
      ? rateRow("料金", p.rates.weekday)
      : rateRow("平日料金", p.rates.weekday) + rateRow("休日料金", p.rates.holiday);

    const maxHtml = sameMax
      ? rateRow("最大料金", `<strong class="max">${formatMax(p.maxRate.weekday)}</strong>`)
      : rateRow("平日最大", `<strong class="max">${formatMax(p.maxRate.weekday)}</strong>`)
        + rateRow("休日最大", `<strong class="max">${formatMax(p.maxRate.holiday)}</strong>`);

    const noteHtml = p.note ? `<p class="card__note">※ ${p.note}</p>` : "";
    const hoursHtml = p.hours ? `<span class="card__hours">営業 ${p.hours}</span>` : "";
    const areaHtml = `<span class="card__area">${getArea(p)}</span>`;
    const isFav = favorites.has(p.name);
    const heartHtml = `<button class="card__fav${isFav ? " is-fav" : ""}" data-name="${p.name}" aria-label="${isFav ? "お気に入り解除" : "お気に入り追加"}">♥</button>`;

    let distHtml = "";
    if (searchFacility && p.lat && p.lng) {
      const d = calcDistance(searchFacility.lat, searchFacility.lng, p.lat, p.lng);
      distHtml = `<span class="card__dist">🏛️ ${formatDistance(d)}</span>`;
    } else if (currentSort === "distance" && userLat !== null && p.lat && p.lng) {
      const d = calcDistance(userLat, userLng, p.lat, p.lng);
      distHtml = `<span class="card__dist">📍 ${formatDistance(d)}</span>`;
    }

    let costHtml = "";
    if (currentDuration) {
      const r = calcCost(p, currentDuration);
      const badge = r.isMaxApplied
        ? '<span class="card__cost-badge">最大料金適用</span>'
        : "";
      costHtml = `
        <div class="card__cost">
          <div class="card__cost-left">
            <span class="card__cost-label">${currentDuration}時間で</span>
            ${badge}
          </div>
          <span class="card__cost-value">${r.cost.toLocaleString()}円</span>
        </div>
      `;
    }

    return `
      <li class="card card--clickable" data-name="${p.name.replace(/"/g, '&quot;')}">
        <div class="card__header">
          <h2 class="card__name">${p.name}</h2>
          <div class="card__header-right">
            ${heartHtml}
            ${areaHtml}
          </div>
        </div>
        <p class="card__address">${p.address}</p>
        ${distHtml}
        ${hoursHtml}
        ${costHtml}
        <div class="card__rates">
          ${ratesHtml}
          ${maxHtml}
        </div>
        <p class="card__detail-hint">タップして詳細を見る →</p>
      </li>
    `;
  }

  function renderList() {
    const sorted = filterAndSort(parkingData);
    listEl.innerHTML = sorted.map(renderCard).join("");
    countEl.textContent = `${sorted.length}件`;
    emptyEl.hidden = sorted.length > 0;
  }

  function render() {
    if (currentView === "map") {
      renderMap();
    } else {
      renderList();
    }
  }

  // ---- ビュー切り替え ----

  document.querySelectorAll("#view-tabs .view-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.view === currentView) return;
      currentView = btn.dataset.view;

      document.querySelectorAll("#view-tabs .view-tab").forEach((b) =>
        b.classList.toggle("is-active", b === btn)
      );

      if (currentView === "map") {
        listEl.hidden = true;
        emptyEl.hidden = true;
        mapViewEl.hidden = false;
        // Leaflet は DOM が表示された後に初期化・サイズ確定が必要
        if (!leafletMap) {
          initMap();
          setTimeout(() => {
            leafletMap.invalidateSize();
            renderMap();
          }, 50);
        } else {
          setTimeout(() => {
            leafletMap.invalidateSize();
            renderMap();
          }, 50);
        }
      } else {
        mapViewEl.hidden = true;
        listEl.hidden = false;
        renderList();
      }
    });
  });

  // ---- フィルター・並び替えイベント ----

  function setActive(container, btn) {
    container.querySelectorAll(".chip").forEach((b) =>
      b.classList.toggle("is-active", b === btn)
    );
  }

  document.querySelectorAll("#sort-filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sort = btn.dataset.sort;
      currentSort = sort;
      setActive(document.getElementById("sort-filters"), btn);
      if (sort === "distance") {
        // すでに位置情報があればそのまま再描画、なければ取得開始
        if (userLat !== null) {
          render();
        } else {
          requestLocation(btn);
        }
      } else {
        render();
      }
    });
  });

  document.querySelectorAll("#area-filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const area = btn.dataset.area;
      const allBtn = document.querySelector("#area-filters [data-area='all']");
      const favBtn = document.querySelector("#area-filters [data-area='favorites']");

      if (area === "favorites") {
        const wasActive = btn.classList.contains("is-active");
        if (wasActive) {
          // もう一度タップで解除 → 全件に戻す
          showFavOnly = false;
          selectedAreas.clear();
          document.querySelectorAll("#area-filters .chip").forEach(b => b.classList.remove("is-active"));
          allBtn.classList.add("is-active");
        } else {
          showFavOnly = true;
          selectedAreas.clear();
          document.querySelectorAll("#area-filters .chip").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
        }
      } else if (area === "all") {
        showFavOnly = false;
        selectedAreas.clear();
        document.querySelectorAll("#area-filters .chip").forEach(b => b.classList.remove("is-active"));
        allBtn.classList.add("is-active");
      } else {
        // 複数選択トグル
        showFavOnly = false;
        favBtn.classList.remove("is-active");
        if (selectedAreas.has(area)) {
          selectedAreas.delete(area);
          btn.classList.remove("is-active");
        } else {
          selectedAreas.add(area);
          btn.classList.add("is-active");
        }
        // 何も選ばれていなければ「全件」をアクティブに
        allBtn.classList.toggle("is-active", selectedAreas.size === 0);
      }

      render();
    });
  });

  document.querySelectorAll("#duration-filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const hours = +btn.dataset.hours;
      const isAlreadyActive = btn.classList.contains("is-active");
      if (isAlreadyActive) {
        currentDuration = null;
        btn.classList.remove("is-active");
      } else {
        currentDuration = hours;
        setActive(document.getElementById("duration-filters"), btn);
      }
      render();
    });
  });

  // ---- ハートボタン・カードクリック（イベント委譲） ----
  listEl.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".card__fav");
    if (favBtn) {
      e.preventDefault();
      toggleFavorite(favBtn.dataset.name);
      return;
    }

    const card = e.target.closest(".card--clickable");
    if (card) {
      const p = parkingData.find(x => x.name === card.dataset.name);
      if (p) openDetail(p);
    }
  });

  // ---- 料金モード切り替え ----
  document.querySelectorAll("#day-filters .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDayMode = btn.dataset.day;
      setActive(document.getElementById("day-filters"), btn);
      render();
    });
  });

  // 自動ボタンのラベルに今日の種別を表示
  (function () {
    const autoBtn = document.querySelector("#day-filters [data-day='auto']");
    if (autoBtn) {
      const d = new Date().getDay();
      autoBtn.textContent = `自動（${(d === 0 || d === 6) ? "休日" : "平日"}）`;
    }
  })();

  renderList();
})();
