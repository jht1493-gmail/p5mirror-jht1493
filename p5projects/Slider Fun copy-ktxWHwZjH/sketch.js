let a = 0;

function setup() { 
  createCanvas(400, 400);
 
  angleMode(DEGREES);
  
  create_slider_1();
  create_slider_2();
  create_slider_3();
  
} 

function draw() { 
  
  let a_val1 = slider_1.value();
  let a_val2 = slider_2.value();
  let a_val3 = slider_3.value();
  
  background(a_val1);
  
  noStroke();
  push();
  translate(width/2, height/2);
  scale(2);
  a=a+a_val3
  rotate(a);
  fill(a_val2)
  rect(0, 0, 400, 400);
  pop();
}

let slider_1;

function create_slider_1() {
  // createSlider(min, max, [value], [step])
  slider_1 = createSlider(0,255,255);
  slider_1.style('width', '100px');
  slider_1.position(25, 300);
}

let slider_2;

function create_slider_2() {
  // createSlider(min, max, [value], [step])
  slider_2 = createSlider(0,255,0);
  slider_2.style('width', '100px');
  slider_2.position(25, 325);
}

let slider_3;

function create_slider_3() {
  // createSlider(min, max, [value], [step])
  slider_3 = createSlider(0, 5, 1);
  slider_3.style('width', '100px');
  slider_3.position(25, 350);
}