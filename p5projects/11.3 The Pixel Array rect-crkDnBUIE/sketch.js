// https://editor.p5js.org/jht1493/sketches/crkDnBUIE
// 11.3: The Pixel Array rect

let img;
let boxlen = 8;

function preload() {
  img = loadImage('jt_cu.jpg');
}
function setup() {
  // createCanvas(320, 240);
  console.log('img.width', img.width);
  console.log('img.height', img.height);
  createCanvas(img.width, img.height);
  pixelDensity(1);
  noStroke();
}


function draw() {
  background(51);

  for (var y = 0; y < height; y += boxlen) {
    for (var x = 0; x < width; x += boxlen) {
      // let col = color(x,random(255),y,255);
      let col = img.get(x, y);
      fill(col);
      rect(x,y,boxlen,boxlen);
    }
  }
  // image(img, width/2, 0);
}

// TRY: replacing image
// TRY: laying original image

// TRY: check performance with frameRate()

// https://editor.p5js.org/jht1493/sketches/B10k1ZTVC
// 11.3: The Pixel Array vs set/get

// https://editor.p5js.org/jht1493/sketches/GiSAQWxq4
// 11.3: The Pixel Array

// https://github.com/CodingTrain/website/blob/
//    master/Tutorials/P5JS/p5.js_video