let x = 60; // x coordinate
let y = 420; // y coordinate
let bodyHeight = 110; // Body height
let neckHeight = 140; // Neck height
let radius = 45;
let ny = y - bodyHeight - neckHeight - radius; // Neck Y

function setup() {
  createCanvas(170, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  // Neck
  stroke(102); // Set stroke to gray
  line(x+2, y-bodyHeight, x+2, ny); // Left
  line(x+12, y-bodyHeight, x+12, ny); // Middle 
  line(x+22, y-bodyHeight, x+22, ny); // Right

  // Antennae
  line(x+12, ny, x-18, ny-43);  // Small 
  line(x+12, ny, x+42, ny-99);    // Tall
  line(x+12, ny, x+78, ny+15); // Medium

  // Body
  noStroke(); // Disable stroke 
  fill(102); // Set fill to gray 
  ellipse(x, y-33, 33, 33); //Antigravity orb 
  fill(0); // Set fill to black 
  rect(x-45, y-bodyHeight, 90, bodyHeight-33); // Main body 
  fill(102); // Set fill to gray 
  rect(x-45, y-bodyHeight+17, 90, 6); // Gray stripe
  
  // Head
  fill(0); // Set fill to black 
  ellipse(x+12, ny, radius, radius); //Head 
  fill(255); // Set fill to white 
  ellipse(x+24, ny-6, 14, 14); // Large eye 
  fill(0); // Set fill to black 
  ellipse(x+24, ny-6, 3, 3); // Pupil
  fill(153); // Set fill to light gray
  ellipse(x, ny-8, 5, 5); // Small eye 1 
  ellipse(x+30, ny-26, 4, 4);  // Small eye 2 
  ellipse(x+41, ny+6, 3, 3); // Small eye 3
}

// https://editor.p5js.org/jht1493/sketches/mJ_X4q47O
// Ex_04 Robot 2: Variables

// https://github.com/lmccart/gswp5.js-code/blob/master/Robots/Robot02_Variables.js

// https://editor.p5js.org/jht1493/sketches/0EzMYSpky
// Ex_03 Robot 1: Draw
