// https://editor.p5js.org/jht1493/sketches/akS3a9N6d
// 5.0 array of colors names

let acolors = [
  "aqua",
  "blue",
  "fuchsia",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "yellow",
];

let bColorIndex = 0;
let sColorIndex = 1;
let ax, ay, aw, ah;

function setup() {
  createCanvas(400, 300);
  ax = width / 3;
  ay = height / 3;
  aw = ax;
  ah = ay;
}

function draw() {
  let n = acolors.length;
  bColorIndex = round((n - 1)* (mouseX / width)) % n;
  let bcolr = acolors[bColorIndex];
  background(bcolr);

  sColorIndex = round((n - 1)* (mouseY / height)) % n;
  let scolr = acolors[sColorIndex];
  fill(scolr);
  rect(ax, ay, aw, ah);
}

// aqua,  blue, fuchsia, green, lime, maroon,
// navy, olive, purple, red, silver, teal, yellow

// https://editor.p5js.org/jht1493/sketches/vhPVm8WCWX
// color array
