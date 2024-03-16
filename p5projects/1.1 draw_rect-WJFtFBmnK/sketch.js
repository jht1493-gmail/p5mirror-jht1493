function setup() {
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    // rect(x,y,width,height)
    rect(0, 50, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    fill('white');
    // circle(x,y,diameter)
    circle(200, 150, 200)
  });
  createButton('Rect2').mousePressed(function() {
    fill('gray');
    // rect(x,y,width,height)
    rect(200, 50, 200, 200);
  });
}

function draw() {
  // background(240);
}

// https://editor.p5js.org/jht1493/sketches/WJFtFBmnK
// 1.1 draw_rect
