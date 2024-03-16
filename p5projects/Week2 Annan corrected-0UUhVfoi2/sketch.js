// https://editor.p5js.org/jht1493/sketches/0UUhVfoi2
// Week2 Annan corrected

// in mousePressed changed Canvas2.background(0)
// to Canvas2.clear()

// problem with big circle after mouse pressed
let w = 200;
let q = 200;
let e = 25;
let Canvas2;
function setup() {
  createCanvas(400, 400);
  Canvas2 = createGraphics(400, 400);
  Canvas2.clear();
  background(0);
}

function draw() {
  background(0);
  w += random(-5, 5) % height;
  q += random(-5, 5) % width;
  fill(q, w, 165);
  noStroke();
  rectMode(CENTER);
  circle(q, w, e);
  // w=(w+20)%height
  // q=(q+20)%width
  // e+=2
  if (e > 400) {
    e += -2;
  } else {
    e += 2;
  }

  Canvas2.noStroke();
  Canvas2.fill(200, mouseY, mouseX, 50);
  Canvas2.ellipse(mouseX, mouseY, 25);
  image(Canvas2, 0, 0);
}

function mousePressed(){
  background(0)
  // Canvas2.background(0)
  Canvas2.clear()
}

// https://editor.p5js.org/ay2494/sketches/Km1Y7cxUp
// Week2 Assignment by ay2494
