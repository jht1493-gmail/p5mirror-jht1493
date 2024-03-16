// Mouse down will pick a random word from this array
let words = ["rainbow", "heart", "purple", "friend", "love"];
let a_word = words[0]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(a_word, 12, 200);
}

function mousePressed() {
  a_word = random(words)
}

// What is an Array?
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.1-what-is-an-array.html
// https://youtu.be/VIQoUghHSxU
// https://editor.p5js.org/codingtrain/sketches/DmwVbhOZ

