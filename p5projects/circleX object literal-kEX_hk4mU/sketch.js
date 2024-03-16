// https://editor.p5js.org/jht1493/sketches/kEX_hk4mU
// circleX object literal

let circle1 = {
  x: 100,
  y: 150,
  s: 2,
  d: 64,
  c: [255,0,0,10] // [red,green,blue,alpha]
}
let circle2 = {
  x: 100,
  y: 150,
  s: 2,
  d: 100,
  c: [255,255,0,10] // [red,green,blue,alpha]
}

function setup() {
  createCanvas(400, 300).mousePressed(function () {
    circle2.x = 0;
  })
  createButton('backg 0').mousePressed(function() {
    console.log('calling background');
    background(0);
  });
  createButton('down').mousePressed(function() {
    circle2.y = (circle2.y + 40) % height
  });
  createButton('change color').mousePressed(function() {
    // circle2.c = [random(255),random(255),random(255),10]
    // circle2.c = random(['red','green','yellow'])
    // circle2.c = random([100,200,10]); // gray value
    let r = [255,0,0,10]
    let g = [0,255,0,10]
    let y = [255,255,0,10]
    circle2.c = random([r,g,y]); 
  });
  background(0);
}

function draw() {
  // background(0);
  // noStroke();
  fill(circle1.c);
  circle(circle1.x, circle1.y, circle1.d);
  circle1.y = (circle1.y + circle1.s) % width;

  fill(circle2.c);
  circle(circle2.x, circle2.y, circle2.d);
  circle2.x = (circle2.x + circle2.s) % width;
}

// https://editor.p5js.org/jht1493/sketches/L55nCCMds
// circleX buttons

// Move to myCanvas.mousePressed to allow buttons
// to work.
// function mousePressed() {
//   circleX = 0;
// }

// https://editor.p5js.org/jht1493/sketches/JVoQAP3aM
// variable circleX myCanvas

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

