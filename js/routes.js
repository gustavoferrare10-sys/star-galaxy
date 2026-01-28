console.log("ROTAS CARREGADAS");
if (!window.galaxy) {
  throw new Error("galaxy não foi inicializado");
}


const routes = new PIXI.Graphics();
galaxy.addChild(routes);

function drawRoute(p1, p2) {
  routes.lineStyle(2, 0x00ffff, 0.6);
  routes.moveTo(p1.x, p1.y);
  routes.lineTo(p2.x, p2.y);
}

// exemplos
drawRoute(planetsData[0], planetsData[1]);
drawRoute(planetsData[1], planetsData[2]);

// animação simples
app.ticker.add(() => {
  routes.alpha = 0.5 + Math.sin(Date.now() * 0.003) * 0.2;
});
