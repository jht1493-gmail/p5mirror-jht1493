// https://editor.p5js.org/jht1493/sketches/pJUsVrl08
// 11.6: Painting with Pixels - faster
// Video frame stored in in variable img for faster access using get

let vScale = 8; // How much to scale down the video
let n_part = 400; // number of Particles to create
let particles = [];
let r_low = 2;
let r_high = 4;
let video;
let a_alpha = 127;
// let slider;
let img;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  for (let i = 0; i < n_part; i++) {
    let x = random(width);
    let y = random(height);
    particles[i] = new Particle(x, y);
  }
  // slider = createSlider(0, 255, 127);
  createSlider(0, 255, a_alpha).input(function () {
    a_alpha = this.value();
  })
  background(51);
}

function draw() {
  // background(51);
  // video.loadPixels();
  img = video.get();
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(r_low, r_high);
  }

  update() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    noStroke();
    let px = floor(this.x / vScale);
    let py = floor(this.y / vScale);
    let col = img.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[2], a_alpha);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

// https://editor.p5js.org/jht1493/sketches/M5z0cUqPl

// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk
// https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js_video
