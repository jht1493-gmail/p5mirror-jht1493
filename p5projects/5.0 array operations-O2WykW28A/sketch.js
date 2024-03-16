// https://editor.p5js.org/jht1493/sketches/O2WykW28A
// 5.0 array operations
// arrays adding elements, removing elements

let words = ["rainbow", "heart", "purple", "friendship", "love"];
// let words = [];

let index = 0;

function setup() {
  createCanvas(400, 400);
  // change a element in the array
  // words[0] = 'kitty';

  // Adding an element to the end of an array
  // words.push('zoo');

  // https://p5js.org/reference/#/p5/shuffle
  words = shuffle(words)
  console.log("words", words);

  // https://p5js.org/reference/#group-Data
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  let word = words[index];
  text(word, 12, 200);
}

function mousePressed() {
  index = (index + 1) % words.length;
  // words.length is the number of elements in the array
  // index = index + 1;
  // if (index >= words.length) {
  //   index = 0;
  // }
}

// What is an Array?
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.1-what-is-an-array.html
// https://youtu.be/VIQoUghHSxU
// https://editor.p5js.org/codingtrain/sketches/DmwVbhOZ
