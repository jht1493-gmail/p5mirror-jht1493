// https://editor.p5js.org/jht1493/sketches/ExTKDesTy
// timed motion text 

let shapeX = 100;
let shapeY = 100;
let speedX = -1;
let speedY = 0;
let diam = 100;
let a_letters = 'A🐿️'
let a_moveSlider = false;
let a_move = false;
let iframe = 0;

function setup() {
  createCanvas(400, 200).mousePressed(function () {
    shapeX = mouseX;
    shapeY = mouseY;
  });
  create_ui();
}

function draw() {
  background(200);
  noStroke();
  fill(255);
  textSize(diam)
  text(a_letters, shapeX, shapeY)
  // shape(shapeX, shapeY, diam);
  if (a_moveSlider || a_move) {
    shapeX = (shapeX + speedX + width) % width;
    shapeY = (shapeY + speedY + height) % height;
  }
  // a_move = frameCount > 100 && frameCount < 200;
  a_move = iframe > 50 && iframe < 200;
  iframe = iframe + 1;
  update_ui();
}

function create_ui() {
  createSpan("click on canvas to move the shape");
  createElement("br");
  createButton("reset").mousePressed(function () {
    iframe = 0;
  });
  createButton("slower").mousePressed(function () {
    speedX = speedX * 0.5;
    speedY = speedY * 0.5;
  });
  createSpan().id("iframe");
  createSpan().id("iframeCount");
  createElement("br");
  // createCheckbox([label], [value])
  createCheckbox("Move", a_moveSlider).changed(function () {
    a_moveSlider = this.checked();
  });
    // createSlider(min, max, [value], [step])
  createSlider(0, 400, diam).input(function() {
    diam = this.value();
  });

  createSpan().id("ishapeX");
  createSpan().id("ishapeX");
  createSpan().id("ishapeY");
  createElement("br");
  createSpan().id("imouseX");
  createSpan().id("imouseY");
  createSpan().id("irgba");
  createP();
  createA('https://p5js.org/reference/#group-Typography','Typography', 'atarget');
}

function update_ui() {
  select("#ishapeX").html("[shapeX=" + shapeX + "] ");
  select("#ishapeY").html("[shapeY=" + shapeY + "] ");
  select("#iframeCount").html("[iframeCount=" + frameCount + "] ");
  select("#iframe").html("[iframe=" + iframe + "] ");
  select("#imouseX").html("[mouseX=" + mouseX + "] ");
  select("#imouseY").html("[mouseY=" + mouseY + "] ");
  let rgb = get(mouseX, mouseY);
  select("#irgba").html("[RGBA=" + rgb + "] ");
}

// https://editor.p5js.org/jht1493/sketches/IevrDU7OW
// add x,y motion with speed

// https://editor.p5js.org/jht1493/sketches/uGy4cEzbs
// 3.5 shapeX ui more

// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 shapeX % width ui

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable circleX % width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

// https://p5js.org/reference/#group-Typography
