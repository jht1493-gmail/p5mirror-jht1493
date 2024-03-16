function setup() {
  createCanvas(400, 400);
  create_ui();
}

function draw() {
  update_ui()
  background(220);
  draw_head(20, 20, 1);
  draw_head(20, 60, 2);
  draw_head(20, 140, 3);
}

function draw_head(xpos, ypos, ascale) {
  translate(xpos,ypos)
  scale(ascale)
  circle(10,10,20);
  circle(5,8,5);
  circle(15,8,5);
  ellipse(10,15,10,4);
  scale(1/ascale)
  translate(-xpos,-ypos)
}

function create_ui() {
  createSpan('').id('mox');
  createSpan('').id('moy');
}

function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
}