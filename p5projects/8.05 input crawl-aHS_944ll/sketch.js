let a_bgcolor = 200;
let a_button;
let a_input;
let a_x = 10;
let a_step = 1;

function setup() {
  createCanvas(200, 200);
  
  // Force DOM ui below canvas
  createP();
  
  a_button = createButton('changeColor');
  a_button.mousePressed(changeColor);
  
  createP();

  a_input = createInput('your name');
}

function changeColor() {
  a_bgcolor = random(255);
}

function draw() {
  background(a_bgcolor);
  
  text(a_input.value(), a_x, 100);
  
  a_x += a_step;
  if (a_x > width) {
    a_x = 0;
  }
}