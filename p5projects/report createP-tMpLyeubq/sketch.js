// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  frameRate(19);
}

function draw() {
  report_xy();
  // frameCount = number of frames that have been displayed 
  // report('frameCount ' + frameCount);
}

// Display the mouse position in html element
function report_xy() {
  report('x: ' + mouseX + ' y: ' + mouseY);
}

// Display msg in html id_line
function report(msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = msg;
}