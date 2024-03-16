let img;
var button;
let input;
let intro1 = "Make A Wish On A Shooting Star";
let intro2 = "type in your wish";
let wish;
let vid;
let playVideo = false;

function preload() {
  img = loadImage("meteoritetwo.png");
}

function setup() {
  createCanvas(600, 600);
  background(0);
  image(img, 200, 150, 200, 200);

  wish = getItem("wish");
  if (wish === null) {
    wish = "";
  }

  //text input
  input = createInput(wish);
  input.position(200, 500);
  input.size(120);
  input.input(myInputEvent);

  //submit button
  button = createButton("submit");
  button.position(340, 500);
  button.mousePressed(submitClicked)
}

function submitClicked() {
  console.log('submitClicked')
  playVideo = true;
}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {
  drawpage1();
  if (playVideo) {
    drawpage2();
    playVideo = false;
  }
}

function mouseClicked() {
  console.log("mouseClicked", mouseX, mouseY);
  if (mouseX > 200 && mouseX < 300) {
    playVideo = true;
  }
  // To get rid of video
  // vid.remove()
}

function drawpage1() {
  fill("white");
  textFont("helvetic");
  textSize(15);
  // text(contents, 200, 400, width-40, height-40);
  fill(188);
  textSize(18);
  text(intro1, 180, 460, 600, 80);
  // text(wish, 100, 100, 600, 80);
}

// only this once to start video playing
function drawpage2() {
  //video 1
  vid = createVideo(["meteorite_one.mov"], vidLoad);
  vid.position(0, 0);
  vid.size(600, 600);
}

function myInputEvent() {
  console.log("you are typing: ", this.value());
  wish = this.value();
  storeItem("wish", wish);
}
