let img;

var song;
var slider;
// let togglePlaying;

function preload() {
  song = loadSound("music1.mp3");
  img = loadImage("cover1.jpeg");
}

function setup() {
  createCanvas(600, 600);
  // song = loadSound("music1.mp3", loaded);
  buttom = createButton("play");
  buttom.mousePressed(togglePlaying);
}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  console.log('toggleplaying')
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.5);
  }
}
function draw() {
  background(10);
  image(img, 0, 0);
}
