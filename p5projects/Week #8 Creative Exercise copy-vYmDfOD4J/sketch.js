let goodImage = [];
let badImage = [];
let timer = 5;
let currentImage = 0;
let badTransparency = 0;

function preload() {
  goodImage[0] = loadImage("good0.jpg");
  goodImage[1] = loadImage("good1.jpg");
  goodImage[2] = loadImage("good2.jpg");
  goodImage[3] = loadImage("good3.jpg");
  goodImage[4] = loadImage("good4.jpg");
  badImage[0] = loadImage("bad0.jpg");
  badImage[1] = loadImage("bad1.jpg");
  badImage[2] = loadImage("bad2.jpg");
  badImage[3] = loadImage("bad3.jpg");
  badImage[4] = loadImage("bad4.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    if (currentImage == 4) {
      currentImage = 0;
    } else {
      currentImage++;
    }
    timer = 5;
  }

  imageMode(CORNERS);
  tint(255, 255);
  goodImage[currentImage].resize(width, height);
  image(goodImage[currentImage], 0, 0);

  tint(255, badTransparency);
  badImage[currentImage].resize(width, height);
  image(badImage[currentImage], 0, 0);

  if (mouseIsPressed) {
    badTransparency = 255;
  } else {
    badTransparency = 0;
  }
}
