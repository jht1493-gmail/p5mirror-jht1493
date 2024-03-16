let ball_1 = {
  x: 320,
  y: 180,
  xspeed: 10,
  yspeed: 10,
  r: 25,
  color: 255
};
let ball_2 = {
  x: 320,
  y: 180,
  xspeed: -10,
  yspeed: -10,
  r: 25,
  color: 120
};

function setup() {
  // print('ball_1', ball_1)
  // print('ball_2', ball_2)
  createCanvas(640, 360);
  // noStroke();
  // frameRate(0.5)
  // frameRate(2)
  // ball_1.x = random(0, width);
  // ball_1.y = random(0, height);
}

function draw() {
  // background(0);
  draw_ball(ball_1);
  draw_ball(ball_2);
}

function draw_ball(a_ball) {
  // ellipse(a_ball.x, a_ball.y, a_ball.r * 2, a_ball.r * 2);
  // circle(x, y, d)
  // fill(a_ball.color, 100)
  fill(a_ball.color)
  circle(a_ball.x, a_ball.y, a_ball.r * 2);
  a_ball.x += a_ball.xspeed;
  a_ball.y += a_ball.yspeed;
  if (a_ball.x > width - a_ball.r || a_ball.x < a_ball.r) {
    a_ball.xspeed = -a_ball.xspeed;
  }
  if (a_ball.y > height - a_ball.r || a_ball.y < a_ball.r) {
    a_ball.yspeed = -a_ball.yspeed;
  }
}
