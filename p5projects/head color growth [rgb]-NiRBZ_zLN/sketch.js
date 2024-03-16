function setup() {
  createCanvas(400, 400);
  create_ui();
}

function draw() {
  update_ui()
  background(220);
  draw_head(0, 0, 'white');
  draw_head(20, 140, [255,255,0]);
  draw_head(60, 140, [128,128,128]);
  draw_head(100, 140, [255,0,0]);
  draw_head(140, 140, [0,255,0]);
}

function draw_head(xpos, ypos, acolor) {
  translate(xpos,ypos)
  fill(acolor)
  // circle(x, y, d)
  circle(20, 20, 40); // Face
  circle(10, 16, 10);  // Left Eye
  circle(30, 16, 10);  // Right Eye
  // ellipse(x, y, w, [h])
  ellipse(20, 30, 20, 8);  // Mouth
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