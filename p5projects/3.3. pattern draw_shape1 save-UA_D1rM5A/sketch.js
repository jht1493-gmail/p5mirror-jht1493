function setup() {
  createCanvas(400, 200);
  background(255);
  noFill();
  
  let x = 0;
  let y = 0;

  while (x < width) {
    draw_shape1(x, y);
    x = x + 50;
  }

  createButton('Save').mousePressed(function() {
    // saveCanvas([filename], [extension])
    saveCanvas('draw_shape1', 'png');
  })
  console.log('setup done');
}

// Draw a circle on top of square
function draw_shape1(x, y) {
  console.log('draw_shape1 x=' + x + ' y=' + y)
  circle(x + 25, y + 25, 50-10)
  rect(x, y, 50, 50);
}

// https://editor.p5js.org/jht1493/sketches/UA_D1rM5A
// 3.3. pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/D34BIqcoE
// 2.5 setup pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/OtE1lw_X2
// 2.5 setup pattern draw_shape1

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC