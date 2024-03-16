let a_bgcolor = 200;
let a_button;
let a_input;

function setup() {
  createCanvas(200, 200);
  
  // Force DOM ui below canvas
  createP();
  
  a_button = createButton('changeColor');
  a_button.mousePressed(changeColor);
  
  createP();

  a_input = createInput('Name');
}

function changeColor() {
  a_bgcolor = random(255);
}

function draw() {
  background(a_bgcolor);
  
  text(a_input.value(), 10, 100);
}