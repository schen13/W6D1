const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

const DEFAULTS = {
  "color": "#000000",
  "radius": 30
};

function Asteroid(options) {
  // MovingObject.call(
  //   { "pos": options.pos,
  //   "vel": Util.randomVec(5),
  //   "color": DEFAULTS.color,
  //   "radius": DEFAULTS.radius
  // });
  this.pos = options.pos;
  this.vel = Util.randomVec(5);
  this.radius = DEFAULTS.color;
  this.color = DEFAULTS.radius;
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
