let xpos; 
let ypos;
let xlen = 20;
let ylen = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  background(255);
  // function circleFill() {
  for (var x = 0; x <= width; x += 35) {
    for (var y = 0; y <= height; y += 35) {
      fill(random(225, 255), random(225, 255), random(200,255));
      noStroke();
      ellipse(x, y, random(50,100));
      // rect(x, y, random(100,150), random(100,150));
    }

  }
  
  //can i make this into a loop or function, so that I don't have to repeat so many lines of code for the squares?
  rect(100,100,200, 200); 
  fill(255);
  rect(125, 125, 150, 150);
  fill(random(225, 255), random(225, 255), random(200,255));
  rect(150, 150, 100, 100);
  fill(255);
  rect(175, 175, 50, 50);
  fill(random(225, 255), random(225, 255), random(200,255));
  rect(187.5, 187.5, 25, 25);

  
  
  // for (var x = 0; x <= width; x += 35) {
  //   for (var y = 0; y <= height; y += 35) {
  //     fill(0);
  //     ellipse(x, y, 25, 25);
  //   }
  // }
  
  }


// https://editor.p5js.org/marthajanicki/sketches/K8lIN2DDh
// Checker protoceratops copy Martha