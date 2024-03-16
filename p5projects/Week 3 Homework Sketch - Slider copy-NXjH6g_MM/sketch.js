// https://editor.p5js.org/hc3786/sketches/2LlrIOYOT
// 

let canvas = {
  r: 220,
  g: 220,
  b: 220,
  w: 400,
  h: 500
};

let SR = {
  xStart: 50,
  xEnd: 340,
  yPos: 25,
  slotWidth: 5,
  sliderWidth: 15,
  sliderHeight: 60,
  type: 0, //rgb type
  offsetX: 0, //default offset is 0
};

let SG = {
  xStart: 50,
  xEnd: 340,
  yPos: 125,
  slotWidth: 5,
  sliderWidth: 15,
  sliderHeight: 60,
  type: 1, //rgb type
  offsetX: 0, //default offset is 0
};

let SB = {
  xStart: 50,
  xEnd: 340,
  yPos: 225,
  slotWidth: 5,
  sliderWidth: 15,
  sliderHeight: 60,
  type: 2, //rgb type
  offsetX: 0, //default offset is 0
};

let SA = {
  xStart: 50,
  xEnd: 340,
  yPos: 325,
  slotWidth: 5,
  sliderWidth: 15,
  sliderHeight: 60,
  type: 3, //rgb type
  offsetX: 290, //default offset is 0
};

function setup() {
  createCanvas(canvas.w, canvas.h);
}

function slider(p) {
  strokeWeight(0);
  stroke(70);

  //slot for slider
  fill(50);
  let slot = rect(
    p.xStart,
    p.yPos + p.sliderHeight / 2 - p.slotWidth / 2,
    p.xEnd - p.xStart,
    p.slotWidth,
    p.slotWidth / 2
  );

  //slider
  //is the slider being dragged?
  //is the mouse on slider, and mouse is pressed?
  strokeWeight(5);
  if (onSlider(p) && mouseIsPressed) {
    //move slider with mouse
    let newX = mouseX - p.xStart - p.sliderWidth / 2;
    p.offsetX = constrain(newX, 0, p.xEnd - p.xStart - p.sliderWidth);
  }

  //fill the slider with a shade mapped to its length
  let c = colorMapper(p);
  fill(c[0], c[1], c[2], c[3]);

  //contour the slider with white border on click
  if (onSlider(p) && mouseIsPressed) {
    strokeWeight(5);
    stroke(255);
  }
  //slider`
  let slider = rect(
    p.xStart + p.offsetX,
    p.yPos,
    p.sliderWidth,
    p.sliderHeight,
    p.sliderWidth / 2
  );
}

function onSlider(p) {
  let output;
  let t = 30;
  //tolerance
  if (
    mouseX > p.offsetX + p.xStart - t &&
    mouseX < p.offsetX + p.xStart + p.sliderWidth + t &&
    mouseY > p.yPos - t &&
    mouseY < p.yPos + p.sliderHeight + t
  ) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

function colorMapper(p) {
  //let type = p.type
  let shade = round((p.offsetX / (p.xEnd - p.xStart)) * 255);
  let output = [0, 0, 0, 255];
  output[p.type] = shade;
  return output;
}

function draw() {
  background(0);
  fill(SR.offsetX*(SA.offsetX/255),
       SG.offsetX*(SA.offsetX/255),
       SB.offsetX*(SA.offsetX/255));
  noStroke();
  rect(0,0,canvas.w,canvas.h)
  slider(SR);
  slider(SG);
  slider(SB);
  slider(SA);
}
