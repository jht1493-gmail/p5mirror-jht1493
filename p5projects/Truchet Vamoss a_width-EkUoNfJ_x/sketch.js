// https://editor.p5js.org/jht1493/sketches/EkUoNfJ_x
// Truchet Vamoss a_width

let a_seed = [];
let a_dim = 16;
let a_width = 600;
let a_height = 400;

function setup() {
  createCanvas(a_width, a_height);
  noStroke();

  for (let x = 0; x < a_width; x += a_dim) {
    for (let y = 0; y < a_height; y += a_dim) {
      a_seed.push(floor(random(2)));
    }
  }
}

function draw() {
  background(100);

  let alpha1 = map(mouseX, 0, a_width, 255, 0);
  let alpha2 = map(mouseY, 0, a_height, 255, 0);

  let index = 0;
  for (let x = 0; x < a_width; x += a_dim) {
    for (let y = 0; y < a_height; y += a_dim) {
      let fillc = a_seed[index] == 0 ? 255 : 0;
      fill(fillc, alpha2);
      rect(x, y, a_dim, a_dim);
      index++;
    }
  }
  for (let x = 0, ix = 0; x <= a_width; x += a_dim, ix++) {
    for (let y = 0, iy = 0; y <= a_height; y += a_dim, iy++) {
      let fillc = (ix + iy) % 2 == 0 ? 255 : 0;
      fill(fillc, alpha1);
      circle(x, y, a_dim);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/4G63C6hW7
// Truchet Vamoss rect circle

// https://editor.p5js.org/jht1493/sketches/lhI9E2O7P
// https://openprocessing.org/sketch/1354815/
// Truchet in p5js by Vamoss
