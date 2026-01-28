function filterRegion(region) {
  if (!window.allPlanets) return;

  window.allPlanets.forEach(p => {
    p.visible = region === "All" || p.region === region;
  });
}
