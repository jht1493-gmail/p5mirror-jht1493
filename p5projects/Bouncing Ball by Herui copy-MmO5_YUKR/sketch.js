// https://editor.p5js.org/jht1493/sketches/MmO5_YUKR
// 3.4 Bouncing Ball by Herui copy
// Show time using millis in a span

let r = 30;
let posX = 30;
let speedX = 2;
let color;

function setup() {
  createCanvas(400, 200);
  let aref = 'https://editor.p5js.org/hc3786/sketches/_Wfc0mflF'
  createA(aref,'Bouncing Ball by Herui', 'atarget')
}

function draw() {
  background(220);
  color = round((posX / 400) * 255);
  fill(color);

  circle(posX, height/2, r);
  posX = speedX + posX;

  if (400 == posX || posX == 0) {
    speedX = -speedX;
  }
  
  fill(0)
  let secs = millis()/1000
  secs = secs.toFixed(2)
  text(secs, 10, height - textSize())
}

// https://editor.p5js.org/hc3786/sketches/_Wfc0mflF
// Bouncing Ball by Herui
