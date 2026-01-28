console.log("GALAXY.JS CARREGADO");

// 🔹 App Pixi (GLOBAL)
window.app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  antialias: true,
  resizeTo: window
});

document.body.appendChild(app.view);

// 🔹 Container principal da galáxia (GLOBAL)
window.galaxy = new PIXI.Container();
app.stage.addChild(galaxy);

// 🔹 Centraliza a galáxia
galaxy.x = app.screen.width / 2;
galaxy.y = app.screen.height / 2;

// 🔹 Resize automático
window.addEventListener("resize", () => {
  galaxy.x = app.screen.width / 2;
  galaxy.y = app.screen.height / 2;
});
