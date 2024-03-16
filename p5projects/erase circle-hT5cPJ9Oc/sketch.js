let x_pos = -50;
let y_pos = 60;
function setup() {
  smooth();
  createCanvas(200, 200);
  // Make a <p> element and put it behind the canvas
  let p = createP('XXXXXXXXXXXXX');
  p.center();
  p.style('font-size', '40px');
  // p.style('text-align', 'center');
  p.position(0,0);
  p.style('z-index', '-9999');
  
  noStroke();
  // clear()
}

function draw() {
  background(250, 250, 150);
  // fill(15, 195, 185);
  erase(255);
  circle(x_pos, y_pos, 50);
  noErase();
  
  x_pos += 1;
  if (x_pos > width) {
    x_pos = -50;
  }
}
