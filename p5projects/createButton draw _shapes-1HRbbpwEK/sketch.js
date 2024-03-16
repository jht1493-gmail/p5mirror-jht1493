function setup() {
  createCanvas(400, 300);
  createButton('Backg').mousePressed(draw_backg);
  createButton('Rect').mousePressed(draw_rect);
  createButton('Circle').mousePressed(draw_circle);
  createButton('Shapes').mousePressed(draw_shapes);
  createButton('Gray').mousePressed(fill_gray);
  createButton('White').mousePressed(fill_white);
}

function draw() {
  // background(220);
}

function draw_rect() {
  console.log('draw_rect');
  rect(0,0,200,200);
}

function fill_gray() {
  fill(127,127,127);
}

function fill_white() {
  fill(255,255,255);
}

function draw_circle() {
  console.log('draw_circle');
  circle(100,100,200)
}

function draw_backg() {
  background(220);
}

function draw_shapes() {
  // fill(red, green, blue, alpha)
  fill(255, 0, 0, 20)
  // translate(x, y)
  translate(0, 100);
  rect(0, 0, 200, 200);
  translate(100, 0);
  // fill([red, green, blue, alpha])
  fill([255, 0, 255, 20])
  circle(100, 100, 200)
  translate(100, 0);
  rect(0, 0, 200, 200);
}

// TRY: add console.log('function_name')
// https://editor.p5js.org/jht1493/sketches/1HRbbpwEK
// createButton draw_shapes
