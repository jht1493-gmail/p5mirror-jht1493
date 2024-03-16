// Display x & y coords
function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  report_xy();
}

function report_xy() {
  document.getElementById("x").innerHTML = "x:" + mouseX;
  document.getElementById("y").innerHTML = "y:" + mouseY;
}