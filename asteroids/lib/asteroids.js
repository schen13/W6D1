const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

const mo = new MovingObject(
  { "pos": [600, 300], "vel": [10, 10], "radius": 50, "color": "#00FF00"}
);
const ast = new Asteroid(
  { "pos": [0, 10] }
);

const canvasEl = document.getElementById("game-canvas");
const ctx = canvasEl.getContext("2d");
mo.draw(ctx);
mo.move();
mo.move();
mo.draw(ctx);
ast.draw(ctx);
ast.move();
ast.move();
ast.draw(ctx);
