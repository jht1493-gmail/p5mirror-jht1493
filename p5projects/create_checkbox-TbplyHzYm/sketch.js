
function setup() {
  createCanvas(400,400);
  create_checkbox();
}

function draw() {
  background(100);
  textSize(16);
  if (check_box.checked()) {
    text('Checked', 10, 100);
  }
  else {
    text('Not Checked', 10, 100)
  }
}

let check_box;
function create_checkbox() {
  check_box = createCheckbox('label', false);
}

