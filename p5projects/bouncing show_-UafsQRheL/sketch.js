let x = 320;
let y = 180;
let xspeed = 10;
let yspeed = 10;
let r = 25;

function setup() {
  createCanvas(640, 360);
  // frameRate(0.5)
  // frameRate(2)
}

function draw() {
  background(0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
    // xspeed = xspeed * -1;
    // if (xspeed < 0) xspeed = 1
    // else xspeed = -1;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  show_span('x',x);
  show_span('y',y);
  show_span('xspeed',xspeed);
  show_span('yspeed',yspeed);

}

// show_span(a_label, a_value);
//   Show a_value in a span
//   a_label is the html id for the span
// show_span(a_label, a_value, a_opt);
//   a_opt = { line:1 }      // cause a line break
//   a_opt = { round:n }   // round value to n decimals
// eg. show miliseconds to 2 decimal places with a line break
//    show_span('milli', millis(), {line:1, round:2});
//
function show_span(a_label, a_value, a_opt) {
  let p_elm = select('#' + a_label);
  if (!p_elm) {
    p_elm = createSpan().id(a_label);
    p_elm.style('font-size','30px');
  }
  if (a_opt && a_opt.round) {
    a_value = round(a_value, a_opt.round);
  }
  p_elm.html('[' + a_label + ' ' + a_value + '] ');
  if (a_opt && a_opt.line) {
    const br_label = '_'+a_label;
    let p_elm = select('#' + br_label);
    if (!p_elm) p_elm = createElement('br').id(br_label);
  }
}
