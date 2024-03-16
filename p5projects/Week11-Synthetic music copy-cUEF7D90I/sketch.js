let song;
let button;
let amp;
let fft;
let osc;
var volHistory = [];

function setup() {
  createCanvas(400, 400);
  // song = loadSound('groove.mp3', loaded);
  // amp = new p5.Amplitude();
  // background(220);
  angleMode(DEGREES);

  // Create a new oscillator
  osc = new p5.Oscillator();
  osc.setType("Sawtooth");
  let al = (mouseY, 0, height, 0, 1);
  osc.amp(0.3);

  // osc.freq(300);
  // osc.start();

  // Create FFT object to draw sound waveform
  fft = new p5.FFT();
  fft.setInput(osc);
}

// function loaded() {
//   button = createButton('play');
//   button.mousePressed(togglePlaying);
// }

function draw() {
  let freqVal = map(mouseX, 0, width, 10, 880, true);

  osc.freq(freqVal);
  // console.log(freqVal);

  let diam = map(freqVal, 0, 0.2, 10, 400);
  noStroke();
  fill(freqVal / 3, 0, 0, 200);
  ellipse(mouseX, mouseY, diam);

  // if (mousePressed) {
  //   osc.start();
  // } else {
  //   osc.stop();
  // }
  //   volHistory.push(freqVal);
  //   translate(width/2,height/2);

  let waveform = fft.waveform();
  beginShape();
  noFill();
  strokeWeight(2);
  stroke(255);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  //   if(volHistory.length>360){
  //     volHistory.splice(0,1);
  //   }
}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  console.log('mouseReleased')
  osc.stop();
}

// function togglePlaying() {
//   if (!song.isPlaying()) {
//     song.play();
//     song.setVolume(0.3);
//     button.html('pause');
//   } else {
//     song.pause();
//     button.html('play');
//   }
// }

// https://editor.p5js.org/jht1493/sketches/gODjef3N4
// 17.4_amplitudeSong

// https://editor.p5js.org/jht1493/sketches/JzUpCtscr
// 17.1_playSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.4_amplitudeSong

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/NCCHQwNAN6Y

// song rainbow.mp3 extracted from this site
// to be more pleasing to the ear
// and small enough to load into web editor
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales
