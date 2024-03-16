var vScale = 16;  // How much to scale down the video
let n_part = 100; // number of Particles to create
var particles = [];
let r_low = 2;
let r_high = 4;
var video;
var slider;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  for (var i = 0; i < n_part; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  slider = createSlider(0, 255, 127);
  background(51);
}

function draw() {
  // background(51);
  video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}


function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(r_low, r_high);

  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };

  this.show = function() {
    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[2], slider.value());
    ellipse(this.x, this.y, this.r, this.r);
  };
}

// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk
// https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js_video
