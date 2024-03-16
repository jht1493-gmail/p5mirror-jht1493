// square rollover

var a_x = 250;
var a_y = 150;
var a_s = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  if ((mouseX > a_x) && (mouseX < a_x + a_s) 
      && (mouseY > a_y) && (mouseY < a_y + a_s)) {
    fill(0);
  } else {
    fill(255);
  }
  rect(a_x, a_y, a_s, a_s);
}

// https://editor.p5js.org/icm/sketches/rkLfL56h
// Lauren McCarthy <http://lauren-mccarthy.com>
