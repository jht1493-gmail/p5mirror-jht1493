let balloon1 = {
  x: 100,
  y: 400,
  w: 90,
  h: 125,
  speed: 2,
};

let balloon2 = {
  x: 300,
  y: 400,
  w: 120,
  h: 150,
  speed: 3,
};

let balloon3 = {
  x: 250,
  y: 400,
  w: 250,
  h: 175,
  speed: 4,
};

let balloons = [balloon1, balloon2, balloon3];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 200, 245);

  fill(250, 250, 0);

  for (let i = 0; i < balloons.length; i++) {
    let b = balloons[i];
    ellipse(b.x, b.y, b.w, b.h);
    b.y -= b.speed;
    b.x += random(-9, 9);
  }
}

// TRY: Add a fourth ballon
// TRY: Have ach ballon have a different color

// https://editor.p5js.org/lh1966/sketches/VXmbd9RSl
// Week #5 Exercise #3 P3 La'Kay Hodge

// https://editor.p5js.org/enickles/sketches/urTyZ7ua2
// Exercise - ICM Week 2 - Convert to object literals
