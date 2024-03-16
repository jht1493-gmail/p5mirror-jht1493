// https://editor.p5js.org/jht1493/sketches/-DBNkfCTv
// Truchet Vamoss checker

let a_dim = 100;
let a_width = 600;
let a_height = 400;

function setup() {
  createCanvas(a_width, a_height);
  noStroke();
  background(100);
  
  random_rects();
  checkboard_circles();
}

function random_rects() {
  for (let x = 0, ix = 0; x < a_width; x += a_dim, ix++) {
    for (let y = 0, iy = 0; y < a_height; y += a_dim, iy++) {
      // let fillc = random([255,0]);
      let fillc = (ix + iy) % 2 == 0 ? 255 : 0;
      fill(fillc);
      rect(x, y, a_dim, a_dim);
    }
  }
}

function checkboard_circles() {
  for (let x = 0, ix = 0; x <= a_width; x += a_dim, ix++) {
    for (let y = 0, iy = 0; y <= a_height; y += a_dim, iy++) {
      let fillc = (ix + iy) % 2 == 0 ? 255 : 0;
      fill(fillc);
      circle(x, y, a_dim);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/6fG6Dm_La
// Truchet Vamoss a_width noseed

// https://editor.p5js.org/jht1493/sketches/EkUoNfJ_x
// Truchet Vamoss a_width

// https://editor.p5js.org/jht1493/sketches/4G63C6hW7
// Truchet Vamoss rect circle

// https://editor.p5js.org/jht1493/sketches/lhI9E2O7P
// https://openprocessing.org/sketch/1354815/
// Truchet in p5js by Vamoss
