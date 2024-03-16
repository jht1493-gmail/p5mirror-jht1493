// Click mouse to advance to next drawing
function setup() {
  createCanvas(400, 400);
  background(220);
  draw_step();
}

let frame_index = 0;

function draw() {
  draw_step();
}

function draw_step() {
  background(220);

  if (frame_index === 0) {
    Justin_face();
  } else if (frame_index === 1) {
    Phil_face();
  } else if (frame_index === 2) {
    Wushuang_face();
  }
}

function mouseClicked() {
  frame_index = (frame_index + 1) % 3;
  report_msg('mouseClicked frame_index ' + frame_index);
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  const frame_rate = round(frameRate(), 2);
  const a_prefix = '[' + frameCount + '] ';
  id_line.elt.innerHTML = a_prefix + a_msg;
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

function Justin_face() {

  background(90);

  noStroke();

  // skin
  fill(100, 130, 255);
  rect(350, 200, 700, 1150, 250, 150);


  // hair left- right
  fill(0, 220);
  triangle(700, 30, 850, 250, 250, 400);
  triangle(800, 80, 1500, 350, 700, 220);


  // eyebrow shadow left- right
  stroke(0, 30);
  strokeWeight(43);
  line(600, 405, 450, 410);
  line(1000, 320, 730, 400);

  // pink eyebrow left- right
  stroke(255, 100, 100);
  strokeWeight(30);
  line(600, 400, 450, 400);
  line(1000, 300, 730, 400);


  stroke(0, 290)
  strokeWeight(20)
  // eyelash left- right
  ellipse(522, 507, 200, 130);
  ellipse(847, 485, 200, 130);


  noStroke();
  fill(255);
  // eye white left- right
  ellipse(520, 500, 200, 130);
  ellipse(850, 480, 200, 130);


  fill(40);
  // left eye suspicious left- right 255- 0
  circle(440, 500, 70);
  circle(610, 500, 70);

  fill(40, 70);
  circle(470, 490, 50);
  circle(567, 485, 50);

  fill(40, 40);
  circle(490, 475, 40);
  circle(540, 478, 40);

  fill(40, 40);
  circle(515, 470, 40);


  fill(40);
  // right eye suspicious left- right 255- 0
  circle(750, 480, 70);
  circle(890, 480, 70);

  fill(40, 80);
  circle(770, 475, 50);
  circle(860, 475, 50);

  fill(40, 40);
  circle(790, 465, 40);
  circle(840, 465, 40);

  fill(40, 40);
  circle(815, 460, 40);


  // green sun
  stroke(255, 80, 255);
  strokeWeight(2);
  fill(0, 255, 90);
  triangle(90, 30, 290, 100, 180, 250);

  // blue sun
  fill(0, 255, 255);
  triangle(180, 90, 290, 100, 180, 260);

  // yellow sun
  fill(255, 255, 90);
  triangle(90, 30, 180, 90, 180, 250);

}