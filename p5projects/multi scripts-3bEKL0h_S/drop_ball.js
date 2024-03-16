let a_gravity = 0.4;
let a_damp = -0.95;

function drop_ball(ball) {
  display_ball(ball);
  update_ball(ball);
  
  function display_ball(ball) {
    fill(175);
    circle(ball.x, ball.y, ball.r * 2);
  }

  function update_ball(ball) {
    ball.yspeed = ball.yspeed + a_gravity;
    ball.y = ball.y + ball.yspeed;
    // If reaches the bottom, reverse speed 
    if (ball.y > height - ball.r) {
      ball.y = height - ball.r;
      ball.yspeed = ball.yspeed * a_damp;
    }
  }
}
