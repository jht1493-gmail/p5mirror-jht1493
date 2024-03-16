// https://editor.p5js.org/jht1493/sketches/eE_S9wlNA
// frameRate

//Draw a rectangle to the screen every half a second. In between, just draw the background. What information do you need to accomplish this?

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);

  // if (frameCount % 30 == 0) {
  // iframe will go from 0 to 59 over and over again
  // iframe == 60 is one second period
  let iframe = frameCount % 60;
  if (iframe > 29 && iframe < 60) {
    rect(100, 100, 200, 300);
  }
}

// https://editor.p5js.org/lilycrandall/sketches/NEPwRnIV5

//received help from ICM coding lab workshop
// another way: chance the frameRate to (30);
