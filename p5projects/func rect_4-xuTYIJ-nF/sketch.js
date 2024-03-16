function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect_4();
  rect_4();
}

function rect_4() {
  rect_trans();
  rect_trans();
  rect_trans();
  rect_trans();
}

function rect_trans() {
  rect(0,0,50,50)
  translate(50, 0);
}


// https://p5js.org/reference/#/p5/translate
