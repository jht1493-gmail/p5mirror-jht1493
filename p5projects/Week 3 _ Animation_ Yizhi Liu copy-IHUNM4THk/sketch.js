//slider reference
//https://editor.p5js.org/icm/sketches/H1LXU9ah

//Gradient
let c1, c2;
let acolor = [155, 145, 145];
//Slider
let xstep = 100;
let dragging = false;
let rollover = false;
let cirX = 20;
let cirY = 400;
let cirD = 20;
let sliderStart = 20;
let sliderEnd = 580;
let offsetX = 0;

function setup() {
  createCanvas(600, 430);
}

function draw() {
  //GB
  c1 = color(187, 180, 236);
  c2 = color(232, 251, 255);
  setGradient(c1, c2);
  //background(255);

  noStroke();

  //Slider
  if (dragging) {
    cirX = mouseX + offsetX;
  }
  cirX = constrain(cirX, sliderStart, sliderEnd - cirD / 2);

  fill(220);
  rect(sliderStart - 10, cirY - 10, sliderEnd, cirD, 50);

  if (dragging) {
    fill(0, 255, 0);
  } else {
    fill(250);
  }
  circle(cirX, cirY, cirD);

  let flowerD = map(cirX, sliderStart, sliderEnd - cirD / 2, 20, 140);

  //Draw flowers
  if (cirX > 350) {
    for (let i = 0; i < 6; i++) {
      for (let a = 0; a < 4; a++) {
        let shake = random(-5, 10);
        drawFlower(50 + xstep * i + shake, 50 + xstep * a + shake, flowerD);
      }
    }
  } else {
    for (let i = 0; i < 6; i++) {
      for (let a = 0; a < 4; a++) {
        drawFlower(50 + xstep * i, 50 + xstep * a, flowerD);
      }
    }
  }
}


function drawFlower(x, y, d) {
  fill(acolor);
  circle(x, y - 30, d);
  circle(x - 30, y, d);
  circle(x + 30, y, d);
  circle(x - 20, y + 25, d);
  circle(x + 20, y + 25, d);
  fill(255, 238, 145);
  circle(x, y, d);
}


//circle roller
//https://editor.p5js.org/icm/sketches/H1kCSqah
function mousePressed() {
  if (dist(mouseX, mouseY, cirX, cirY) < cirD / 2) {
    dragging = true;
    offsetX = cirX - mouseX;
  }
}


function mouseReleased() {
  dragging = false;
}


//https://p5js.org/zh-Hans/reference/#/p5/keyPressed
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    cirX = 20;
  } else if (keyCode === RIGHT_ARROW) {
    cirX = sliderEnd - cirD / 2;
  }
}

//Gradient reference
//https://editor.p5js.org/REAS/sketches/S1TNUPzim
function setGradient(c1, c2) {
  noFill();
  for (var canvasy = 0; canvasy < height; canvasy++) {
    var inter = map(canvasy, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, canvasy, width, canvasy);
  }
}
