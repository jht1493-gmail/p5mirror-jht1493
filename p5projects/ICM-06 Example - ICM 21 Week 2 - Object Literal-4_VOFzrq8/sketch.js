// let xpos = 200;
// let ypos = 200;
// let speed = 2;
// let size = 50
// let direction = -1;

// an object 
let myCircle =  {
  xpos : 200,
  ypos : 200,
  speed : 2,
  size : 50, 
  direction : -1
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0, 0);
  
  // circle(xpos, ypos, size);
  // ypos += direction * speed
  
  circle(myCircle.xpos, myCircle.ypos, myCircle.size);
  myCircle.ypos += myCircle.direction * myCircle.speed;
  
  console.log(myCircle.direction * myCircle.speed);
}

// https://editor.p5js.org/jht1493/sketches/4_VOFzrq8
// https://editor.p5js.org/enickles/sketches/ANfj8SGBd
// ICM-06 Example - ICM 21 Week 2 - Object Literal
