
// How to add  bright mirror in one video which is only half or 1/4 of whole canvas?

var video;
var vScale = 16;
let v_width = 800;
let v_height = 600;

function setup() {
  createCanvas(v_width, v_height);
  background(51);
  video = createCapture(VIDEO);
  video.size(v_width / 2, v_height / 2);
  video.hide();
  video.position(0, v_height / 2);
}

function draw() {
  //original video
  //top left video
  tint(255, 60, 60, 10);
  image(video, 0, 0, width / 2, height / 2);
  //top right video
  tint(60, 250, 60, 10);
  image(video, v_width / 2, 0, width / 2, height / 2);
  //bottom right
  tint(60, 250, 250, 10);
  image(video, v_width / 2, v_height / 2, width / 2, height / 2);
  //bottom left video
  tint(18, 100, 120, 10);
  image(video, 0, v_height / 2, width / 2, height / 2);

  //top right video flip vertical axis
  tint(0, 205, 190, 10);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(video, 0, v_height / 2, width / 2, height / 2);

  //bottom left video flip H+V axis
  tint(20, 200, 250, 10);
  //flip the video over vertical axis
  translate(0, height);
  // -1_x, 1_y
  scale(1.0, -1.0);
  image(video, width / 2, 0, width / 2, height / 2);

  //top lest flip vertical video
  tint(255, 250, 205, 10);
  translate(0, height);
  scale(1.0, -1);
  image(video, 0, 0, width / 2, height / 2);

  //bottom left flip vertical
  tint(225, 120, 200, 10);
  image(video, width / 2, height / 2, width / 2, height / 2);

  //bottom right
  tint(100, 250, 50, 10);
  image(video, 0, height / 2, width / 2, height / 2);

  //top right flip H
  tint(255, 250, 205, 10);
  translate(width, height);
  scale(-1.0, -1);
  image(video, v_width / 2, v_height / 2, width / 2, height / 2);

  //bottom left flip vertical acis
  tint(200, 18, 180, 10);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(video, v_width / 2, v_height / 2, width / 2, height / 2);
}

// https://editor.p5js.org/jht1493/sketches/4cFcflomH

// https://editor.p5js.org/DerJuni/sketches/Z1Dz34VTI
// WK8Ex by June
