// https://editor.p5js.org/jht1493/sketches/XPFEvFaF8
// 17.5_snake_game_sound

// The snake
let s;
// The scale of the grid
let scl = 20;
let cols;
let rows;

let eatSound;
let startOverSound;
let hello;
let music;

let fr = 3;

// This is the food location
let food;

let musicRate = 1;

function preload() {
  eatSound = loadSound("sounds/Alert/Alert - 06.mp3");
  startOverSound = loadSound("sounds/Voice/Voice - Cartoon Laugh 01.mp3");
  hello = loadSound("sounds/Voice/Voice - Hello 01.mp3");
  music = loadSound("sounds/Music/Music - 01.mp3");
}

function setup() {
  createCanvas(300, 300);
  music.play();
  //hello.playMode('sustain');
  colorMode(HSB, 255);
  noStroke();
  cols = floor(width / scl);
  rows = floor(height / scl);

  s = new Snake();
  frameRate(fr);

  // Pick a food location
  pickLocation();
}

// Pick a food location
function pickLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

// Animation loop
function draw() {
  background(51);

  // If the snake eats the food
  if (s.eat(food)) {
    eatSound.play();
    fr += 2;
    musicRate += 0.05;
    music.rate(musicRate);
    frameRate(fr);
    pickLocation();
  }

  // Check if the snake hits itself or a wall
  s.death();
  // Update snake
  s.update();
  // Draw snake
  s.show();

  fill(150, 255, 255);
  rect(food.x, food.y, scl, scl);
}

// Moving the snake
function keyPressed() {
  //if (!hello.isPlaying()) {
  //hello.play();
  //}

  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }

  if (key == " ") {
    s.total++;
  }
}

// https://github.com/CodingTrain/website/tree/main/Tutorials/P5JS/p5.js_sound

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/40Me1-yAtTc
