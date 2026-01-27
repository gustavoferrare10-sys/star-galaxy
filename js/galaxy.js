const stars = new PIXI.Graphics();

for (let i = 0; i < 1000; i++) {
  stars.beginFill(0xffffff, Math.random());
  stars.drawCircle(
    Math.random() * 4000 - 2000,
    Math.random() * 4000 - 2000,
    Math.random() * 1.5
  );
  stars.endFill();
}

galaxy.addChild(stars);
