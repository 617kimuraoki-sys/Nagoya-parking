let cars     = JSON.parse(localStorage.getItem('nenpi_cars')    || '[]');
let records  = JSON.parse(localStorage.getItem('nenpi_records') || '[]');
let chart    = null;
let fillType = 'full';

// ── utils ─────────────────────────────────────
function uid()  { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
function save() { localStorage.setItem('nenpi_cars', JSON.stringify(cars)); localStorage.setItem('nenpi_records', JSON.stringify(records)); }
function fmtDate(s)  { const [y,m,d] = s.split('-'); return `${y}/${m}/${d}`; }
function fmtMonth(s) { const [y,m]   = s.split('-'); return `${y}年${m}月`; }
function effCls(v)   { return v >= 15 ? 'eff-good' : v >= 10 ? 'eff-ok' : 'eff-bad'; }
function carTarget(id) { return (cars.find(c => c.id === id) || {}).targetEff || null; }
function lastOdoRec(carId) {
  return [...records].filter(r => r.carId === carId && r.odo != null).sort((a,b) => b.odo - a.odo)[0] || null;
}
function getLastFullRecord(carId) {
  return [...records]
    .filter(r => r.carId === carId && r.odo != null && (r.fillType === 'full' || !r.fillType))
    .sort((a,b) => b.odo - a.odo)[0] || null;
}
function calcRecs(carId) {
  return records.filter(r => (!carId || r.carId === carId) && r.efficiency != null);
}

// ── stats helpers ─────────────────────────────
function stats(recs) {
  if (!recs.length) return null;
  const e = recs.map(r => r.efficiency);
  const c = recs.filter(r => r.cost).map(r => r.cost);
  return {
    n:    recs.length,
    best: Math.max(...e),
    worst:Math.min(...e),
    avg:  e.reduce((a,b)=>a+b,0)/e.length,
    cost: c.reduce((a,b)=>a+b,0),
    dist: recs.reduce((a,r)=>a+(r.distance||0),0),
  };
}
function monthly(recs) {
  const m = {};
  recs.forEach(r => { const k=r.date.slice(0,7); (m[k]=m[k]||[]).push(r); });
  return Object.entries(m).sort((a,b)=>b[0].localeCompare(a[0])).map(([k,rs])=>({
    k, n:rs.length,
    avg: rs.reduce((a,r)=>a+r.efficiency,0)/rs.length,
    cost:rs.filter(r=>r.cost).reduce((a,r)=>a+r.cost,0),
    dist:rs.reduce((a,r)=>a+(r.distance||0),0),
  }));
}

// ── header KPI ────────────────────────────────
function updateKpi() {
  const el = document.getElementById('header-avg');
  const r  = calcRecs('');
  el.textContent = r.length ? (r.reduce((s,x)=>s+x.efficiency,0)/r.length).toFixed(1) : '--';
}

// ── tab bar ───────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    if (btn.dataset.tab === 'records')  { renderStrip(); renderRecords(); }
    if (btn.dataset.tab === 'analysis') renderAnalysis();
  });
});

// ── selects ───────────────────────────────────
function syncSelects() {
  const opts = cars.map(c=>`<option value="${c.id}">${c.name}（${c.type}）</option>`).join('');
  document.getElementById('calc-car-select').innerHTML    = `<option value="">選択してください</option>${opts}`;
  document.getElementById('records-car-filter').innerHTML = `<option value="">すべての車両</option>${opts}`;
  document.getElementById('analysis-car-filter').innerHTML= `<option value="">すべての車両</option>${opts}`;
}

// ── add car ───────────────────────────────────
document.getElementById('add-car-btn').addEventListener('click', () => {
  const name   = document.getElementById('car-name').value.trim();
  const type   = document.getElementById('car-type').value.trim();
  const target = parseFloat(document.getElementById('car-target').value) || null;
  if (!name) { alert('車両名を入力してください'); return; }
  if (!type) { alert('車種を入力してください');   return; }
  cars.push({ id:uid(), name, type, targetEff:target });
  save();
  ['car-name','car-type','car-target'].forEach(id => document.getElementById(id).value='');
  syncSelects(); renderCars();
});

