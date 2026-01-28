const app = new PIXI.Application({
  resizeTo: window,
  backgroundColor: 0x000000,
  antialias: true
});

document.body.appendChild(app.view);

// Container principal
const galaxy = new PIXI.Container();
app.stage.addChild(galaxy);

// Centraliza o mapa
galaxy.x = app.screen.width / 2;
galaxy.y = app.screen.height / 2;
