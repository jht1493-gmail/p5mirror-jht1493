// https://editor.p5js.org/jht1493/sketches/B-_Nh-YX0
// Simple Draw

var aCanv;

function setup() {
  aCanv = createCanvas(displayWidth, displayHeight);
  
  createDiv('JHT is here').elt.appendChild(aCanv.elt)
  
  strokeWeight(10);
  stroke(0);
  
  //aCanv.mouseMoved(touchMoved2)
}

function draw() {
  // background(255)
  
  fill('red')
  textSize(64)
  // text('Hello', 0, displayHeight/2)
  text('Hello', 0, 64)
  
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

// https://p5js.org/examples/mobile-simple-draw.html
