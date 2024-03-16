// Reference-John Henry Thompson pattern https://editor.p5js.org/jht1493/sketches/ZwUDZXioq
// 4.0 for loop example

//Pattern of white bamboo stalks on a yellow background canvas

let xlen;
let ylen;

function setup() {
  createCanvas(600, 400);
  background(255, 204, 0);
  describe("canvas with yellow background");
  //p5JS Reference guide

  ylen = height / 10;
  xlen = width / 20;
  for (let y = 0; y < height; y += ylen) {
    for (let x = 0; x < width; x += xlen) {
      console.log("y", y, "x", x);
      rect(x, y, 4, 90);
    }
  }
}

function draw() {
  noFill();
  stroke(50, 140, 48);
  strokeWeight(1.0); //Made the stroke weight of the leaf smaller than 2 to submit seamlessly
  //arc(50, 60, 40, 40, 0, PI, OPEN);
  noFill();

  translate(width / 2.03, height / 3.5); //Places leaf onto the 5th line of the bamboo
  rotate(PI / 3.0);
  arc(65, 60, 40, 80, PI / 1.5, (3 * PI) / 2, OPEN); //leaf vein
  //arc(65,60,70,80,PI,3*PI/2,OPEN);
  //arc(70,20,10,80,PI/2,PI,OPEN);
  fill(50, 143, 50); //Changed color settings to 50, 143, 50 from 50, 140, 48
  strokeWeight(1);
  triangle(46, 75, 69, 62, 44, 68);
  triangle(44, 68, 32, 60, 46, 75);
  triangle(45, 60, 65, 44, 45, 51);
  triangle(45, 60, 33, 44, 45, 51);
  triangle(49, 36, 43, 30, 47, 40);
  triangle(49, 36, 65, 31, 47, 40);
  noFill();
}
//ellipse(0, 50, 33, 33); // Left circle
//New leaf
function draw2() {
  noFill();
  stroke(50, 140, 48);
  strokeWeight(1.0); //Made the stroke weight of the leaf smaller than 2 to submit seamlessly
  //arc(50, 60, 40, 40, 0, PI, OPEN);
  noFill();

  translate(width / 2.03, height / 3.5); //Places leaf onto the 5th line of the bamboo
  rotate(PI / 3.0);
  arc(65, 60, 40, 80, PI / 1.5, (3 * PI) / 2, OPEN); //leaf vein
  //arc(65,60,70,80,PI,3*PI/2,OPEN);
  //arc(70,20,10,80,PI/2,PI,OPEN);
  fill(50, 143, 50); //Changed color settings to 50, 143, 50 from 50, 140, 48
  strokeWeight(1);
  triangle(46, 75, 69, 62, 44, 68);
  triangle(44, 68, 32, 60, 46, 75);
  triangle(45, 60, 65, 44, 45, 51);
  triangle(45, 60, 33, 44, 45, 51);
  triangle(49, 36, 43, 30, 47, 40);
  triangle(49, 36, 65, 31, 47, 40);
  noFill();
}
