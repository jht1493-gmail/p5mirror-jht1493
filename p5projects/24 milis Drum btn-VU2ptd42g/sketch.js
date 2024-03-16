let sounds = [];
let h = 0;
let a_vol = 0.025;
let n_samples = 7;
let a_period = 1;
// let drum_select = -1; // Vary drum
let drum_select = 0;
let drum_offsets = {};
let drum_played = {};
let last_secs;
let a_offset;
let g_layer;

function preload() {
  for (let s = 0; s < n_samples; s++) {
    sounds.push(loadSound('zata/' + s + '.mp3'));
  }
}

function setup() {
  createCanvas(340, 200);
  g_layer = createGraphics(340, 180);
  h = g_layer.height / sounds.length;
  noStroke();
  sketch_ui();
  g_layer.colorMode(HSB, n_samples);
  last_secs = millis() / 1000;
  g_layer.background('white');
}

function draw() {
  background('gray');

  show_value('drums', drum_offsets);
  show_value('played', drum_played);

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

function drum_play(index) {
  let dindex = index;
  if (drum_select >= 0) dindex = drum_select;
  let snd = sounds[dindex];
  snd.setVolume(a_vol);
  snd.play();
}

function drum_pressed(index) {
  print('drum_pressed index', index);
  drum_play(index)
  drum_offsets[index] = a_offset;
}

function drum_time(index) {
  let doffset = drum_offsets[index];
  // print('index', index, 'doffset', doffset)
  if (doffset !== undefined) {
    if (doffset <= a_offset) {
      let played = drum_played[index];
      // print(frameCount, 'index', index, 'doffset', doffset, 'played', played)
      if (played !== undefined) {
        return false;
      } else {
        drum_played[index] = a_offset;
        return true;
      }
    }
    return false;
  }
  return false;
}

function drum_clear() {
  drum_offsets = {};
  drum_played = {};
  g_layer.background('white');
}