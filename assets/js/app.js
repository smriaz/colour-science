(function () {
  // Persisted UI level (no progress tracking; just a preference)
  const KEY = "colorlab_level";
  const buttons = Array.from(document.querySelectorAll("[data-level]"));
  const openMapBtn = document.getElementById("openMapBtn");
  const courseMap = document.getElementById("courseMap");

  function setLevel(level) {
    document.documentElement.dataset.level = level;
    try { localStorage.setItem(KEY, level); } catch (_) {}

    buttons.forEach(btn => {
      const on = btn.getAttribute("data-level") === level;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function getSavedLevel() {
    try { return localStorage.getItem(KEY); } catch (_) { return null; }
  }

  const initial = getSavedLevel() || "kids";
  setLevel(initial);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => setLevel(btn.getAttribute("data-level")));
  });

  if (openMapBtn && courseMap) {
    openMapBtn.addEventListener("click", () => {
      courseMap.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
})();
