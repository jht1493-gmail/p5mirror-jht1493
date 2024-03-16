let a_hue;
let a_step = 10;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 200);
  background(0);
  colorMode(HSL, 360);
  noStroke();
  a_hue = 0;
  createSpan('Drag mouse on canvas to paint');
  createElement('br');
  createButton('a_hue 0').mousePressed(function() {
    a_hue = 0;
  });
  createButton('backg 0').mousePressed(function() {
    background(0);
  });
  createButton('a_step 0.1').mousePressed(function() {
    print('a_step 0.1');
    a_step = 0.1;
  });
  createButton('a_step 1').mousePressed(function() {
    print('a_step 1');
    a_step = 1;
  });
  createButton('a_step 10').mousePressed(function() {
    print('a_step 10');
    a_step = 10;
  });
}

function draw() {
  // background(220);
}

function mouseDragged() {
  // if (a_hue > 360) {
  //   a_hue = 0;
  // } else {
  //   a_hue += 10;
  // }
  a_hue = (a_hue + a_step) % 360;
  fill(a_hue, 200, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

// https://editor.p5js.org/jht1493/sketches/TAnGTwIJ1
// 2.5.3 Rainbow Paintbrush a_step

// https://editor.p5js.org/jht1493/sketches/9aYZcF6DM
// 2.5 Rainbow Paintbrush

// https://medium.com/@kellylougheed/rainbow-paintbrush-in-p5-js-e452d5540b25
// Rainbow Paintbrush in p5.js by Kelly Lougheed