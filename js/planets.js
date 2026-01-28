console.log("PLANETS.JS CARREGADO");

if (!window.planetsData || window.planetsData.length === 0) {
  console.error("planetsData não encontrado");
}

window.planetsData.forEach(p => {

  // 🧱 Container do planeta
  const planetContainer = new PIXI.Container();
  planetContainer.x = p.x;
  planetContainer.y = p.y;
  planetContainer.interactive = true;
  planetContainer.cursor = "pointer";

  galaxy.addChild(planetContainer);

  // 🪐 Sprite do planeta
  const texture = PIXI.Texture.from(p.image);
  const planetSprite = new PIXI.Sprite(texture);
  planetSprite.anchor.set(0.5);
  planetSprite.scale.set(0.15); // escala fixa e segura
  planetSprite.interactive = false;

  planetContainer.addChild(planetSprite);
  planetContainer.region = p.region;
window.allPlanets = window.allPlanets || [];
window.allPlanets.push(planetContainer);


  // 🔘 Área de clique (invisível)
  const HIT_RADIUS = 50;
  const hitCircle = new PIXI.Graphics();
  hitCircle.beginFill(0xff0000, 0); // invisível
  hitCircle.drawCircle(0, 0, HIT_RADIUS);
  hitCircle.endFill();

  planetContainer.hitArea = new PIXI.Circle(0, 0, HIT_RADIUS);
  planetContainer.addChild(hitCircle);

  // 🔤 Nome do planeta (abaixo)
  const label = new PIXI.Text(p.name, {
    fontFamily: "Arial",
    fontSize: 14,
    fill: 0x00ffff
  });
  label.anchor.set(0.5);
  label.y = HIT_RADIUS + 12;
  label.interactive = false;

  planetContainer.addChild(label);

  // ✨ Hover
  planetContainer.on("pointerover", () => {
    planetSprite.scale.set(0.17);
  });

  planetContainer.on("pointerout", () => {
    planetSprite.scale.set(0.15);
  });

  // 🖱️ Clique
  planetContainer.on("pointerdown", () => {
    console.log("CLIQUE FUNCIONANDO:", p.name);
  });

});

