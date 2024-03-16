function setup() {
  createCanvas(400, 400);
  create_ui();
}

function draw() {
  update_ui()
  background(220);
  draw_head(0, 0, 'white');
  draw_head(10, 140, 'yellow');
  draw_head(30, 0, 'gray');
  draw_head(30, 0, 'red');
  draw_head(30, 0, 'green');
}

function draw_head(xtrans, ytrans, acolor) {
  translate(xtrans, ytrans)
  fill(acolor)
  circle(10,10,20); // Face
  circle(5,8,5);  // Left Eye
  circle(15,8,5);  // Right Eye
  ellipse(10,15,10,4);  // Mouth
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