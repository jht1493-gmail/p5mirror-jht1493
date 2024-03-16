
let a_video;
let a_scale = 2;

function setup() {
  createCanvas(320*a_scale, 240*a_scale);
  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.hide();
}

function draw() {
  // background(220);
  image(a_video, 0, 0);
  // return
  noStroke();
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      // Calculate the distance of this cell 
      // to the mouse
      let d = dist(x, y, mouseX, mouseY);
      // Use the distance to color the cell
      let c = map(d, 0, 100, 255, 0);
      fill(c, c);
      rect(x, y, 10, 10);
    }
  }
}

