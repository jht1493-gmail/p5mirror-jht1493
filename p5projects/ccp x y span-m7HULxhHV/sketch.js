// https://editor.p5js.org/jht1493/sketches/m7HULxhHV
// ccp x y span

let a_x = 0;
let a_y = 64;

function setup() {
  let a_canvas = createCanvas(windowWidth, windowHeight);
  
  let a_x_span = createSpan('x: '+mouseX).id('a_x_span')
  select('main').elt.insertBefore(a_x_span.elt, a_canvas.elt)

  let a_y_span = createSpan(' y: '+mouseY).id('a_y_span')
  select('main').elt.insertBefore(a_y_span.elt, a_canvas.elt)

  strokeWeight(10);
  stroke('#00BCD4');
}

function draw() {
  // background(255)
  fill('rgb(26,177,26)')
  
  textSize(64)
  // text('Hello World!', frameCount % 100, a_y)
  text('Hello World!', a_x, a_y)
  
  a_x = (a_x + 1) % 100; // windowWidth
  a_y = (a_y + 1) % 400; // windowHeight
  
  select('#a_x_span').html('x: '+mouseX)
  select('#a_y_span').html(' y: '+mouseY)
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

// https://editor.p5js.org/jht1493/sketches/8bR0_MgLU
// ccp hello div

// https://editor.p5js.org/jht1493/sketches/B-_Nh-YX0
// Simple Draw

// https://p5js.org/examples/mobile-simple-draw.html
