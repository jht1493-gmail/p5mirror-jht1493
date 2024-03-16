// Global Variables
let gx = 100;
let gy = 200;
let gr = 40;

function setup() {
  createCanvas(400, 400);
  // background(220);
  // Local Variables
  // let x = 200;
  // let y = 200;
  // let r = 40;
  // circle(x, y, r);
}
function draw() {
  background(220);
  circle(gx, gy + 100, gr);
  gx = (gx + 1) % width;
}


// function setup() {
//   createCanvas(400, 400);
//   background(220);
//   circle(x, y, r);
// }




// function draw() {
//   // why doesn't this work?
//   circle(x, y + 100, r);
// }

// https://editor.p5js.org/jht1493/sketches/Nnez1LMAE
// https://editor.p5js.org/enickles/sketches/5fwm7sgvZ
// Example - ICM 21 WEEK 2 - Scope: global and local variables