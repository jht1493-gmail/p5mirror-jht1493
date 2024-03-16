// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  // frameRate(10);
}

function draw() {
  report_msg('x: ' + mouseX + ' y: ' + mouseY);
  report_msg('frameCount ' + frameCount, 1)
  report_msg('millis ' + millis(), 2)
  report_msg('frameRate ' + frameRate(), 3)
}

// Display msg in html id_line
function report_msg(a_msg, line_num) {
  let id_line = 'id_line_0';
  if (line_num) id_line = 'id_line_' + line_num;
  let p_elm = select('#'+id_line);
  if (!p_elm) p_elm = createP().id(id_line);
  p_elm.elt.innerHTML = a_msg;
}