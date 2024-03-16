let a_bubbles = [];

function setup() {
  createCanvas(600, 400);
  background(50);
}

function mousePressed() {
  let brightness = random([0,255]);
  let r = random(1, 4);
  let jitter = random([2,4,8])
  let bub = new_bubble(mouseX, mouseY, r, jitter, brightness)
  a_bubbles.push( bub );
}

function draw() {
  // background(0);
  for (let bub of a_bubbles) {
    draw_bubble(bub);  
  }
}

function new_bubble(x, y, r, jitter, brightness) {
  return {x, y, r, jitter, brightness, alpha: 80}
  // return {
  //   x: x,
  //   y: y,
  //   r: r,
  //   jitter: jitter,
  //   brightness: brightness,
  //   alpha: 80
  // };
}

function draw_bubble(bub) {
  move_bubble(bub);
  show_bubble(bub);
}

function clicked_bubble(bub, px, py) {
  let d = dist(px, py, bub.x, bub.y);
  if (d < bub.r) {
    if (bub.brightness == 0)
      bub.brightness = 255;
    else
      bub.brightness = 0;
    return true;
  }
  return false;
}

function move_bubble(bub) {
  bub.x = bub.x + random(-bub.jitter, bub.jitter);
  bub.y = bub.y + random(-bub.jitter, bub.jitter);
}

function show_bubble(bub) {
  stroke(bub.brightness, bub.alpha);
  strokeWeight(4);
  fill(bub.brightness, bub.alpha);
  ellipse(bub.x, bub.y, bub.r * 2);
}

// from https://editor.p5js.org/jht1493/sketches/LrhcIzvr2
