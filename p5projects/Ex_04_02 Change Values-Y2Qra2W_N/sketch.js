let y = 100;
let d = 130;
  
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(75, y, d, d);   // Left
  ellipse(175, y, d, d);  // Middle
  ellipse(275, y, d, d);  // Right
}

// https://editor.p5js.org/jht1493/sketches/Y2Qra2W_N
// Ex_04_02 Change Values

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_02.js
