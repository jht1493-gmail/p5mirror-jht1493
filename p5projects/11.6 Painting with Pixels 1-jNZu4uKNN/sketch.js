let video;
let vScale = 16;
let particles = [];
let s_width = 320;
let s_height = 240;
let n_part = 400;
let r_low = 8;
let r_high = 16;
let slider;
let tile_len = r_high;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  const tiles = gen_tiles();
  shuffle(tiles, true);
  print('tiles.length', tiles.length)
  for (var i = 0; i < n_part; i++) {
    const pt = tiles.pop();
    if (! pt) break;
    particles[i] = new Particle( pt.x, pt.y);
  }
  slider = createSlider(0, 255, 127);
  background(51);
}

function gen_tiles() {
  const tiles = [];
  const ystep = height/tile_len;
  const xstep = width/tile_len;
  for (y = 0; y < height ; y += ystep) {
    for (x = 0; x < width; x += xstep) {
      tiles.push({x,y});
    }
  }
  // print('tiles', tiles);
  return tiles;
}

function draw() {
  background(51);
  video.loadPixels();
  for (part of particles) {
  // for (var i = 0; i < particles.length; i++) {
    part.update();
    part.show();
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
    circle(this.x, this.y, this.r);
  };
}

// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk
