// Display frameCount and frameRate
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  frameRate(0.1);
}

function draw() {
  background(240);
  const fr_trim = round(frameRate(), 2);
  // const fr_trim = frameRate();
  text(fr_trim,0,10);
  print('fr_trim', fr_trim);
  report_msg('frameRate ' + fr_trim);
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = frameCount + ' ' + a_msg;
}