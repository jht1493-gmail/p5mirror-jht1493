let imgSnape;

function preload() {
  imgSnape = loadImage('snape.jpeg');
  //pixelDensity(1);
}
function setup() {
  createCanvas(400, 400);
  background(255);
  console.log('imgSnape.width', imgSnape.width, 'imgSnape.height', imgSnape.height )

}

function draw() {
  image(imgSnape, 0, 0);
}

function mousePressed() { 
  imgSnape.loadPixels();
  // Loop over every pixel in the image
  for (let y = 0; y < imgSnape.height; y++) {
    for (let x = 0; x < imgSnape.width; x++) {
      // Read the pixel's color
      let originalColor = imgSnape.get(x, y);

      // Inverse the color
      const r = 200 - red(originalColor);
      const g = 200 - green(originalColor);
      const b = 200 - blue(originalColor);
      let outputColor = color(r, g, b);
    
      // Set the pixel's color
      imgSnape.set(x, y, outputColor);
    }
  }
  imgSnape.updatePixels();
}