// Mimi Yin
// NYU ITP

let cat;
let skip = 10;

function preload() {
  // Load rainbow cat image
  cat = loadImage("rainbow_cat.jpg");
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
    
  for (let x = 0; x < cat.width; x += skip) {
    for (let y = 0; y < cat.height; y += skip) {
      //colorMode(RGB);
      // Get this pixel's color information in RGB format
      let pixel = cat.get(x, y);
      // Convert it to HSB
      let h = hue(pixel);
      let s = saturation(pixel);
      let b = brightness(pixel);
      // Compress hues to reds and oranges
      h = map(h, 0, 360, 0, 30);
      // Compress saturation to mid-tones
      s = map(s, 0, 100, 40, 60);
      // Compress brightness to low
      b = map(b, 0, 100, 20, 30);
      colorMode(HSB, 360, 100, 100, 1);
      // Draw a point with HSB at 50% transparency
      stroke(h, s, b, 0.5);
      // Draw a point at x,y that's 4x the gap between points.
      strokeWeight(skip * 4);
      point(x, y);
    }
  }

  // Original Cat
  image(cat, 0, 200);
}