// let xpos = 200;
// let ypos = 200;
// let speed = 2;
// let size = 50
// let direction = -1;

// an object
let cir1 = {
  xpos: 200,
  ypos: 200,
  speed: -2,
  size: 50,
};

let cir2 = {
  xpos: 300,
  ypos: 200,
  speed: -1,
  size: 75,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  
  fill(255, 0, 0);
  draw_circle(cir1);
  
  fill(255, 255, 0);
  draw_circle(cir2);
}

function draw_circle(cir) {
  circle(cir.xpos, cir.ypos, cir.size);
  cir.ypos = (cir.ypos + cir.speed + height) % height;
}

// https://editor.p5js.org/jht1493/sketches/IvCuHb0EW
// many circles func

// https://editor.p5js.org/jht1493/sketches/S7B_bxawC
// many circles wrap

// https://editor.p5js.org/jht1493/sketches/e190hgdMU
// ICM-06 Example - ICM 21 Week 2 - Object Literal wrap

// https://editor.p5js.org/jht1493/sketches/4_VOFzrq8
// https://editor.p5js.org/enickles/sketches/ANfj8SGBd
// ICM-06 Example - ICM 21 Week 2 - Object Literal
