function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // checking for 1st condition
  if (mouseX < width / 2) {
    background(255, 0, 0); // RED

    // nested
    // check another condition at the same time
    if (mouseY > height / 2) {
      fill(0, 255, 0); // GREEM
      rect(0, height / 2, height / 2);
    }
    
    // check another condition that cannot
    // happen at same time as the 1st condition
  } else if (mouseX < (width / 4) * 3) {
      background(0, 0, 255); // BLUE
    
  } else {
    // if nothing above evaluates to true,
    // then run this code
    background(255, 200, 0); // YELLOW
  }
}

// https://editor.p5js.org/enickles/sketches/GYzrx1FZGh
// ICM-06 Example - ICM 21 Week 3 - Introducing conditionals
