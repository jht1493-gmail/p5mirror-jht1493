// https://vimeo.com/channels/learningp5js/142698163

var bgcolor;
var but1;

function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  but1 = createButton('go go go go');
  but1.mousePressed(changeColor);
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
