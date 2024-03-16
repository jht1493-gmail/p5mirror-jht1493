function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
}

function draw() {
  // background(250, 250, 100);

  // ellipse
  fill(250, 200, 200);
  ellipse(mouseX, mouseY, 100, 100);
  
  // rectangle
  fill(200, 250, 200);
  rect(400, 100, 50, 50);
}

// try mousePressed function 
function mousePressed() {
  background(250, 250, 100);
}

// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/2.1_Variables_in_p5.js_mouseX_mouseY/sketch.js
// https://www.youtube.com/watch?v=RnS0YNuLfQQ&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=5m50s
