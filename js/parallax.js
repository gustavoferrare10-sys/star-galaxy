console.log("PARALLAX CARREGADO");
if (!window.galaxy) {
  throw new Error("galaxy não foi inicializado");
}


const starLayers = [];

function createStarLayer(amount, speed) {
  const layer = new PIXI.Container();
  layer.speed = speed;

  for (let i = 0; i < amount; i++) {
    const star = new PIXI.Graphics();
    star.beginFill(0xffffff, Math.random());
    star.drawCircle(0, 0, Math.random() * 1.5 + 0.5);
    star.endFill();

    star.x = Math.random() * 4000 - 2000;
    star.y = Math.random() * 4000 - 2000;

    layer.addChild(star);
  }

  galaxy.addChildAt(layer, 0);
  starLayers.push(layer);
}

createStarLayer(300, 0.2);
createStarLayer(200, 0.4);
createStarLayer(100, 0.6);

// exporta global
window.starLayers = starLayers;
