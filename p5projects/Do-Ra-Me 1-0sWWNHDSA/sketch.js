let a_notes = [
  'media/Do.m4a',
  'media/Fa.m4a',
  'media/La.m4a',
  'media/Me.m4a',
  'media/Ra.m4a',
  'media/So.m4a',
  'media/Te.m4a',
  'media/Do-2.m4a',
];
let mySound;
function preload() {
  // print('a_notes[0]', a_notes[0])
  mySound = loadSound(a_notes[0]);
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}