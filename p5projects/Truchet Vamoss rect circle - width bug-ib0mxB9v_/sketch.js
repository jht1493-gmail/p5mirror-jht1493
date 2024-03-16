// https://editor.p5js.org/jht1493/sketches/4G63C6hW7
// Truchet Vamoss rect circle
// !!@ p5js erroriously complains that width is redefined when it's not
// using let w in place of width works around bug

// let a_arr = [];
// let a_len = 30;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // for (let x = 0; x < width; x += a_len) {
  //   for (let y = 0; y < height; y += a_len) {
  //     a_arr.push(floor(random(2)));
  //   }
  // }
}

function draw() {
  background(100);
  // let w = width
  // let alpha1 = map(mouseX, 0, w, 255, 0);
  let alpha1 = map(mouseX, 0, width, 255, 0);
  let alpha2 = map(mouseY, 0, height, 255, 0);

//   let index = 0;
//   for (let x = 0; x < width; x += a_len) {
//     for (let y = 0; y < height; y += a_len) {
//       let fillc = a_arr[index] == 0 ? 255 : 0;
//       fill(fillc, alpha2);
//       rect(x, y, a_len, a_len);
//       index++;
//     }
//   }

//   for (let x = 0, ix = 0; x < width; x += a_len, ix++) {
//     for (let y = 0, iy = 0; y < height; y += a_len, iy++) {
//       let fillc = (ix + iy) % 2 == 0 ? 255 : 0;
//       fill(fillc, alpha1);
//       circle(x, y, a_len);
//     }
//   }
}

// https://editor.p5js.org/jht1493/sketches/lhI9E2O7P
// https://openprocessing.org/sketch/1354815/
// Truchet in p5js by Vamoss
