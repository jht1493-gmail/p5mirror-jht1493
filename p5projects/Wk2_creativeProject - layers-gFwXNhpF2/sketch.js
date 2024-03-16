let text1 = {
  x: 0,
  y: 50,
};

let text2 = {
  x: 38,
  y: 350,
};

let my_layer;

function setup() {
  createCanvas(400, 400);
  my_layer = createGraphics(400, 400);
  draw_agent();
}

function draw_agent() {
  my_layer.background(random(255), random(255), random(255));
  my_layer.circle(200, 200, 200);
  //circle(175, 175, 25);
  //circle(225, 175, 25);
  my_layer.fill(0);
  my_layer.circle(175, 175, 20);
  my_layer.circle(225, 175, 20);

  my_layer.noFill();
  //fill(255, 0, 0);
  my_layer.arc(200, 225, 50, 50, 0, PI);
  //noStroke();
}

function draw() {
  // image(img, x, y, [width], [height])
  image(my_layer, 0, 0);
  draw_text();
}

function draw_text() {
  // background(255);
  //siren
  fill(random([0, 255]), 0, random([0, 255]));
  // circle(350, 350, 25);

  //fill(0);
  textSize(32);
  let str = "SECRET AGENT???";
  text(str, text1.x, text1.y);
  text1.x++ % height;
}

function mousePressed() {
  my_layer.background(random(255), random(255), random(255));
  //head
  my_layer.fill(255);
  my_layer.circle(200, 200, 200);
  my_layer.fill(0);
  //sunglasses
  my_layer.rect(145, 150, 55, 55, 20);
  my_layer.rect(200, 150, 55, 55, 20);
  //hat
  my_layer.quad(250, 90, 140, 90, 100, 140, 295, 140);
  //}troke(100);
  my_layer.strokeWeight(4);
  my_layer.line(103, 175, 145, 175);
  my_layer.line(255, 175, 295, 175);
  my_layer.line(170, 240, 230, 240);
  //strokeWeight(4);

  //undercover
  my_layer.textSize(25);
  let str = "007 REPORTING FOR DUTY";
  my_layer.text(str, text2.x, text2.y);
}

// https://editor.p5js.org/jht1493/sketches/IJ6oPqxUL
// Wk2_creativeProject -- layers

// https://editor.p5js.org/marthajanicki/sketches/YDt39MIPA
// Wk2_creativeProject by marthajanicki
