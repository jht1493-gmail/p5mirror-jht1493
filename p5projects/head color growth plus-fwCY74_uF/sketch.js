function setup() {
  createCanvas(400, 400);
  create_ui();
}

function draw() {
  background(220);
  draw_head(0, 0, 'white');
  draw_head(10, 140, 'yellow');
  draw_head(60, 140, 'gray');
  draw_head(110, 140, 'red');
  draw_head(160, 140, 'green');
  update_ui();
}

function draw_head(xpos, ypos, acolor) {
  fill(acolor)
  // circle(x, y, d)
  circle(xpos+20, ypos+20, 40); // Face
  circle(xpos+10, ypos+16, 10);  // Left Eye
  circle(xpos+30, ypos+16, 10);  // Right Eye
  // ellipse(x, y, w, [h])
  ellipse(xpos+20,ypos+30,20,8);  // Mouth
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