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

planetsData.forEach(p => {
  const planet = new PIXI.Graphics();

  planet.beginFill(0x00ffff);
  planet.drawCircle(0, 0, 25);
  planet.endFill();

  planet.x = p.x;
  planet.y = p.y;

  planet.interactive = true;
  planet.buttonMode = true;

  // Glow fake (scale + alpha)
  planet.on("pointerover", () => {
    planet.scale.set(1.2);
    planet.alpha = 1;
  });

  planet.on("pointerout", () => {
    planet.scale.set(1);
    planet.alpha = 0.9;
  });

  planet.on("pointerdown", () => {
    openPlanetPanel(p);
  });

  galaxy.addChild(planet);
});

const label = new PIXI.Text(p.name, {
  fontFamily: "Arial",
  fontSize: 14,
  fill: 0x00ffff
});

label.anchor.set(0.5);
label.y = -35;
planet.addChild(label);

