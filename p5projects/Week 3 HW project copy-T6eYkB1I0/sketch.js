//ball
let rball = 80;
let xspeed = 10;
let yspeed = 10;
let x = 90;
let y = 300;
let x1 = 120;
let y1 = 200;
let dragging = false;
let rollover = false;
let button = 0;
let sliderStart = 0;
let sliderEnd = 700;
let offsetX = 0;
let xB = 380;
let yB = 710;
let w = 10;
let h = 50;
let opac = 128;

function setup() {
  createCanvas(700, 750);
}

function draw() {
  //Back ground box
  background(220);
  stroke(5);
  line(0, 700, 700, 700);

  fill("white");
  rect(0, 710, 700, 38);

  fill("white");

  //3D scpace
  rect(120, 80, 450, 450);
  {
    beginShape();
    vertex(0, 0);
    vertex(120, 80);
    vertex(120, 530);
    vertex(0, 700);
    endShape();

    beginShape();
    vertex(700, 0);
    vertex(700, 700);
    vertex(570, 530);
    vertex(570, 80);
    endShape();

    beginShape();
    vertex(0, 0);
    vertex(700, 0);
    vertex(570, 80);
    vertex(120, 80);
    endShape();
  }

  //location
  {
    // fill("black");
    // textSize(15);
    // text(int(mouseX) + "," + int(mouseY), 50, 50);
  }
  {
    //    line(350, 0,350, 100);
    noStroke();

    fill(frameCount * 0.5);
    circle(350, 300, 400);
    drawingContext.shadowBlur = 250;
    drawingContext.shadowColor = color(211, 211, 211);

    //ball 1
    push();
    loop();
    fill(188, 143, 143, 180);
    {
      noStroke();
      ellipse(x, y, rball * 2, rball * 2);
      fill(255, 255, 255, 50);
      ellipse(x, y, rball, rball);

      x += xspeed;
      y += yspeed;
      if (x > width - rball || x < rball) xspeed = -xspeed;
      // else

      if (y > 700 - rball || y < rball) yspeed = -yspeed;
    }

    //ball 2
    fill(255, 255, 224, frameCount / 2, 200);
    noStroke();
    ellipse(x, y1 + 200, rball * 2, rball * 2);
    fill(255, 255, 255, 100);
    if (mouseX / 5 > 100) {
      fill("grey");
      ellipse(x - 15, y1 + 180, 10);
      ellipse(x + 30, y1 + 180, 10);
      arc(x + 10, y1 + 210, 75, 50, 0, PI);
    } else {
      ellipse(x, y1 + 200, rball * 1.5, rball * 1.5);
    }

    //ball 3

    fill(204, 255, 153, 80);
    ellipse(x1 + 500, y - 4, rball * 2, rball * 2);
    fill(255, 255, 255, 50);
    ellipse(x1 + 500, y - 4, rball, rball);

    // ball 4
    pop();
    fill(176, 196, 222, 180);
    noStroke();
    ellipse(x1 + 500, y1 + 100, rball * 2, rball * 2);
    fill(255, 255, 255, 50);
    ellipse(x1 + 500, y1 + 100, rball, rball);
    drawingContext.shadowBlur = 250;
    drawingContext.shadowColor = color(211, 211, 211);
    x1 -= xspeed;
    y1 -= yspeed / 2;
    if (x1 > 500 + 80 && x1 < 40) {
      xspeed = -xspeed;
      x1 += 10;
    }
    if (y1 > 700 - 40 && y1 < 40) {
      yspeed = +speed;
    }

    //slider
    if (dragging) {
      xB = mouseX + offsetX;
    }

    xB = constrain(xB, sliderStart, sliderEnd - w);

    stroke(0);
    line(sliderStart, yB + h / 2.5, sliderEnd, yB + h / 2.5);

    stroke(0);

    if (dragging) {
      fill("white");
    } else {
      fill(mouseX, 255);
    }
  }

  circle(xB, yB + 20, 30);

  let b = map(xB, sliderStart, sliderEnd - 700, 50, 255);
  fill(b);

  // rect(0,0,700,700)

  function mousePressed() {
    if (mouseX > xB && mouseX < xB + w && mouseY > yB && mouseY < yB + h) {
      dragging = true;

      offsetX = x - mouseX;
    }
  }

  function mouseReleased() {
    // Stop dragging
    dragging = false;
  }
}
