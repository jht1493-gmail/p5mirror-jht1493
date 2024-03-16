// color values are [red,gree,blue,alpha]
let a_colors = [
  [200, 0, 0, 50],
  [0, 200, 0, 50],
  [200, 200, 0, 50],
  [0, 0, 200, 50],
  [200, 0, 200, 50],
];
let a_index = 0;

function setup() {
  createCanvas(400, 200).mousePressed(function () {
    a_index = a_index + 1;
    if (a_index == a_colors.length) {
      a_index = 0;
    }
    draw_next();
  });
  createSpan("click on the canvas for next color");
  noStroke();
}

function draw_next() {
  // background(0);

  fill(a_colors[a_index]);
  let half = height/2;
  let x = a_index * half;
  circle(x, half, height);
}

// https://editor.p5js.org/jht1493/sketches/a81qFOT7_
// 4.3 array colors alpha

// https://editor.p5js.org/jht1493/sketches/MN_30o-l-
// 4.3 array colors

// What is an Array?
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.1-what-is-an-array.html
// https://youtu.be/VIQoUghHSxU
// https://editor.p5js.org/codingtrain/sketches/DmwVbhOZ
