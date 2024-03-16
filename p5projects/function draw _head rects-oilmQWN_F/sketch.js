function setup() {
  createCanvas(400, 200);
  create_ui();
}

function draw() {
  background(220);
  draw_head(10, 80);
  draw_head(60, 80);
  update_ui();
}

function draw_head(xpos, ypos) {
  // translate(x, y)
  translate(xpos,ypos)
  // rect(x, y, w, h)
  rect(20, 20, 40);     
  rect(10, 16, 10);     
  rect(30, 16, 10);     
  rect(20, 30, 20, 8);  
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

// https://editor.p5js.org/jht1493/sketches/Tiu0zz1NE
// function draw_head rects

