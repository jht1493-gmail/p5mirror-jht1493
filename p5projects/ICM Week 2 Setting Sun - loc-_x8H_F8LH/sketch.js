//For image. Declare variable 'img'.
let img;
let loc = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
  frameRate(40);

  //Load image
  img = loadImage("sun.png");

  //One element that is different every time you run     the sketch.

  background(random(225, 255), random(160, 219), random(20, 124));
}

function draw() {
  //One element controlled by the mouse.
  stroke(230, 77, 24);
  line(0, 0, mouseX, mouseY);

  //One element that changes over time, independently     of the mouse.
  // Displays the image at point (0, height/2) at half size
  // image(img, width-150, height/1.5, img.width / 6, img.height / 6);
  image(img, loc.x, loc.y, img.width / 6, img.height / 6);
}

function mousePressed() {
  if (loc.x == 0) {
    loc.x = width - 150;
    loc.y = height / 1.5;
  } else {
    loc.x = 0;
    loc.y = 0;
  }
}

// https://editor.p5js.org/jht1493/sketches/_x8H_F8LH
// ICM Week 2 Setting Sun - loc

// https://editor.p5js.org/qiqirathwang/sketches/3CXe6bzJo
// ICM Week 2 Setting Sun  - Teresa Wang

//
//<a href='https://pngtree.com/so/sunrise'>sunrise png from pngtree.com/</a>
