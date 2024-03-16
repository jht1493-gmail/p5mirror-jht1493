//Draw a complex design that uses multiple shapes with different parameters.
//Have at least two shapes move independently on the screen.
//Use DOM UI elements, such as a slider, to control some of the shape parameters.
//Reorganize "groups of variables" into objects (see Video 2.3 mentioned above).

let spots;
let a_val1;
let a_val2;

function setup() {
  createCanvas(600, 400);
  create_slider_1();
  create_slider_2();
  frameRate(0.1)
  print('setup done');
}

function draw() {
  background(255);
  spots = int(random(4,10))
  text(spots, 100, 20);
  print('draw Number of shapes: ' + spots);
  random_shapes();
  
  let a_val1 = slider_1.value();
  fill(a_val1);
  let a_val2 = slider_2.value();
  rect(width/4,height/4,width/2,height/2);
}

function random_shapes(){
  for (var i = 0; i < spots; i++) {
    ellipse(random(600),random(600),50,50);
    rect(mouseX,random(300),20,20);
    mouseX=mouseX+1;
  }
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
