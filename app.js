(function () {
  const listEl = document.getElementById("parking-list");
  const sortButtons = document.querySelectorAll(".sort-btn");
  let currentSort = "price";

  function sortParkings(data, key) {
    const sorted = [...data];
    if (key === "price") {
      sorted.sort((a, b) => a.hourlyRate - b.hourlyRate);
    } else if (key === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name, "ja"));
    }
    return sorted;
  }

  function buildMapUrl(p) {
    if (typeof p.lat === "number" && typeof p.lng === "number") {
      return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + " " + p.address)}`;
  }

  function formatMax(v) {
    return v == null ? "なし" : `${v.toLocaleString()}円`;
  }

  function rateRow(label, value) {
    return `
      <div class="rate-row">
        <span class="rate-row__label">${label}</span>
        <span class="rate-row__value">${value}</span>
      </div>
    `;
  }

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

    return `
      <li class="card">
        <h2 class="card__name">${p.name}</h2>
        <p class="card__address">${p.address}</p>
        ${hoursHtml}
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

  function render(data) {
    const sorted = sortParkings(data, currentSort);
    listEl.innerHTML = sorted.map(renderCard).join("");
  }

  sortButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSort = btn.dataset.sort;
      sortButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
      render(parkingData);
    });
  });

  render(parkingData);
})();
