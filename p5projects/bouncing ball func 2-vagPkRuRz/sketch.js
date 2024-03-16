let a_ball = {
  name: 'a-',
  x: 320,
  y: 180,
  xspeed: 2,
  yspeed: 2,
  r: 25
};

let b_ball = {
  name: 'b-',
  x: 100,
  y: 200,
  xspeed: 10,
  yspeed: 10,
  r: 10
};

function setup() {
  // print('a_ball', a_ball)
  // print('b_ball', b_ball)
  createCanvas(600, 300);
  // frameRate(0.5)
  // frameRate(2)
}

function draw() {
  background(0);
  draw_ball(a_ball);
  draw_ball(b_ball);
}

function draw_ball(ball) {
//   ball.xspeed = (mouseX - ball.x) / 10;
//   ball.yspeed = (mouseY - ball.y) / 10;

  circle(ball.x, ball.y, ball.r * 2);
  
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
  
  const off_left = ball.x < ball.r;
  const off_right = ball.x > width - ball.r;
  if (off_left || off_right) {
    ball.xspeed = -ball.xspeed;
  }
  const off_top = ball.y < ball.r;
  const off_bottom = ball.y > height - ball.r;
  if (off_top || off_bottom) {
    ball.yspeed = -ball.yspeed;
  }
  show_span(ball.name+'x', ball.x);
  show_span(ball.name+'y', ball.y);
  show_span(ball.name+'xspeed', ball.xspeed);
  show_span(ball.name+'yspeed', ball.yspeed, {line:1});
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