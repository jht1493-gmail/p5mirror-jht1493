// Create n_bubbles that interact with mouse click
let a_bubbles = [];
let n_bubbles = 10;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < n_bubbles; i++) {
    let bub = {
      x: random(width),
      y: random(height),
      r: random(20, 60),
      brightness: 0
    };
    a_bubbles.push(bub);
  }
}

function mousePressed() {
  for (let i = 0; i < a_bubbles.length; i++) {
    clicked_bubble(a_bubbles[i], mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < a_bubbles.length; i++) {
    draw_bubble(a_bubbles[i]);
  }
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
  }
}

function move_bubble(bub) {
  // constrain(n, low, high)
  bub.x = constrain(bub.x + random(-2, 2), 0, width);
  bub.y = constrain(bub.y + random(-2, 2), 0, height);
}

function show_bubble(bub) {
  stroke(255);
  strokeWeight(4);
  fill(bub.brightness, 125);
  ellipse(bub.x, bub.y, bub.r * 2);
}

// 2020-10-26 jht: Added constrain
// Mouse Interaction with Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.4-mouse-interaction.html
// https://youtu.be/TaN5At5RWH8
// https://editor.p5js.org/codingtrain/sketches/lE4ypFpI
// https://editor.p5js.org/jht1493/sketches/LrhcIzvr2
