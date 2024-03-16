
let a_img;
let a_rec;
let a_index = 0;
let a_buf;

function setup() {
  // createCanvas(800, 800);
  createCanvas(200, 200);
  pixelDensity(1);
  background(0);
  a_buf = createImage(200, 200);
}

function draw() {
  // background(220);
  load_next();
}

function load_next() {
  if (a_index >= a_refs.length) {
    return;
  }
  a_rec = a_refs[a_index];
  a_index += 1;
  if (a_rec.h) {
    createImg('./images/' + a_rec.h, 'image');
    // createP();
    load_image('./images/' + a_rec.h);
  }
}

function load_image(h) {
  loadImage(h, img => {
    console.log('loadImage', h)
    if (a_index != 1) tint(255, 100);
    image(img, 0, 0, width, height);
    a_img = img;
  });
}

function img_loaded(event) {
  console.log('img_loaded event', event);
}