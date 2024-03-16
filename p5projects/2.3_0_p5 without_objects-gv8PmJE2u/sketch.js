let x = 0;
let y = 200;
let diameter = 50; 
let r = 218;
let g = 160;
let b = 221;

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(x, y, diameter, diameter);
  
  x = x + 1;
}

// https://editor.p5js.org/jht1493/sketches/gv8PmJE2u
// 2.3_0_p5 without_objects

// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/2.3_0_p5.js_JavaScript_without_objects%20/sketch.js
// https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=154s
