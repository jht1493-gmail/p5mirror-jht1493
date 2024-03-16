let a_keys = {};
let a_notes = {
  'a': 261.6256,  // Piano key 40 C4 Middle C
  's': 277.1826,
  'd': 293.66482,
  'f': 311.1270,
  'g': 329.6276,
  'h': 349.2282,
  'j': 369.9944,
  'k': 391.9954,
  'l': 415.3047,
  ';': 440.0000,
  '\'': 466.1638,
  'Enter': 493.8833
};
let a_waves = {};
let fade_in = 0.1;
let fade_out = 1;
let a_volume = 0.1;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(200);

  fill(0, 0, 0);
  textSize(28)

  let h = height / 2;
  text('Press any key on row A', 10, h);

  text(JSON.stringify(a_keys), 10, h + 30);

  text('key=' + key + ' keyCode=' + keyCode, 10, h + 60);
}

// Create a new oscillator on each keypress
function keyPressed() {
  // print('keyPressed', key);
  a_keys[key] = 1;

  let freq = a_notes[key];
  if (freq !== undefined) {
    let wave = a_waves[key];
    if (!wave) {
      wave = new p5.Oscillator();
      wave.setType('sine');
      wave.freq(freq);
      wave.start();
      wave.amp(0);
      wave.amp(a_volume, fade_in);
      a_waves[key] = wave;
    }
  }
  
  // prevent any default behavior
  return false;
}

function keyReleased() {
  // print('keyReleased', key);
  delete a_keys[key];

  let wave = a_waves[key];
  if (wave) {
    wave.amp(0, fade_out);
    delete a_waves[key];
  }

  // prevent any default behavior
  return false;
}

// https://en.wikipedia.org/wiki/Piano_key_frequencies

// https://editor.p5js.org/icm4.0/sketches/NArBLGfRM
// Random Diatonic Chords 2:4 Chords

// A-G-K --> "C Major cord"
// D-J-; --> "D cord"
// G-L-Enter --> "E Major cord"
//