function renderCars() {
  const el = document.getElementById('cars-list');
  if (!cars.length) { el.innerHTML='<div class="empty-state"><p>登録された車両がありません</p></div>'; return; }
  el.innerHTML = cars.map(c=>`
    <div class="car-card" id="cc-${c.id}">
      <div class="car-main">
        <div class="car-left">
          <div class="car-avatar">🚗</div>
          <div>
            <div class="car-name">${c.name}</div>
            <div class="car-type">${c.type}</div>
          </div>
        </div>
        <button class="del-btn" onclick="delCar('${c.id}')">削除</button>
      </div>
      <div class="car-target">
        <span class="ct-label">🎯 目標燃費</span>
        ${c.targetEff
          ? `<span class="ct-val">${c.targetEff.toFixed(1)}<small style="font-size:11px;font-weight:500;color:var(--ink-3);margin-left:2px">km/L</small></span>`
          : `<span class="ct-none">未設定</span>`}
        <button class="ct-edit" onclick="toggleCTForm('${c.id}')">編集</button>
      </div>
      <div class="ct-form hidden" id="ctf-${c.id}">
        <input class="ct-input" type="number" id="cti-${c.id}" placeholder="15.0" step="0.1" min="0" value="${c.targetEff||''}">
        <button class="ct-save" onclick="saveTarget('${c.id}')">保存</button>
      </div>
    </div>`).join('');
}

function toggleCTForm(id) { document.getElementById(`ctf-${id}`).classList.toggle('hidden'); }
function saveTarget(id) {
  const v = parseFloat(document.getElementById(`cti-${id}`).value) || null;
  const c = cars.find(x=>x.id===id); if (c) { c.targetEff=v; save(); }
  renderCars(); renderRecords();
}
function delCar(id) {
  if (!confirm('この車両と関連する記録を削除しますか？')) return;
  cars    = cars.filter(c=>c.id!==id);
  records = records.filter(r=>r.carId!==id);
  save(); syncSelects(); renderCars(); renderRecords(); renderStrip(); updateKpi();
}

// ── fill-type toggle ──────────────────────────
document.getElementById('fill-toggle').addEventListener('click', e => {
  const btn = e.target.closest('.ft-btn');
  if (!btn) return;
  fillType = btn.dataset.type;
  document.querySelectorAll('.ft-btn').forEach(b => b.classList.toggle('active', b === btn));
});

