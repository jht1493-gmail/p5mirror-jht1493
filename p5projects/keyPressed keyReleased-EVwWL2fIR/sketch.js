let a_keys = {};
let a_x = 100;
let a_y = 100;
let a_step = 5;

function setup() {
  createCanvas(512, 512);
  print('LEFT_ARROW', LEFT_ARROW)
  print('UP_ARROW', UP_ARROW)
  print('RIGHT_ARROW', RIGHT_ARROW)
  print('DOWN_ARROW', DOWN_ARROW)
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
  fill(255, 0, 0);
  ellipse(a_x, a_y, 50, 50);

  fill(0, 0, 0);
  textSize(28)

  text(JSON.stringify(a_keys), 10, height / 2)

  text('key=' + key + ' keyCode=' + keyCode, 10, height / 2 + 30);
}

function keyPressed() {
  // print('keyPressed', key);
  a_keys[key] = 1;
  return false; // prevent any default behaviour
}

function keyReleased() {
  // print('keyReleased', key);
  delete a_keys[key];
  return false; // prevent any default behaviour
}