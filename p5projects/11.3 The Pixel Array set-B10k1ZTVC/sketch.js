// https://editor.p5js.org/jht1493/sketches/B10k1ZTVC
// 11.3: The Pixel Array set

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      // let col = color(x,random(255),y,255);
      let col = [x,random(255),y,255];
      set(x, y, col)
      // var index = (x + y * width) * 4;
      // pixels[index + 0] = x;
      // pixels[index + 1] = random(255);
      // pixels[index + 2] = y;
      // pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

// TRY: check performance with frameRate()


// https://editor.p5js.org/jht1493/sketches/GiSAQWxq4
// 11.3: The Pixel Array

// https://github.com/CodingTrain/website/blob/
//    master/Tutorials/P5JS/p5.js_video