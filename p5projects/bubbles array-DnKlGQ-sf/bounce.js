function bounce_ball(ball) {
//   ball.xspeed = (mouseX - ball.x) / 10;
//   ball.yspeed = (mouseY - ball.y) / 10;
  
  fill(255,100)
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
}