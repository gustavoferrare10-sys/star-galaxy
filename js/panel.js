function openPlanetPanel(p) {
  document.getElementById("planet-name").innerText = p.name;
  document.getElementById("planet-desc").innerText = p.description;
  document.getElementById("planet-panel").classList.remove("hidden");
}

function closePanel() {
  document.getElementById("planet-panel").classList.add("hidden");
}
