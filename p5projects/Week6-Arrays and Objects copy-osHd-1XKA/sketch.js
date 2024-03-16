var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  for (var i = 0; i < 50; i++) {
    let ball = new Ball({
      r: random(100),
      p: { x: width / 2, y: height / 2 },
    });
    balls.push(ball);
  }
}

function mousePressed() {
  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].contains(mouseX, mouseY)) {
      balls.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  for (let ball of balls) {
    ball.move();
    ball.draw();
  }
}

class Ball {
  constructor(args) {
    this.r = args.r;
    this.p = { x: random(width), y: random(height) };
    this.v = { x: random(-1, 1), y: random(-1, 1) };
    this.b = random(10, 100);
    this.color = random([
      "#ddbea9",
      "#ffe8d6",
      "#b7b7a4",
      "#a5a58d",
      "#6b705c",
      "#cb997e",
    ]);
  }

  draw() {
    fill(this.color);
    ellipse(this.p.x, this.p.y, this.r);
  }

  move() {
    this.p.x += this.v.x;
    this.p.y += this.v.y;
  }
}
