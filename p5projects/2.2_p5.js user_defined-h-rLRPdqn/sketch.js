let circleX = 50;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(250, 250, 100);
  // ellipse
  fill(250, 200, 200);
  ellipse(circleX, 200, 80, 80);
  
  circleX = circleX + 1;
}

// https://editor.p5js.org/jht1493/sketches/h-rLRPdqn
// 2.2_p5.js user_defined

// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/2.2_Variables_in_p5.js_user_defined/sketch.js
// https://www.youtube.com/watch?v=Bn_B3T_Vbxs&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=1s
