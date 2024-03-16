// Slider demo
function setup() {
  createCanvas(400, 400);
  
  create_slider_1();
  create_slider_2();
}

function draw() {
  let a_val1 = slider_1.value();
  background(a_val1);
  let a_val2 = slider_2.value();
  fill(a_val2);
  rect(width/4,height/4,width/2,height/2);
}

// -----------------------
// Slider used to control backgorund
let slider_1;
function create_slider_1() {
  createSpan('slider_1').style('font-size','20px');
  // createSlider(min, max, [value], [step])
  slider_1 = createSlider(0, 255, 125);
  // slider.position(10, 10);
  slider_1.style('width', '100px');
}
// -----------------------

// -----------------------
// Slider used to rect fill color
let slider_2;
function create_slider_2() {
  createSpan(' slider_2').style('font-size','20px');
  // createSlider(min, max, [value], [step])
  slider_2 = createSlider(0, 255, 125);
  // slider.position(10, 10);
  slider_2.style('width', '100px');
}
// -----------------------
