function setup() {
  createCanvas(600, 400);
}

function draw() {
  //background(255);
  background(150, 150, 200);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // Body
  fill(255, 0, 0);
  rect(240, 145, 20, 100);

  // Head 
  fill(0, 0, 255);
  ellipse(240, 115, 60, 60);

  // Eyes
  fill(0, 255, 0);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  // Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}

// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/1.2_p5.js_Color/sketch.js
// https://www.youtube.com/watch?v=9mucjcrhFcM&feature=youtu.be&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTF&t=7m40s