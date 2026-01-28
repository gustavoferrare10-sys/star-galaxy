console.log("PLANETS.JS FOI CARREGADO");

const testPlanet = new PIXI.Graphics();
testPlanet.beginFill(0x00ffff);
testPlanet.drawCircle(0, 0, 15);
testPlanet.endFill();

testPlanet.x = 100;
testPlanet.y = 0;

galaxy.addChild(testPlanet);
