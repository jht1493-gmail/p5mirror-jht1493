let song;
let amp;
let button;

let volhistory = [];
let ct; // Current time for debugging

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('rainbow.mp3');
}

function setup() {
  createCanvas(200, 200);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  // song.play();
  song.loop();
  amp = new p5.Amplitude();
}

function draw() {
  // console.log can affect performance
  ct = song.currentTime();
  // console.log('ct', ct);
  
  background(0);
  let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  let n = volhistory.length;
  for (let i = 0; i < n; i++) {
    let r = map(volhistory[i], 0, 1, 10, 100);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);
}

// https://editor.p5js.org/jht1493/sketches/Q1gCKuVib
// 17.10_radialGraph
// Corrected for loop limit to volhistory.length

// https://editor.p5js.org/jht1493/sketches/JzUpCtscr
// 17.1_playSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.1_playSong

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

// song rainbow.mp3 extracted from this site
// to be more pleasing to the ear
// and small enough to load into web editor
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales



