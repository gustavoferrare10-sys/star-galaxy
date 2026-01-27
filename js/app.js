const app = new PIXI.Application({
  resizeTo: window,
  backgroundColor: 0x000000,
  antialias: true
});

document.body.appendChild(app.view);

// Container principal
const galaxy = new PIXI.Container();
app.stage.addChild(galaxy);

// DEBUG VISUAL (remove depois)
const test = new PIXI.Graphics();
test.beginFill(0xff0000);
test.drawCircle(0, 0, 20);
test.endFill();
galaxy.addChild(test);

// Centraliza o mapa
galaxy.x = app.screen.width / 2;
galaxy.y = app.screen.height / 2;
