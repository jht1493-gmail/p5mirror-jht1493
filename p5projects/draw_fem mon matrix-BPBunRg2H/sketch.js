function setup() {
  createCanvas(420, 180);
  create_ui();
}

function draw() {
  background(220);
  draw_row();
  translate(0,60);
  draw_row();
  translate(0,60);
  draw_row();
  update_ui()
}

function draw_row() {
  draw_fem(0, 0, [255,0,0,100]);
  draw_mon(60, 0, [0,255,0,100]);
  draw_fem(120, 0, [255,255,0,100]);
  draw_mon(180, 0, [128,128,128,100]);
  draw_fem(240, 0, [255,255,0,100]);
  draw_mon(300, 0, [0,255,0,100]);
  draw_fem(360, 0, [255,0,0,100]);
}

function draw_fem(xpos, ypos, acolor) {
  push();
  translate(xpos+30,ypos-10)
  rotate(PI/4);
  fill(acolor);
  rect(20, 0, 20, 20);     
  rect(0, 20, 60, 20);     
  rect(20, 40, 20, 20);     
  pop();
}

function draw_mon(xpos, ypos, acolor) {
  fill(acolor);
  translate(xpos,ypos)
  rect(20, 0, 20, 20);     
  rect(0, 20, 60, 20);     
  rect(20, 40, 20, 20);     
  translate(-xpos,-ypos)
}

function create_ui() {
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
}

function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
  select('#cco').html('[RGBA='+get(mouseX,mouseY)+'] ')
}

// https://editor.p5js.org/jht1493/sketches/BPBunRg2H
// draw_fem mon matrix

// a duty free gift for the traveler
// theme for the Eulipions
// rahsaan roland kirk
