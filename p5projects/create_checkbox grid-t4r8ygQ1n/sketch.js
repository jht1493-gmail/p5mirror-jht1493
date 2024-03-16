// create_checkbox grid
function setup() {
  createCanvas(400, 400);
  // frameRate(5);
  frameRate(10);
  background(255);
  
  create_checkbox();
}

function draw() {
  // background(100);
  if (check_box.checked()) {
    grid_step();
  }
}

let x_pos = 0;
let y_pos = 0;
let a_width = 20;

// Draw the next rect in the grid
function grid_step() {
  fill(random(0, 255));
  rect(x_pos, y_pos, a_width, a_width);
  x_pos += a_width;
  if (x_pos > width) {
    x_pos = 0;
    y_pos += a_width;
    if (y_pos > height) {
      background(255);
      y_pos = 0;
    }
  }
}

// -----------------------
// Chechbox button for pausing drawing
let check_box;
function create_checkbox() {
  check_box = createCheckbox('Draw rects', true);
}
// -----------------------