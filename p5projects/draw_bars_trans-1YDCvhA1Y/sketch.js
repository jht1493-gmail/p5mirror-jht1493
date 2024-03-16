function setup() {
  createCanvas(400, 180);
  createButton('Backg 240').mousePressed(function() {
    background(240);
  });
  createButton('Bars1').mousePressed(function() {
    print('in button Bars1');
    // translate(x, y)
    translate(5, 60)
    draw_bars();
  });
  createButton('Bars2').mousePressed(function() {
    print('in button Bars2');
    // translate(x, y)
    translate(70, 60)
    draw_bars();
    translate(65, 0)
    draw_bars();
  });
}

function draw_bars() {
  // rect(x, y, width, height)
  rect(20, 0, 20, 20);
  rect(0, 20, 60, 20);
  rect(20, 40, 20, 20);
}

function draw() {
}

// https://editor.p5js.org/jht1493/sketches/Tiu0zz1NE
// draw_bars_ui