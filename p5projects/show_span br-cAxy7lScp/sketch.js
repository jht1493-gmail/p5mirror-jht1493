// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  // frameRate(10);
}

function draw() {
  show_span('x', mouseX)
  show_span('y', mouseY);
  show_br();
  show_span('frameCount', frameCount)
  show_br();
  show_span('milli', round(millis(), 2))
  show_br();
  show_span('frameRate', round(frameRate(), 2))
}

// Show a_msg in a span
function show_span(a_id, a_msg) {
  let p_elm = select('#' + a_id);
  if (!p_elm) p_elm = createSpan().id(a_id);
  p_elm.html('[' + a_id + ' ' + a_msg + ']');
}

// Show a break
function show_br(a_id) {
  if (!a_id) a_id = 0;
  let p_elm = select('#_' + a_id);
  if (!p_elm) p_elm = createElement('br').id('_'+a_id);
}