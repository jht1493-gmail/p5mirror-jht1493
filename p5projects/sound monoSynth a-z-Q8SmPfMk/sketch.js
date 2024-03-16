let monoSynth;
let a_notes = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4',
  'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'
]

function setup() {
  let cnv = createCanvas(100, 100);

  // cnv.mousePressed(playSynth);
  // background(220);
  // textAlign(CENTER);
  // text('tap to play', width/2, height/2);

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
  let index = (keyCode - 65) % a_notes.length;
  let note = a_notes[ index ];
  playSynth(note);

  return false; // prevent default
}

// Explore other valus for notes
// Map key presses to notes.