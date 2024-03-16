function setup() {
  // same as new p5.Image(100, 100);
  let img = createImage(100, 100); 
  img.loadPixels();
  createCanvas(100, 100);
  background(0);

  // helper for writing color to array
  function writeColor(image, x, y, red, green, blue, alpha) {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }

  let x, y;
  // fill with random colors
  // for (y = 0; y < img.height; y++) {
  //   for (x = 0; x < img.width; x++) {
  //     let red = random(255);
  //     let green = random(255);
  //     let blue = random(255);
  //     let alpha = 255;
  //     writeColor(img, x, y, red, green, blue, alpha);
  //   }
  // }

  // draw a red line
  y = height / 4;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 255, 0, 0, 255);
  }

  // draw a green line
  y = img.height - y;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 0, 255, 0, 255);
  }

  img.updatePixels();
  image(img, 0, 0);
}

// https://p5js.org/reference/#/p5.Image
