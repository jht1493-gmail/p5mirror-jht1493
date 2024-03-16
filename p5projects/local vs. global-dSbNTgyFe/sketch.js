// let x, y, w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('width', width, 'height', height)
}

// listening for the browser window to change size
// if the window changes size, then resize the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log('width', width, 'height', height)
}

function draw() {
  background(220);
  let x = width / 4;
  let y = height / 4;
  let w = width / 2;
  let h = height / 2;
  rect(x, y, w, h);
}

// https://editor.p5js.org/jht1493/sketches/laTHAOolo
// https://editor.p5js.org/enickles/sketches/Jg66rEDyK
// ICM-06 Example - ICM 21 Week 2 - Responsive rect
