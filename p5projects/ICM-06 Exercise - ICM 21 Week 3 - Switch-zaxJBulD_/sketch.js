let isOn = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // checking the state of the Boolean variable
  if (isOn) {
    fill(255); // when isOn == true;
  } else {
    fill(0); // when isOn == false;
  }

  rectMode(CENTER);
  rect(width / 2, height / 2, 200);
}

function mousePressed() {
  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
    
    // toggle the state of the Boolean variable
    // if (isOn == true) {
    //   isOn = false;
    // } else {
    //   isOn = true;
    // }
    
    // shorthand for above
    isOn = !isOn;
  }
}

// https://editor.p5js.org/enickles/sketches/t73Mg9BUp
// ICM-06 Exercise - ICM 21 Week 3 - Switch 
