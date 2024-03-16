let a_files = [
  'media/Do.m4a',
  'media/Ra.m4a',
  'media/Me.m4a',
  'media/Fa.m4a',
  'media/So.m4a',
  'media/La.m4a',
  'media/Te.m4a',
  'media/Do-2.m4a',
];
let a_notes = [];
let a_index = 7;

function preload() {
  // print('a_files', a_files)
  for (let item of a_files) {
    a_notes.push(loadSound(item))
  }
}

function setup() {
  let cnv = createCanvas(200, 100);
  cnv.mousePressed(canvasPressed);
}

function draw() {
  background(220);
  text('tap here to play a_index='+a_index, 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  a_index = (a_index + 1) % a_notes.length;
  a_notes[a_index].play();
}