// ── record ────────────────────────────────────
document.getElementById('calc-btn').addEventListener('click', () => {
  const carId = document.getElementById('calc-car-select').value;
  const date  = document.getElementById('calc-date').value;
  const odo   = parseFloat(document.getElementById('calc-odo').value);
  const fuel  = parseFloat(document.getElementById('calc-fuel').value);
  const price = parseFloat(document.getElementById('calc-price').value) || null;

  if (!carId)           { alert('車両を選択してください');    return; }
  if (!date)            { alert('日付を入力してください');     return; }
  if (!odo   || odo<=0) { alert('ODO計を入力してください');   return; }
  if (!fuel  || fuel<=0){ alert('給油量を入力してください');   return; }

  const lastAny = lastOdoRec(carId);
  if (lastAny && odo <= lastAny.odo) { alert(`ODO計の値が前回（${lastAny.odo.toLocaleString()} km）以下です。`); return; }

  const hideAll = () => ['result-baseline','result-partial','result-card'].forEach(id => document.getElementById(id).classList.add('hidden'));

  // 途中給油
  if (fillType === 'partial') {
    const cost = price ? Math.round(fuel * price) : null;
    records.push({ id:uid(), carId, date, odo, fuel, pricePerLiter:price, fillType:'partial', efficiency:null, cost, distance:null });
    records.sort((a,b)=>new Date(a.date)-new Date(b.date)); save();
    hideAll();
    document.getElementById('result-partial-fuel').textContent = fuel;
    document.getElementById('result-partial').classList.remove('hidden');
    renderRecords();
    ['calc-odo','calc-fuel','calc-price'].forEach(id=>document.getElementById(id).value='');
    return;
  }

  // 満タン給油 — 初回基準
  const lastFull = getLastFullRecord(carId);
  if (!lastFull) {
    records.push({ id:uid(), carId, date, odo, fuel, pricePerLiter:price, fillType:'full', efficiency:null, cost:null, distance:null });
    records.sort((a,b)=>new Date(a.date)-new Date(b.date)); save();
    hideAll();
    document.getElementById('result-odo-val').textContent = odo.toLocaleString();
    document.getElementById('result-baseline').classList.remove('hidden');
    renderRecords(); return;
  }

  // 満タン給油 — 燃費計算（途中給油を合算）
  const partialsSince = records.filter(r =>
    r.carId === carId &&
    r.fillType === 'partial' &&
    new Date(r.date) > new Date(lastFull.date)
  );
  const partialFuel = partialsSince.reduce((s,r) => s + r.fuel, 0);
  const totalFuel   = Math.round((fuel + partialFuel) * 100) / 100;
  const distance    = Math.round((odo - lastFull.odo) * 10) / 10;
  const eff         = Math.round((distance / totalFuel) * 10) / 10;
  const partialCost = partialsSince.reduce((s,r) => s + (r.cost || 0), 0);
  const thisCost    = price ? Math.round(fuel * price) : null;
  const totalCost   = (partialCost || thisCost) ? partialCost + (thisCost || 0) : null;

  records.push({ id:uid(), carId, date, odo, fuel, pricePerLiter:price, fillType:'full', efficiency:eff, cost:totalCost, distance, partialCount:partialsSince.length });
  records.sort((a,b)=>new Date(a.date)-new Date(b.date)); save();

  hideAll();
  document.getElementById('result-efficiency').textContent = eff.toFixed(1);

  const tgt = carTarget(carId);
  let chips = `
    <div class="chip">
      <span class="chip-lbl">走行距離</span>
      <span class="chip-v">${distance.toLocaleString()}</span><span class="chip-u">km</span>
    </div>
    <div class="chip">
      <span class="chip-lbl">${partialsSince.length ? '合計給油' : '給油量'}</span>
      <span class="chip-v">${totalFuel}</span><span class="chip-u">L</span>
    </div>`;
  if (totalCost) chips += `
    <div class="chip">
      <span class="chip-lbl">総コスト</span>
      <span class="chip-v">${totalCost.toLocaleString()}</span><span class="chip-u">円</span>
    </div>`;
  if (tgt) {
    const hit=eff>=tgt, d=Math.abs(eff-tgt).toFixed(1);
    chips += `
      <div class="chip">
        <span class="chip-lbl">目標比較</span>
        <span class="chip-v">${tgt.toFixed(1)}</span><span class="chip-u">km/L</span>
        <span class="badge ${hit?'badge-up':'badge-down'}">${hit?`▲+${d}`:`▼-${d}`}</span>
      </div>`;
  }
  document.getElementById('result-meta').innerHTML = chips;
  document.getElementById('result-card').classList.remove('hidden');

  updateKpi(); renderStrip(); renderRecords();
  ['calc-odo','calc-fuel','calc-price'].forEach(id=>document.getElementById(id).value='');
});

// ── stats strip ───────────────────────────────
function renderStrip() {
  const carId = document.getElementById('records-car-filter').value;
  const el = document.getElementById('stats-strip');
  const st = stats(calcRecs(carId));
  if (!st) { el.innerHTML=''; return; }
  el.innerHTML = `
    <div class="stats-panel">
      <div class="sp-item">
        <span class="sp-label">最高燃費</span>
        <span class="sp-val">${st.best.toFixed(1)}<span class="sp-unit">km/L</span></span>
      </div>
      <div class="sp-divider"></div>
      <div class="sp-item">
        <span class="sp-label">平均燃費</span>
        <span class="sp-val">${st.avg.toFixed(1)}<span class="sp-unit">km/L</span></span>
      </div>
      <div class="sp-divider"></div>
      <div class="sp-item">
        <span class="sp-label">総コスト</span>
        <span class="sp-val">${st.cost?'¥'+st.cost.toLocaleString():'--'}</span>
      </div>
    </div>`;
}

