let x
let mousex

function setup() {
  createCanvas(400, 400);
}

function draw () {
  background (220)
  for (let x = 0; x < 400; x += 20) {
  console.log(x);
  line(x + x/2, 0, mouseX, mouseY);
  }
}

// https://editor.p5js.org/lh1966/sketches/dLxBijMW6
// Week #4 Exercise #2 La’Kay