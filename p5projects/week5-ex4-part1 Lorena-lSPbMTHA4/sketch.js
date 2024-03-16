// TRY: Use for loop for eyelashes

function setup() {
  createCanvas(400, 360);
  background(240);
  upperHead();
  eyes();
  pupils();
  eyebrows();
  neck();
  lowerHead();
  nose();
  mouth();
}

function draw() {}

function upperHead() {
  fill(180, 100);
  strokeWeight(2);
  circle(200, 100, 150);
}

function eyes() {
  strokeWeight(2);
  ellipse(100, 80, 40, 20);
  strokeWeight(1);
  ellipse(210, 100, 40, 20);
}

function pupils() {
  strokeWeight(3);
  point(110, 80);
  point(220, 100);
}

function eyebrows() {
  strokeWeight(1);
  line(90, 65, 100, 45);
  line(100, 65, 110, 45);
  line(110, 65, 120, 45);
  line(120, 65, 130, 45);

  line(195, 85, 205, 65);
  line(205, 85, 215, 65);
  line(215, 85, 225, 65);
  line(225, 85, 235, 65);
}
function neck() {
  strokeWeight(2);
  triangle(160, height, 263, 202, 263, height);
}

function lowerHead() {
  strokeWeight(1);
  arc(175, 200, 175, 175, 0, HALF_PI, PIE);
}
function nose() {
  strokeWeight(1);
  triangle(120, 225, 190, 100, 190, 225);
}

function mouth() {
  strokeWeight(3);
  line(150, 245, 190, 250);
  line(155, 260, 190, 250);
}

// https://editor.p5js.org/lolo.ostia/sketches/r4CYjc_Vk
// week5-ex4-part1 Lorena

// https://editor.p5js.org/enickles/sketches/cZZLDnjwX
// Exercise - ICM 21 Week 5 - Refactor portrait with functions

/*
Composition based on A Larger Whole by Mariel Lindsey
www.mariellindsey.com

Part 1: Organize the portrait into functions
Part 2: Make at least one function that takes arguments. 
Call this function as many times as you need to.
Part 3 Challenge: Look for a pattern or patterns and use a loop
*/
