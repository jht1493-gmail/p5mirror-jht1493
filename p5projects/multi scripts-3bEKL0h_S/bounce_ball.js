function bounce_ball(ball) {
  //   ball.xspeed = (mouseX - ball.x) / 10;
  //   ball.yspeed = (mouseY - ball.y) / 10;

  fill(ball.brightness, 125);
  circle(ball.x, ball.y, ball.r * 2);

  ball.x += ball.xspeed;
  ball.y += ball.yspeed;

  const off_left = ball.x < ball.r;
  const off_right = ball.x > width - ball.r;
  if (off_left || off_right) {
    ball.x -= ball.xspeed;
    ball.xspeed = -ball.xspeed;
  }
  const off_top = ball.y < ball.r;
  const off_bottom = ball.y > height - ball.r;
  if (off_top || off_bottom) {
    ball.yspeed = -ball.yspeed;
  }
  // show_span(ball.name+'x', ball.x);
  // show_span(ball.name+'y', ball.y);
  // show_span(ball.name+'xspeed', ball.xspeed);
  // show_span(ball.name+'yspeed', ball.yspeed, {line:1});
}