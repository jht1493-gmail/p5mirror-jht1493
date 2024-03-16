// https://editor.p5js.org/jht1493/sketches/iryrGNQ4q
// added bb.c as color value, initialize in setup using color function

// https://editor.p5js.org/benjamin.bergery/sketches/WFSCrkALb

// W4-6.5 GRAY LAVA LAMP
//https://editor.p5js.org/benjamin.bergery/sketches/WFSCrkALb
// QUESTION unclear about why to use object vars versus class?

var bb = {
  x: 200,
  y: 200,
  xspeed: 4,
  yspeed: 3,
  radius: 30,
};

var bb2 = {
  x: 100,
  y: 150,
  xspeed: 3,
  yspeed: 4,
  radius: 40,
};

var bb3 = {
  x: 150,
  y: 100,
  xspeed: 3,
  yspeed: 2,
  radius: 45,
};

function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(20);
  // color(v1, v2, v3, [alpha])
  // value String: a color string
  bb.c = color('red');
  bb2.c = color(255,255,0,10);
  bb3.c = color(255,0,0,10);
}

function draw() {
  let yToGray = map(bb.y, height, 0, 128, 255);

  //background(220);
  // fill(yToGray, 50);
  // define gray value of all brushes
  // fill(yToRed, 0, xToBlue);

  fill(bb.c);
  circle(bb.x, bb.y, bb.radius * 2);

  fill(bb2.c);
  circle(bb2.x, bb2.y, bb2.radius * 2);

  fill(bb3.c);
  circle(bb3.x, bb3.y, bb3.radius * 2);

  moveIt(bb);
  cornerBounce(bb);
  
  moveIt(bb2);
  cornerBounce(bb2);
  
  moveIt(bb3);
  cornerBounce(bb3);
}

/** functions with object var parameter **/

function moveIt(brush) {
  // moves the brush in x,y
  brush.x = brush.x + brush.xspeed;
  brush.y = brush.y + brush.yspeed;
}

function cornerBounce(brush) {
  // inverts x and y speed at corners
  if (brush.x >= width - brush.radius || brush.x <= brush.radius) {
    brush.xspeed = -brush.xspeed;
  }
  if (brush.y >= height - brush.radius || brush.y - brush.radius <= 0) {
    brush.yspeed = -brush.yspeed;
  }
}

console.log("moveIt(bb);cornerBounce(bb);");
console.log("moveIt(bb2);cornerBounce(bb2); etc...");

//NOTES
// using map to make first brush height //correspond to 128-255 gray values

// re-using function with object var parameters simplifies code

//map(value, start1, stop1, start2, stop2, [withinBounds])
//value Number: the incoming value to be converted
// using map here to make canvas width, height
//correspond to gray

// brushes are object vars
// movement functions have object parameters
