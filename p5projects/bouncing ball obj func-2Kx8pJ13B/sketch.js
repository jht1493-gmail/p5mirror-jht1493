let ball_1 = {
  x: 320,
  y: 180,
  xspeed: 10,
  yspeed: 10,
  r: 25
};

function setup() {
  console.log('ball_1', ball_1)
  createCanvas(640, 360);
  // frameRate(0.5)
  // frameRate(2)
}

function draw() {
  background(0);
  draw_ball(ball_1);
}

function draw_ball(a_ball) {
  ellipse(a_ball.x, a_ball.y, a_ball.r * 2, a_ball.r * 2);
  a_ball.x += a_ball.xspeed;
  a_ball.y += a_ball.yspeed;
  if (a_ball.x > width - a_ball.r || a_ball.x < a_ball.r) {
    a_ball.xspeed = -a_ball.xspeed;
  }
  if (a_ball.y > height - a_ball.r || a_ball.y < a_ball.r) {
    a_ball.yspeed = -a_ball.yspeed;
  }
}
