
let a_img;
let a_rec;
let a_index = 0;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  background(0);
}

function draw() {
  // background(220);
  load_next();
}

function load_next() {
  if (a_index >= a_refs.length) return;
  a_rec = a_refs[a_index];
  a_index += 1;
  if (a_rec.h) {
    createImg('./images/' + a_rec.h, 'image');
    createP();
    load_image('./images/' + a_rec.h);
  }
  if (a_rec.d) {
    createSpan(a_rec.d);
  }
  if (a_rec.e) {
    createSpan(' ' + a_rec.e);
  }
  createP();
}

function load_image(h) {
  loadImage(h, img => {
    console.log('loadImage', h)
    tint(255, 100);
    image(img, 0, 0, width, height);
    a_img = img;
  });
}

function img_loaded(event) {
  console.log('img_loaded event', event);
}