let bg_color = 200;
let a_button;
let a_slider;

function setup() {
  createCanvas(200, 200);
  
  // Force DOM ui below canvas
  // createP();
  
  a_button = createButton('changeColor');
  a_button.mousePressed(changeColor);
  
  // createSlider(min, max, [value], [step])
  a_slider = createSlider(0, 200, 100);
}

function changeColor() {
  bg_color = random(255);
}

function draw() {
  background(bg_color);
  fill(255, 0, 175);
  circle(100, 100, a_slider.value())
}