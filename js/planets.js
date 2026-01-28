console.log("PLANETS.JS CARREGADO");
console.log("planetsData =", window.planetsData);

if (!window.planetsData || window.planetsData.length === 0) {
  console.error("planetsData NÃO encontrado ou vazio");
}

window.planetsData.forEach(p => {

  if (!p.image) return;

  const texture = PIXI.Texture.from(p.image);
  const planet = new PIXI.Sprite(texture);

  planet.anchor.set(0.5);
  planet.x = p.x;
  planet.y = p.y;

  planet.interactive = true;
  planet.buttonMode = true;

  galaxy.addChild(planet);

  function applyScale() {
    const TARGET_SIZE = 80;

    const maxDimension = Math.max(
      texture.width,
      texture.height
    );

    const scale = TARGET_SIZE / maxDimension;
    planet.scale.set(scale);

    planet.hitArea = new PIXI.Circle(0, 0, TARGET_SIZE / 2);

    planet.__baseScale = scale; // salva escala base
  }

  // 🔹 Caso 1: já carregou
  if (texture.baseTexture.valid) {
    applyScale();
  } 
  // 🔹 Caso 2: ainda vai carregar
  else {
    texture.baseTexture.once("loaded", applyScale);
  }

  // 🔹 Hover
  planet.on("pointerover", () => {
    planet.scale.set(planet.__baseScale * 1.1);
  });

  planet.on("pointerout", () => {
    planet.scale.set(planet.__baseScale);
  });

  // 🔹 Nome
  const label = new PIXI.Text(p.name, {
    fontFamily: "Arial",
    fontSize: 14,
    fill: 0x00ffff
  });
  label.anchor.set(0.5);
  label.y = -50;
  planet.addChild(label);

});

