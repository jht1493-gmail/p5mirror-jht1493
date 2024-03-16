let monoSynth;
let a_notes = {
  a: 'Ab4',
  s: 'A4',
  d: 'Bb4',
  f: 'B4',
  g: 'C4',
  h: 'Db4',
  j: 'D4',
  k: 'Eb4',
  l: 'E4',
  ';': 'F4',
  '\'': 'Gb4',
  'Enter': 'G4',
}


function setup() {
  let cnv = createCanvas(100, 100);

  // cnv.mousePressed(playSynth);
  background(220);
  // textAlign(CENTER);
  text('type asdf to play', 10, height / 2);

  monoSynth = new p5.MonoSynth();
}

function playSynth(note) {
  userStartAudio();

  // note velocity (volume, from 0 to 1)
  // let velocity = random();
  let velocity = 0.5;

  // time from now (in seconds)
  let time = 0;

  // note duration (in seconds)
  let dur = 1 / 3;

  monoSynth.play(note, velocity, time, dur);
}

function keyPressed() {
  background('yellow');
  text(`${key} ${keyCode}`, 10, 40);
  print(key, ' ', keyCode);

  // let note = random(['Fb4', 'G4']);
  // let index = (keyCode - 65) % a_notes.length;
  let note = a_notes[key];
  if (note) {
    playSynth(note);

  }

  return false; // prevent default
}

// Explore other valus for notes
// Map key presses to notes.