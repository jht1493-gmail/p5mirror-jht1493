function setup() {
  createCanvas(400, 400);
  createSpan('I am a span').id('s1');
  select('#s1').style('text-align','center');
  select('#s1').style('width','100px');
  select('#s1').style('height','40px');
  // select('#s1').style('background', 'red');
  select('#s1').style('background', 'rgba(255,0,0,0.5)');
  select('#s1').position(0,410);
}

function draw() {
  background(220);
  select('#s1').position(mouseX,mouseY);
}