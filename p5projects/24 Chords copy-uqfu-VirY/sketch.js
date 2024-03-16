// Array of oscillators
let oscs = [];
// Note ratios
let notes = [1, 1.125, 1.25, 1.334, 1.5, 1.667, 1.875, 2];
// Base frequency
let BASE = 300;
let dur = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Loop through all the oscillators
  for (let o = 0; o < oscs.length; o++) {
    let osc = oscs[o];
    // Get the oscillator's volume level
    let volume = osc.amp().value;
    // If it's reached 1, fade it out over 5 seconds
    if (volume >= 1) {
      osc.amp(0, dur);
    }
    // If it's fully faded out...
    else if (volume <= 0) {
      // Stop the oscillator
      osc.stop();
      // Remove it from the array
      oscs.splice(o, 1);
    }
  }
}

// Create a new oscillator on each keypress
function keyPressed() {
  let osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(BASE * random(notes));
  osc.start();
  osc.amp(0);
  // Fade it in over 5 seconds
  osc.amp(1, dur);
  // Add it to the array of oscillators
  oscs.push(osc);
}