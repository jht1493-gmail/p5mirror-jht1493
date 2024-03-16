
// an object
let myCircle1 = {
  xpos: 200,
  ypos: 200,
  speed: -2,
  size: 50,
};
let myCircle2 = {
  xpos: 100,
  ypos: 200,
  speed: -1,
  size: 80,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0, 0);
  draw_circle(myCircle1);
  fill(255, 255, 0);
  draw_circle(myCircle2);
}
function draw_circle(myc) {
  circle(myc.xpos, myc.ypos, myc.size);
  myc.ypos = (myc.ypos + myc.speed + height) % height;
  // console.log('myCircle.ypos', myCircle.ypos);
}
// https://editor.p5js.org/jht1493/sketches/e190hgdMU
// ICM-06 Example - ICM 21 Week 2 - Object Literal wrap

// https://editor.p5js.org/jht1493/sketches/4_VOFzrq8
// https://editor.p5js.org/enickles/sketches/ANfj8SGBd
// ICM-06 Example - ICM 21 Week 2 - Object Literal
