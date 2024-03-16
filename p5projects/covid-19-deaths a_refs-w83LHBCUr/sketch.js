// Images loaded from https href
// Can't do any processing on them
//
let a_img;
let a_rec;

function setup() {
  createCanvas(400, 400);
  a_rec = a_refs[2];
  let h = a_rec.h;
  // a_img = createImg(h, 'image', '', () => {
  //   console.log('loaded h', h);
  // });
  a_img = createImg(h, 'image');
  a_img.hide();
}

function draw() {
  background(220);
  // image(a_img, mouseX, 0);
  image(a_img, 0, 0);
  text(a_rec.d, 20, height - height / 4)
  text(a_rec.e, 20, height - height / 5)
}

