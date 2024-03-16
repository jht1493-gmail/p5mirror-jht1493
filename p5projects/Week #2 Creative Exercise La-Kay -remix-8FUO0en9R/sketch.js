let bgColor = 0;
let eyeColorR = 0;
let eyeColorG = 0;
let eyeColorB = 0;

let x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(640, 480);
  // createCanvas(400,200);
  bgColor = random(255);
  eyeColorR = random(255);
  eyeColorG = random(255);
  eyeColorB = random(255);
  angle = 0;
  change = 0.5;
}

function draw() {
  background(bgColor);
  if (frameCount % 60 == 0) {
    bgColor = color(random(255), random(255), random(255));
  }
  // fill(250, 160, 80);
  draw_cat(-80, -40, 0.5, 'red');
  // fill('red');
  draw_cat(-80, -40+300, 0.5, 'green');
  // fill('green');
  draw_cat(-80, -40+600, 0.5, 'yellow');
  draw_toy();
}

function draw_cat(x, y, s, c) {
  push();
  scale(s);
  translate(x,y);
  strokeWeight(1);
  stroke(0);
  //body
  // fill(250, 160, 80);
  fill(c);
  //back back leg
  ellipse(550, 300, 50, 150);
  ellipse(550, 360, 60, 50);
  line(555, 375, 530, 378);
  line(552, 365, 520, 365);
  line(549, 355, 520, 355);
  //front back leg
  ellipse(300, 300, 50, 150);
  ellipse(290, 360, 60, 50);
  line(275, 380, 300, 375);
  line(262, 370, 290, 365);
  line(259, 360, 280, 355);
  //body
  ellipse(400, 210, 400, 200);
  //front front leg
  ellipse(350, 300, 50, 150);
  ellipse(340, 360, 60, 50);
  line(345, 375, 320, 378);
  line(342, 365, 310, 365);
  line(339, 355, 310, 355);
  //back front leg
  ellipse(500, 300, 50, 150);
  ellipse(490, 360, 60, 50);
  line(500, 378, 470, 378);
  line(490, 365, 460, 365);
  line(490, 352, 460, 355);

  //head&ears
  // fill(250, 160, 80);
  triangle(110, 155, 180, 100, 110, 75);
  triangle(290, 155, 220, 100, 300, 75);
  circle(200, 200, 200);
  fill(255, 150, 180);
  ellipse(130, 105, 20, 30);
  fill(255, 150, 180);
  ellipse(275, 105, 20, 30);

  //nose&mouth
  fill(255, 150, 180);
  triangle(200, 230, 190, 220, 210, 220);
  line(220, 250, 200, 230);
  line(180, 250, 200, 230);

  //eyes
  fill(250, 250, 250);
  ellipse(150, 180, 55, 30);
  ellipse(250, 180, 55, 30);
  fill(eyeColorR, eyeColorG, eyeColorB);
  circle(150 + winMouseX / 50, 177 + winMouseY / 100, 22);
  circle(230 + winMouseX / 50, 177 + winMouseY / 100, 22);
  fill(0, 0, 0);
  circle(150 + winMouseX / 50, 177 + winMouseY / 100, 16);
  circle(230 + winMouseX / 50, 177 + winMouseY / 100, 16);
  fill(260, 260, 260);
  circle(153 + winMouseX / 50, 175 + winMouseY / 100, 6);
  circle(228 + winMouseX / 50, 175 + winMouseY / 100, 6);

  // strokeWeight(1);
  // stroke(0);

  // push();
  //tail
  fill(250, 160, 80);
  translate(width / 2 + 160, height / 2 - 30);
  angleMode(DEGREES);
  rotate(angle);
  ellipseMode(CORNER);
  ellipse(0, 0, 220, 30);
  ellipseMode(CENTER);
  translate(-width / 2 - 160, -height / 2 + 30);
  pop();
}

function draw_toy() {
  //line
  strokeWeight(9);
  stroke(51, 100);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
  angle += change;
  if (angle <= -30 || angle >= 30) {
    change *= -1;
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

// https://editor.p5js.org/jht1493/sketches/8FUO0en9R
// Week #2 Creative Exercise La-Kay -remix

// https://editor.p5js.org/lh1966/sketches/IJJRKaXmC
// Week #2 Creative Exercise La'Kay

//https://p5js.org/examples/interaction-follow-3.html
//https://editor.p5js.org/allison.parrish/sketches/H1__vQxiW
