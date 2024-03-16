let a_video;
let a_scale = 2;

function setup() {
  createCanvas(320 * a_scale, 240 * a_scale);
  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.hide();
}

function draw() {
  image(a_video, 0, 0);

  let x = mouseX;
  let y = mouseY;
  stroke('red');
  noFill();
  line(0,y, width, y);
  line(x, 0, x, height);

}