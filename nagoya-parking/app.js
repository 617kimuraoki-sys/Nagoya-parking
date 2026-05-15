(function () {
  const listEl = document.getElementById("parking-list");
  const countEl = document.getElementById("result-count");
  const emptyEl = document.getElementById("empty-msg");
  const mapViewEl = document.getElementById("map-view");

  let currentSort = "price";
  let currentArea = "all";
  let currentDuration = null;
  let currentView = "list";
  let currentDayMode = "auto"; // "auto" | "weekday" | "holiday"
  let userLat = null;
  let userLng = null;
  let favorites = new Set(JSON.parse(localStorage.getItem("sakae-favs") || "[]"));
  let showFavOnly = false;

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

  const AREA_COLORS = {
    "栄":     "#2563eb",
    "錦・伏見": "#059669",
    "名駅":   "#7c3aed",
    "大須":   "#d97706",
    "久屋":   "#0891b2",
    "金山":   "#dc2626",
    "その他": "#6b7280"
  };

  function initMap() {
    if (leafletMap) return;
    leafletMap = L.map(mapViewEl, { zoomControl: true }).setView([35.168, 136.906], 14);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19
    }).addTo(leafletMap);
    addMapLegend();
    addLocateControl();
  }

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
      div.innerHTML = Object.entries(AREA_COLORS)
        .filter(([area]) => area !== "その他")
        .map(([area, color]) =>
          `<div class="legend-item">
             <span class="legend-dot" style="background:${color}"></span>${area}
           </div>`
        ).join("");
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

      // タップ／クリックでポップアップを開く
      marker.on("click", function () { this.openPopup(); });

      marker.addTo(leafletMap);
      mapMarkers.push(marker);
    });

    // フィルター後の件数に合わせてズーム
    if (mapMarkers.length > 0) {
      leafletMap.fitBounds(
        L.featureGroup(mapMarkers).getBounds().pad(0.12),
        { maxZoom: 16, animate: false }
      );
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
    if (a.includes("中区栄") || a.includes("中区新栄")) return "栄";
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
    const query = encodeURIComponent(`${p.name} ${p.address}`);
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

    if (showFavOnly) {
      list = list.filter((p) => favorites.has(p.name));
    } else if (currentArea !== "all") {
      list = list.filter((p) => getArea(p) === currentArea);
    }

    list = [...list];
    if (currentSort === "price") {
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
    if (currentSort === "distance" && userLat !== null && p.lat && p.lng) {
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
      <li class="card">
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
        ${noteHtml}
        <a class="card__map-link" href="${buildMapUrl(p)}" target="_blank" rel="noopener">
          Googleマップで見る
        </a>
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

      if (area === "favorites") {
        const wasActive = btn.classList.contains("is-active");
        if (wasActive) {
          // もう一度タップで解除 → 全件に戻す
          showFavOnly = false;
          setActive(document.getElementById("area-filters"),
            document.querySelector("#area-filters [data-area='all']"));
        } else {
          showFavOnly = true;
          currentArea = "all";
          setActive(document.getElementById("area-filters"), btn);
        }
      } else {
        showFavOnly = false;
        currentArea = area;
        setActive(document.getElementById("area-filters"), btn);
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

  // ---- ハートボタン（イベント委譲） ----
  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".card__fav");
    if (!btn) return;
    e.preventDefault();
    toggleFavorite(btn.dataset.name);
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
