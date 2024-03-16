// Display frameCount and frameRate
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  // frameRate(0.1);
  frameRate(30);
  print('in setup');
}

// Why blank screen at 0.1 frameRate?

function draw() {
  print('in draw');
  rect(100, 100, 200, 200)
  report_msg('frameRate ' + frameRate());
  // report_msg('frameRate ' + round(frameRate(), 2));
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = '[' + frameCount + '] ' + a_msg;
}