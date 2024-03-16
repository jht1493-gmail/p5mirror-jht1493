function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(255, 255, 20);
  noStroke();
  fill(255, 20, 255, 100);

  // Created nested loops to create a cross every 40 pixels
  for (let y = 40; y < height; y += 40) {
    for (let x = 40; x < width; x += 40) {

      // map the length value from the mouseX range to 0-80
      const len = map(mouseX, 0, width, 0, 80);

      // draw a cross at x,y
      // also pass mouseX and mouseY 
      // to control angle and length
      // the arguments in parenthesis 
      // give the values to the drawCross function
      drawCross(x, y, mouseY, len);
    }
  }
}

// function to draw a cross 
function drawCross(inX, inY, angle, len) { 
  // the paramenters/variables for this function 
  // are created here in parenthesis 

  // check if the cross is too close to the mouse
  // tooClose() returns true or false
  const isClose = tooClose(inX, inY, mouseX, mouseY);

  // if isClose is true 
  if (isClose === true) {
    return; // stop go back!! 
  }
  // if isClose is false and the code didn't return, 
  // we continue to this code which draws a cross 

  // use push and pop to store/restore 
  // the previous drawing settings
  push();
  // move to the inX, inY point
  translate(inX, inY); 
  // rotate around that point
  rotate(angle); 
  // draw the cross arms at 0,0 
  rect(0, 0, 10, len); 
  rect(0, 0, len, 10); 
  // restore previous drawing settings 
  pop(); 
}

// tooClose checks if two points are too close
function tooClose(x1, y1, x2, y2) { 
  // get x,y for two points 

  // initialize isTooClose to false 
  let isTooClose = false; 
  
  // get the distance between the two points
  const distance = dist(x1, y1, x2, y2); 
  if (distance < 100) { 
    // they are too close!!!! 
    isTooClose = true; 
  }
  // return the value of isTooClose
  return isTooClose; 
}

// https://editor.p5js.org/lisajamhoury/sketches/zI1X2UpPz