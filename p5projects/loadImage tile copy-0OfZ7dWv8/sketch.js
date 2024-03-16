let a_images = [];
let a_index = 0;
let n_wide = 4;

function preload() {
  a_images[0] = loadImage("images/bw-splat.jpg");
  a_images[1] = loadImage("images/gr-splat.jpg");
  a_images[2] = loadImage("images/re-face.jpg");
}

function setup() {
  createCanvas(400, 500);

}

function draw() {
  background(220);

  let xs = width / n_wide;
  let ys = height / n_wide;
  let x = 0;
  let y = 0;
  let i = a_index;
  // print('i', i, xs', xs, 'ys', ys)
  
  // image(img, x, y, [width], [height])
  for (let x = 0; x < width; x += xs) {
    image(a_images[i], x, y, xs, ys);
  }
  image(a_images[i], x + xs * 0, y + ys * 0, xs, ys);
  image(a_images[i], x + xs * 1, y + ys * 0, xs, ys);
  image(a_images[i], x + xs * 2, y + ys * 0, xs, ys);
  image(a_images[i], x + xs * 3, y + ys * 0, xs, ys);

  // image(a_images[i], x + xs * 0, y + ys * 1, xs, ys);
  // image(a_images[i], x + xs * 1, y + ys * 1, xs, ys);
  // image(a_images[i], x + xs * 2, y + ys * 1, xs, ys);

  // image(a_images[i], x + xs * 0, y + ys * 2, xs, ys);
  // image(a_images[i], x + xs * 1, y + ys * 2, xs, ys);
  // image(a_images[i], x + xs * 2, y + ys * 2, xs, ys);
}

function mousePressed() {
  a_index = (a_index + 1) % a_images.length;
  print('a_index', a_index)
}

// TODO: use for loop to draw first row of images
// TODO: and another for loop to fill canvas with images

// https://editor.p5js.org/jht1493/sketches/C18P0IIfV
// Images from http://www.johnhenrythompson.com/3-dice
