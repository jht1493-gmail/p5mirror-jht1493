// https://editor.p5js.org/jht1493/sketches/8bR0_MgLU
// ccp hello div

var a_x = 0;
var a_y = 64;

function setup() {
  var a_canvas = createCanvas(windowWidth, windowHeight);
  
  var a_div = createSpan('JHT is here')
  select('main').elt.insertBefore(a_div.elt, a_canvas.elt)
  
  var a_but = createButton('Change').mousePressed(change_color)
  select('main').elt.insertBefore(a_but.elt, a_canvas.elt)
  
  strokeWeight(10);
  stroke('#00BCD4');
}

function change_color() {
  stroke(random(['red', 'green', 'yellow', 'black']))
}

function draw() {
  // background(255)
  fill('rgb(3,169,244)')
  textSize(64)
  text('Hello World!', frameCount % 100, a_y)
  a_y = (a_y + 1) % windowHeight
  if (frameCount % 100 == 0) {
    change_color()
    strokeWeight(random([5,10,20]))
  }
}

function touchMoved() {
// function mouseMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

// https://editor.p5js.org/jht1493/sketches/B-_Nh-YX0
// Simple Draw

// https://p5js.org/examples/mobile-simple-draw.html
