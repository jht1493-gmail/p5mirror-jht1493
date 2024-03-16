/* Use an image’s pixel array to apply a custom filter to it. For example, take an image that is in color and display it in black and white. Or take a black and white image and display it with color. Or try something different! Look for inspiration from, but do not use the p5.Image filter( ) method nor tint( ). */

let macF;

function preload() {
  macF = loadImage("macF.jpg");
}

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);
  bwB = createButton("blackandwhite");
  bwB.mousePressed(bwpressed);
  bwB = createButton("negative");
  bwB.mousePressed(bwpressed);
  pixelDensity(1)
}

function draw() {
  image(macF, 0, 0, windowWidth / 2, windowHeight / 2);
  if (mouseIsPressed && mouseX < 100) {
    bwpressed();
  } else if (mouseIsPressed && mouseX > 100 && mouseX < 200) {
    negative();
  }
}

function bwpressed() {
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = pixels[index + 0];
      var g = pixels[index + 1];
      var b = pixels[index + 2];
      var a = pixels[index + 3];

      var bw = (r + g + b) / 3;

      pixels[index + 0] = bw;
      pixels[index + 1] = bw;
      pixels[index + 2] = bw;
    }
  }
  updatePixels();
}

function negative() {
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = pixels[index + 0];
      var g = pixels[index + 1];
      var b = pixels[index + 2];
      var a = pixels[index + 3];

      pixels[index + 0] = 255 - r;
      pixels[index + 1] = 255 - g;
      pixels[index + 2] = 255 - b;
    }
  }
  updatePixels();
}


//ref: https://idmnyu.github.io/p5.js-image/Filters/index.html
//image from Macross Frontier: https://www.google.com/search?q=macross+frontier+itano+circus&newwindow=1&sxsrf=ALiCzsa1kKrQkPRnhZ773LLrbjC5kMiDeA:1667406273586&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjej4i19I_7AhU8LFkFHZJSA3wQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1#imgrc=MaGT8bVFiNuezM
