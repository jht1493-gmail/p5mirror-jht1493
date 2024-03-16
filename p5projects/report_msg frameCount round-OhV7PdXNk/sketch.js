// Display frameCount and frameRate
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  frameRate(1);
}

function draw() {
  report_msg('frameRate ' + round(frameRate(), 2));
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = '[' + frameCount + '] ' + a_msg;
}