let a_d = [20, 100, 200];
let a_index = 0;

function setup() {
  createCanvas(400, 200).mousePressed(function () {
    a_index = a_index + 1;
    if (a_index == a_d.length) {
      a_index = 0;
    }
  });
  createSpan('click on the canvas for next circle')
}

function draw() {
  background(0);

  let d = a_d[a_index];
  // console.log('circle d='+d);
  circle(width/2, height/2, d)
}

// https://editor.p5js.org/jht1493/sketches/PkHBdgZak
// 4.3 array d

// What is an Array?
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.1-what-is-an-array.html
// https://youtu.be/VIQoUghHSxU
// https://editor.p5js.org/codingtrain/sketches/DmwVbhOZ

