let monoSynth;
let a_notes = {
  a: 'C4',
  s: 'Db4',
  d: 'D4',
  f: 'Eb4',
  g: 'E4',
  h: 'F4',
  j: 'Gb4',
  k: 'G4',
  l: 'Ab4',
  ';': 'A4',
  '\'': 'Bb4',
  'Enter': 'B4'
}


function setup() {
  let cnv = createCanvas(100, 100);

  // cnv.mousePressed(playSynth);
  background(220);
  // textAlign(CENTER);
  text('type asdf to play', 10, height/2);

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
  let dur = 1 / 6;

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