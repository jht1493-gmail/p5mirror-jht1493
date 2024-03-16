let sounds = [];
let h = 0;
let a_vol = 0.025;
let n_samples = 7;
let a_period = 4;
// let drum_select = 0; // Drum 0
let drum_select = -1; // Vary drum
let last_secs;
let a_offset;
let g_layer;
let a_checked = [];
let beat = 60;

function preload() {
  for (let s = 0; s < n_samples; s++) {
    sounds.push(loadSound('zata/' + s + '.mp3'));
  }
}

function setup() {
  createCanvas(340, 200);
  g_layer = createGraphics(340, 180);
  h = g_layer.height / sounds.length;
  g_layer.colorMode(HSB, n_samples);
  g_layer.background('white');
  g_layer.noStroke();
  noStroke();
  sketch_ui();
  last_secs = millis() / 1000;
}

function draw() {
  background('gray');

  let secs = millis() / 1000;
  show_num('secs', secs)
  a_offset = round(secs - last_secs, 2);
  if (a_offset > a_period) {
    last_secs = secs;
    a_offset = 0;
    g_layer.background('white');
    drum_played = {};
  }
  show_num('offset', a_offset);

  fill('black');
  let x_period = width * a_offset / a_period;
  rect(x_period, 180, 5, 20);

  let x = width * a_offset / a_period;
  image(g_layer, 0, 0);

  let y = 0;
  for (let index = 0; index < n_samples; index++) {
    let test = drum_time(index);
    // print('index', index, 'test', test);
    if (test) {
      drum_play(index);
      g_layer.fill(index, 50, 50);
      g_layer.rect(x, y, 5, 15);
    }
    y += h;
  }
}

function drum_time(index) {
  if (! a_checked[index]) return false;
  // let fc = frameCount;
  let fc = floor(millis() / 1000 * 30 );
  // print(frameCount, 'fc', fc);
  let test = fc % floor(beat / (n_samples - index)) == 1;
  return test;
}

function drum_play(index) {
  let dindex = index;
  if (drum_select >= 0) dindex = drum_select;
  let snd = sounds[dindex];
  snd.setVolume(a_vol);
  snd.play();
}
