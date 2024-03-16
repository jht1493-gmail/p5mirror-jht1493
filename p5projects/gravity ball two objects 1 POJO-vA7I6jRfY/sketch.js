// Two ball objects
let ball1 = {
  x: 150,
  y: 0,
  w: 16,
  speed: 0,
};

let ball2 = {
  x: 350,
  y: 50,
  w: 32,
  speed: 0,
};

// Global gravity variable
let gravity = 0.1;

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(51);

  // Display ball objects
  display_ball(ball1);
  display_ball(ball2);

  // Move ball objects
  update_ball(ball1);
  update_ball(ball2);
}

function display_ball(ba) {
  fill(175);
  ellipse(ba.x, ba.y, ba.w, ba.w);
}

function update_ball(ba) {
  // Add gravity to speed
  ba.speed = ba.speed + gravity;

  // Add speed to location
  ba.y = ba.y + ba.speed;

  // If square reaches the bottom 
  // Reverse speed 
  if (ba.y > height - ba.w / 2) {
    ba.y = height - ba.w / 2;
    ba.speed = ba.speed * -0.95;
  }
}

// 2021-04-10 jht: POJO version
// https://editor.p5js.org/jht1493/sketches/vA7I6jRfY
// gravity ball two objects 1 POJO

// 2020-10-11 jht: Corrected bounce test, comments
// https://editor.p5js.org/icm/sketches/BkyUQp1nb