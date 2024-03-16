var slider1;
var slider2;
var slider3;
let nun = [0,200,50];
let a_circle;


var circle1 = {
  x: 0,
  y: 200,
  diameter: 0
};

var rect1 = {
  x: 200,
  y: 200,
  length: 300
}

function setup() {
  createCanvas(400, 400);
  
  slider1 = createSlider(0, 400, 0);
  slider1.position(10, 420);
  slider1.style('width', '370px');
  
  slider2 = createSlider(0, 400, 0);
  slider2.position(10, 450);
  slider2.style('width', '370px');

  slider3 = createSlider(0, 400, 0);
  slider3.position(10, 480);
  slider3.style('width', '370px');
  
  rectMode(CENTER);
  
}

function mousePressed() {
  // clicked_circle()
}

function draw() {

  background(255,180,0);

  let val3 = slider3.value();
  let val2 = slider2.value();
  fill(val3, val3, 255);
  rect(rect1.x, rect1.y, rect1.length);
  rect1.length = val2;
  

  let val1 = slider1.value();
  noStroke();
  fill(0);
  
  
  circle(circle1.x, circle1.y, circle1.diameter);
  circle1.x = val1;
  circle1.diameter = nun[2];
  
}

