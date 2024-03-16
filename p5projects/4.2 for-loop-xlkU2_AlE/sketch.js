function setup() {
  createCanvas(400, 200);
  background(255);
  noFill();
  
  let y = 0;
  let len = 50;
  
  for (let x = 0; x < width; x += len) {
    console.log('x='+x+' y='+y+' len='+len);
    circle(x + 25, y + 25, len-10);
    rect(x, y, len, len);
  }
}

// https://editor.p5js.org/jht1493/sketches/xlkU2_AlE
// 4.2 for-loop

// https://editor.p5js.org/jht1493/sketches/QlAHBLxi8e
// 4.1 pattern while

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