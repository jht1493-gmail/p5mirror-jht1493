function setup() {
  createCanvas(400, 400);
  create_ui();
}

function draw() {
  update_ui()
  background(220);
  draw_head(20, 20, 1, 'red');
  draw_head(20, 60, 2, 'green');
  draw_head(20, 140, 3, 'yellow');
  draw_head(100, 140, 3, 'gray');
  draw_head(180, 140, 3, 'red');
}

function draw_head(xpos, ypos, ascale, acolor) {
  push();
  translate(xpos,ypos)
  scale(ascale)
  fill(acolor)
  circle(10,10,20);
  circle(5,8,5);
  circle(15,8,5);
  ellipse(10,15,10,4);
  pop();
}

function create_ui() {
  createSpan('').id('mox');
  createSpan('').id('moy');
}

function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
}