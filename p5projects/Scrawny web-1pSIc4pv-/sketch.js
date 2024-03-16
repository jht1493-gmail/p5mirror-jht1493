console.log('Hello there')

function setup() {
  // createCanvas(w, h, [renderer])
  // w Number: width of the canvas
  // h Number: height of the canvas
  createCanvas(200, 400);
  console.log('in setup', frameCount)
}

function draw() {
  // background(gray, [a])
  background(100);
  console.log('in draw', frameCount)
}