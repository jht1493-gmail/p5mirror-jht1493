let x = 0;
let easing = 0.01;

function setup() {
  createCanvas(220, 120);
}

function draw() {
  var targetX = mouseX;
  x = x + (targetX - x) * easing;
  ellipse(x, 40, 12, 12);
  console.log('targetX=' + targetX + ' x=' + x);
}

// https://editor.p5js.org/jht1493/sketches/kdszl3wkF
// Ex_05_08 Easing Does It

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_08.js