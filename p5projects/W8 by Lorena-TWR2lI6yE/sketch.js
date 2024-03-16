// jht: added position global variable
let pic1;
let dovima;
let sky;
let nub;
let slider;
let position;

function preload() {
  pic1 = loadImage("pic1.png");
  dovima = loadImage("dovima.png");
  sky = loadImage("sky.jpg");
  nub = loadImage("nub.jpg");
}
function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 100);
}

function draw() {
  background(0);
  image(sky, 0, 0);
  tint(255, 126);
  image(nub, 0, 0);
  image(pic1, 0, 0);
  image(dovima, 200, 300);

  // position = setColor(slider.value());
  position = slider.value();
  console.log('position', position);
}
function mousePressed() {
  tint(255, 100, 250);
  image(dovima, 0, 0);
}

// https://editor.p5js.org/jht1493/sketches/TWR2lI6yE

// https://editor.p5js.org/lolo.ostia/sketches/HVk7Isa9U
// W8 by Lorena

//IMAGE: "DOVIMA WITH THE ELEPHANTS" RICHARD AVEDON
//CRYSTAL https://www.pngitem.com/middle/JJiohJ_crystal-png-transparent-png/
//SKY https://www.wallpaperflare.com/purple-clouds-on-teal-sky-miami-beach-miami-beach-fathers-day-wallpaper-mpohr
