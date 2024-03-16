let checkbox;
let cnv;

function setup() {
  checkbox = createCheckbox(' fill');
  checkbox.changed(changeFill);
  cnv = createCanvas(100, 100);
  cnv.position(0, 30);
  noFill();
}

function draw() {
  background(200);
  ellipse(50, 50, 50, 50);
}

function changeFill() {
  if (checkbox.checked()) {
    fill(0);
  } else {
    noFill();
  }
}

// https://editor.p5js.org/jht1493/sketches/Tv4_-7Qiq
// https://p5js.org/reference/#/p5/changed