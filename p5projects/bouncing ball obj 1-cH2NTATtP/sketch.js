let a_ball = {
  x: 320,
  y: 180,
  xspeed: 10,
  yspeed: 10,
  r: 25
};
// let x = 320;
// let y = 180;
// let xspeed = 10;
// let yspeed = 10;
// let r = 25;

function setup() {
  print('a_ball', a_ball)
  console.log('a_ball', a_ball)
  createCanvas(640, 360);
  // frameRate(0.5)
  // frameRate(2)
}

function draw() {
  background(0);

  // a_ball.xspeed = (mouseX - a_ball.x) / 10;
  // a_ball.yspeed = (mouseY - a_ball.y) / 10;

  circle(a_ball.x, a_ball.y, a_ball.r * 2);
  a_ball.x += a_ball.xspeed;
  a_ball.y += a_ball.yspeed;
  const off_left = a_ball.x > width - a_ball.r;
  const off_right = a_ball.x < a_ball.r;
  if (off_left || off_right) {
    a_ball.xspeed = -a_ball.xspeed;
  }
  const off_bottom = a_ball.y > height - a_ball.r;
  const off_top = a_ball.y < a_ball.r;
  if (off_bottom || off_top) {
    a_ball.yspeed = -a_ball.yspeed;
  }
  show_span('x', a_ball.x);
  show_span('y', a_ball.y);
  show_span('xspeed', a_ball.xspeed);
  show_span('yspeed', a_ball.yspeed);
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
    p_elm.style('font-size', '30px');
  }
  let a_round = 2;
  if (a_opt && a_opt.round) {
    a_round = a_opt.round;
  }
  a_value = round(a_value, a_round)
  p_elm.html('[' + a_label + ' ' + a_value + '] ');
  if (a_opt && a_opt.line) {
    const br_label = '_' + a_label;
    let p_elm = select('#' + br_label);
    if (!p_elm) p_elm = createElement('br').id(br_label);
  }
}