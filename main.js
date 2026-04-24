// =============================================
// MAIN.JS — Lógica e interatividade
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  animateHeroStats();
  renderPlayers();
  renderTimeline();
  renderGoals("all");
  renderStats();
  initFilters();
  initModal();
  initScrollAnimations();
});

// ── NAV ──────────────────────────────────────
function initNav() {
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 80);
  });
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ── HERO COUNTER ─────────────────────────────
function animateHeroStats() {
  const boxes = document.querySelectorAll(".stat-box");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const box = entry.target;
        const target = parseInt(box.dataset.target);
        animateCount(box.querySelector(".stat-num"), target);
        observer.unobserve(box);
      }
    });
  }, { threshold: 0.5 });
  boxes.forEach((b) => observer.observe(b));
}

function animateCount(el, target) {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 30);
}

// ── PLAYERS ───────────────────────────────────
function renderPlayers() {
  const grid = document.getElementById("playersGrid");
  grid.innerHTML = PLAYERS.map((p) => `
    <div class="player-card" data-player="${p.id}" style="--accent:${p.color}">
      <div class="player-card__number">${p.number}</div>
      <div class="player-card__emoji">${p.emoji}</div>
      <div class="player-card__header">
        <h3 class="player-card__name">${p.name}</h3>
        <span class="player-card__pos">${p.position}</span>
      </div>
      <p class="player-card__desc">${p.desc}</p>
      <div class="player-card__meta">
        <div class="player-meta-item">
          <span class="meta-val">${p.santosGols}</span>
          <span class="meta-lbl">Gols</span>
        </div>
        <div class="player-meta-item">
          <span class="meta-val">${p.totalJogos}</span>
          <span class="meta-lbl">Jogos</span>
        </div>
        <div class="player-meta-item">
          <span class="meta-val">${p.assistencias}</span>
          <span class="meta-lbl">Assistências</span>
        </div>
      </div>
      <div class="player-card__badge">${p.destaque}</div>
      <div class="player-card__phase">${p.fase}</div>
    </div>
  `).join("");
}

// ── TIMELINE ──────────────────────────────────
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  container.innerHTML = TIMELINE.map((item, i) => `
    <div class="timeline-item ${i % 2 === 0 ? "left" : "right"}" data-index="${i}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-season">${item.season}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-goals">
          <div class="tg-item neymar">
            <span class="tg-name">Neymar</span>
            <div class="tg-bar-wrap">
              <div class="tg-bar" style="width:${(item.gols.neymar / 25) * 100}%" data-val="${item.gols.neymar}"></div>
            </div>
            <span class="tg-num">${item.gols.neymar}</span>
          </div>
          <div class="tg-item robinho">
            <span class="tg-name">Robinho</span>
            <div class="tg-bar-wrap">
              <div class="tg-bar" style="width:${(item.gols.robinho / 25) * 100}%" data-val="${item.gols.robinho}"></div>
            </div>
            <span class="tg-num">${item.gols.robinho}</span>
          </div>
          <div class="tg-item ganso">
            <span class="tg-name">Ganso</span>
            <div class="tg-bar-wrap">
              <div class="tg-bar" style="width:${(item.gols.ganso / 25) * 100}%" data-val="${item.gols.ganso}"></div>
            </div>
            <span class="tg-num">${item.gols.ganso}</span>
          </div>
        </div>
        <div class="timeline-highlight">${item.highlight}</div>
        ${item.titulo ? `<div class="timeline-trophy">🏆 ${item.titulo}</div>` : ""}
      </div>
    </div>
  `).join("");
}

// ── GOALS ─────────────────────────────────────
function renderGoals(filter) {
  const grid = document.getElementById("goalsGrid");
  const filtered = filter === "all"
    ? NOTABLE_GOALS
    : NOTABLE_GOALS.filter((g) => g.player === filter);

  grid.innerHTML = "";

  filtered.forEach((goal, i) => {
    const card = document.createElement("div");
    card.className = `goal-card goal-card--${goal.player}`;
    card.style.animationDelay = `${i * 0.07}s`;
    card.dataset.id = goal.id;

    const player = PLAYERS.find((p) => p.id === goal.player);

    card.innerHTML = `
      <div class="goal-card__badge">${goal.emoji}</div>
      <div class="goal-card__player" style="color:${player.color}">${player.name}</div>
      <h3 class="goal-card__title">${goal.title}</h3>
      <div class="goal-card__meta">
        <span>${goal.competition}</span>
        <span>${goal.date}</span>
      </div>
      <p class="goal-card__preview">${goal.description.substring(0, 100)}…</p>
      <div class="goal-card__type">${goal.type}</div>
      <div class="goal-card__importance">${goal.importance}</div>
      <button class="goal-card__btn">Ver Detalhes →</button>
    `;

    card.querySelector(".goal-card__btn").addEventListener("click", () => openModal(goal));
    grid.appendChild(card);
  });
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGoals(btn.dataset.filter);
    });
  });
}

