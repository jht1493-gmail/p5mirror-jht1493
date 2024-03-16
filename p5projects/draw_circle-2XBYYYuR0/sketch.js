
// an object
let myCircle = {
  xpos: 200,
  ypos: 200,
  speed: -2,
  size: 50,
};
let myCircle2 = {
  xpos: 100,
  ypos: 200,
  speed: -1,
  size: 50,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0, 0);
  draw_circle();
  fill(255, 255, 0);
  draw_circle2();
}
function draw_circle() {
  circle(myCircle.xpos, myCircle.ypos, myCircle.size);
  myCircle.ypos = (myCircle.ypos + myCircle.speed + height) % height;
  // console.log('myCircle.ypos', myCircle.ypos);
}
function draw_circle2() {
  circle(myCircle2.xpos, myCircle2.ypos, myCircle2.size);
  myCircle2.ypos = (myCircle2.ypos + myCircle2.speed + height) % height;
  // console.log('myCircle.ypos', myCircle.ypos);
}

// https://editor.p5js.org/jht1493/sketches/e190hgdMU
// ICM-06 Example - ICM 21 Week 2 - Object Literal wrap

// https://editor.p5js.org/jht1493/sketches/4_VOFzrq8
// https://editor.p5js.org/enickles/sketches/ANfj8SGBd
// ICM-06 Example - ICM 21 Week 2 - Object Literal
