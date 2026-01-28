function filterRegion(region) {
  allPlanets.forEach(p => {
    p.visible = region === "All" || p.region === region;
  });
}
