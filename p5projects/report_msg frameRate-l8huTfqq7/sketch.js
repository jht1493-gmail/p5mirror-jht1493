// Display frameRate
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  frameRate(10);
}

function draw() {
  report_msg('frameRate '+frameRate());
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = a_msg;
}