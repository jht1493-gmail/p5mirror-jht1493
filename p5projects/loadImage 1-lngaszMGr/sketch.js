let img;

function preload() {
  // preload() runs once
  img = loadImage('images/bw1.png');
  print('preload img', img)
}

function setup() {
  print('setup img', img)
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // image(img, x, y, [width], [height])
  // image(img, 0, 0, 400, 300);
  image(img, 0, 0);
}

function mousePressed() {
  print('mousePressed')
  image(img, mouseX, mouseY, 100, 100);
  // image(img, 0, 0)
}