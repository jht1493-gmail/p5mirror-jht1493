let checkbox;

function setup() {
  checkbox = createCheckbox('MY label', true);
  // checkbox.changed(myCheckedEvent);
}

function draw() {
  if (checkbox.checked()) {
    print('Checked!')
  }
  else {
    print('Not')
  }
}


function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}