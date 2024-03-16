var bgcolor;
var button;

function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton('go go go go');
  button.mousePressed(changeColor);
}

function changeColor() {
  bgcolor = color(random(255));
}

// function mousePressed() {
//   changeColor();
// }

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  rect(100, 100, 50, 50);
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.04_p5.js_Handling_DOM_events_with_callbacks
// https://www.youtube.com/watch?v=NcCEzzd9BGE
