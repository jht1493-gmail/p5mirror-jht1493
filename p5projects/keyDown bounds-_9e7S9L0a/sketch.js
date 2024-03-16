let a_x = 100;
let a_y = 100;
let a_keys = {};
let a_step = 5;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  background(200);
  if (keyIsDown(LEFT_ARROW)) {
    a_x -= a_step;
    if (a_x < 0) a_x = width;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    a_x += a_step;
    if (a_x > width) a_x = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    a_y -= a_step;
    if (a_y < 0) a_y = height;
  }
  if (keyIsDown(DOWN_ARROW)) {
    a_y += a_step;
    if (a_y > height) a_y = 0;
  }
  ellipse(a_x, a_y, 50, 50);

  const hits = {};
  for (ch = 0; ch < 256; ch++) {
    if (keyIsDown(ch)) {
      // print('ch', ch);
      hits[ch] = 1;
    }
  }
  text(JSON.stringify(hits), 10, height / 2)
  text(JSON.stringify(a_keys), 10, height / 2 + 20)
  // print('a_x', a_x, 'a_y', a_y);
}

function keyPressed() {
  // print('keyPressed', key);
  a_keys[key] = 1;
}

function keyReleased() {
  // print('keyReleased', key);
  delete a_keys[key];
}