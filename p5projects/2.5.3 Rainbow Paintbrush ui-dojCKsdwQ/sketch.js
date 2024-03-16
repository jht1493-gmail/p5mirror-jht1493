let a_hue;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 200);
  background(0);
  a_hue = 0;
  createSpan('Drag mouse on canvas to paint');
  createElement('br');
  createButton('a_hue 0').mousePressed(function() {
    a_hue = 0;
  });
  createButton('backg 0').mousePressed(function() {
   background(0);
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
  a_hue = (a_hue + 10) % 360;
  colorMode(HSL, 360);
  noStroke();
  fill(a_hue, 200, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

// function keyPressed() {
//   if (keyCode == 82) {
//     a_hue = 0;
//   }
// }

// https://editor.p5js.org/jht1493/sketches/dojCKsdwQ
// 2.5 Rainbow Paintbrush ui

// https://medium.com/@kellylougheed/rainbow-paintbrush-in-p5-js-e452d5540b25
// Rainbow Paintbrush in p5.js by Kelly Lougheed