// ── MODAL ─────────────────────────────────────
function initModal() {
  document.getElementById("modalBackdrop").addEventListener("click", closeModal);
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

function openModal(goal) {
  const player = PLAYERS.find((p) => p.id === goal.player);
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="modal-emoji">${goal.emoji}</div>
    <div class="modal-player" style="color:${player.color}">${player.name}</div>
    <h2 class="modal-title">${goal.title}</h2>
    <div class="modal-grid">
      <div class="modal-info">
        <span class="mi-label">Competição</span>
        <span class="mi-val">${goal.competition}</span>
      </div>
      <div class="modal-info">
        <span class="mi-label">Adversário</span>
        <span class="mi-val">${goal.opponent}</span>
      </div>
      <div class="modal-info">
        <span class="mi-label">Data</span>
        <span class="mi-val">${goal.date}</span>
      </div>
      <div class="modal-info">
        <span class="mi-label">Minuto</span>
        <span class="mi-val">${goal.minute}'</span>
      </div>
      <div class="modal-info">
        <span class="mi-label">Assistência</span>
        <span class="mi-val">${goal.assist}</span>
      </div>
      <div class="modal-info">
        <span class="mi-label">Tipo de Gol</span>
        <span class="mi-val">${goal.type}</span>
      </div>
    </div>
    <p class="modal-desc">${goal.description}</p>
    <div class="modal-stars">${goal.importance}</div>
  `;
  document.getElementById("goalModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("goalModal").classList.remove("open");
  document.body.style.overflow = "";
}

// ── STATS ─────────────────────────────────────
function renderStats() {
  const container = document.getElementById("statsContainer");
  const maxGoals = 54;

  container.innerHTML = `
    <div class="stats-chart">
      <h3 class="stats-chart-title">Gols por Competição</h3>
      <div class="chart-bars">
        ${PLAYERS.map((p) => {
          const s = FULL_STATS[p.id];
          return `
          <div class="chart-player">
            <div class="chart-player-name" style="color:${p.color}">${p.name.split(" ")[0]}</div>
            <div class="chart-cols">
              ${renderBar("Brasileiro", s.golsCampBrasileiro, maxGoals, p.color)}
              ${renderBar("Paulista", s.golsCampPaulistа, maxGoals, p.color)}
              ${renderBar("Libertadores", s.golsLibertadores, maxGoals, p.color)}
              ${renderBar("Copa Brasil", s.golsCopaDoBrasil, maxGoals, p.color)}
            </div>
          </div>`;
        }).join("")}
      </div>
      <div class="chart-legend">
        <span>Brasileiro</span><span>Paulista</span><span>Libertadores</span><span>Copa Brasil</span>
      </div>
    </div>

    <div class="stats-comparison">
      <h3 class="stats-chart-title">Comparação Geral</h3>
      ${PLAYERS.map((p) => {
        const s = FULL_STATS[p.id];
        return `
        <div class="cmp-row" style="--accent:${p.color}">
          <div class="cmp-name">${p.name.split(" ")[0]}</div>
          <div class="cmp-metrics">
            <div class="cmp-metric">
              <span class="cmp-label">Gols</span>
              <div class="cmp-bar-wrap">
                <div class="cmp-bar" style="width:${(s.golsTotais / 60) * 100}%; background:${p.color}"></div>
              </div>
              <span class="cmp-val">${s.golsTotais}</span>
            </div>
            <div class="cmp-metric">
              <span class="cmp-label">Assist.</span>
              <div class="cmp-bar-wrap">
                <div class="cmp-bar" style="width:${(s.assistencias / 60) * 100}%; background:${p.color}"></div>
              </div>
              <span class="cmp-val">${s.assistencias}</span>
            </div>
            <div class="cmp-metric">
              <span class="cmp-label">Jogos</span>
              <div class="cmp-bar-wrap">
                <div class="cmp-bar" style="width:${(s.jogos / 120) * 100}%; background:${p.color}"></div>
              </div>
              <span class="cmp-val">${s.jogos}</span>
            </div>
          </div>
          <div class="cmp-awards">
            ${s.premios.map((a) => `<span class="award-tag">${a}</span>`).join("")}
          </div>
        </div>`;
      }).join("")}
    </div>
  `;

  // Animate bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".cmp-bar, .tg-bar").forEach((bar) => {
          bar.style.transition = "width 1s cubic-bezier(.4,0,.2,1)";
        });
      }
    });
  }, { threshold: 0.3 });
  observer.observe(container);
}

function renderBar(label, val, max, color) {
  const pct = Math.round((val / max) * 100);
  return `
    <div class="bar-col">
      <div class="bar-outer">
        <div class="bar-inner" style="height:${pct}%; background:${color}">
          <span class="bar-tooltip">${val}</span>
        </div>
      </div>
    </div>`;
}

// ── SCROLL ANIMATIONS ─────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    ".player-card, .timeline-item, .goal-card, .section-header"
  ).forEach((el) => observer.observe(el));
}