// ── records ───────────────────────────────────
function renderRecords() {
  const carId = document.getElementById('records-car-filter').value;
  const el = document.getElementById('records-list');
  const list = [...(carId ? records.filter(r=>r.carId===carId) : records)].reverse();
  if (!list.length) { el.innerHTML='<div class="empty-state"><p>記録がありません</p></div>'; return; }

  el.innerHTML = list.map(r => {
    const car = cars.find(c=>c.id===r.carId);
    const nm  = car ? car.name : '不明';

    // 途中給油カード
    if (r.fillType === 'partial') return `
      <div class="rec-card rec-partial">
        <div class="rec-top"><span class="rec-date">${fmtDate(r.date)}</span><span class="rec-car-badge partial-badge">${nm}</span></div>
        <div class="rec-body">
          <div class="rec-partial-label">🔄 途中給油</div>
          <div class="rec-stats">
            <div class="rs"><span class="rs-l">給油量</span><span class="rs-v">${r.fuel}<small>L</small></span></div>
            <div class="rs"><span class="rs-l">ODO</span><span class="rs-v">${r.odo?r.odo.toLocaleString():'--'}<small>km</small></span></div>
            ${r.cost
              ? `<div class="rs"><span class="rs-l">コスト</span><span class="rs-v">${r.cost.toLocaleString()}<small>円</small></span></div>`
              : `<div class="rs"></div>`}
          </div>
        </div>
        <div class="rec-footer"><button class="del-link" onclick="delRecord('${r.id}')">削除</button></div>
      </div>`;

    // 基準ODOカード
    if (r.efficiency == null) return `
      <div class="rec-card">
        <div class="rec-top"><span class="rec-date">${fmtDate(r.date)}</span><span class="rec-car-badge base">${nm}</span></div>
        <div class="rec-body">
          <div class="rec-base-label">📍 基準ODO</div>
          <div class="rec-base-odo">${r.odo.toLocaleString()} <small style="font-size:14px;font-weight:500;color:var(--ink-3)">km</small></div>
        </div>
        <div class="rec-footer"><button class="del-link" onclick="delRecord('${r.id}')">削除</button></div>
      </div>`;

    // 燃費記録カード
    const cls = effCls(r.efficiency);
    const tgt = carTarget(r.carId);
    let pill = '';
    if (tgt) {
      const hit=r.efficiency>=tgt, d=Math.abs(r.efficiency-tgt).toFixed(1);
      pill=`<span class="target-pill ${hit?'pill-hit':'pill-miss'}">${hit?`▲+${d}`:`▼-${d}`}</span>`;
    }
    const partialBadge = r.partialCount
      ? `<span style="font-size:10px;font-weight:700;color:var(--amber);background:rgba(217,119,6,.1);padding:2px 8px;border-radius:100px;margin-left:4px">${r.partialCount}回分含む</span>`
      : '';
    return `
      <div class="rec-card ${cls}">
        <div class="rec-top"><span class="rec-date">${fmtDate(r.date)}</span><span class="rec-car-badge">${nm}</span></div>
        <div class="rec-body">
          <div class="rec-eff">
            <span class="rec-eff-num">${r.efficiency.toFixed(1)}</span>
            <span class="rec-eff-unit">km/L</span>${pill}${partialBadge}
          </div>
          <div class="rec-stats">
            <div class="rs"><span class="rs-l">走行</span><span class="rs-v">${r.distance?r.distance.toLocaleString():'--'}<small>km</small></span></div>
            <div class="rs"><span class="rs-l">給油</span><span class="rs-v">${r.fuel}<small>L</small></span></div>
            ${r.cost
              ? `<div class="rs"><span class="rs-l">コスト</span><span class="rs-v">${r.cost.toLocaleString()}<small>円</small></span></div>`
              : `<div class="rs"><span class="rs-l">ODO</span><span class="rs-v">${r.odo?r.odo.toLocaleString():'--'}<small>km</small></span></div>`}
          </div>
        </div>
        <div class="rec-footer"><button class="del-link" onclick="delRecord('${r.id}')">削除</button></div>
      </div>`;
  }).join('');
}

document.getElementById('records-car-filter').addEventListener('change', ()=>{ renderStrip(); renderRecords(); });
function delRecord(id) {
  if (!confirm('この記録を削除しますか？')) return;
  records=records.filter(r=>r.id!==id); save(); updateKpi(); renderStrip(); renderRecords();
}

// ── analysis ──────────────────────────────────
function renderAnalysis() {
  const carId = document.getElementById('analysis-car-filter').value;
  const recs  = calcRecs(carId).sort((a,b)=>new Date(a.date)-new Date(b.date));
  renderAStats(recs); renderChart(recs,carId); renderMonthly(recs);
}
document.getElementById('analysis-car-filter').addEventListener('change', renderAnalysis);

