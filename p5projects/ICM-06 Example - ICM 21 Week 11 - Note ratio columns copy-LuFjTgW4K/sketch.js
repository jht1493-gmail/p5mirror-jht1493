/* 
Note ratios
Tuning for C major, diatonic scale (white piano keys)
Use different ratios for different scales
C 1/1 ~ D 9/8 ~ E 5/4 ~ F 4/3 ~ G 3/2 ~ A 5/3 ~ B 15/8 ~ C 2/1
*/

let notes = [1, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2];

let sound;
let colWidth;
let currentCol;

function preload() {
  sound = loadSound("gong.mp3");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  // p5js.org/reference/#/p5.SoundFile/playMode
  sound.playMode("restart"); // try 'sustain'
  // sound.playMode("sustain"); // try 'sustain'

  // set column width according
  // to length of notes' array
  colWidth = width / notes.length;
}

function draw() {
  background(220);

  for (let col = 0; col < notes.length; col++) {
    let x = col * colWidth;

    // if mouse is in a column
    if (mouseX > x && mouseX < x + colWidth) {
      // give it a color
      let hue = col * (360 / notes.length);
      fill(hue, 100, 100);

      // play a note
      if (currentCol != col) {
        sound.rate(notes[col])
        // sound.rate(notes[col] * 2)
        sound.play();
        currentCol = col;
        
      }
    } else {
      fill(255);
    }
    rect(x, 0, colWidth, height);
  }
}
