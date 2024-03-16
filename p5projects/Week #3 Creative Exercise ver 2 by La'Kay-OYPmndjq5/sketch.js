let music;
let rSlider, gSlider, bSlider;
let effect;

function setup() {
  music = createAudio("FridayNight.mp3");
  music.autoplay(true);
  gif = loadImage("2.gif");
  effect = loadSound("effect.mp3");
  textSize(15);
  noStroke();

  rSlider = createSlider(0, 255, 100);
  rSlider.position(10, 10);
  rSlider.size(100);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(10, 30);
  gSlider.size(100);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(10, 50);
  bSlider.size(100);

  createCanvas(520, 300);
}

function draw() {
  image(gif, 0, 0, width, height);

  let currFrame = gif.getCurrentFrame();

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b, 70);
  fill(220);
  text("red", rSlider.x * 2 + rSlider.width, 25);
  text("green", gSlider.x * 2 + gSlider.width, 45);
  text("blue", bSlider.x * 2 + bSlider.width, 65);

  if (mouseX > 10 && mouseX < 80 && mouseY > 250 && mouseY < 290) {
    fill(255, 220, 100);
  } else if (fill(220));

  if (
    mouseX > 10 &&
    mouseX < 80 &&
    mouseY > 250 &&
    mouseY < 290 &&
    mouseIsPressed
  ) {
    button = true;
  } else {
    button = false;
  }

  if (button) {
    fill(0);
    stroke(0);
  }

  if (
    mouseX > 10 &&
    mouseX < 80 &&
    mouseY > 250 &&
    mouseY < 290 &&
    mouseIsPressed
  ) {
    effect.play();
  }

  rectMode(CORNER);
  rect(10, 250, width / 8, height / 7, 20);
}

// https://editor.p5js.org/lh1966/sketches/pllKpo0rs
// Week #3 Creative Exercise ver 2 by La'Kay
