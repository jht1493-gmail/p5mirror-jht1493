// Metaballs gray

let blobs = [];
let nblob = 2;

function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  for (i = 0; i < nblob; i++) {
    let x = random(0, width)
    let y = random(0, height)
    let low = 400
    let hi = 400
    let b = new Blob(x, y, low, hi);
    blobs.push(b);
  }
}

function draw() {
  background(51);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 10 * blobs[i].r / d;
      }
      set(x, y, sum);
    }
  }
  updatePixels();

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}

// https://editor.p5js.org/jht1493/sketches/OsM89lKH3
// Metaballs gray

// https://editor.p5js.org/jht1493/sketches/OsM89lKH3

// Basile Pesin
// http://vertmo.github.io
// MetaBalls : p5.js implementation

