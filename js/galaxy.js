console.log("GALAXY.JS INICIANDO");

window.app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  antialias: true
});

document.body.appendChild(app.view);

// Responsivo ao redimensionar
window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  galaxy.x = window.innerWidth / 2;
  galaxy.y = window.innerHeight / 2;
});

window.galaxy = new PIXI.Container();
app.stage.addChild(galaxy);

// centraliza
galaxy.x = app.screen.width / 2;
galaxy.y = app.screen.height / 2;

console.log("GALAXY INICIALIZADO", app, galaxy);
