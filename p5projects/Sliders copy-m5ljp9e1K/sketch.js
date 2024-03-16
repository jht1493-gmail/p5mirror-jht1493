let slider;
let swSlider;
let popSlider;

function setup() {
  createCanvas(400, 400);
  
  rectMode(CENTER);
  angleMode(DEGREES);
  
  slider = createSlider(0, 360, 0); // min, max, start
  slider.position(0,400); // x and y
  slider.size(400, 20); // width and height
  
  swSlider = createSlider(1, 50, 3);
  swSlider.position(0, 430);
  swSlider.size(400, 20);
  
  popSlider = createSlider(-width/2, width/2, 0);
  popSlider.position(0, 460);
  popSlider.size(400, 20);
}

function draw() {
  background(220);
  
  translate(width/2, height/2);
  
  rotate( slider.value() );
  strokeWeight( swSlider.value() );
  
  rect(0,0, 200, 200);
  
  noFill();
  ellipse(popSlider.value(), 0, width/2, width/2);

}