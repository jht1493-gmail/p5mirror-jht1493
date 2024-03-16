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

function setup() {
  createCanvas(400, 400);
  
  // for (let aVar = initVal; avar < endVal; aVar += changeVal)
  for (let counter = 0; counter < 9; counter += 1) {
    console.log(counter);
  }
}

function draw() {
  background(220);
}

// TRY: convert to a drawing

// https://editor.p5js.org/enickles/sketches/L4TRiCcCi
// ICM-06 Example - ICM 21 Week 4 - Anatomy for a for loop 
