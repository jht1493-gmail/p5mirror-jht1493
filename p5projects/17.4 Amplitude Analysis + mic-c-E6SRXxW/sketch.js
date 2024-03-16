
let mic;
// var button;

function setup() {
  createCanvas(200, 200);
  
  // amp = loadSound('this-dot-kp.mp3', loaded);
  // amp = new p5.Amplitude();
  
  mic = new p5.AudioIn();
  background(51);

  // button = createButton('play');
  // button.mousePressed(togglePlaying);

  mic.start();

}

function draw() {
  background(51);

  var vol = mic.getLevel();
  
  var diam = map(vol, 0, 0.3, 10, 200);

  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam, diam);
}

// function togglePlaying() {
//   if (!mic.isPlaying()) {
//     mic.play();
//     mic.setVolume(0.3);
//     button.html('pause');
//   } else {
//     mic.stop();
//     button.html('play');
//   }
// }

// 17.4_amplitudeSong/sketch.js
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/NCCHQwNAN6Y