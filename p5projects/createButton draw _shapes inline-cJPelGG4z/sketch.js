function setup() {
  createCanvas(400, 300);
  createButton('backg240').mousePressed(function() {
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    rect(100, 0, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    circle(200, 100, 200)
  });
  createButton('Shapes').mousePressed(function() {
    draw_shapes();
  });
  createButton('Gray').mousePressed(function() {
    fill(127, 127, 127);
  });
  createButton('White').mousePressed(function() {
    fill(255, 255, 255);
  });
  createButton('noFill').mousePressed(function() {
    noFill();
  });
  createButton('strokeWeight0').mousePressed(function() {
    strokeWeight(0);
  });
  createButton('strokeWeight1').mousePressed(function() {
    strokeWeight(1);
  });
  createButton('strokeWeight10').mousePressed(function() {
    strokeWeight(10);
  });
}

function draw() {
  // background(220);
}

function draw_shapes() {
  // fill(red, green, blue, alpha)
  fill(255, 0, 0, 20)
  // translate(x, y)
  translate(0, 100);
  rect(0, 0, 200, 200);
  translate(100, 0);
  // fill([red, green, blue, alpha])
  fill([255, 0, 255, 20])
  circle(100, 100, 200)
  translate(100, 0);
  rect(0, 0, 200, 200);
}

// TRY: add console.log('function_name')
// https://editor.p5js.org/jht1493/sketches/cJPelGG4z
// createButton draw_shapes inline
