// !!@ Access to fetch at 'https://assets.editor.p5js.org/5f32f01d6b63fd002457940e/02046dc1-7402-41ee-ab11-e82710d3913d.jpg' from origin 'https://editor.p5js.org' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

let a_img;
let a_rec;
let a_index = 0;

function setup() {
  createCanvas(200, 200);
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
    createImg(a_rec.h, 'image');
    createP();
    loadImage(a_rec.h, img => {
      console.log('loadImage', a_rec.h)
      a_img = img;
      tint(255, 100);
      image(a_img, 0, 0, 200, 200);
    });
  }
  if (a_rec.d) {
    createSpan(a_rec.d);
  }
  if (a_rec.e) {
    createSpan(' ' + a_rec.e);
  }
  createP();
}

function img_loaded(event) {
  console.log('img_loaded event', event);
}