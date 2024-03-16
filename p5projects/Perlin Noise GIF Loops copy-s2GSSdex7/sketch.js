// Perlin Noise GIF Loops
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/136.2-perlin-noise-gif-loops.html
// https://youtu.be/c6K-wJQ77yQ

let totalFr = 480;
let counter = 0;
let record = false;

let n_part = 10;
let particles = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < n_part; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  let percent = float(counter % totalFr) / totalFr;
  render(percent);
  counter++;
}

function render(percent) {
  background(0);
  let a = percent * TWO_PI;
  for (let p of particles) {
    p.render(a);
  }
}