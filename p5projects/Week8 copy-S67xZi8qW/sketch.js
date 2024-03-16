//bg circles
let circles = [];
let circleSize = [5, 20, 40, 100, 200];

//canvas sizes
let canW = 600;
let canH = 600;

let dogica; //font

//face elecments' positions & sizes
let eyeS = canW / 20;
let mouseS = canW / 6;
let eyePos = canW / 10;
let eyesize = canW / 10;
let mouseHeight = canW / 7;
let angle = 0;
let spR = canW / 20;

let ccs = ["#D1082C", "#673AB7", "#000000"]; //colors

function preload() {
  dogica = loadFont("dogicabold.otf");
}

function setup() {
  createCanvas(canW, canH); //setting up a canvas size
  cursor(HAND); //changing the cursor
  for (let i = 0; i < 10; i++) {
    circles[i] = new Circle(
      random(canW),
      random(canW),
      random(-10, 10),
      random(-10, 10)
    );
  }
}

function draw() {
  //interactive bg color with mouse position
  let randomC = (mouseX + mouseY) / 5;
  let randomD = mouseX + mouseY / 10;
  background(randomC, 100, randomD);
  
  //generate circles for the bg
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }

  //setting rectangle mode to center
  rectMode(CENTER);
  //translate everything in the middle of the canvas
  translate(canW / 2, canH / 2 + canH / 20);

  //draw a face
  face(canW / 2, canH / 2);
  eyes();
  eyebrows();
  ears(canW / 10 + 10);
  hair();
  nose();
  mouse();
  //hover text
  textlist();
}

/* ---------------------------------------------- */


//functions for the face and its elements
function face(x, y) {
  noStroke();
  fill(0);
  ellipse(0, 0, x, y);
}

function eyes() {
  //mouse position
  let m = createVector(mouseX, mouseY);
  //center position
  let c = createVector(canW / 2, canH / 2);

  //moved mouse position from the center position
  m.sub(c);
  //controlling the amount of movements
  m.mult(0.1);
  //setting the maximum area for pupil movements
  m.limit(17);

  if (mouseIsPressed) {
    //if mouse is pressed, eyes are closed
    closedEyes(-3 * eyeS, -eyeS);
    closedEyes(3 * eyeS, eyeS);
  } else {
    //if not, they're open!
    fill(255);
    ellipse(-canW / 10, 0, canW / 10 + 20, canW / 10 + 20);
    ellipse(canW / 10, 0, canW / 10 + 20, canW / 10 + 20);

    //pupils
    push();
    translate(m.x, m.y);
    fill(0);
    //setting interactive reactions with mouseX mouseY positions
    if (mouseX > (canW / 3) * 2 && mouseY > (canH / 3) * 2) {
      fill(ccs[0]);
      heartEyes(-eyesize, -10, eyesize / 2);
      heartEyes(eyesize, -10, eyesize / 2);
    } else if (mouseX < (canW / 3) * 2 && mouseY > (canH / 3) * 2) {
      fill(150 + mouseY / 50);
      ellipse(-eyesize, 0, eyesize - mouseY / 20, eyesize - mouseY / 20);
      ellipse(eyesize, 0, eyesize - mouseY / 20, eyesize - mouseY / 20);
    } else if (mouseX > (canW / 3) * 2 && mouseY < canH / 3) {
      confusedEyes(-eyesize, eyesize / 3);
      confusedEyes(eyesize * 2, 0);
    } else {
      ellipse(-eyesize, 0, eyesize, eyesize);
      ellipse(eyesize, 0, eyesize, eyesize);
    }
    pop();
  }
}

function mouse() {
  noFill(255);
  if (mouseX > canW / 2 && mouseY > canH / 2) {
    arc(0, mouseS - mouseS / 2, mouseS, mouseS, QUARTER_PI, HALF_PI);
  } else if (mouseX < canW / 2 && mouseY > canH / 2) {
    ellipse(0, mouseS, mouseS / 4 + mouseX / 10, mouseS / 4 + mouseX / 10);
  } else {
    line(-mouseHeight / 3, mouseHeight, mouseHeight / 3, mouseHeight);
  }
}

function heartEyes(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function confusedEyes(x, y) {
  translate(x, y);
  strokeWeight(10);
  stroke(ccs[1]);
  let spX = spR * cos(angle);
  let spY = spR * sin(angle);
  point(spX, spY);
  angle += 0.3;
  spR -= 0.2;
  if (frameCount % 90 == 0) {
    angle = 0;
    spR = canW / 20;
  }
}

function closedEyes(x, y) {
  stroke(255);
  strokeWeight(3);
  line(x, 0, y, 0);
}

function eyebrows() {
  noStroke();
  fill(255);
  push();
  rotate(mouseX / 2000 - mouseX / 3000);
  rect(-eyeS * 2, -eyeS * 2, eyeS * 2, eyeS / 3, 3);
  pop();
  push();
  rotate(mouseY / 2000 - mouseY / 3000);
  rect(eyeS * 2, -eyeS * 2, eyeS * 2, eyeS / 3, 3);
  pop();
}

function ears(x) {
  fill(0);
  ellipse(-(x * 2), 0, x, x);
  ellipse(x * 2, 0, x, x);
}

function hair() {
  stroke(255);
  strokeWeight(5);
  if (mouseX > (canW / 3) * 2 && mouseY > (canH / 3) * 2) {
    fill("yellow");
  } else if (mouseX < (canW / 3) * 2 && mouseY > (canH / 3) * 2) {
    fill("darkgrey");
  } else if (mouseX > (canW / 3) * 2 && mouseY < canH / 3) {
    fill("#E91E63");
  } else {
    fill(255);
  }
  ellipse(0, -canW / 4, canW / 4, canW / 5);
}

function nose() {
  line(-canW / 60, canW / 10 - 5, 0, canW / 10);
  line(canW / 60, canW / 10 - 5, 0, canW / 10);
}

//for the texts
function textlist() {
  stroke("#33333366");
  fill("#A7787891");
  let rotX = 1;
  let rotY = 1;
  textFont(dogica);
  textSize(30);

  if (mouseX > canW / 2 && mouseY > canH / 2) {
    push();
    translate(mouseX / 5, mouseY / 3);
    text("smile", canW / 20, canW / 20);
    fill(255, 0, 0, canW / 20);
    text("Let's", -rotX, -rotY);
    pop();
  } else if (mouseX < canW / 2 && mouseY > canH / 2) {
    text("OMG!", -canW / 3, canW / 3);
  } else if (mouseX > (canW / 3) * 2 && mouseY < canH / 3) {
    fill("#6EC07E91");
    text("Ughghhhfghhghh", -canW / 3, canW / 3);
  }
}

//class for bg circles
class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > canW) {
      this.xSpeed *= -0.9;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > canW) {
      this.ySpeed *= -0.9;
    }
  }

  display() {
    noStroke();
    fill(random(100, 255), random(200, 255), random(200, 255), 50);
    circle(this.x, this.y, circleSize[1]);
  }
}

/* references
https://happycoding.io/tutorials/p5js/creating-classes
https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
https://editor.p5js.org/hyershin/sketches/SkG_S5K3W
https://editor.p5js.org/doodlefingers_coloso/sketches/lX-bNd-oQ
*/
