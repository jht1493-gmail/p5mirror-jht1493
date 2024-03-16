function setup() {
  createCanvas(400, 200);
  create_ui();
}

function draw() {
  background(220);
  draw_head(10, 80);
  draw_head(60, 80);
  draw_head(110, 80);
  draw_head(160, 80);
  update_ui();
}

function draw_head(xpos, ypos) {
  translate(xpos,ypos)
  // ellipse(x, y, w, [h])
  ellipse(20, 20, 40);     // Face
  ellipse(10, 16, 10);     // Left Eye
  ellipse(30, 16, 10);     // Right Eye
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