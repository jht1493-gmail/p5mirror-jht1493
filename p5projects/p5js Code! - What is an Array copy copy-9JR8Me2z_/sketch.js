// let mycolors = ["red", "green", "yellow"];
let mycolors = [];

let index = 0;

function setup() {
  createCanvas(400, 400);
  mycolors[0] = color(100,0,0,100);
  mycolors[1] = color(0,100,0,100);
  mycolors[2] = color(0,0,100,100);
}

function draw() {
  background(0);
  // fill(255);
  fill(mycolors[index]);
  // textSize(32);
  // text(words[index], 12, 200);
  rect(100,100,200,200);
}

function mousePressed() {
  index = index + 1;
  if (index == mycolors.length) {
    index = 0;
  }
}

// What is an Array?
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.1-what-is-an-array.html
// https://youtu.be/VIQoUghHSxU
// https://editor.p5js.org/codingtrain/sketches/DmwVbhOZ
