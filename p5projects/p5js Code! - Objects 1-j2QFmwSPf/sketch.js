// JavaScript Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/beginners/p5js/2.3-objects.html
// https://youtu.be/-e5h4IGKZRY
// https://editor.p5js.org/codingtrain/sketches/6J5VPMbW
// Changed object name after circle became a function in p5js.
// 2020-10-09 jht naming conventions 
// - recommend descriptive variable names with underscore
// - to avoid global name space conflicts
// - and create descriptive names.
// - use color array to avoid use of color() before setup
// - starting point for using functions with object arguments

const a_circle = {
  x: 0,
  y: 200,
  r: 25
};

//               red,green,blue,alpha
const a_color = [218,160,221,20]; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  background(a_color);
  
  fill(250, 200, 200);
  
  circle(a_circle.x, a_circle.y, a_circle.r*2 );

  a_circle.x = a_circle.x + 1;
}

// https://editor.p5js.org/codingtrain/sketches/6J5VPMbW