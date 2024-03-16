// https://editor.p5js.org/jht1493/sketches/uB9r-rpmp
// 3.3 else if less than

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  // draw the 4 regions
  stroke(255);
  strokeWeight(1)
  line(50,0,50,400);
  line(150,0,150,400);
  line(250,0,250,400);
  
  strokeWeight(4);
  noFill();

  // if (mouseX > 250) {
  //   ellipse(300, 200, 100, 100);
  // } else if (mouseX > 150) {
  //   rect(300, 200, 100, 100);
  // } else if (mouseX > 50) {
  //   line(0, 0, width, height);
  // } else {
  //   point(300, 200);
  // }
  
  // Compare left to right using less than comparison
  if (mouseX < 50) {
    ellipse(300, 200, 100, 100);
  } else if (mouseX < 150) {
    rect(300, 200, 100, 100);
  } else if (mouseX < 250) {
    line(0, 0, width, height);
  } else {
    point(300, 200);
  }

}

// https://editor.p5js.org/jht1493/sketches/VmJD4ZUMJ
// 3.3 else if

// Else and Else If, AND and OR
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.3-else-elseif-and-or.html
// https://youtu.be/r2S7j54I68c
// https://editor.p5js.org/codingtrain/sketches/In-bIB8w


