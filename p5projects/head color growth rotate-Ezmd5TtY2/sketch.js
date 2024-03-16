function setup() {
  createCanvas(400, 400);
  create_ui();
}
function draw() {
  update_ui()
  background(220);
  draw_head(20, 140, 1, 'yellow');
  draw_head(frameCount % 200, 80, 3, 'green');
  draw_head(frameCount % width, 140, 3, 'red');
  draw_head(mouseX, mouseY, 6, 'gray');
}
function draw_head(xpos, ypos, ascale, acolor) {
  push();
  translate(xpos,ypos)
  scale(ascale)
  // rotate(PI/(mouseY % 10))
  rotate(PI/4)
  fill(acolor)
  circle(10,10,20);
  circle(5,8,5);
  circle(15,8,5);
  ellipse(10,15,10,4);
  pop();
}
function create_ui() {
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('fco');
  createSpan().id('fcm');
}
function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
  select('#fco').html('[fco='+frameCount+'] ')
  select('#fcm').html('[fcm='+(frameCount%width)+'] ')
}