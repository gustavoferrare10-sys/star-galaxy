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

const grid = new PIXI.Graphics();
grid.lineStyle(1, 0x333333);

for (let x = -1000; x <= 1000; x += 100) {
  grid.moveTo(x, -1000);
  grid.lineTo(x, 1000);
}

for (let y = -1000; y <= 1000; y += 100) {
  grid.moveTo(-1000, y);
  grid.lineTo(1000, y);
}

galaxy.addChild(grid);
