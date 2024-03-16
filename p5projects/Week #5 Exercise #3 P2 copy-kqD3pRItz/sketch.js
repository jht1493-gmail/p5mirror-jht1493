let balloon1 = {
x: 100,
y: 400,
w: 90,
h: 125,
speed: 2,
}

let balloon2 = {
x: 300,
y: 400,
w: 120,
h: 150,
speed: 3,
}

let balloon3 = {
x: 250,
y: 400,
w: 250,
h: 175,
speed: 4
}

let balloons = [balloon1,balloon2,balloon3];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 200, 245);
  
  fill(250, 250, 0);

  for (let i = 0; i < balloons.length; i++) {
    let ballon = balloons[i];
    ellipse (ballon.x, ballon.y, ballon.w, ballon.h);
    ballon.y -= ballon.speed;
  }
  // balloons!
//   ellipse(balloon1.x, balloon1.y, balloon1.w, balloon1.h);
//   ellipse(balloon2.x, balloon2.y, balloon2.w, balloon2.h);

//   balloon1.y -= balloon1.speed;
//   balloon2.y -= balloon2.speed;
}


// https://editor.p5js.org/enickles/sketches/urTyZ7ua2
// Exercise - ICM Week 2 - Convert to object literals