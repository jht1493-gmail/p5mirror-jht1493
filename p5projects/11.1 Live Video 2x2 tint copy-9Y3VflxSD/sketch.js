let a_video;
let a_width = 320;
let a_height = 240;
let n_tile = 2;
let a_alpha = 10;

function setup() {
  createCanvas(a_width*n_tile, a_height*n_tile);
  background(51);
  a_video = createCapture(VIDEO);
  a_video.size(a_width, a_height);
  a_video.hide();
  // a_video.position(a_width/2, a_height/2)
}

function draw() {
  tint(255, 0, 0, a_alpha);
  image(a_video, 0, 0, a_width, a_height);
  
  tint(0, 255, 0, a_alpha);
  image(a_video, a_width, 0, a_width, a_height);

  tint(0, 0, 255, a_alpha);
  image(a_video, 0, a_height, a_width, a_height);
  
  tint(255, 0, 255, a_alpha);
  image(a_video, a_width, a_height, a_width, a_height);

  // tint(255);
  tint(255, a_alpha);
  image(a_video, a_width/2, a_height/2, a_width, a_height);
}