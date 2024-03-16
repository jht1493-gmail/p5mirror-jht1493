function setup() {
  console.log("Ready to roll!");
  rollDice(20);
  rollDice(20);
  rollDice(6);
  console.log("Finished.");
}

function rollDice(numSides) {
  var d = 1 + int(random(numSides));
  console.log("Rolling... " + d);
}

// https://editor.p5js.org/jht1493/sketches/uetaqd2FH
// Ex_09_01 Roll the Dice

// https://github.com/lmccart/gswp5.js-code/blob/master/09_Functions/Ex_09_01.js
