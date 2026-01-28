console.log("PLANETS.JS CARREGADO");

// Inicializa array global de planetas
window.allPlanets = [];

// Verifica se os dados existem
if (!window.planetsData || window.planetsData.length === 0) {
  console.error("planetsData não encontrado");
}

// Cria os planetas na galáxia
window.planetsData.forEach(p => {
  // Container do planeta
  const planetContainer = new PIXI.Container();
  planetContainer.x = p.x;
  planetContainer.y = p.y;
  planetContainer.region = p.region;
  planetContainer.interactive = true;
  planetContainer.cursor = "pointer";

  galaxy.addChild(planetContainer);
  window.allPlanets.push(planetContainer);

  // Sprite do planeta
  const texture = PIXI.Texture.from(p.image);
  const planetSprite = new PIXI.Sprite(texture);
  planetSprite.anchor.set(0.5);
  planetSprite.scale.set(0.15);
  planetSprite.interactive = false;

  planetContainer.addChild(planetSprite);

  // Área de clique (invisível)
  const HIT_RADIUS = 50;
  planetContainer.hitArea = new PIXI.Circle(0, 0, HIT_RADIUS);

  // Nome do planeta
  const label = new PIXI.Text(p.name, {
    fontFamily: "Arial",
    fontSize: 14,
    fill: 0x00ffff
  });
  label.anchor.set(0.5);
  label.y = HIT_RADIUS + 12;
  label.interactive = false;

  planetContainer.addChild(label);

  // Hover effect
  planetContainer.on("pointerover", () => {
    planetSprite.scale.set(0.17);
  });

  planetContainer.on("pointerout", () => {
    planetSprite.scale.set(0.15);
  });

  // Clique - abre o painel
  planetContainer.on("pointerdown", () => {
    console.log("Clique no planeta:", p.name);
    openPlanetPanel(p);
  });
});

console.log(`${window.allPlanets.length} planetas carregados`);
