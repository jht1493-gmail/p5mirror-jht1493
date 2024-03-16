let a_img;
let a_rec;
let a_index = 0;

function setup() {
  createCanvas(200, 200);
  // let n = a_refs.length;
  // let n = 1;
  // for (let index = 0; index < n; index++) {
  //   a_rec = a_refs[index];
  //   if (a_rec.h) {
  //     // a_img = createImg('', 'image');
  //     a_img = createImg(a_rec.h, 'image');
  //     console.log('complete 1', a_img.elt.complete)
  //     // a_img.elt.src = a_rec.h;
  //     console.log('complete 2', a_img.elt.complete)
  //     createP();
  //   }
  //   if (a_rec.d) {
  //     createSpan(a_rec.d);
  //   }
  //   if (a_rec.e) {
  //     createSpan(' '+a_rec.e);
  //   }
  //   createP();
  // }
  background(220);
}

// copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)


function draw() {
  // background(220);
  load_next();
}

function load_next() {
  if (a_img && !a_img.elt.complete) {
    console.log('waiting', a_index);
    return;
  }
  if (a_index >= a_refs.length) return;
  if (a_img) {
    image(a_img, 0, 0, width, height);
  }
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
    createSpan(' '+a_rec.e);
  }
  createP();
}

function img_loaded(event) {
  console.log('img_loaded event', event);
}