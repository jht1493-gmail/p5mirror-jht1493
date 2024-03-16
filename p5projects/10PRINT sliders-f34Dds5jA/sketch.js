// From: http://10print.org/

var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  create_slider_1();
  create_slider_2();
  create_slider_3();
}

function draw() {
  strokeWeight(slider_1.value())
  stroke(slider_2.value())
  frameRate(slider_3.value())

  if (random(1) > 0.5) {
    line(x, y, x + 20, y + 20);
  } else {
    line(x, y + 20, x + 20, y);
  }
  x += 20;
  if (x > width) {
    x = 0;
    y += 20;
  }
  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
}

// -----------------------
let slider_1;

function create_slider_1() {
  createElement('br')
  createSpan('strokeWeight').style('font-size', '20px');
  // createSlider(min, max, [value], [step])
  slider_1 = createSlider(1, 20, 2);
  // slider.position(10, 10);
  slider_1.style('width', '100px');
}
// -----------------------

// -----------------------
let slider_2;

function create_slider_2() {
  createElement('br')
  createSpan('stroke').style('font-size', '20px');
  // createSlider(min, max, [value], [step])
  slider_2 = createSlider(0, 255, 0);
  // slider.position(10, 10);
  slider_2.style('width', '100px');
}
// -----------------------

// -----------------------
let slider_3;

function create_slider_3() {
  createElement('br')
  createSpan('frameRate').style('font-size', '20px');
  // createSlider(min, max, [value], [step])
  slider_3 = createSlider(0.5, 30, 0.5);
  // slider.position(10, 10);
  slider_3.style('width', '100px');
}
// -----------------------