var video;
var vScale = 9;

let a_images = [];
let a_vid;
let b_vid = [];
let w = 540;
let h = 800;
let a_scale = 8;
let vw = w / a_scale;
let vh = h / a_scale;

function preload() {
  a_images[0] = loadImage("one.png"); 
}


function setup() {
  frameRate(29);
  createCanvas(w, h);
  pixelDensity(1);

  // video = createCapture(VIDEO);
  // video.size(width / vScale, height / vScale);
  draw_one();
}

function draw_one() {
  a_images[0].resize(vw, vh);
  background(240);
  // background('#8AC4CE');

  // Load Image
  // image(a_images[0], 0, 0, 500, 800);


  // Access
  // video.size(32, 24);
  let img = a_images[0];
  // let img = video; // a_images[0];
  print('img.width', img.width, 'img.height', img.height)
  
  // let col = img.get(0,0);
  // print('col', col);
    
  // 1. Drawings pixels with space around them
  // 2. Printing the image based on size
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++ ) {
      // Drawing a pixel
      const pixelColor = img.get(i, j);
      let r = pixelColor[0];
      let b = pixelColor[1];
      let g = pixelColor[2];
      
      // Grayscale of the pixel
      let grayscale = (r + g + b) / 3;
      
      // let colorToUse = color(Math.pow(grayscale, 0.8));
      // let colorToUse = color(Math.pow(grayscale, 0.4));
      // let colorToUse = grayscale;
      let colorToUse = 0;
      
      let size = grayscale / 20;

      // Where to print the point / ellipse / rect
      const spacing = a_scale;
      let x = (i * spacing);
      let y = (j * spacing);

      fill(255, 255, 255, 100);
      
      // Point
      stroke(colorToUse);
      point(x, y);
      // point(x + map((mouseX - pmouseX), 0, 1000, 5, 1), y)
      strokeWeight(size);

      // Shapes with fill
      fill(colorToUse);
      noStroke();
      ellipse(x, y, size)
      // ellipse(x, y, 5)
      // ellipse(x, y, 3)
      // ellipse(x, y, 3)
    }
    
  }
}

// jht re-mix: removed unneeded code
//  replace use of getPixelValue with image.get
//  removed unused createCapture
//  added a_scale
//  fixed colorToUse at zero

// https://editor.p5js.org/stelaxhungles/sketches/zi3osIKuX

// img => [r, g, b] 
// -----------------
// getPixelValue(img, 10, 10) => [210, 40, 100]
// function getPixelValue(img, x, y) {
//   let index = 4 * (x + y * img.width);
//   let r = img.pixels[index + 0];
//   let g = img.pixels[index + 1];
//   let b = img.pixels[index + 2];

//   // return color(r, g, b)
//   return [r, g, b]
// }


