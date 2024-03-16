// https://editor.p5js.org/jht1493/sketches/O1AJea465
//  ICM 21 Week 8 • Image File Basics

let pic;
let x = 1;
let y = 1;
let angle = 0;

let amt = 1;
let amtSpeed = 0.01;

function preload() {
  pic = loadImage("woodenmodel.jpg");
}

function setup() {
  // createCanvas(400, 400);
  createCanvas(pic.width * 2, pic.height);
  angleMode(DEGREES);
  // background(220);
}

function draw() {
  background(220);
  // imageMode(CENTER)
  // image(pic, 0, 0, pic.width, pic.height);
  // draw_resize1();
  draw_resize2();
}

function draw_resize1() {
  // Option 1
  image(pic, 0, 0, pic.width / 4, pic.height / 4);
  image(pic, 0, 0, pic.width, pic.height / 2);
}

function draw_resize2() {
  // Option 2
  scale(0.25);
  image(pic, 0, 0, pic.width, pic.height);
}

  // Option 3
  // pic.resize(200, 300);
  // image(pic, 0, 0);

  ///////// **** ANIMATE **** /////////
  /** Position **/
  // scale(0.5);
  // image(pic, x, y, pic.width, pic.height);
  // x++;
  // y++;

  /** Resize sizing **/
  // scale(0.5);
  // image(pic, 0, 0, pic.width, pic.height);
  // pic.width++;
  // pic.height++;

  /** Distorted sizing **/
  // scale(0.25)
  // image(pic, 0, 0, pic.width, pic.height / amt);
  // image(pic, 0, 0, pic.width / amt, pic.height);
  // if (amt < 0) amt = 1;
  // else amt -= 0.01;

  /** Rotate **/
  // push();
  // translate(300, 300);
  // rotate(angle);
  // scale(0.5);
  // imageMode(CENTER);
  // image(pic, x, y, pic.width, pic.height);
  // angle+= 0.5;
  // pop();

  ///////// **** INTERACT **** /////////
  // try moving background to setup()
  // scale(0.5);
  // imageMode(CENTER)
  // image(pic, mouseX, mouseY, pic.width, pic.height);

// https://editor.p5js.org/enickles/sketches/LJulISis_
// ICM-06 Example - ICM 21 Week 8 • Image File Basics 
/*
Image credit: Kira auf der Heide on Upsplash
https://unsplash.com/@kadh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
*/
