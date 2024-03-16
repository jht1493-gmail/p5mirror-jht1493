// Divide the canvas into columns.
// Make each column turn red when you hover over it.

let colWidth;
let total = 100;

function setup() {
  createCanvas(400, 400);
  colWidth = width / total;
}

function draw() {
  background(255);

  for (let counter = 0; counter < total; counter += 1) {
    let xpos = colWidth * counter;
    if (mouseX > xpos && mouseX < xpos + colWidth) {
      fill(255, 0, 0);
      rect(xpos, 0, colWidth, height);
    }
  }
  
  for (let counter = 0; counter < total; counter += 1) {
    let ypos = colWidth * counter;
    if (mouseY > ypos && mouseY < ypos + colWidth) {
      fill(0, 255, 0);
      // rect(ypos, 0, colWidth, height);
      rect(0,ypos,width, colWidth)
    }
  }

}

// original, the loooooong way
// // if (mouseX < colWidth * 1) {
//   rect(colWidth * 0, 0, colWidth, height);
// // } else if (mouseX < colWidth * 2) {
//   rect(colWidth * 1, 0, colWidth, height);
// // } else if (mouseX < colWidth * 3) {
//   rect(colWidth * 2, 0, colWidth, height);
// // } else if (mouseX < colWidth * 4) {
//   rect(colWidth * 3, 0, colWidth, height);
// // } else if (mouseX < colWidth * 5) {
//   rect(colWidth * 4, 0, colWidth, height);
// // } else {
//   rect(colWidth * 5, 0, colWidth, height);
// // }

// https://editor.p5js.org/enickles/sketches/FIutsP6OY
// ICM-06 Exercise - ICM 21 Week 4 - Hover over columns with a loop
