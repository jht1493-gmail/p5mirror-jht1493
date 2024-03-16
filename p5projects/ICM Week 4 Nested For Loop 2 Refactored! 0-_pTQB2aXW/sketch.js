// Use nested loops to draw random size squares

// the maximum size of the random squares
const size = 20;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  // Use randomseed to get the same randomness every time draw runs
  // see https://p5js.org/reference/#/p5/randomSeed
  randomSeed(99);
  drawSquares();

} // closes draw loop


function drawSquares() {
  // Use a nested loop to loop through all ys, 
  // and all xs for each y
  
  for (let y = 0; y < height; y = y + 30) {
    
    for (let x = 0; x < width; x = x + 30) {
      
      drawSquare(x, y);
      
    } // closes x for loop 
    
  } // closes y for loop 
}

function drawSquare(x, y) {
  
  chooseColor(y);
  // draw a rect at x,y with a 
  // random size between 0 and value of size variable
  rect(x, y, random(size));

  // Make it interactive by using mouseY instead 
  // rect(x, y, random(mouseY));
}

function chooseColor(y) {

  // if on the top half
  if (y < height / 2) {
    // make it red 
    fill(255, 0, 0);
    // otherwise
  } else {
    // make it blue 
    fill(0, 0, 255);
  } // closes if, else statement 

}

// https://editor.p5js.org/lisajamhoury/sketches/1K56hOB4S
