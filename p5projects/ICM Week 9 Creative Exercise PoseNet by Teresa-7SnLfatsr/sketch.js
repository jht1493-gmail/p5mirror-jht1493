let poseNet;
let video;
let pose;
let imgs = [];
let index = 0;
let slider;
let mouth;
let s;

function preload() {
  for (i = 0; i < 4; i++) {
    imgs[i] = loadImage("creepy" + i + ".png");
  }
  mouth = loadImage("mouth.png");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  pixelDensity(1);
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  //filter(INVERT)
  //DOM button
  button = createButton("Click");
  button.position(0, 0);
  button.mousePressed(creepyEyes);
  //DOM slider
  slider = createSlider(0, 255);
  slider.position(50, 0);
  slider.style("width", "200px");
}

function draw() {
  background(220);
  image(video, 0, 0, width, height);
  //Why do I need this if statement when I have creepEyes? It won't work without this one!
  if (pose) {
    push();
    imageMode(CENTER);
    image(imgs[index], pose.leftEye.x, pose.leftEye.y);
    image(imgs[index], pose.rightEye.x, pose.rightEye.y);
    pop();
  }
  s = slider.value();
  if (pose) {
    push();
    imageMode(CENTER);
    console.log(s);
    image(mouth, pose.nose.x, pose.nose.y + 50, s);
    pop();
  }
}

function creepyEyes() {
  if (pose) {
    if (index == imgs.length - 1) {
      index = 0;
      push();
      imageMode(CENTER);
      image(imgs[index], pose.leftEye.x, pose.leftEye.y);
      image(imgs[index], pose.rightEye.x, pose.rightEye.y);
      pop();
    } else {
      index++;
      push();
      imageMode(CENTER);
      image(imgs[index], pose.leftEye.x, pose.leftEye.y);
      image(imgs[index], pose.rightEye.x, pose.rightEye.y);
      pop();
    }
  }
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelReady() {
  console.log("ready");
}

// https://editor.p5js.org/jht1493/sketches/7SnLfatsr

// https://editor.p5js.org/qiqirathwang/sketches/jdpJvLPO_
// ICM Week 9 Creative Exercise PoseNet by Teresa
