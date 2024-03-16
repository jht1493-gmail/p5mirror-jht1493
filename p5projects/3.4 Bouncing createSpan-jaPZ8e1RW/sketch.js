// https://editor.p5js.org/jht1493/sketches/jaPZ8e1RW
// 3.4 Bouncing time createSpan
// Using createSpan to give feedback on variables in the DOM

let r = 30;
let posX = 30;
let speedX = 2;
let color;

function setup() {
  createCanvas(300, 200);
  let aref = "https://editor.p5js.org/hc3786/sketches/_Wfc0mflF";
  createA(aref, "Bouncing Ball by Herui", "atarget");
  createSpan().id("posX");
}

function draw() {
  background(220);
  color = round((posX / width) * 255);
  fill(color);

  circle(posX, height / 2, r);
  posX = speedX + posX;

  if (posX > width || posX < 0) {
    speedX = -speedX;
  }

  select("#posX").html(" [posX=" + posX + "]");
}

// https://p5js.org/reference/#/p5/createA
//   createA(href, html, [target])

// https://editor.p5js.org/hc3786/sketches/_Wfc0mflF
// Bouncing Ball by Herui
