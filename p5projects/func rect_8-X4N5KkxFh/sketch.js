function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect_8();

}


function rect_8() {
  rect_trans();
  rect_trans();
  rect_trans();
  rect_trans();

  rect_trans();
  rect_trans();
  rect_trans();
  rect_trans();
}

function rect_trans() {
  rect(0, 0, 50, 50)
  circle(25,25,50)
  translate(50, 0);
}

// https://p5js.org/reference/#/p5/circle

// https://p5js.org/reference/#/p5/translate