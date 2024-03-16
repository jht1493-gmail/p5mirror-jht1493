// https://editor.p5js.org/jht1493/sketches/gobuvz-LX
// 3.4 Bouncing Ball sin
// Use sin function for smoother bounce animation

/*
4. Optional Challenge: Make its fill color bounce back and forth fading from white to black and then back to white again. Challenge: Make the fill color bouncing back and forth sync up with the ball bouncing back and forth. Extra-challenge: Can you do it without using the map() function?
*/

let r = 30;
let posX = 30;
let iframe = 0;
let speedAngle = 0.04;
// let speedX = 2;
let color;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  color = round((posX / width) * 255);
  fill(color);

  circle(posX, height/2, r);
  
  // posX = speedX + posX;
  let widthHalf = width/2
  let ang = iframe / TWO_PI
  posX = widthHalf + sin( ang ) * widthHalf
  
  iframe += speedAngle;
  
  // if (posX > width || posX < 0) {
  //   speedX = -speedX;
  // }
}

// https://editor.p5js.org/jht1493/sketches/DbmzeU7i5
// 3.4 Bouncing Ball by Herui -- suggestions

// https://editor.p5js.org/hc3786/sketches/_Wfc0mflF
// 3.4 Bouncing Ball by Herui