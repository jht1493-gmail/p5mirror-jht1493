let ball;

function setup() {
  createCanvas(400, 400);
  ball = {
    x: width / 2,
    y: height / 2,
    size: 50,
    speed: 2, // speed starts positive
  };
}

function draw() {
  background(220);

  // draw the ball on the canvas
  circle(ball.x, ball.y, ball.size);

  // move the ball
  ball.x += ball.speed;

  // IF the x position is greater than the width, then...
  // if (ball.x > width) {
  // make ball.speed negative
  // so that the xpos decreases
  //   ball.speed = -1 * ball.speed
  // }

  // IF the x position is less than 0, then...
  //   if (ball.x < 0) {
  // make ball.speed positive
  // so that the xpos increases
  //     ball.speed = -1 * ball.speed
  //   }

  // Simplify the above with the || operator
  // Either condition needs to be true to change
  // the ball's speed
  if (ball.x > width || ball.x < 0) {
    ball.speed = -1 * ball.speed;
    // ball.speed = -ball.speed; // shorthand
  }
}

// https://editor.p5js.org/enickles/sketches/ED7gbSKf8
// ICM-06 Example - ICM 21 Week 3 - Bouncing ball object
