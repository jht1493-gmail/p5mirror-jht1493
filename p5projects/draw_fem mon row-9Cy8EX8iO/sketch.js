function setup() {
  createCanvas(400, 180);
  create_ui();
}

function draw() {
  background(220);
  draw_row();
  translate(0,66);
  draw_row();
  translate(0,66);
  draw_row();
  update_ui()
}

function draw_row() {
  draw_fem(5, 0, [255,255,255,100]);
  draw_mon(70, 0, [255,255,0,100]);
  draw_fem(135, 0, [128,128,128,100]);
  draw_mon(200, 0, [255,0,0,100]);
  draw_fem(265, 0, [0,255,0,100]);
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

// https://editor.p5js.org/jht1493/sketches/9Cy8EX8iO
// draw_fem mon row
