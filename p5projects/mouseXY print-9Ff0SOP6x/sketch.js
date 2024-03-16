// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  frameRate(10);
}

function draw() {
  // console.log('mouseX', mouseX, 'mouseX', mouseX);
  // print('mouseX', mouseX, 'mouseX', mouseX);

  report_msg('x: ' + mouseX + ' y: ' + mouseX);
}

// Display msg in html id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = a_msg;
}