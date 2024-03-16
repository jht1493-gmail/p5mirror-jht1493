function setup() {
  print('in function setup');
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    console.log('calling background');
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    console.log('calling rect');
    // rect(x,y,width,height)
    rect(0, 50, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    console.log('calling circle');
    fill('white');
    // circle(x,y,diameter)
    circle(200, 150, 200)
  });
  createButton('Rect2').mousePressed(function() {
    console.log('calling rect gray');
    fill('gray');
    // rect(x,y,width,height)
    rect(200, 50, 200, 200);
  });
}

function draw() {
  // console.log('in function draw');
  // background(240);
}

// Can't use p5js function print here!
console.log('Starting pre-setup');

// https://editor.p5js.org/jht1493/sketches/NlCr2UD2P
// 1.1 draw_rect_log