function renderAStats(recs) {
  const el = document.getElementById('analysis-stats');
  const st = stats(recs);
  if (!st) { el.innerHTML='<div class="empty-state"><p>記録がありません</p></div>'; return; }
  el.innerHTML=`
    <div class="astat-grid-top">
      <div class="astat lg"><span class="astat-icon">🏆</span><span class="astat-label">最高燃費</span><span class="astat-val">${st.best.toFixed(1)}<span class="astat-u">km/L</span></span></div>
      <div class="astat lg"><span class="astat-icon">📊</span><span class="astat-label">平均燃費</span><span class="astat-val">${st.avg.toFixed(1)}<span class="astat-u">km/L</span></span><span class="astat-sub">最低 ${st.worst.toFixed(1)} km/L</span></div>
    </div>
    <div class="astat-grid-bot">
      <div class="astat"><span class="astat-label">走行距離</span><span class="astat-val">${Math.round(st.dist).toLocaleString()}<span class="astat-u" style="font-size:10px">km</span></span></div>
      <div class="astat"><span class="astat-label">給油回数</span><span class="astat-val">${st.n}<span class="astat-u" style="font-size:10px">回</span></span></div>
      <div class="astat"><span class="astat-label">総コスト</span><span class="astat-val">${st.cost?'¥'+st.cost.toLocaleString():'--'}</span></div>
    </div>`;
}

function renderChart(recs, carId) {
  const canvas=document.getElementById('efficiency-chart'), empty=document.getElementById('graph-empty');
  if (!recs.length) { canvas.style.display='none'; empty.classList.remove('hidden'); if(chart){chart.destroy();chart=null;} return; }
  canvas.style.display='block'; empty.classList.add('hidden');
  if (chart) chart.destroy();
  const tgt = carId ? carTarget(carId) : null;
  const ds = [{
    data: recs.map(r=>r.efficiency),
    borderColor:'#4d86f5',
    backgroundColor: ctx=>{ const g=ctx.chart.ctx.createLinearGradient(0,0,0,ctx.chart.height); g.addColorStop(0,'rgba(37,99,235,.15)'); g.addColorStop(1,'rgba(37,99,235,0)'); return g; },
    tension:.4, fill:true,
    pointBackgroundColor:'#fff', pointBorderColor:'#4d86f5', pointBorderWidth:2.5, pointRadius:5, pointHoverRadius:7, borderWidth:2.5,
  }];
  if (tgt) ds.push({ data:recs.map(()=>tgt), borderColor:'rgba(5,150,105,.45)', borderDash:[5,4], borderWidth:1.5, pointRadius:0, fill:false, tension:0 });
  chart = new Chart(canvas,{
    type:'line', data:{labels:recs.map(r=>fmtDate(r.date)),datasets:ds},
    options:{
      responsive:true,
      plugins:{
        legend:{display:false},
        tooltip:{backgroundColor:'#08101f',padding:12,cornerRadius:10,titleColor:'rgba(255,255,255,.4)',bodyColor:'#fff',bodyFont:{family:'Inter',size:16,weight:'700'},callbacks:{label:c=>`${c.parsed.y.toFixed(1)} km/L`}}
      },
      scales:{
        y:{beginAtZero:false,grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#8a9ab5',font:{size:11}},title:{display:true,text:'km/L',color:'#8a9ab5',font:{size:11}}},
        x:{grid:{display:false},ticks:{color:'#8a9ab5',font:{size:11},maxRotation:45}}
      }
    }
  });
}

function renderMonthly(recs) {
  const el = document.getElementById('monthly-list');
  const mn = monthly(recs);
  if (!mn.length) { el.innerHTML=''; return; }
  el.innerHTML = `<span class="monthly-label">月別サマリー</span>` +
    mn.map(m=>`
      <div class="month-card">
        <div class="month-head">
          <span class="month-title">${fmtMonth(m.k)}</span>
          <span class="month-count">${m.n}回の給油</span>
        </div>
        <div class="month-body">
          <div class="ms"><span class="ms-l">平均燃費</span><span class="ms-v">${m.avg.toFixed(1)}<small>km/L</small></span></div>
          <div class="ms"><span class="ms-l">走行距離</span><span class="ms-v">${Math.round(m.dist).toLocaleString()}<small>km</small></span></div>
          <div class="ms"><span class="ms-l">コスト</span><span class="ms-v">${m.cost?'¥'+m.cost.toLocaleString():'--'}</span></div>
        </div>
      </div>`).join('');
}

// ── drawer ────────────────────────────────────
const drawer        = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawer-overlay');

function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('menu-btn').addEventListener('click', openDrawer);
document.getElementById('drawer-close').addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// ── init ──────────────────────────────────────
document.getElementById('calc-date').value = new Date().toISOString().slice(0,10);
syncSelects(); renderCars(); renderRecords(); renderStrip(); updateKpi();
