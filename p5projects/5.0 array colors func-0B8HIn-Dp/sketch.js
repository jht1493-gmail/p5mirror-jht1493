// https://editor.p5js.org/jht1493/sketches/0B8HIn-Dp
// 5.0 array colors func

let nstep = 8;
let acolors = ["aqua", "fuchsia", "lime", "maroon", "teal"];
// "navy", "olive", "purple", "silver",
// "yellow", "blue", "green", "red",

let colorIndex = 0;
let xloc = 0;
let yloc = 0;
let xstep;
let ystep;

function setup() {
  createCanvas(400, 300);
  xstep = width / nstep;
  ystep = height / nstep;
  background(220);
}

function draw() {
  // colorIndex = (colorIndex + 1) % acolors.length;
  // let scolr = acolors[colorIndex];
  let scolr = next_color();
  fill(scolr);
  rect(xloc, yloc, xstep, ystep);

  next_location();
}

function next_location() {
  xloc += xstep;
  if (xloc > width) {
    xloc = 0;
    yloc += ystep;
    if (yloc > height) {
      yloc = 0;
    }
  }
}

function next_color() {
  colorIndex = (colorIndex + 1) % acolors.length;
  return acolors[colorIndex];
}

// https://editor.p5js.org/jht1493/sketches/VAXbwF4ag
// 5.0 array colors rect

// https://editor.p5js.org/jht1493/sketches/akS3a9N6d
// 5.0 array of colors names

// aqua,  blue, fuchsia, green, lime, maroon,
// navy, olive, purple, red, silver, teal, yellow

// https://editor.p5js.org/jht1493/sketches/vhPVm8WCWX
// color array
