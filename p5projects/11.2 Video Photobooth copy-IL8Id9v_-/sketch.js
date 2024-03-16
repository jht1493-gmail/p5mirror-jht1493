var video;
var button;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

function setup() {
  createCanvas(800 / 2, 300 / 2);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  // frameRate(1);
  // button = createButton('snap');
  // button.mousePressed(takesnap);
}

function draw() {
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;

  // How many cells fit in the canvas
  total = floor(width / w) * floor(height / h);

  snapshots[counter] = video.get();
  counter++;
  if (counter == total) {
    counter = 0;
  }

  print('snapshots.length', snapshots.length, 'total', total)
  if (snapshots.length < total) {
    return;
  }

  for (var i = 0; i < snapshots.length; i++) {
    //tint(255, 50);
    var index = (i + frameCount - 1) % snapshots.length;
    image(snapshots[index], x, y, w, h);

    print('i', i, 'frameCount', frameCount, 'index', index, 'x', x, 'y', y)

    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
}

// https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js_video/11.2_p5.js_photoBooth/sketch.js