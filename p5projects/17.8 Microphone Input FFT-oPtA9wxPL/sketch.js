let fft;
let mic;
let a_scale = 2;

function setup() {
  createCanvas(256*a_scale, 256*a_scale);
  colorMode(HSB);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.9, 128);
  fft.setInput(mic);
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  noStroke();
  translate(width / 2, height / 2);
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 20, 150*a_scale);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
  }
}

// https://github.com/CodingTrain/website/blob/main/
// Tutorials/P5JS/p5.js_sound/
// 17.11_FFT/sketch.js
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4