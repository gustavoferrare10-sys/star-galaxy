const panel = document.getElementById("planet-panel");

function openPlanetPanel(planet) {
  document.getElementById("planet-name").innerText = planet.name;
  document.getElementById("planet-region").innerText = planet.region;
  document.getElementById("planet-description").innerText = planet.description;

  document.getElementById("planet-image").src = planet.image;
  document.getElementById("planet-minimap").src = planet.minimap;

  panel.classList.remove("hidden");
}

document.getElementById("close-panel").onclick = () => {
  panel.classList.add("hidden");
};
