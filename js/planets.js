console.log("PLANETS.JS CARREGADO");
console.log("planetsData =", window.planetsData);

if (!window.planetsData || window.planetsData.length === 0) {
  console.error("planetsData NÃO encontrado ou vazio");
}

window.planetsData.forEach(p => {

  if (!p.image) {
    console.error("Planeta sem imagem:", p.name);
    return;
  }

  const texture = PIXI.Texture.from(p.image);
  const planet = new PIXI.Sprite(texture);

  planet.anchor.set(0.5);
  planet.x = p.x;
  planet.y = p.y;

  // 🔹 TAMANHO PADRÃO (resolve planetas gigantes)
  const TARGET_SIZE = 80;
  const maxDimension = Math.max(texture.width, texture.height);
  const scale = TARGET_SIZE / maxDimension;
  planet.scale.set(scale);

  // 🔹 ÁREA CLICÁVEL (resolve clique quebrado)
  planet.hitArea = new PIXI.Circle(0, 0, TARGET_SIZE / 2);

  planet.interactive = true;
  planet.buttonMode = true;

  // 🔹 Hover
  planet.on("pointerover", () => {
    planet.scale.set(scale * 1.1);
  });

  planet.on("pointerout", () => {
    planet.scale.set(scale);
  });

  // 🔹 Nome do planeta
  const label = new PIXI.Text(p.name, {
    fontFamily: "Arial",
    fontSize: 14,
    fill: 0x00ffff
  });
  label.anchor.set(0.5);
  label.y = -40;
  planet.addChild(label);

  galaxy.addChild(planet);

  console.log("Sprite criado:", p.name);
});
