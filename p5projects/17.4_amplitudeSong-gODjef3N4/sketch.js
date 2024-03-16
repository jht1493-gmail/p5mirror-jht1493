let song;
let button;
let amp;

function setup() {
  createCanvas(200, 200);
  song = loadSound('rainbow.mp3', loaded);
  amp = new p5.Amplitude();
  background(51);
}

function loaded() {
  button = createButton('play');
  button.mousePressed(togglePlaying);
}

function draw() {
  background(51);

  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, 10, 200);

  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }
}

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



