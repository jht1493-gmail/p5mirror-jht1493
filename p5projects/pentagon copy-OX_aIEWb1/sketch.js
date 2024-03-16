//n represents the number of edges of the polygon
var n = 5;
//l represents the length to the centre 
var l = 100;




function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(360/10)
  background(220);
  pentagon()
}

function pentagon() {
  // push();
  // //tau is the angle in polar coordination
  // const tau = 360/n;
  //calculating coordinate of each point in
  //could use tau here 
  const x1 = l * cos(18),
    y1 = l * sin(18);
  const x2 = l * cos(90),
    y2 = l * sin(90);
  const x3 = l * cos(162),
    y3 = l * sin(162);
  const x4 = l * cos(234),
    y4 = l * sin(234);
  const x5 = l * cos(306),
    y5 = l * sin(306)
  strokeWeight(1);
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x4, y4);
  line(x4, y4, x5, y5);
  line(x5, y5, x1, y1);
  // pop();
}