console.log("PLANETS.JS CARREGADO");
console.log("planetsData =", window.planetsData);

if (!window.planetsData || window.planetsData.length === 0) {
  console.error("planetsData NÃO encontrado ou vazio");
}

window.planetsData.forEach((p, i) => {
  const planet = new PIXI.Graphics();

  planet.beginFill(0x00ffff);
  planet.drawCircle(0, 0, 25);
  planet.endFill();

  planet.x = p.x;
  planet.y = p.y;

  galaxy.addChild(planet);

  console.log("Planeta criado:", p.name);
});

