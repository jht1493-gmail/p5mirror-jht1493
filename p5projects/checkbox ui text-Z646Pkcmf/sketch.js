let checkbox;

function setup() {
  createCanvas(400,300)
  checkbox = createCheckbox('MY label', true);
  // checkbox.changed(myCheckedEvent);
}

function draw() {
  background(240);
  if (checkbox.checked()) {
    text('Checked!', 20, height/2)
  }
  else {
    text('NOT', 20, height/2)
  }
}


function myCheckedEvent() {
  if (this.checked()) {
    print('Checking!');
  } else {
    print('Unchecking!');
  }
}