//setting webcam variable
var video;
//setting scale of pixels
var vScale = 8;
//setting random pixel fill array
let colors = [];
let bg;

function preload() {
    bg = loadImage("water.png");
}

function setup() {
  createCanvas(640, 480);
  pixelDensity(2);
  //getting webcam footage
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  //setting fill options for pixels
  colors = [
    "rgb(45,146,230)",
    "rgb(82,82,223)",
    "rgb(68,239,245)",
    "rgb(4,93,166)",
  ];
  //loading an image to serve as a backdrop
  // bg = loadImage("water.png");
}

function draw() {
  //calling image to background
  background(bg);

  //loading webcam as pixel array
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x - 1 + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var color = (r + g + b) / 3;

      var w = map(color, 0, 255, 0, vScale);
      //manipulating presentation of webcam pixels
      noStroke();
      fill(random(colors));
      rect(x * vScale, y * vScale, w, w, 25);
    }
  }
}

//credits

//pixel array + scale/mapping adapted from JHT's "Brightness Mirror"
//https://editor.p5js.org/icm/sketches/SyeOs86a-
