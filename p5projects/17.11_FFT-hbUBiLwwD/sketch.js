let song;
let fft;
let button;

function preload() {
  song = loadSound('rainbow.mp3');
}

function setup() {
  createCanvas(256, 256);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  // https://p5js.org/reference/#/p5.FFT
  // let bins = 128; // 256 512 1024
  let bins = 512;
  fft = new p5.FFT(0.9, bins);
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

// TRY: how can we adjust graph to show
//  specturm in more detail
// What is typical range of i with some amplitude?

function draw() {
  background(0);
  let spectrum = fft.analyze();
  //console.log(spectrum);
  //stroke(255);
  noStroke();
  translate(width / 2, height / 2);
  //beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 20, 100);
    //fill(i, 255, 255);
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
    //vertex(x, y);
    //let y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();
}

// https://editor.p5js.org/jht1493/sketches/hbUBiLwwD
// 17.11_FFT

// https://editor.p5js.org/jht1493/sketches/JzUpCtscr
// 17.1_playSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.11_FFT

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4

// song rainbow.mp3 extracted from this site
// to be more pleasing to the ear
// and small enough to load into web editor
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales



