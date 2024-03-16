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
  translate(xpos,ypos)
  fill(acolor)
  circle(10*2,10*2,20*2); // Face
  circle(5*2,8*2,5*2);  // Left Eye
  circle(15*2,8*2,5*2);  // Right Eye
  ellipse(10*2,15*2,10*2,4*2);  // Mouth
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