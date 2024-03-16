//Week8_assgm3_icm
// Use one image multiple times in a sketch to create a new composition using techniques explored in class. Choose at least three options:
//draw the image at multiple sizes
//adjust fill and transparency levels, i.e. tint( ),
//flip the images,
//rotate the images,
//animate the images,
//experiment with blend modes,
//play with pixel regions,
//and / or add mouse or keypress interaction.

let meme;
let wid = 600;
let hei = 600;



function preload() {
  meme = loadImage("meme.jpg");
  memebg = loadImage("start.jpg");
  skull = loadImage("skull.png");
}

function setup() {
  createCanvas(wid, hei);
  image(memebg, 0, 0);
  bgButton = createButton("nvm let's do it");
  bgButton.mousePressed(letsGo);
  startButton = createButton("Start coding");
  startButton.mousePressed(error);
  adjustButton = createButton("What? I'll adjust the code");
  adjustButton.mousePressed(errorAgain);
  adjust2Button = createButton("wait maybe this is why");
  adjust2Button.mousePressed(errorAgain2);

  restartButton = createButton("restart a computer");
  restartButton.mousePressed(itWorks);
  
    imageMode(CENTER);

}

function letsGo() {
  push();
  imageMode(CENTER);
  image(memebg, wid / 2, hei / 2, wid, hei);
  pop();
}

function error() {
  imageMode(CENTER);
  background(0);
  showMeme();
}

function errorAgain() {
  push();
  blendMode(BLEND);
  tint(255, 25, 55);
  scale(1.3);
  showMeme();
  pop();
}

function errorAgain2() {
  push();
  blendMode(OVERLAY);
  fill(255);
  rect(0, 0, wid, hei);
  scale(random(1.4, 1.6));
  moveMeme();
  blendMode(MULTIPLY);
  skullImage();
  pop();
}

function itWorks() {
  push();
  scale(1);
  image(meme, width / 2, height / 2, wid, hei);
  rect(0, 0, width, height/2);
  pop();
}

function showMeme() {
  image(meme, width / 2, height / 2, wid, hei);
  rect(0, height / 2, width, height);
}

function moveMeme() {
  translate(0,random(6));
  tint(random(255), random(255), random(255));
  showMeme();
}

function skullImage() {
  scale(0.2);
  tint(random(255), random(255), random(255));
  image(skull, random(width * 5), random(height * 5));
  tint(random(255), random(255), random(255));
  image(skull, random(width * 5), random(height * 5));
  tint(random(255), random(255), random(255));
  image(skull, random(width * 5), random(height * 5));
  image(skull, random(width * 5), random(height * 5));
  push();
  scale(0.5);
  tint(random(255), random(255), random(255));
  image(skull, random(width * 5), random(height * 5));
  tint(random(255), random(255), random(255));
  image(skull, random(width * 5), random(height * 5));
  tint(random(255), random(255), random(255));
  image(skull, random(width * 5), random(height * 5));
  image(skull, random(width * 5), random(height * 5));
  pop();
}
