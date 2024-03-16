let a_keys = {};
let a_waves = {};
let fade_in = 0.1;
let fade_out = 0.5;
let a_volume = 0.1;
let a_fading = [];
let die_delay = 500;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(200);

  fill(0, 0, 0);
  textSize(28)

  let h = height / 2;
  text('Press any key on row 1, Q, A, Z', 10, h);
  text(JSON.stringify(a_keys), 10, h + 30);

  text('key=' + key + ' keyCode=' + keyCode, 10, h + 60);
  
  // text(JSON.stringify(a_fading), 10, h + 90);
  
  // print('a_fading', JSON.stringify(a_fading));
  
  // Remove notes after a delay time
  let now = millis();
  for (let index = a_fading.length - 1; index >= 0; index--) {
    let item = a_fading[index];
    if ( now - item.start > die_delay) {
      a_fading.splice(index, 1);
    }
  }
}

// Create a new oscillator on each keypress
function keyPressed() {
  // print('keyPressed', key);

  let freq = a_notes[key];
  // print('freq', freq)
  if (freq !== undefined) {
    a_keys[key] = freq || -1;
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
    let start = millis();
    a_fading.push({
      start,
      wave,
    });
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