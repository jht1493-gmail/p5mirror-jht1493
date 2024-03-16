// W4-6.8 ABSTRACT KISS 1
// https://editor.p5js.org/benjamin.bergery/sketches/WPUYPCj-x

var bb2 = {
  x: 100,
  y: 150,
  xspeed: 3,
  yspeed: 4,
  radius: 30,
};

var bb3 = {
  x: 150,
  y: 100,
  xspeed: 4,
  yspeed: 3,
  radius: 30,
};

function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(20);
}

function draw() {
  let yToGray = map(bb2.y, height, 100, 200, 255);
  let xToGray = map(bb2.x, width, 100, 200, 255);

  //background(220);
  //fill(yToGray,50);
  // define gray value of all brushes
  // fill(yToRed, 0, xToBlue);

  fill(yToGray, 0, 50, 20);
  circle(bb2.x, bb2.y, bb2.radius * 2);
  fill(150, 0, xToGray, 20);
  circle(bb3.x, bb3.y, bb3.radius * 2);

  // moveIt(bb);
  // cornerBounce(bb);
  moveIt(bb2);
  cornerBounce(bb2);
  moveIt(bb3);
  cornerBounce(bb3);
}

/** functions with literal object var parameter **/

function moveIt(brush) {
  // moves the brush in x,y
  brush.x = brush.x + brush.xspeed;
  brush.y = brush.y + brush.yspeed;
}

function cornerBounce(brush) {
  // inverts x and y speed at corners
  let w = width
  if (brush.x >= w - brush.radius || brush.x <= brush.radius) {
    brush.xspeed = -brush.xspeed;
  }
  if (brush.y >= height - brush.radius || brush.y - brush.radius <= 0) {
    brush.yspeed = -brush.yspeed;
  }
}

// NOTES
// using map to make brush height //correspond to 128-255 gray values

//console.log("moveIt(bb);cornerBounce(bb);")
// console.log("doesn't work yet as a piece");

//map(value, start1, stop1, start2, stop2, [withinBounds])
//value Number: the incoming value to be converted
// using map here to make canvas width, height
//correspond to gray

// brushes are object vars
// movement functions have object parameters

// re-using function with object var parameters simplifies code
