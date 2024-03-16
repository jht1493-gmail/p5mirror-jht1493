function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);

  translate(-width/2, -height/2, 0);
  // normalMaterial();

  translate(mouseX, mouseY, 0);
  push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();

}