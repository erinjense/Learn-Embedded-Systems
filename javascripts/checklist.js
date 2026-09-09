/* Learn Embedded Systems: persistent checklists.
 *
 * Every "- [ ]" item in the guide becomes a checkbox you can tick. State lives in
 * your browser's localStorage only. Nothing is sent anywhere.
 */
(function () {
  "use strict";

  var KEY = "les-progress-v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }
  function hash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) { h = ((h << 5) + h + str.charCodeAt(i)) | 0; }
    return (h >>> 0).toString(36);
  }
  function siteRoot() {
    // Material puts its assets under <root>/assets/. Derive the root from any such link.
    var link = document.querySelector('link[href*="assets/"]');
    if (!link) { return "/"; }
    var href = link.getAttribute("href") || "";
    var idx = href.indexOf("assets/");
    var rel = idx >= 0 ? href.slice(0, idx) : "";
    var a = document.createElement("a");
    a.href = rel || ".";
    return a.pathname.replace(/\/?$/, "/");
  }
  function pageKey() {
    var root = siteRoot();
    var p = location.pathname;
    if (p.indexOf(root) === 0) { p = p.slice(root.length); }
    return p.replace(/index\.html$/, "");
  }
  function itemKey(li, idx) {
    var text = (li.textContent || "").replace(/\s+/g, " ").trim().slice(0, 160);
    return idx + ":" + hash(text);
  }

  function pill(done, total) {
    var el = document.createElement("div");
    el.className = "les-progress-pill";
    el.setAttribute("role", "status");
    var pct = total ? Math.round((done / total) * 100) : 0;
    el.innerHTML =
      '<span class="les-progress-pill__text">' + done + " of " + total + " checked</span>" +
      '<span class="les-progress-bar"><span class="les-progress-bar__fill" style="width:' + pct + '%"></span></span>' +
      (done === total && total > 0 ? '<span class="les-progress-pill__done">Module complete</span>' : "");
    return el;
  }

  function initChecklists() {
    var content = document.querySelector(".md-content__inner");
    if (!content) { return; }
    var items = content.querySelectorAll("li.task-list-item");
    if (!items.length) { return; }

    var state = load();
    var key = pageKey();
    var page = state[key] || { done: {}, total: 0, title: document.title };
    page.total = items.length;
    var h1 = content.querySelector("h1");
    var titleText = "";
    if (h1) {
      h1.childNodes.forEach(function (n) { if (!(n.classList && n.classList.contains("headerlink"))) { titleText += n.textContent; } });
    }
    page.title = titleText.trim() || document.title;

    items.forEach(function (li, idx) {
      var box = li.querySelector('input[type="checkbox"]');
      if (!box) { return; }
      box.disabled = false;
      var ik = itemKey(li, idx);
      if (page.done[ik]) { box.checked = true; li.classList.add("les-done"); }
      else { box.checked = false; li.classList.remove("les-done"); }
      box.addEventListener("change", function () {
        if (box.checked) { page.done[ik] = true; li.classList.add("les-done"); }
        else { delete page.done[ik]; li.classList.remove("les-done"); }
        state[key] = page;
        save(state);
        render();
      });
    });

    state[key] = page;
    save(state);

    var holder = content.querySelector(".les-progress-holder");
    if (!holder) {
      holder = document.createElement("div");
      holder.className = "les-progress-holder";
      if (h1 && h1.parentNode) { h1.parentNode.insertBefore(holder, h1.nextSibling); }
    }

    function render() {
      var n = 0;
      items.forEach(function (li, idx) { if (page.done[itemKey(li, idx)]) { n++; } });
      holder.innerHTML = "";
      holder.appendChild(pill(n, items.length));
    }
    render();
  }

  function initOverview() {
    var panel = document.querySelector("[data-les-overview]");
    if (!panel) { return; }
    var state = load();
    fetch(siteRoot() + "progress.json", { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var pages = data.pages || [];
        var totalAll = 0, doneAll = 0;
        var bySection = {};
        var order = [];
        pages.forEach(function (p) {
          var st = state[p.url] || { done: {} };
          var done = Math.min(Object.keys(st.done || {}).length, p.total);
          totalAll += p.total; doneAll += done;
          var sec = p.section || "Other";
          if (!bySection[sec]) { bySection[sec] = []; order.push(sec); }
          bySection[sec].push({ p: p, done: done });
        });
        var pct = totalAll ? Math.round((doneAll / totalAll) * 100) : 0;
        var html = '<div class="les-overview__head">' +
          "<div><strong>" + doneAll + "</strong> of <strong>" + totalAll + "</strong> checkpoints done · " + pct + "%</div>" +
          '<span class="les-progress-bar les-progress-bar--big"><span class="les-progress-bar__fill" style="width:' + pct + '%"></span></span></div>';
        order.forEach(function (sec) {
          html += '<div class="les-overview__section"><h4>' + sec + "</h4><ul>";
          bySection[sec].forEach(function (row) {
            var p = row.p, d = row.done;
            var cls = d === p.total ? " les-overview__row--done" : d > 0 ? " les-overview__row--started" : "";
            var w = p.total ? Math.round((d / p.total) * 100) : 0;
            html += '<li class="les-overview__row' + cls + '"><a href="' + siteRoot() + p.url + '">' + p.title + "</a>" +
              '<span class="les-overview__count">' + d + "/" + p.total + "</span>" +
              '<span class="les-progress-bar"><span class="les-progress-bar__fill" style="width:' + w + '%"></span></span></li>';
          });
          html += "</ul></div>";
        });
        if (!totalAll) { html = "<p>No checklists found yet.</p>"; }
        panel.innerHTML = html;
      })
      .catch(function () {
        panel.innerHTML = "<p>The progress panel appears on the built site (it reads progress.json).</p>";
      });
  }

  function initTools() {
    var tools = document.querySelector("[data-les-tools]");
    if (!tools || tools.dataset.ready) { return; }
    tools.dataset.ready = "1";
    tools.innerHTML =
      '<div class="les-tools">' +
      '<button class="md-button" data-act="export">Copy my progress</button> ' +
      '<button class="md-button" data-act="import">Paste progress</button> ' +
      '<button class="md-button les-danger" data-act="reset">Reset everything</button>' +
      '<textarea class="les-tools__box" hidden rows="4" placeholder="Paste exported progress here, then click Paste progress again."></textarea>' +
      '<p class="les-tools__msg" role="status"></p></div>';
    var box = tools.querySelector("textarea");
    var msg = tools.querySelector(".les-tools__msg");
    tools.addEventListener("click", function (ev) {
      var act = ev.target && ev.target.dataset && ev.target.dataset.act;
      if (!act) { return; }
      if (act === "export") {
        var txt = JSON.stringify(load());
        box.hidden = false; box.value = txt;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(txt).then(function () {
            msg.textContent = "Copied to clipboard. Save it somewhere safe, then paste it on another device.";
          });
        } else { msg.textContent = "Copy the text below and save it somewhere safe."; }
      } else if (act === "import") {
        if (box.hidden || !box.value.trim()) {
          box.hidden = false; box.value = "";
          msg.textContent = "Paste your saved progress in the box, then click Paste progress again.";
          return;
        }
        try {
          var parsed = JSON.parse(box.value);
          if (!parsed || typeof parsed !== "object") { throw new Error("bad"); }
          save(parsed);
          msg.textContent = "Progress restored. Reload any open pages.";
        } catch (e) { msg.textContent = "That did not look like exported progress."; }
      } else if (act === "reset") {
        if (confirm("Clear every checkbox on every page in this browser?")) {
          try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
          msg.textContent = "All progress cleared.";
          initChecklists();
        }
      }
    });
  }

  function init() { initChecklists(); initOverview(); initTools(); }

  if (typeof document$ !== "undefined" && document$.subscribe) { document$.subscribe(init); }
  else if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); }
  else { init(); }
})();
