// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  report_xy();
}

function report_xy() {
  report_msg('x: ' + mouseX + ' y: ' + mouseY);
}

function report_msg(msg) {
  let id_line = select('#id_line');
  print('id_line ' + id_line);
  if (!id_line) {
    id_line = createP();
    id_line.id ( 'id_line' );
  }
  id_line.elt.innerHTML = msg;
}