var x = 215;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) { 
      // If it's the left arrow
      x--;
    } else if (keyCode == RIGHT_ARROW) { 
      // If it's the right arrow
      x++;
    }
  }
  rect(x, 45, 50, 50);
}

// https://editor.p5js.org/jht1493/sketches/kbaJEPxF5
// Ex_05_19 Move with Arrow Keys

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_19.js