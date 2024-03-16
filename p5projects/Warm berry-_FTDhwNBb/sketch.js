// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0

var song;
var sliderRate;
var sliderPan;

function setup() {
  createCanvas(200, 200);
  song = loadSound('rainbow.mp3', loaded);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  print('loaded ')
  print('song.duration()', song.duration())
  song.setVolume(0.5);
  song.play();
  // loop([startTime], [rate], [amp], 
  //    [cueLoopStart], [duration])
  let startTime = 0;
  let rate = 1;
  let amp = 1;
  let curLoopStart = 0;
  let duration = 0;
  song.loop();
}

function draw() {
  // background(random(255));
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
}

