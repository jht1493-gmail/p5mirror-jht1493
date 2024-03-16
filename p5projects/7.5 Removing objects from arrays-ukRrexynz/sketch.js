// Removing Objects from Arrays
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
  for (let i = a_bubbles.length - 1; i >= 0; i--) {
    let bub = a_bubbles[i];
    if (contains_bubble(bub, mouseX, mouseY)) {
      a_bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < a_bubbles.length; i++) {
    let bub = a_bubbles[i];
    if (contains_bubble(bub, mouseX, mouseY)) {
      changeColor_bubble(bub, 255);
    } else {
      changeColor_bubble(bub, 0);
    }
    move_bubble(bub);
    show_bubble(bub);
  }
}

function changeColor_bubble(bub, bright) {
  bub.brightness = bright;
}

function contains_bubble(bub, px, py) {
  let d = dist(px, py, bub.x, bub.y);
  if (d < bub.r) {
    return true;
  } else {
    return false;
  }
}

function move_bubble(bub) {
  bub.x = bub.x + random(-2, 2);
  bub.y = bub.y + random(-2, 2);
}

function show_bubble(bub) {
  stroke(255);
  strokeWeight(4);
  fill(bub.brightness, 125);
  circle(bub.x, bub.y, bub.r * 2);
}

// Removing Objects from Arrays
// https://editor.p5js.org/codingtrain/sketches/smC4Jedi