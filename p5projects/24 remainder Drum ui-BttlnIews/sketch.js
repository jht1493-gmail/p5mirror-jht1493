let sounds = [];
let x = 0;
let h = 0;
let beat = 60;
let a_vol = 0.025;
let a_fr = 25;
let a_checked = [];
let n_samples = 7;
// let drum_select = 0; // drum 0
let drum_select = -1; // Vary drum

function preload() {
  for (let s = 0; s < n_samples; s++) {
    sounds.push(loadSound('zata/' + s + '.mp3'));
    a_checked.push(false);
  }
}

function setup() {
  createCanvas(340, 200);
  h = height / sounds.length;
  noStroke();
  frameRate(a_fr);
  sketch_ui();
  // print('setup frameRate()', frameRate())
  // frameRate() = 0
  colorMode(HSB, n_samples);
}

function draw() {
  // print('draw frameRate()', frameRate())
  // frameRate() = 29.0 - 30.0
  x++;
  if (x > width) {
    background('white');
    x = 0;
  }
  // print('frameCount percent beat', frameCount % beat)

  let y = 0;
  for (let index = 0; index < n_samples; index++) {
    // let test = frameCount % floor(beat / (index + 1)) == 1;
    let test = frameCount % floor(beat / (n_samples - index)) == 1;
    // print('index', index, 'test', test);
    if (a_checked[index] && test) {
      let sindex = drum_select;
      if (drum_select < 0) sindex = index;
      let snd = sounds[sindex];
      snd.setVolume(a_vol);
      snd.play();
      fill(index, 50, 50);
      rect(x, y, 5, 15);
    }
    y += h;
  }
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder