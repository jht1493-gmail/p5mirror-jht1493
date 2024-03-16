let eyeX = 170;
let eyeY = 250;

function setup() {
  createCanvas(400, 800);
  faceX = random(180, 180);
}

function draw() {
  background(50, 20, 100);

  for (var y = 0; y <= height; y += 60) {
    //eye
    fill(random(250), 1500, 200);
    circle(eyeX, y, 20);
    circle(eyeY, y, 20);
    eyeX = eyeX + 1;

    eyeX = random(170, 175);
    eyeY = random(250, 255);
  }

  stroke(100, 100, 200);
}
