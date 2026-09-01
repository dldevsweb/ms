/* Логика раздела «Информатика · 8 класс» */
(function () {
  var DATA = window.COURSE_8 || [];
  DATA.forEach(function (it, i) { it._id = i + 1; });

  var KEY = "dldevs_8class_done";
  var listEl = document.getElementById("list");
  var detailEl = document.getElementById("detail");
  var gridEl = document.getElementById("grid");

  function loadDone() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveDone(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  function shortLabel(it) {
    return it.kind === "control" ? ("КР №" + it.cnum) : ("Тема " + it.num);
  }

  function renderList() {
    var done = loadDone();
    var html = "";
    DATA.forEach(function (t) {
      var isDone = !!done[t._id];
      if (t.kind === "control") {
        html += '<a class="topic-card control' + (isDone ? " done" : "") + '" href="#t' + t._id + '">' +
          '<div class="tc-top">' +
            '<div class="topic-num control">' + (isDone ? "✓" : "КР") + '</div>' +
            '<div><div class="topic-name">' + esc(t.name) + '</div>' +
            '<div class="topic-sub">' + esc(t.sub) + '</div></div>' +
          '</div>' +
          '<div class="topic-meta">' +
            '<span class="chip control">📝 Контрольная</span>' +
            (t.covers ? '<span class="chip control">' + esc(t.covers) + '</span>' : "") +
            (isDone ? '<span class="chip done">✓ Выполнено</span>' : "") +
          '</div>' +
        '</a>';
      } else {
        var hasPc = (t.tasks || []).some(function (x) { return x.type === "pc"; });
        var hasNb = (t.tasks || []).some(function (x) { return x.type === "nb"; });
        html += '<a class="topic-card' + (isDone ? " done" : "") + '" href="#t' + t._id + '">' +
          '<div class="tc-top">' +
            '<div class="topic-num">' + (isDone ? "✓" : t.num) + '</div>' +
            '<div><div class="topic-name">' + esc(t.name) + '</div>' +
            '<div class="topic-sub">' + esc(t.sub) + '</div></div>' +
          '</div>' +
          '<div class="topic-meta">' +
            (hasPc ? '<span class="chip">💻 ПК</span>' : "") +
            (hasNb ? '<span class="chip nb">📓 Тетрадь</span>' : "") +
            (isDone ? '<span class="chip done">✓ Изучено</span>' : "") +
          '</div>' +
        '</a>';
      }
    });
    gridEl.innerHTML = html;
    updateProgress();
  }

  function updateProgress() {
    var done = loadDone();
    var n = DATA.filter(function (t) { return done[t._id]; }).length;
    var pct = DATA.length ? Math.round((n / DATA.length) * 100) : 0;
    var fill = document.getElementById("pfill");
    var txt = document.getElementById("ptext");
    if (fill) fill.style.width = pct + "%";
    if (txt) txt.innerHTML = "Пройдено <b>" + n + "</b> из " + DATA.length + " занятий · " + pct + "%";
  }

  function tailHtml(t, isDone, doneWord) {
    var idx = DATA.indexOf(t);
    var prev = DATA[idx - 1];
    var next = DATA[idx + 1];
    return '<div class="mark-done">' +
      '<button class="btn-done' + (isDone ? " is-done" : "") + '" id="markBtn">' +
        (isDone ? "✓ " + doneWord : "Отметить как " + doneWord.toLowerCase()) + '</button>' +
      '<div class="nav-arrows">' +
        (prev ? '<a href="#t' + prev._id + '">← ' + esc(shortLabel(prev)) + '</a>' : "") +
        (next ? '<a href="#t' + next._id + '">' + esc(shortLabel(next)) + ' →</a>' : "") +
      '</div></div>';
  }

  function wireTail(t, doneWord) {
    var btn = document.getElementById("markBtn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var d = loadDone();
      if (d[t._id]) { delete d[t._id]; } else { d[t._id] = true; }
      saveDone(d);
      var nowDone = !!d[t._id];
      btn.classList.toggle("is-done", nowDone);
      btn.textContent = nowDone ? ("✓ " + doneWord) : ("Отметить как " + doneWord.toLowerCase());
    });
  }

  function renderLesson(t, isDone) {
    var html = '<a class="back-link" href="#">← Все занятия</a>';
    html += '<div class="d-head"><div class="topic-num">' + t.num + '</div>' +
            '<h2>' + esc(t.name) + '</h2></div>';
    html += '<p class="d-keywords">Ключевые слова: ' +
            t.keywords.map(function (k) { return "<span>" + esc(k) + "</span>"; }).join(", ") + '</p>';

    t.sections.forEach(function (s) {
      html += '<div class="section"><h3>' + esc(s.h) + '</h3>' + s.html + '</div>';
    });
    if (t.modern) {
      html += '<div class="callout modern"><span class="ct">🚀 Современный взгляд</span>' + t.modern + '</div>';
    }
    if (t.terms && t.terms.length) {
      html += '<div class="section"><h3>Запомни термины</h3><div class="terms">';
      t.terms.forEach(function (tm) {
        html += '<div class="term-row"><div class="t">' + esc(tm.t) + '</div><div class="d">' + esc(tm.d) + '</div></div>';
      });
      html += '</div></div>';
    }
    var TM = {
      nb:        { c:"nb", l:"📓 В тетради" },
      pc:        { c:"pc", l:"💻 На компьютере" },
      challenge: { c:"ch", l:"⭐ Со звёздочкой" },
      project:   { c:"pr", l:"🚀 Мини-проект" },
      discuss:   { c:"ds", l:"💬 В команде" }
    };
    html += '<div class="section"><h3>Задания</h3>';
    t.tasks.forEach(function (task) {
      var m = TM[task.type] || TM.nb;
      html += '<div class="task ' + m.c + '">' +
        '<div class="task-head">' +
          '<span class="task-badge ' + m.c + '">' + m.l + '</span>' +
          '<span class="task-title">' + esc(task.title) + '</span>' +
        '</div>' + task.html + '</div>';
    });
    html += '</div>';
    html += tailHtml(t, isDone, "Изучено");
    detailEl.innerHTML = html;
    wireTail(t, "Изучено");
  }

  function renderControl(t, isDone) {
    var html = '<a class="back-link" href="#">← Все занятия</a>';
    html += '<div class="d-head"><div class="topic-num control">КР</div>' +
            '<h2>' + esc(t.name) + '</h2></div>';
    html += '<p class="d-keywords control-line">' + esc(t.sub) +
            (t.covers ? ' · <span>' + esc(t.covers) + '</span>' : "") + '</p>';

    if (t.intro) {
      html += '<div class="callout control"><span class="ct">📝 Как выполнять</span>' + t.intro + '</div>';
    }
    (t.variants || []).forEach(function (v) {
      html += '<div class="section"><h3>' + esc(v.title) + '</h3><ol class="cw-list">';
      v.tasks.forEach(function (q) { html += '<li>' + q + '</li>'; });
      html += '</ol></div>';
    });
    if (t.criteria) {
      html += '<div class="callout def"><span class="ct">✅ Критерии оценки</span>' + t.criteria + '</div>';
    }
    html += tailHtml(t, isDone, "Выполнено");
    detailEl.innerHTML = html;
    wireTail(t, "Выполнено");
  }

  function renderDetail(id) {
    var t = DATA[id - 1];
    if (!t) { goList(); return; }
    var isDone = !!loadDone()[t._id];
    if (t.kind === "control") { renderControl(t, isDone); }
    else { renderLesson(t, isDone); }
    listEl.style.display = "none";
    detailEl.style.display = "block";
    window.scrollTo(0, 0);
  }

  function goList() {
    detailEl.style.display = "none";
    listEl.style.display = "block";
    renderList();
  }

  function route() {
    var m = (location.hash || "").match(/^#t(\d+)$/);
    if (m) { renderDetail(parseInt(m[1], 10)); }
    else { goList(); }
  }

  window.addEventListener("hashchange", route);
  renderList();
  route();
})();
