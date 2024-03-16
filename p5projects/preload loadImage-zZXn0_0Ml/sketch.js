let a_images = [];

function preload() {
  a_images[0] = loadImage("images/emoji-1.png");
  a_images[1] = loadImage("images/emoji-2.png");
  a_images[2] = loadImage("images/emoji-3.png");
}

function setup() {
  createCanvas(400, 300);
  
}

function draw() {
  background(220);

  let size = width / 5;
  let x = 10;
  let y = height/2;
  let space = size + 10;
  
  image(a_images[0], x, y, size, size);
  image(a_images[1], x+space, y, size, size);
  image(a_images[2], x+space*2, y, size, size);

}

