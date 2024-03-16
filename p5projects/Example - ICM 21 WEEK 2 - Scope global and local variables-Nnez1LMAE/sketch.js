// Global Variables
let x = 200;
let y = 200;
let r = 40;

function setup() {
  createCanvas(400, 400);
  background(220);
  circle(x, y, r);
}

function draw() {
  circle(x, y + 100, r);
}


// Local Variables
// function setup() {
//   createCanvas(400, 400);
//   background(220);
  
//   let x = 200;
//   let y = 200;
//   let r = 40;
//   circle(x, y, r);
// }

// function draw() {
//   // why doesn't this work?
//   circle(x, y + 100, r);
// }

// https://editor.p5js.org/jht1493/sketches/Nnez1LMAE
// https://editor.p5js.org/enickles/sketches/5fwm7sgvZ
// Example - ICM 21 WEEK 2 - Scope: global and local variables