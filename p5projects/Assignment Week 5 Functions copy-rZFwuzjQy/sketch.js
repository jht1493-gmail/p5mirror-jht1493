//- Part 1: Functions are the basic unit of labor in your code. Take a sketch you’ve already done and re-organize the code into functional units of labor that you define. You can also conceive of an entirely new world of labor. What kinds of labor does it take to make your sketch run? Add comments and use well named functions and variables to help explain your code.

//- Part 2: Make your sketch canvas size independent. We should be able to adjust the canvas size with reasonable values.

// Defining functions
// Calling functions
// Passing values to functions
// Return a value from a function

// let ourColors=[];

// ourColors[0]="#F0F2A6";
// ourColors[1]="#F2542D";
// ourColors[2]="#4C2C72";
// ourColors[3]="#7F95D1";

//We could write it this way...

let ourColors = ["#F0F2A6", "#F2542D", "#4C2C72", "#7F95D1"];
let index = 0;

let canvasWidth = 400;
let canvasHeight = 300;

let colorChoice = 0;
let piston_width;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  piston_width = canvasWidth / 10
}

function getHeadPosition(x) {
  let headPos = 12.5 * (cos((frameCount + 7 * x) / 4) + 1);
  return headPos;
}

function robot(x, y, c) {
  // draw robot
  fill(c);

  let moveHeadY = getHeadPosition(x);

  // draw neck
  rect(x + 20, y + 50, 10, 25);
  // draw head
  rect(x, y + moveHeadY, 50);
  //draw body
  rect(x + 0, y + 75, 50, 200);
  //draw feet
  rect(x + 0, y + 275, 25);
  rect(x + 25, y + 275, 25);
}

function draw() {
  background(220);

  for (let i = 0; i < width; i += piston_width) {
    for (let j = 0; j < height; j += 325) {
      // let colorChoice = floor(frameCount / 100) % 4;
      //       let colorChoice=(i/80)%4;
      // let colorChoice=floor(random(0,3));

      robot(i, j, ourColors[colorChoice]);
    }
  }
}

function mousePressed() {
  colorChoice++;
  if (colorChoice === ourColors.length) {
    colorChoice = 0;
  }
}
