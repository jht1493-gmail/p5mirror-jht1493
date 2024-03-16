let cw = 400;
let ch = 400;
let row = 10;
let column = 10;
let randomW = [];
let randomH = [];
let randomStart = [];
let randomStop = [];
let randomMode = [];
let mode = ["OPEN", "CHORD", "PIE"];

function setup() {
  createCanvas(cw, ch);
  for (let i = 0; i < column; i++) {
    //building a 2d array
    //tutorial: https://www.youtube.com/watch?v=OTNpiLUSiB4
    randomW[i] = [];
    randomH[i] = [];
    randomStart[i] = [];
    randomStop[i] = [];
    randomMode[i] = [];

    for (let j = 0; j < row; j++) {
      append(randomW[i], random(0, cw / column));
      append(randomH[i], random(0, ch / row));
      append(randomStart[i], random(0, 360));
      append(randomStop[i], random(0, 360));
      append(randomMode[i], random(mode));
    }
  }
}

function draw() {
  background(220);
  angleMode(DEGREES);
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      rect((i * cw) / column, (j * cw) / row, cw / column, ch / row);
      arc(
        (i * cw) / column + (cw / column) * 0.5,
        (j * cw) / row + (ch / row) * 0.5,
        randomW[i][j],
        randomH[i][j],
        randomStart[i][j],
        randomStop[i][j],
        mode[randomMode[i][j]]
      );
      //How do i convert strings to modes??
    }
  }
}
