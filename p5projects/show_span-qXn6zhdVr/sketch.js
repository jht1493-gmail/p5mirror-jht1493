// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  // frameRate(10);
}

function draw() {
  show_span('x', mouseX)
  show_span('y', mouseY, 'br');
  show_span('frameCount', frameCount)
  show_span('frameRate', round(frameRate(), 2), 'br')
  // show_span('milli', round(millis(), 2))
  show_span('milli', millis())
}

// Show a_value in a span
// a_id label for the span
// a_br optionally create a line break
function show_span(a_id, a_value, a_br) {
  let p_elm = select('#' + a_id);
  if (!p_elm) p_elm = createSpan().id(a_id);
  p_elm.html('[' + a_id + ' ' + a_value + ']');
  if (a_br) {
    const br_id = '_'+a_id;
    let p_elm = select('#' + br_id);
    if (!p_elm) p_elm = createElement('br').id(br_id);
  }
}
