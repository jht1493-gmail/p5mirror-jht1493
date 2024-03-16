// Reference-John Henry Thompson pattern https://editor.p5js.org/jht1493/sketches/ZwUDZXioq
// 4.0 for loop example

//BambOoO by Sackona Fitts
//Pattern of 20 blue bamboo stalks placed vertically on a yellow mustard background canvas. Each stalk is made of 10 rectangles. A green and yellow leaf greets the 9th stalk on the fifth square. Jutting out are 6 leafs on a green vibrant stem. A white circle moon outlined in black is in the top right corner.

let xlen;
let ylen;

function setup() {
  createCanvas(600, 400);
  background(255, 204, 0);
  describe("canvas with yellow background");
  //p5js Color Reference guide https://p5js.org/reference/#/p5/color
  // Draw a circle at location (30, 30) with a diameter of 20.
  circle(30, 60, 150);
  describe("white circle with rgb(226,1,221) outline in mid of gray canvas");

  let c = color(10, 10, 150); // Define color 'c'
  fill(c); // Use color variable 'c' as fill color //made the bamboo stalks green //p5js reference guide
  ylen = height / 10; //height of the rectangle on the bamboo stalk
  xlen = width / 20; // width of the rectangle on the bamboo stalk
  for (let y = 80; y < height; y += ylen) {
    //the height of the bamboo
    for (let x = 0; x < width; x += xlen) {
      console.log("y", y, "x", x);
      rect(x, y, 5.8, 90);
    }
  }
}
function draw() {
  let x = width / 2.03;
  let y = height / 3.5;
  draw_leaf(x, y);
  draw_leaf(x + 100, y);
}

function draw_leaf(x, y) {
  push();
  noFill();
  stroke(800, 140, 48);
  strokeWeight(2.0); //Made the stroke weight of the leaf smaller than 2 to submit seamlessly// SF made it to two to increase the contrast of the leaf.
  //arc(50, 60, 40, 40, 0, PI, OPEN);
  noFill();

  translate(x, y); //Places leaf onto the 5th line of the bamboo
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
  pop();
}
