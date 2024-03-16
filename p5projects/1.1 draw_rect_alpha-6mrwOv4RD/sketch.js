function setup() {
  console.log('in function setup');
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    console.log('calling background');
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    console.log('calling rect yellow');
    // fill(red, green, blue, alpha)
    fill(255, 255, 0, 100);
    rect(0, 50, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    console.log('calling circle red');
    // fill(red,green,blue,alpha)
    fill(255, 0, 0, 100);
    circle(200, 150, 200)
  });
  createButton('Rect2').mousePressed(function() {
    console.log('calling rect green');
    // fill(red,green,blue,alpha)
    fill(0, 255, 0, 10);
    rect(200, 50, 200, 200);
  });
}

function draw() {
  // console.log('in function draw');
  // background(240);
}

console.log('Starting pre-setup');

// https://editor.p5js.org/jht1493/sketches/6mrwOv4RD
// 1.1 draw_rect_alpha
