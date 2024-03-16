// correct fill

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
// I don't know why I can't use this code to draw rect first.
  fill(255);
  var x = 0;
  while (x <= width) {
    rect(x, 0, 200, 400);
    x += 200;
  }

  if (mouseX>0 && mouseX<200){
    fill(255,0,0);
    rect(0,0,200,400);
  }
  if(mouseX>200&&mouseX<400){
    fill(255,0,0);
    rect(200,0,200,400);
  }
    if(mouseX>400&&mouseX<600){
    fill(255,0,0);
    rect(400,0,200,400);
  }
}

// https://editor.p5js.org/ay2494/sketches/5S241aGpK
