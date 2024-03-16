// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  // frameRate(10);
  background(255);

  y_pos = 0;
  x_pos = 0;
  draw_one();
  
  x_pos += a_size;
  draw_one();
  
  x_pos += a_size;
  draw_one();

  x_pos += a_size;
  draw_one();
}

let x_pos;
let y_pos;
let a_size = 50;

function draw_one() {
  fill(random(0, 255));
  rect(x_pos, y_pos, a_size, a_size);
}