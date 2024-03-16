function setup() {
  createCanvas(400, 400);

  background(220);

  // draw_1();
}

function draw() {
  draw_1();
}

function draw_1() {
  background(220);
  scale(0.5);
  draw_face();

  translate(200, 0);
  draw_face();

  translate(200, 0);
  draw_face();

  translate(-400, 200);
  draw_face();

  translate(200, 0);
  draw_face();

  translate(200, 0);
  draw_face();
}

function draw_face() {
  // Phil_face();
  Wushuang_face();
}


function Wushuang_face() {
  //left eye
  stroke(0)
  strokeWeight(1)
  ellipseMode(RADIUS);
  fill(255);
  ellipse(100, 100, 30, 30);
  ellipseMode(CENTER);
  fill(0, 204, 204);
  ellipse(100, 100, 30, 30);

  //right eye
  ellipseMode(RADIUS);
  fill(255);
  ellipse(200, 100, 30, 30);
  ellipseMode(CENTER);
  fill(0, 204, 204);
  ellipse(200, 100, 30, 30);

  //Nose  
  fill(255, 153, 51);
  arc(150, 150, 60, 60, HALF_PI, PI);

  //mouth
  strokeWeight(6);
  line(125, 210, 200, 200);
}

function Phil_face() {
  strokeWeight(20)
  stroke(30, 30, 30)
  line(300, 300, 300, 400) //body
  line(250, 480, 300, 400) //left leg
  line(350, 480, 300, 400) //right leg
  line(300, 320, 260, 375) //left arm
  line(300, 320, 340, 375) //rightarm

  //   head
  fill(100)
  strokeWeight(2)
  stroke(0, 0, 100)
  ellipseMode(CENTER)
  ellipse(300, 160, 200, 290)

  stroke(255, 255, 255)
  strokeWeight(1)
  fill(0, 0, 85)
  ellipse(298, 180, 5, 7)
  ellipse(305, 180, 5, 7)

  stroke(0)
  // left eye
  translate(250, 150)
  rotate(290)
  // strokeWeight()
  fill(0, 255, 100)
  angleMode(DEGREES)
  ellipse(0, 0, 30, 45)

  // reset canvas
  rotate(-290)
  translate(-250, -150)
  translate(350, 150)

  // right eye
  fill(0, 255, 100)
  rotate(-290)
  angleMode(DEGREES)
  ellipse(0, 0, 30, 45)

  //   double pupils
  rotate(290)
  strokeWeight(2)
  fill(200)
  circle(0, 0, 10)
  circle(-10, 0, 10)
  circle(-90, 0, 10)
  circle(-100, 0, 10)

  noFill()
  stroke(255, 0, 0)
  bezier(35, -65, 50, -55, 60, -60, 70, -60)
  bezier(37, -60, 40, -50, 50, -55, 60, -45)
  bezier(40, -55, 41, -55, 40, -50, 50, -35)
  bezier(-135, -60, -145, -50, -160, -55, -165, -45)
  bezier(-140, -50, -145, -53, -160, -49, -165, -65)
  bezier(-135, -65, -135, -70, -160, -75, -165, -69)
}