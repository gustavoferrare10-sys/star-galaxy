planetsData.forEach(p => {
  const planet = new PIXI.Graphics();

  planet.beginFill(0x00ffff);
  planet.drawCircle(0, 0, 12);
  planet.endFill();

  planet.x = p.x;
  planet.y = p.y;

  planet.interactive = true;
  planet.buttonMode = true;

  planet.on("pointerdown", () => {
    openPlanetPanel(p);
  });

  galaxy.addChild(planet);
});
