var cir = {
  x: 0,
  y: 0,
  a: 30,
  tran: 50
}
var rec = {
  x: 0,
  y: 0,
  a: 30,
  tran: 100
}
var val;

function setup() {
  createCanvas(400, 400);
  create_slider();
}

function draw() {
  let a_val = slider.value();
  frameRate(a_val);
  for (cir.x = 0; cir.x < width; cir.x += cir.a) {
    for (cir.y = 0; cir.y < width; cir.y += cir.a) {
      circlepart();
    }
  }
  for (rec.x = 0; rec.x < width; rec.x += cir.a) {
  for (rec.y = 0; rec.y < width; rec.y += rec.a) {
    rectpart();
  }
}
}

function create_slider() {
  createSpan('slider').style('font-size', '20px');
  slider = createSlider(1, 6);
  slider.style('width', '100px');
}

function circlepart() {
  noStroke();
  col();
  ellipse(cir.x, cir.y, cir.a, cir.a, cir.tran)
}

function rectpart() {
  noStroke();
  col();
  rect(rec.x, rec.y, rec.a, rec.a, rec.tran)
}

function col() {
  const choice = int(random(0, 3));
  if (choice == 0) {
    fill(120, 150, 170)//grey
  } else if (choice == 1) {
    fill(230, 255, 179)//yellow
  } else if (choice == 2) {
    fill(255, 194, 153) //orange
  }
}