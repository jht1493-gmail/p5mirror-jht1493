let slider1;
let slider2;
let slider3;


var circle1 = {
  x: 0,
  y: 200,
  diameter: 200
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
  slider2.position(10, 480);
  slider2.style('width', '370px');
  
  slider3 = createSlider(0, 400, 0);
  slider3.position(10, 450);
  slider3.style('width', '370px');
  
  rectMode(CENTER);
  
}


function draw() {

  background(255,180,0);

  let val2 = slider2.value();
  let val3 = slider3.value();
  fill(val2, val2, 255);
  rect(rect1.x, rect1.y, rect1.length);
  rect1.length = val3;
  

  let val1 = slider1.value();
  noStroke();
  fill(0);
  
  
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  circle1.x = val1;
  circle1.diameter = random(248,250);
  
}

