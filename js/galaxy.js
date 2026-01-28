console.log("GALAXY.JS INICIANDO");

window.app = new PIXI.Application({
  resizeTo: window,
  backgroundColor: 0x000000,
  antialias: true
});

document.body.appendChild(app.view);

window.galaxy = new PIXI.Container();
app.stage.addChild(galaxy);

// centraliza
galaxy.x = app.screen.width / 2;
galaxy.y = app.screen.height / 2;

console.log("GALAXY INICIALIZADO", app, galaxy);
