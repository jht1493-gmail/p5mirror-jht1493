// Create an audio experience using sound synthesis.

// Play Song: https://editor.p5js.org/jht1493/sketches/JzUpCtscr

let song;
let sliderPan;
let button;
let buttonDraw;
let buttonFreq;
let sliderVol;
let buttonColor;
let image1;
let osc;
let playing = false;

function preload() {
  image1 = loadImage("Ali.jpg");
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  osc = new p5.Oscillator("sine"); //osc generates sound, and sine is a wave shape
  osc.freq(0);
  osc.amp(0.1);
  song = loadSound("sifu.mp3", loaded);

  button = createButton("play");
  button.mousePressed(togglePlaying);

  sliderVol = createSlider(0, 100); //for sliders we need integers 1-100 and then divide that value by 100 to get a value between 0 and 1 - which is the value for Volume Range.Ref. line 74
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
    button.html("pause");
  } else {
    // song.stop();
    song.pause();
    button.html("play");
  }
}

function loaded() {
  song.play();
}

function draw() {
  image(image1, 0, 0, image1.width / 4, image1.height / 4);
  song.setVolume(sliderVol.value() / 100);

  osc.freq(mouseX, 0.2);
}

function mousePressed() {
  if (mouseY < 400) {
    if (!playing) {
      osc.start();
      playing = true;
    } else {
      osc.stop();
      playing = false;
    }
  }
}
