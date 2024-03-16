function setup() {
  createCanvas(420, 180);
  create_ui();
  // frameRate(1);
  console.log('sin(PI * 0/60)',  sin(PI * 0/60))
  console.log('sin(PI * 30/60)',  sin(PI * 30/60))
  console.log('sin(PI * 60/60)',  sin(PI * 60/60))
  console.log('sin(PI * 90/60)',  sin(PI * 90/60))
  console.log('sin(PI * 120/60)',  sin(PI * 120/60))
}
let a_sin;
function draw() {
  // at frameCount==30 --> 1.0
  // at frameCount==90 --> -1.0
  a_sin = sin(PI * frameCount/60);
  background(220);
  draw_row();
  translate(0, 60);
  draw_row();
  translate(0, 60);
  draw_row();
  update_ui()
}

function draw_row() {
  draw_fem(0, 0, [255, 0, 0, 100]);
  draw_mon(60-18, 2, [0, 255, 0, 100]);
  draw_fem(120-18*2, 2, [255, 255, 0, 100]);
  draw_mon(180-18*3, 0, [128, 128, 128, 100]);
  draw_fem(240-18*4, 0, [255, 255, 0, 100]);
  draw_mon(300-18*5, 0, [0, 255, 0, 100]);
  draw_fem(360-18*6, 0, [255, 0, 0, 100]);
  draw_mon(420-18*7, 0, [0, 255, 0, 100]);
  draw_fem(480-18*8, 0, [255, 0, 0, 100]);
}

function draw_fem(xpos, ypos, acolor) {
  push();
  translate(xpos + 30, ypos - 10)
  rotate( PI * a_sin);
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
  rect(20, 0, 20, 20);
  rect(0, 20, 20, 20);
  rect(20, 20, 20, 20);
  rect(40, 20, 20, 20);
  rect(20, 40, 20, 20);
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
  select('#frc').html('[frc='+frameCount+'] ');
  select('#a_sin').html('sin='+a_sin)
}

// https://editor.p5js.org/jht1493/sketches/BPBunRg2H
// draw_fem mon matrix a_sin

// a duty free gift for the traveler
// theme for the Eulipions
// rahsaan roland kirk