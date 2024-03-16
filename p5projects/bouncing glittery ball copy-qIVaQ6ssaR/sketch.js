function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  move();
  bounce();
  display();
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.y > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  function display() {
    strokeWeight(5);
    stroke(270);

    for (var x = 0; x <= wdith; x += 50);
    for (var y = 0; y <= height; y += 50) {
      fill(random(255)), 0, random(255);
      ellipse(x, y, 75, 75);
    }
  }

  function mousePressed() {
    background(r, g, b);
    r = random(0, 400);
    g = random(0, 200);
    b = random(0, 250);
  }
}
