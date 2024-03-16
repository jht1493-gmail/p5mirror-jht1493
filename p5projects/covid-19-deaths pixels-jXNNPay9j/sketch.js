// !!@ Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data.
let a_img;
let a_rec;
let a_index = 0;
let a_buf;

function setup() {
  createCanvas(400, 200);
  pixelDensity(1);
  background(0);
  a_buf = createImage(200, 200);
}


function draw() {
  // background(220);
  load_next();
}

function load_next() {
  if (a_img && !a_img.elt.complete) {
    console.log('waiting', a_index);
    return;
  }
  if (a_img) {
    // !!@ tint fails on html image
    tint(255, 10);
    image(a_img, 0, 0, 200, 200);
    pixel_combine();
  }
  if (a_index >= a_refs.length) return;
  a_rec = a_refs[a_index];
  a_index += 1;
  if (a_rec.h) {
    // a_img = createImg('', 'image');
    a_img = createImg(a_rec.h, 'image');
    // a_img.elt.src = a_rec.h;
    createP();
  }
  if (a_rec.d) {
    createSpan(a_rec.d);
  }
  if (a_rec.e) {
    createSpan(' ' + a_rec.e);
  }
  createP();
}

function pixel_combine() {
  loadPixels();
  a_buf.loadPixels();
  let n = 200 * 200 * 4;
  for (let i = 0; i < n; i++) {
    a_buf.pixels[i] = pixels[i]
  }
  a_buf.updatePixels();
  tint(255, 128);
  image(a_buf, 200, 0);
}

function img_loaded(event) {
  console.log('img_loaded event', event);
}