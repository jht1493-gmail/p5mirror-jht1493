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

function setup() {
  createCanvas(400, 400);
  
  // for (let aVar = initVal; avar < endVal; aVar += changeVal)
  for (xpos = 0; xpos < width; xpos += xlen) {
  // for (counter = 0; counter < 9; counter ++) {
    console.log(xpos);
    rect(xpos,height/2,10,10)
  }
}

function draw() {
  // background(220);
}

// TRY: convert to a drawing

// https://editor.p5js.org/enickles/sketches/L4TRiCcCi
// ICM-06 Example - ICM 21 Week 4 - Anatomy for a for loop 
