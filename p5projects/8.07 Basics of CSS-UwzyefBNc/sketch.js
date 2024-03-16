var bgcolor;
var button;
var txt;

function setup() {
  createCanvas(200, 200);
  bgcolor = color(51);
  txt = createP('some text');
  txt.mouseOver(changeStyle);
  txt.mouseOut(revertStyle);

  button = createButton('go');
  // button.mousePressed(changeStyle);
}

function changeStyle() {
  txt.style('background-color', 'pink');
  txt.style('padding', '24px');
}

function revertStyle() {
  txt.style('background-color', 'purple');
  txt.style('padding', '8px');
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, 50, 50);
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.07_p5.js_The_basics_of_CSS
// https://www.youtube.com/watch?v=zGL8q8iQSQw