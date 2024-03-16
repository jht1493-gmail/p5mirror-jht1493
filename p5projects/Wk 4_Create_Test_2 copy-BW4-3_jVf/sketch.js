// https://editor.p5js.org/jht1493/sketches/BW4-3_jVf
// class fix

// set sizing of the canvas
let cW = 400;
let cH = 400;

// origin point of ellipse
let eX = 5;
let eY = 5;

// diameter length of ellipse
let eD = 10;

// array to save x value on sine curve
let nX = [];

function setup() {
  createCanvas(cW, cH);
  background(255);
  frameRate(5)
}

function draw() {
  for (let y = 0; y < cH / eD; y++) {
    // for (let x = 0; x < width / eD; x++) {
    // noFill();
    // strokeWeight(2);
    let endx = nX[y];
    if (eX < endx) {
      ellipse(eX, eY + y * eD, eD);
    }
    // set up a flag that goes one step ahead the dot to be drawn
    // For the same Y, if eX > nX[(y-5)/10] (x value for that y)
    // skip the x and jump to the next one then check next one, set up a flag for next dot???
    // }
    //console.log('nX[y]', nX[y])
  }
  // update rX after drawing each row
  eX += eD;

  sineWave();
}

// boundary sine wave
function sineWave() {
  translate(cW / 2, cH / 2);

  // total dots: height / diameter of dot
  let total = cH / eD;
  // draw the sine wave
  for (let i = 0; i < total; i++) {
    // angle for each dot
    let angle = map(i, 0, total, 0, TWO_PI);
    let x = map(sin(angle), -1, 1, -150, 150);
    // print out the x value
    // console.log(x + 200);
    // save x values, translated before so need to add half width of window
    nX[i] = x + cW / 2;
    y = map(i, 0, total, -200, 200);
    ellipse(x, y, 10);
  }
}
