let catImg;

// preload runs before setup
// use this to make sure images are loaded 
// before running the rest of sketch
function preload() {
  catImg = loadImage('cat.jpg', imgLoaded);
}

// callback that runs when the image is loaded
function imgLoaded() {
  print('img ready!!');
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  image(catImg, 0, 0, 400, 300);

  // color picker!!! 
  // uses get() to get the rgba values of one pixel
  let myPixel = get(mouseX, mouseY);

  fill(myPixel);
  // rect(mouseX, mouseY, 100, 100);
  circle(mouseX, mouseY, 100);

  // get and redraw a section
  // uses get to get a section of the image as a p5 image 
  // see https://p5js.org/reference/#/p5.Image
  let myImgSection = get(mouseX, mouseY, 100, 100);
  image(myImgSection, mouseX + 100, mouseY + 100);
}

// https://editor.p5js.org/lisajamhoury/sketches/PM1J_6EqYw