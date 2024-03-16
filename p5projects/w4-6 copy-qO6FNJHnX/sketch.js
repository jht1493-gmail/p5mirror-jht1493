let mycolor;

function setup() {
  createCanvas(600, 400);
  mycolor = random([0,255]);
}

function draw() {
  background(155);
 

  for (var x = 0; x <= width; x += 30) {
    for (var y = 0; y <= height; y += 30) {
      // fill(random(0), 0, random(0));
      let choicex = (x/30) % 2;
      let choicey = (y/30) % 2;
      // console.log('choicex',choicex,'choicey',choicey);
      // if (choicex == 1)  {
      // if (choicex == 1 && choicey == 1) {
      if (choicex == choicey) {
        fill(0);
      }
      else {
        fill(255);
      }
      // fill(mycolor);
      rect(x, y, 25, 25);
    }
  }
}


// Nested Loops
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/4.2-nested-loops.html
// https://youtu.be/1c1_TMdf8b8
// https://editor.p5js.org/codingtrain/sketches/nxJTfiJd
