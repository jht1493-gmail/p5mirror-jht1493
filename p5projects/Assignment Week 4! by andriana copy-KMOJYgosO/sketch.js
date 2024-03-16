// https://editor.p5js.org/jht1493/sketches/KMOJYgosO
// https://editor.p5js.org/andriana.mereuta/sketches/amFNMu3Xu
// Assignment Week 4! by andriana copy

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // var x = 10;
  // var y = 10;

  // var XPosRect2 = 20;
  // var YPosRect2 = 20;

  // var XPosRect3 = 30;
  // var YPosRect3 = 30;

  drawRect1();
  drawRect2();
  drawRect3();
}

function drawRect1() {
  var x = 10;
  var y = 10;
  strokeWeight(4);
  stroke(255);
  noFill();
  for (let x = 10; x < 400; x += 65) {
    // rect(x, y, 55, 55);
    for (let y = 10; y < 400; y += 65) {
      rect(x, y, 55, 55);
    }
  }
}

function drawRect2() {
  let XPosRect2 = 20;
  let YPosRect2 = 20;
  //2nd rect
  strokeWeight(3);
  stroke(255);
  noFill();
  for (let XPosRect2 = 20; XPosRect2 < 400; XPosRect2 += 65) {
    // rect(XPosRect2, YPosRect2, 33, 33);
    for (let YPosRect2 = 20; YPosRect2 < 400; YPosRect2 += 65) {
      rect(XPosRect2, YPosRect2, 33, 33);
    }
  }
}

function drawRect3() {
  //3rd rect
  var XPosRect3 = 30;
  var YPosRect3 = 30;
  strokeWeight(4);
  stroke(255);
  noFill();
  for (let XPosRect3 = 30; XPosRect3 < 400; XPosRect3 += 65) {
    // rect(XPosRect3, YPosRect3, 11, 11);
    for (let YPosRect3 = 30; YPosRect3 < 400; YPosRect3 += 65) {
      rect(XPosRect3, YPosRect3, 11, 11);
    }
  }
}
