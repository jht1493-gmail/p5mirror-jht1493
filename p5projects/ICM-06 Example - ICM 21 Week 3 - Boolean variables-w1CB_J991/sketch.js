let isRaining = false; // what happens when you change this to true?

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // if (isRaining == true) {
  //   background(0);
  // }

  // this works the same as above
  // if (isRaining) { // shorthand
  //   background(0);
  // }

  if (isRaining) {
    background(0);
  } else {
    background(0, 200, 200);
  }

  if (mouseIsPressed) {
    background(255, 0, 0);
  }
}

function mousePressed() {
  console.log("You pressed the mouse!");
}

// https://editor.p5js.org/enickles/sketches/BIyU7a7ar
// ICM-06 Example - ICM 21 Week 3 - Boolean variables