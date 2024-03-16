let sounds = [];
let x = 0;
let h = 0;
let beat = 60;
let sb = beat - 10;
let a_vol = 0.025;
let a_fr = 30;
let a_checked = [];

function preload() {
  for (let s = 0; s < 7; s++) {
    sounds.push(loadSound('data/' + s + '.mp3'));
    a_checked.push(false);
  }
}

function setup() {
  createCanvas(640, 200);
  h = height / sounds.length;
  noStroke();
  frameRate(a_fr);
  sketch_ui();
}

function draw() {
  x++;
  if (x > width) {
    background('white');
    x = 0;
  }

  let y = 0;
  fill('black');
  if (a_checked[2] && frameCount % beat == 1) {
    sounds[2].setVolume(a_vol);
    sounds[2].play();
    rect(x, y, 5, 15);
  }

  y += h;
  // Mango drum  
  if (a_checked[0] && frameCount % floor(beat / 2) == 1) {
    sounds[0].setVolume(a_vol);
    sounds[0].play();
    rect(x, y, 5, 15);
  }

  y += h;
  // Pineapple
  if (a_checked[1] &&frameCount % floor(beat / 3) == 1) {
    sounds[1].setVolume(a_vol);
    sounds[1].play();
    rect(x, y, 5, 15);
  }

  y += h;
  //Syncopated drum
  if (a_checked[5] && frameCount % beat == sb) {
    sounds[5].setVolume(a_vol);
    sounds[5].play();
    rect(x, y, 5, 15);
    sb--;
  }

  y += h;
  // Phased drum
  if (a_checked[4] && frameCount % 50 == 1) {
    sounds[4].setVolume(a_vol);
    sounds[4].play();
    rect(x, y, 5, 15);
  }

}

function sketch_ui() {
  for (let index = 0; index < 7; index++) {
    let checkbox = createCheckbox('Drum ' + index, false);
    // print('checkbox', checkbox)
    checkbox.changed(function() {
      print('index', index, 'checked', this.checked());
      a_checked[index] = this.checked();
    });
  }
}

// https://editor.p5js.org/icm4.0/sketches/FzyRXOvyy
// 2:4 % Drum by icm4.0
