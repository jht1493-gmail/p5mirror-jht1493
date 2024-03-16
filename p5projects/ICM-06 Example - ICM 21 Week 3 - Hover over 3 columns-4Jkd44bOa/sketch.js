function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 0, 0);

  // Are we in the 1st third of the canvas?
  if (mouseX < width / 3) {
    // If so, draw a rect on the far left
    rect(0, 0, width / 3, height);

    // Are we in the 2nd third of the canvas?
  } else if (mouseX < (width / 3) * 2) {
    // If so, draw a rect in the middle
    rect(width / 3, 0, width / 3, height);

    // Do this if we are not in either 
    // of those areas
  } else {
    // Draw a rect on the far right
    rect((width / 3) * 2, 0, width / 3, height);
  }
}

// https://editor.p5js.org/enickles/sketches/kvzErDLeG
// ICM-06 Example - ICM 21 Week 3 - Hover over 3 columns 
