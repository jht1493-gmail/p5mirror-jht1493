var video;
var snapshots = [];
var counter = 0;
var total;
var w = 80;
var h = 60;

function setup() {
  createCanvas(w*5, h*3);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  frameRate(1);
  // How many cells fit in the canvas
  total = floor(width / w) * floor(height / h);
}

function draw() {
  var x = 0;
  var y = 0;

  snapshots[counter] = video.get();
  counter++;
  if (counter == total) {
    counter = 0;
  }

  for (var i = 0; i < snapshots.length; i++) {
    //tint(255, 50);
    var index = (i + frameCount) % snapshots.length;
    if (index < 0) continue;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
}

// https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js_video/11.2_p5.js_photoBooth/sketch.js