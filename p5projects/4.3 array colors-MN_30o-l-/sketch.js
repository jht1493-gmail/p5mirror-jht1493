let a_colors = ["red", "green", "yellow", "blue", "gray"];
let a_index = 0;

function setup() {
  createCanvas(400, 200).mousePressed(function () {
    a_index = a_index + 1;
    if (a_index == a_colors.length) {
      a_index = 0;
    }
  });
  createSpan('click on the canvas for next color')
}

function draw() {
  background(0);

  fill(a_colors[a_index]);
  circle(width/2, height/2, height)
}

// https://editor.p5js.org/jht1493/sketches/MN_30o-l-
// 4.3 array colors

// What is an Array?
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.1-what-is-an-array.html
// https://youtu.be/VIQoUghHSxU
// https://editor.p5js.org/codingtrain/sketches/DmwVbhOZ

