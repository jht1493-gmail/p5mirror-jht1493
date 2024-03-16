const a_circle = {
  x: 0,
  y: 200,
  diameter: 50
};

const a_color = {
  r: 218,
  g: 160,
  b: 221
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(a_color.r, a_color.g, a_color.b);
  // ellipse
  fill(250, 200, 200);
  ellipse(a_circle.x, a_circle.y, a_circle.diameter, a_circle.diameter);

  a_circle.x = a_circle.x + 1;
}

// https://editor.p5js.org/jht1493/sketches/qsfTfkb_5
// 2.3_1_p5 with_objects

// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/2.3_1_p5.js_JavaScript_with_objects%20/sketch.js
// https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=154s
