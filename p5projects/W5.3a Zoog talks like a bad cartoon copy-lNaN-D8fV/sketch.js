// https://editor.p5js.org/jht1493/sketches/lNaN-D8fV
// W5.3a Zoog talks like a bad cartoon
// https://editor.p5js.org/benjamin.bergery/sketches/UjXzCVArd

function setup() {
  createDrawingCanvas();
  dark_gray_background();
  addPurpleFace();
  addGreenEyes();
  addBlackPupils();
  addOrangeEyebrows();
  addAntenna();
  // add_pink_mouth();
  addBlackArms();
  yellowBody();
}

function draw() {
  // runAtsevenFps();
  if (frameCount % 7 == 0) {
    BadCartoonTalkingMouth();    
  }
}

//++ 2 new external functions ++//

function BadCartoonTalkingMouth() {
  console.log('width', width);
  noStroke();
  fill(127, 0, 127);
  ellipse(200, 220, 50, 40);
  fill(0, 0, 0);
  ellipse(200, 220, random(10, 50), random(5, 40));
}

function runAtsevenFps() {
    frameRate(7);
}
// CODE COMMENT
// to get the mouth redrawing on each frame, 
//lines 26-27 redraw the mouth area in purple to erase previous mouth
// lines 28-29 draw a black mouth ellipse with random width and height
// line 32 run the program at 7ps to avoid flickering mouth



// QUESTION: Does it matter if runAtsevenFps is in draw or setup?

function add_pink_mouth() {
  noStroke();
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);
}

function createDrawingCanvas() {
  createCanvas(400, 400);
}

function dark_gray_background() {
  background(120);
}

function addPurpleFace() {
  fill(127, 0, 127);
  ellipse(200, 200, 150, 200);
}

function addGreenEyes() {
  fill(0, 200, 127);
  ellipse(150, 150, 70, 40);
  ellipse(250, 150, 40, 60);
}

function addBlackPupils() {
  fill(0);
  ellipse(170, 150, 5, 5);
  ellipse(270, 150, 10, 10);
}

function addOrangeEyebrows() {
  stroke(255, 100, 100);
  strokeWeight(15);
  line(130, 110, 170, 120);
  line(230, 105, 270, 100);
}

function addAntenna() {
  stroke(255);
  strokeWeight(5);
  line(200, 125, 200, 50);
  noFill();
  ellipse(200, 40, 20, 20);
}

function add_pink_mouth() {
  noStroke();
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);
}

function addBlackArms() {
  stroke(0);
  strokeWeight(30);
  line(150, 350, 300, 300);
}

function yellowBody() {
  // No stroke
  noStroke();
  fill(255, 255, 0);
  rect(150, 275, 100, 200);
}

// NOTES
// Would indeed be great if more code could be understood without comments
// simply by naming external functions
// QUESTION: Can you do this to all code?
// QUESTION: If not, when can't you?

// Original Zoog by Mimi Yin at https://editor.p5js.org/mimiyin/sketches/SiMFwzSGS

//3. Take, one of the functions from your re-factored Zoog portrait and re-write it
//so that you can call the same function twice, and have it draw slighly different versions of the same thing. (e,.g.Draw a big eye. Draw a little eye.) Alternatively you can try doing this on your own self-portrait

// Organize Zoog portrait into functions so that you can understand what it's doing without comments and you can easily turn different parts of the sketch on/off by commenting in/out calls to your functions.
