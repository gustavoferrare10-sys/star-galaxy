planetsData.forEach(planet => {
  const sprite = PIXI.Sprite.from(planet.image);
  sprite.anchor.set(0.5);
  sprite.x = planet.x;
  sprite.y = planet.y;
  sprite.interactive = true;
  sprite.buttonMode = true;

  sprite.on("pointerdown", () => {
    console.log("Planeta:", planet.name);
  });

  galaxy.addChild(sprite);
});
