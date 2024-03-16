// Assumptions about counting
// counting by 1
// direction, increasing
// no stopping
// started at 1
// rate of change

// Anatomy of a for loop
// 1. Starting place
// 2. Stopping place
// 3. Amount of change

let xpos;
let xlen = 20;

let xpos2 = 0;
let ypos2;

function setup() {
  createCanvas(400, 400);
  // for (let aVar = initVal; avar < endVal; aVar += changeVal)
  for (xpos = 0; xpos < width; xpos += xlen) {
  // for (counter = 0; counter < 9; counter ++) {
    console.log(xpos);
    rect(xpos,height/2,10,10)
  }
  ypos2 = height/2+40;
}

function draw() {
  // background(220);
  rect(xpos2,ypos2,10,10)
  xpos2 += xlen;
  if (xpos2 > width) {
    xpos2 = 0;
  }
}

// https://editor.p5js.org/jht1493/sketches/nlrTRwfL2
// for loop to draw animation

// https://editor.p5js.org/enickles/sketches/L4TRiCcCi
// ICM-06 Example - ICM 21 Week 4 - Anatomy for a for loop 
