//Create a sketch that draws a variable number of steps in a staircase pattern across the canvas using the rect function. 
var stepmax = 20;
var n = 0;
var x = 0;
var y = 300;

function setup() {
  createCanvas(400, 300);
  // frameRate(1)
}

function draw() {
  background(220);
  if (x > 0 && x < width) {
    for (n = 0; n <= stepmax; n += 1) {
      fill(0);
      print('n', n, 'x', x, 'y', y)
      rect(x, y, width / stepmax, height);
      x += width / stepmax;
      y -= height / stepmax;
    }
  }
}