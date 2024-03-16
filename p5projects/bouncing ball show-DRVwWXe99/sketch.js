let x = 320;
let y = 180;
let xspeed = 10;
let yspeed = 10;

let r = 25;

function setup() {
  createCanvas(640, 360);
  // frameRate(0.5)
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

// show_span(label, value);
//   Show value in a span
//   label is the html id for the span
// show_span(label, value, opt);
//   opt = { line:1 }      // cause a line break
//   opt = { round:n }   // round value to n decimals
// eg. show miliseconds to 3 decimal places with a line break
//    show_span('milli', millis(), {line:1, round:3});
//
function show_span(label, value, opt) {
  let elm = select('#' + label);
  if (!elm) {
    elm = createSpan().id(label);
    elm.style('font-size', '30px');
  }
  let ndecimal = 2;
  if (opt && opt.round) {
    ndecimal = opt.round;
  }
  value = round(value, ndecimal)
  elm.html('[' + label + ' ' + value + '] ');
  if (opt && opt.line) {
    const brlabel = '_' + label;
    let elm = select('#' + brlabel);
    if (!elm) elm = createElement('br').id(brlabel);
  }
}