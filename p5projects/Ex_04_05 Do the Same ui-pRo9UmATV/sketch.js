function setup() {
  createCanvas(480, 120);
  strokeWeight(8);
  createSpan().id('ixy');
}

function draw() {
  background(204);
  strokeWeight(mouseX);
  line(20, 40, 80, 80);
  line(80, 40, 140, 80);
  line(140, 40, 200, 80);
  line(200, 40, 260, 80);
  line(260, 40, 320, 80);
  line(320, 40, 380, 80);
  line(380, 40, 440, 80);
  
  select('#ixy').html('x: ' + mouseX + ' y: ' + mouseY);
}

// https://editor.p5js.org/jht1493/sketches/pRo9UmATV
// Ex_04_05 Do the Same ui

// https://editor.p5js.org/jht1493/sketches/nUqcuwlY9
// Ex_04_05 Do the Same

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_05.js