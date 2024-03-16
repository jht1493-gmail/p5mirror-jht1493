let circ;

function setup() {
  createCanvas(400, 400);
  background(255);
  circ = {
    x: width/2, 
    y:height/2,
    s:50,
    incre:2,
    numcirc:1,
  }
}

function draw() {
  while (circ.numcirc <=5 ){
    noFill();
    strokeWeight(circ.incre);
    circle(circ.x,circ.y,circ.s);
    circ.s = circ.s + 25
    circ.incre = circ.incre + 1
    circ.numcirc = circ.numcirc + 1
  }
}

// https://editor.p5js.org/qiqirathwang/sketches/_8WPRQS_h
// ICM Week 4 Exercise 1 Teresa