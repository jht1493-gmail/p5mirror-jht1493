let x;
let y;
let w;
let h;
let start;
let stop;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  x = width / 2;
  y = height / 2;
  w = width / 2;
  h = height / 2;
  start = 0;
  // stop = PI / 5;
  stop = 180;
  create_ui();
}

function draw() {
  arc(x, y, w, h, start, stop); // , [mode], [detail])
  update_ui();
}

function create_ui() {
  createElement("br");
  createSpan().id("imouseX");
  createSpan().id("imouseY");
  createSpan().id("irgba");
}

function update_ui() {
  select("#imouseX").html("[mouseX=" + mouseX + "] ");
  select("#imouseY").html("[mouseY=" + mouseY + "] ");
  select("#irgba").html("[RGBA=" + get(mouseX, mouseY) + "] ");
}

console.log("Starting - pre setup");

// https://editor.p5js.org/jht1493/sketches/DGQoBYV9x
// 1.2 draw_shapes_ui
