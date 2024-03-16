let song;
let button;

function setup() {
  createCanvas(200, 200);
  song = loadSound('rainbow.mp3', loaded);
  button = createButton('play');
  button.mousePressed(togglePlaying);
  background(51);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
  } else {
    // song.stop();
    song.pause();
    button.html('play');
  }
}

function loaded() {
  console.log('loaded');
}

// https://editor.p5js.org/jht1493/sketches/g0Y0DrH1a
// 17.2_pauseSong

// https://editor.p5js.org/jht1493/sketches/JzUpCtscr
// 17.1_playSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.2_pauseSong

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/YcezEwOXun4

// song rainbow.mp3 extracted from this site
// to be more pleasing to the ear
// and small enough to load into web editor
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales



