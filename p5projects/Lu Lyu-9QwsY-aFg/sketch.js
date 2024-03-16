let size;
let Xpos, speed;

function setup() {
  createCanvas(400, 400);
  size = 100;
  Xpos = 0;
  speed = 2;
}

function draw() {
  background(234);

  //decide the size of the body part according to the mouse movement
  size = abs(mouseX - width / 2) * 2;
  size_belly = abs(mouseY - height / 2) * 2;
  if (size_belly / size <= 1.3) {
    size_belly = 1.3 * size;
  }
  if (size_belly / size >= 4) {
    size_belly = 4 * size;
  }

  //move the bamboo
  if ((Xpos > width) || (Xpos < 0)) {
    speed = -speed;
  }
  Xpos += speed;

  //draw the bamboo
  fill(141, 199, 112);
  noStroke();
  rect(Xpos, 10, 15, 60);
  rect(Xpos, 80, 15, 60);
  rect(Xpos, 150, 15, 60);
  rect(Xpos, 220, 15, 60);
  rect(Xpos, 290, 15, 60);
  rect(Xpos, 360, 15, 60);

  //black part of boody
  fill(0);
  ellipse(width / 2, height / 2 + size * 0.7, size_belly * 0.8, 0.9 * size_belly);

  //white part of body
  fill(255);
  ellipse(width / 2, height / 2, size, 0.8 * size);
  ellipse(width / 2, height / 2 + size * 0.6, size_belly * 0.6, 0.6 * size_belly);

  //ear
  fill(0);
  ellipse(width / 2 - (size * 0.36), height / 2 - (size * 0.3), size * 0.15, size * 0.15);
  ellipse(width / 2 + (size * 0.36), height / 2 - (size * 0.3), size * 0.15, size * 0.15);


  //eyeblack and nose
  fill(0);
  ellipse(width / 2 - (size * 0.22), height / 2 - (size * 0.08), size * 0.25, size * 0.15);
  ellipse(width / 2 + (size * 0.22), height / 2 - (size * 0.08), size * 0.25, size * 0.15);

  //eyewhite
  fill(255);
  ellipse(width / 2 - (size * 0.15), height / 2 - (size * 0.08), size * 0.05, size * 0.05);
  ellipse(width / 2 + (size * 0.15), height / 2 - (size * 0.08), size * 0.05, size * 0.05);

}