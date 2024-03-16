let a_angle = 0;

function setup() {
  createCanvas(400, 400).mousePressed( function () {
    draw_it();
  })
  background(204);
  angleMode(DEGREES);
  create_ui();
  draw_it();
}

function draw() {
  update_ui();
}

function mouseDragged() {
  draw_it();
}

function draw_it() {
  // background(204);
  push();
  translate(width / 2, height / 2);
  //   in order to see the full rotation on the screen
  //   must first translate the origin then rotate.

  // a_angle = mouseX / 20;
  // a_angle = 360 * mouseX / width;
  // map(value, start1, stop1, start2, stop2, [withinBounds])
  a_angle = map(mouseX, 0, width, 360, 0);
  rotate(a_angle);
  // rotate(a_angle);

  rect(10, 10, 20, 20);
  line(1, 1, 100, 1);
  line(1, 1, 1, 100);
  line(1, 1, 100, 100);
  rect(100 - 20, 100 - 20, 20, 20);
  pop();
}

function update_ui() {
  select('#angle').html(' [angle = ' + a_angle + ']')
}

function create_ui() {
  createP('Drag mouse on left to right to rotate');
  createButton('backg 204').mousePressed(function() {
    background(204);
  })
  createButton('Save').mousePressed(function() {
    // saveCanvas([filename], [extension])
    saveCanvas('rotate visual', 'png');
  })
  createSpan().id('angle');
}

// https://editor.p5js.org/jht1493/sketches/8ui42o3PL
// 2.6.5 rotate mouseDragged ui map

// https://editor.p5js.org/jht1493/sketches/5ZIAjsbyB
// 2.6.4 rotate mouseDragged ui

// https://editor.p5js.org/jht1493/sketches/iYtC2NDy7
// rotate visual

// https://editor.p5js.org/kushinda/sketches/vB2Jfg-mm
// rotateExperiment