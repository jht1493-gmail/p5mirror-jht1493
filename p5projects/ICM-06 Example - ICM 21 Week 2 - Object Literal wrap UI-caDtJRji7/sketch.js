// let xpos = 200;
// let ypos = 200;
// let speed = -2;
// let size = 50

// an object
let myCircle = {
  xpos: 200,
  ypos: 200,
  speed: -2,
  size: 50,
};

function setup() {
  createCanvas(400, 400);
  createSpan('ypos').id('iypos');;
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0, 0);

  // circle(xpos, ypos, size);
  // ypos = ypos + speed

  circle(myCircle.xpos, myCircle.ypos, myCircle.size);
  myCircle.ypos = (myCircle.ypos + myCircle.speed + height) % height;

  // console.log('myCircle.ypos', myCircle.ypos);
  select('#iypos').html('ypos='+myCircle.ypos);
}

// https://editor.p5js.org/jht1493/sketches/caDtJRji7
// ICM-06 Example - ICM 21 Week 2 - Object Literal wrap UI

// https://editor.p5js.org/jht1493/sketches/e190hgdMU
// ICM-06 Example - ICM 21 Week 2 - Object Literal wrap

// https://editor.p5js.org/jht1493/sketches/4_VOFzrq8
// https://editor.p5js.org/enickles/sketches/ANfj8SGBd
// ICM-06 Example - ICM 21 Week 2 - Object Literal
