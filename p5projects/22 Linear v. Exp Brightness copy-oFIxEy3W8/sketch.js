// Which gradient is more even?
// Where are there unnatural jumps?
// Is either one perfect?

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(220);
  
  // Draw 10 swatches
  let colWidth = width/10;
  for (let col = 0; col < 10; col++) {
    // Calculate brightness linearly
    // Each swatch is 10% brighter
    let b = col*10;
    // Calculate x-position of swatch
    let x = col * colWidth;
    // Draw the swatch
    fill(0, 0, b);
    rect(x, 0, colWidth, height/2);
  }
  
  // Draw 10 swatches
  for (let col = 0; col < 10; col++) {    
    // Calculate brightness with log()
    let b = 4*col*log(col+3);
    // Calculate x-position of swatch
    let x = col * colWidth;
    // Draw the swatch
    fill(0, 0, b);
    rect(x, height/2, colWidth, height);
  }
}

