let xspeed = 2;
let xpos = 0;
let yspeed = 4;
let ypos = 200;
let bgColor = (255, 255, 255); // ??

function setup() {
  createCanvas(600, 400);
  create_slider_1();
  create_slider_2();
  create_slider_3();
  
  bgColor = color(255, 255, 255)
}

function draw() {
  background(bgColor);
  let col1 = slider_1.value();
  let col2 = slider_2.value();
  let col3 = slider_3.value();

  noStroke();
  ellipse(xpos, ypos, 25, 25);
  fill(col1, col2, col3);

  bgColor = map(xpos, 0, 400, 0, 255)

  if ((xpos > width) || (xpos < 0)) {
    xspeed = xspeed * -1;
  }
  if ((ypos > height) || (ypos < 0)) {
    yspeed = yspeed * -1;
  }

  xpos += xspeed;
  ypos += yspeed;
}


function mousePressed() {
  ballColor = (0, random(0, 255), 0); // ??
}

let slider_1;

function create_slider_1() {
  createSpan('slider_1').style('font-size', '20px');
  // createSlider(min, max, [value], [step])
  slider_1 = createSlider(0, 255, 0);
  // slider.position(10, 10);
  slider_1.style('width', '100px');
}
let slider_2;

function create_slider_2() {
  createSpan(' slider_2').style('font-size', '20px');
  // createSlider(min, max, [value], [step])
  slider_2 = createSlider(0, 255, 0);
  // slider.position(10, 10);
  slider_2.style('width', '100px');
}
let slider_3;

function create_slider_3() {
  createSpan(' slider_3').style('font-size', '20px');
  // createSlider(min, max, [value], [step])
  slider_3 = createSlider(0, 255, 0);
  // slider.position(10, 10);
  slider_3.style('width', '100px');
}