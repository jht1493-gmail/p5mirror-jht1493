function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  // randomSeed(0);
  for (let i = 35; i < width + 40; i += 40) {
    let gray = int(random(0, 102));
    let scalar = random(0.25, 1.0);
    owl(i, 110, gray, scalar);
  }
}

function owl(x, y, g, s) {
  push();
  translate(x, y);
  scale(s);  // Set the scale
  stroke(g); // Set the gray value
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(255-g);
  ellipse(-17.5, -65, 35, 35); // Left eye dome
  ellipse(17.5, -65, 35, 35);  // Right eye dome
  arc(0, -65, 70, 70, 0, PI);  // Chin
  fill(g);
  ellipse(-14, -65, 8, 8);  // Left eye
  ellipse(14, -65, 8, 8);   // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();
}

// https://editor.p5js.org/jht1493/sketches/45Cv8Gi4i
// Ex_09_07 Owls of Different Sizes

// https://github.com/lmccart/gswp5.js-code/blob/master/09_Functions/Ex_09_07.js
