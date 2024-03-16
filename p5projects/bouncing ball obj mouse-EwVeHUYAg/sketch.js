let a_ball = {
  x: 320,
  y: 180,
  xspeed: 4,
  yspeed: 0,
  r: 25
};
// let x = 320;
// let y = 180;
// let xspeed = 10;
// let yspeed = 10;
// let r = 25;

function setup() {
  // print('a_ball', a_ball)
  console.log('a_ball', a_ball)
  createCanvas(640, 360);
  // frameRate(0.5)
  // frameRate(2)
}

function draw() {
  background(0);

  a_ball.xspeed = (mouseX - a_ball.x) / 10;
  a_ball.yspeed = (mouseY - a_ball.y) / 10;

  circle(a_ball.x, a_ball.y, a_ball.r * 2);
  a_ball.x += a_ball.xspeed;
  a_ball.y += a_ball.yspeed;
  if (a_ball.x > width - a_ball.r || a_ball.x < a_ball.r) {
    a_ball.xspeed = -a_ball.xspeed;
    // a_ball.y += 10;
  }
  if (a_ball.y > height - a_ball.r || a_ball.y < a_ball.r) {
    a_ball.yspeed = -a_ball.yspeed;
  }
  show_span('x', a_ball.x);
  show_span('y', a_ball.y);
  show_span('xspeed', a_ball.xspeed);
  show_span('yspeed', a_ball.yspeed);

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