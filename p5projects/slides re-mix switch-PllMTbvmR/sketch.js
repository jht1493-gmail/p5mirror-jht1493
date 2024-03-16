// Based on frameCount, advance slide show
function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(0.1);
  draw_step();
}

function draw() {
  draw_step();
}

function draw_step() {
  background(220);

  const frame_index = frameCount % 2;
  report_msg('frame_index ' + frame_index);

  if (frame_index === 0) {
    Wushuang_face();
  } else if (frame_index === 1) {
    Phil_face();
  }
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  const frame_rate = round(frameRate(), 2);
  const a_prefix = frameCount + ' ' + frame_rate;
  id_line.elt.innerHTML = a_prefix + ' ' + a_msg;
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