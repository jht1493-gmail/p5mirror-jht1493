/*
Click on canvas to enable sound playback, then
Press LEFT ARROW for Sine wave
Press UP ARROW for Sawtooth wave
Press RIGHT ARROW for Triangle wave
Press DOWN ARROW for Square wave

https://p5js.org/reference/#/p5.Oscillator
https://p5js.org/reference/#/p5.FFT
*/

let fft;
let osc;
let freqVal;

function setup() {
  createCanvas(400, 400);

  // Create a new oscillator
  osc = new p5.Oscillator();
  // Set amplitude (volume), which goes from 0 to 1
  osc.amp(0.1);
  osc.setType('sine');
  osc.start();

  // Create FFT object to draw the sound's waveform
  fft = new p5.FFT();
  // Connect the oscillator
  fft.setInput(osc);
}

function draw() {
  background(0);

  // Set the frequency and write it on canvas
  // freqVal = 440;
  freqVal = map(mouseX, 0, width, 10, 800, true);
  osc.freq(freqVal);
  fill(255);
  textSize(12)
  text(`Frequency: ${floor(freqVal)}`, 10, height - 20);

  // Draw the waveform
  let waveform = fft.waveform();
  beginShape();
  noFill();
  stroke(255);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let wv = waveform[i] * 5;
    let y = map(wv, -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}


function keyPressed() {
  // Sine - mild, soft tone
  if (keyCode === LEFT_ARROW) changeWave('sine');

  // Sawtooth - reedy, hollow sound
  if (keyCode === UP_ARROW) changeWave('sawtooth');

  // Triangle - somewhere between a sine and saw wave
  if (keyCode === RIGHT_ARROW) changeWave('triangle');

  // Square - sharp, biting tone
  if (keyCode === DOWN_ARROW) changeWave('square');
}

function changeWave(type) {
  osc.stop();
  osc.setType(type);
  osc.start();
}