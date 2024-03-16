function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(0);
  for (let y = 0; y <= height; y += 40) {
    for (let x = 0; x <= width; x += 40) {
      fill(255, 140);
      ellipse(x, y, 40, 40);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/bFe6Hk45R
// Ex_04_10 Embed for Loop

// https://github.com/lmccart/gswp5.js-code/blob/master/04_Variables/Ex_04_10.js
