let ball = [];
let rock = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let d = random(20, 50);
    let b = new balls(x, y, d);
    ball.push(b);
  }
}

// function mousePressed() {
//   for (let i = ball.length - 1; i >= 0; i--) {
//     if (ball[i].clicked(mouseX, mouseY)) {
//       ball.splice(i, 1);
//     }
//   }
// }

function draw() {
  background(0);

  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].bounce();
    ball[i].show();
  }
  stroke("purple");
  strokeWeight(16);
  point(width / 2 - 30, height - 150);
  point(width / 2 + 30, height - 150);

  strokeWeight(3);
  stroke(160);

  fill(0);
  stroke(255);
  fill(200, 70, 70);

  if (mouseIsPressed) {
    circle(mouseX, mouseY, 20);
    line(width / 2 - 30, height - 150, mouseX, mouseY);
    line(width / 2 + 30, height - 150, mouseX, mouseY);
  } else {
    line(width / 2 - 30, height - 150, width / 2, height - 150);
    line(width / 2, height - 150, width / 2 + 30, height - 150);
  }
  stroke("rgb(226,36,36)");
  point(width / 2, height - 150);
}

class rocks {
  constructor(x, y, d) {
    this.d = d;
    this.x = x;
    this.y = y;
    this.xs = this.disr;
    this.ys = this.disr;
  }
  move() {
    this.x = this.x + this.xs;
    this.y = this.y + this.ys;
  }
}
