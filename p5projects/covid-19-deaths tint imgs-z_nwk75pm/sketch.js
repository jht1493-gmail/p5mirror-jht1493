
let a_imgs;
let load_index = 0;
let tint_index = 0;

function setup() {
  // createCanvas(800, 800);
  createCanvas(200, 200);
  pixelDensity(1);
  background(0);
  a_imgs = [];
  frameRate(1);
}

function draw() {
  // background(220);
  load_next();
  tint_next();
}

function load_next() {
  if (load_index >= a_refs.length) {
    return;
  }
  let rec = a_refs[load_index];
  load_index += 1;
  if (rec.h) {
    createImg('./images/' + rec.h, 'image');
    load_image('./images/' + rec.h);
  }
}

function load_image(h) {
  loadImage(h, img => {
    console.log('loadImage', h)
    a_imgs.push(img);
  });
}

function tint_next() {
  if (tint_index >= a_imgs.length) {
    tint_index = 0;
    if (tint_index >= a_imgs.length)
      return;
  }
  let img = a_imgs[tint_index];
  tint_index += 1;
  tint(255, 10);
  image(img, 0, 0);
}