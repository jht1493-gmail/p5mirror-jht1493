let x = 0;
let y = 0;

var speed = {
  x: 2,
  y: 1
}

var init = false;
let a_size = 90;

function setup() {
  createCanvas(640, 480);
  a_video = createCapture(VIDEO);
  a_video.size(80, 60);
  a_video.hide();
  
    // createSlider(min, max, [value], [step])
  let = slider4 = createSlider(80, 200, 80, 10);
  slider4.input(function() {
    a_size = slider4.value();
  });

}

function draw() {
  background(0);
  squ();
  move()
}

function squ() {
  if (init) {
    tint(0, 0, 255);
  } else {
    tint(180, 155, 120);
  }
}

function move() {
  noStroke();
  image(a_video, x, y, a_size, a_size);
  x = x + speed.x
  y = y + speed.y;
  if (x > width - 80 || x < 0)
    speed.x = -speed.x;
  if (y > height - 60 || y < 0)
    speed.y = -speed.y;
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < 60) {
    init = !init;
  }
}
