let a_img;
let a_rec;

function setup() {
  createCanvas(200, 200);
  let n = a_refs.length;
  for (let index = 0; index < n; index++) {
    a_rec = a_refs[index];
    if (a_rec.h) {
      a_img = createImg(a_rec.h, 'image');
      createP();
    }
    if (a_rec.d) {
      createSpan(a_rec.d);
    }
    if (a_rec.e) {
      createSpan(' '+a_rec.e);
    }
    createP();
  }
}

function draw() {
  background(220);
}