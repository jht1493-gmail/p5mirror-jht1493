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
  
  for (let counter = 0; counter < 19; counter += 1) {
    console.log(counter);
    // rect(x, y, w, [h] )
    rect(counter*20, 10, 10, 10)
  }
}

function draw() {
  // background(220);
}

// TRY: convert to a drawing

// https://editor.p5js.org/enickles/sketches/L4TRiCcCi
// ICM-06 Example - ICM 21 Week 4 - Anatomy for a for loop 
