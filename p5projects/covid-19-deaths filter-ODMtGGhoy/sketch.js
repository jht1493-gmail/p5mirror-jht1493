
let a_img;
let a_rec;
let a_index = 0;
let a_buf;

function setup() {
  createCanvas(800, 800);
  // createCanvas(200, 200);
  pixelDensity(1);
  background(0);
  a_buf = createImage(32,32);
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
    // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
    a_buf.copy(img,0,0,img.width, img.height, 0, 0, a_buf.width, a_buf.height);
    tint(255, 100);
    image(a_buf, 0, 0, width, height);
    // image(a_buf, 0, 0);
    a_img = img;
  });
}

function img_loaded(event) {
  console.log('img_loaded event', event);
}