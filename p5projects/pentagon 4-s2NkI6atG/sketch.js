//n represents the number of edges of the polygon
const n_edges = 5;
const a_tau = 360 / n_edges;

//l represents the length to the centre 
const l_center = 200;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  translate(width / 2, height / 2);
  rotate(-a_tau / (n_edges - 1))
  
  pentagon()
}

function pentagon() {
  // push();
  // //tau is the angle in polar coordination
  //calculating coordinate of each point in
  //could use tau here 
  const x1 = l_center * cos(a_tau * 0);
  const y1 = l_center * sin(a_tau * 0);
  const x2 = l_center * cos(a_tau * 1);
  const y2 = l_center * sin(a_tau * 1);
  const x3 = l_center * cos(a_tau * 2);
  const y3 = l_center * sin(a_tau * 2);
  const x4 = l_center * cos(a_tau * 3);
  const y4 = l_center * sin(a_tau * 3);
  const x5 = l_center * cos(a_tau * 4);
  const y5 = l_center * sin(a_tau * 4);
  strokeWeight(1);
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x4, y4);
  line(x4, y4, x5, y5);
  line(x5, y5, x1, y1);
  // pop();
}

// https://editor.p5js.org/BoweiXx/sketches/zGjppJI2V