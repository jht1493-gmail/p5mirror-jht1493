// https://editor.p5js.org/jht1493/sketches/_-M305erc

// checkerboard
//https://editor.p5js.org/benjamin.bergery/sketches/N7bfhhT7f
// QUESTION: Why does loop run 121 times?

// TRICK is to put program in setup
// otherwise it will flicker

let rouge = 255;
let icount = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  background(220);
  for (let x = 0; x < width; x += width / 10) {
    for (let y = 0; y < height; y += height / 10) {
      fill(rouge, 0, 0); //red
      rect(x, y, width / 10, width / 10);
      if (rouge == 0) {
        rouge = 255;
      } else {
        rouge = 0;
      }
      icount = icount + 1;
      console.log("icount = " + icount);
    }
  }
}

function draw() {}

//NOTES
// if black make red else make black
// forgot about using conditional ==
// not assignment = lost time
