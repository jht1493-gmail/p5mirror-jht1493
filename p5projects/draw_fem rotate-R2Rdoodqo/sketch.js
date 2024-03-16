function setup() {
  createCanvas(400, 180);
  create_ui();
}

function draw() {
  background(220);
  draw_fem(5, 60, [255,255,255,100]);
  draw_fem(70, 60, [255,255,0,100]);
  draw_fem(135, 60, [128,128,128,100]);
  draw_fem(200, 60, [255,0,0,100]);
  draw_fem(265, 60, [0,255,0,100]);
  update_ui()
}

function draw_fem(xpos, ypos, acolor) {
  push();
  translate(xpos+30,ypos)
  rotate(PI/4);
  fill(acolor);
  rect(20, 0, 20, 20);     
  rect(0, 20, 60, 20);     
  rect(20, 40, 20, 20);     
  pop();
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

// https://editor.p5js.org/jht1493/sketches/R2Rdoodqo
// draw_fem rotate
