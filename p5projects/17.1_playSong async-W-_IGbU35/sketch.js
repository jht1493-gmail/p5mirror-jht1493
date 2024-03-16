// song is loaded using call back style, 
//  ie. asynchronously
let song;
let sliderRate;
let sliderPan;

function setup() {
  createCanvas(200, 200);
  loadSound('rainbow.mp3', loaded);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded(asong) {
  console.log('loaded asong', asong);
  song = asong;
  song.setVolume(0.5);
  song.play();
}

function draw() {
  // background(random(255));
  // console.log('song.currenTime()', song.currentTime());
  
  // Check for song loaded.
  if (! song) return;
  
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
}

// https://editor.p5js.org/jht1493/sketches/W-_IGbU35
// 17.1_playSong async

// https://editor.p5js.org/jht1493/sketches/JzUpCtscr
// 17.1_playSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.1_playSong

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0

// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales



