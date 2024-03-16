function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  // Line from (0,0) to (480, 120)
  line(0, 0, width, height);  
  // Line from (480, 0) to (0, 120)
  line(width, 0, 0, height);  
  ellipse(width/2, height/2, 60, 60);
}

// https://editor.p5js.org/jht1493/sketches/T4ufWkYjs
// Ex_04_03 Adjust the Canvas

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_03.js
