//Draw a complex design that uses multiple shapes with different parameters.
//Have at least two shapes move independently on the screen.
//Use DOM UI elements, such as a slider, to control some of the shape parameters.
//Reorganize "groups of variables" into objects (see Video 2.3 mentioned above).

let spots;
let a_val1;
let a_val2;
let d = 0;
let sl=1;

// IMG_6498-cu.jpg

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);

  create_slider_1();
  create_slider_2();

}

function draw() {
      background(213, 240, 170, 124,29);

  noStroke(0);
  spots = pmouseX-50;
  text(spots, 100, 20);
  print('Number of shapes: ' + spots);
  random_shapes();
  let a_val1 = slider_1.value();
  fill(a_val1);
  let a_val2 = slider_2.value();
  rect(300,200,width/10,height/10);
  rotate(d);
  d=d+3;
  square(0,0,sl);
  sl=sl+3;

}

// -----------------------
// Slider used to control background
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

function random_shapes(){
  for (var i = 0; i < spots; i++) {
    ellipse(random(600),random(600),10,10);
    rect(mouseX,random(600),pmouseX-140,pmouseY-140);
    mouseX=mouseX+10;
  }
}