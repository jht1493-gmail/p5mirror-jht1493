function setup() {
  createCanvas(420, 180);
  // create_ui();
  // frameRate(1);
  console.log('sin(PI * 0/60)', sin(PI * 0 / 60))
  console.log('sin(PI * 30/60)', sin(PI * 30 / 60))
  console.log('sin(PI * 60/60)', sin(PI * 60 / 60))
  console.log('sin(PI * 90/60)', sin(PI * 90 / 60))
  console.log('sin(PI * 120/60)', sin(PI * 120 / 60))
}
let a_sin;

function draw() {
  // at frameCount==30 --> 1.0
  // at frameCount==90 --> -1.0
  a_sin = sin(PI * frameCount / 60);
  background(220);
  draw_row();
  translate(0, 60);
  draw_row();
  translate(0, 60);
  draw_row();
  // update_ui()
}
let c_red = [255, 0, 0, 100];
let c_green = [0, 255, 0, 100];
let c_yellow = [255, 255, 0, 100];
let c_gray = [128, 128, 128, 100];

function draw_row() {
  draw_fem(4, 40, c_red);
  draw_mon(42, 32, c_green);
  draw_fem(84, 40, c_yellow);
  draw_mon(126, 32, c_gray);
  draw_fem(168, 40, c_red);
  draw_mon(210, 32, c_green);
  draw_fem(252, 40, c_yellow);
  draw_mon(294, 32, c_gray);
  draw_fem(336, 40, c_red);
  draw_mon(378, 32, c_green);
}

function draw_fem(xpos, ypos, acolor) {
  push();
  // rotate( frameCount * 0.03);
  translate(xpos + 30, ypos - 10)
  rotate(frameCount * 0.03);
  fill(acolor);
  draw_core();
  pop();
}

function draw_mon(xpos, ypos, acolor) {
  xpos += a_sin * 40;
  fill(acolor);
  translate(xpos, ypos)
  draw_core();
  translate(-xpos, -ypos)
}

function draw_core() {
  // rect(0,0,1,1)
  rect(20 - 30, 0 - 30, 20, 20);
  rect(0 - 30, 20 - 30, 20, 20);
  rect(20 - 30, 20 - 30, 20, 20);
  rect(40 - 30, 20 - 30, 20, 20);
  rect(20 - 30, 40 - 30, 20, 20);
}

function create_ui() {
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
  createP();
  createSpan().id('frc');
  createSpan().id('a_sin');
}

function update_ui() {
  select('#mox').html('[mouseX=' + mouseX + '] ')
  select('#moy').html('[mouseY=' + mouseY + '] ')
  select('#cco').html('[RGBA=' + get(mouseX, mouseY) + '] ')
  select('#frc').html('[frc=' + frameCount + '] ');
  select('#a_sin').html('sin=' + a_sin)
}

// https://editor.p5js.org/jht1493/sketches/PCXJkfLz5
// draw_fem mon matrix spin

// a duty free gift for the traveler
// theme for the Eulipions
// rahsaan roland kirk