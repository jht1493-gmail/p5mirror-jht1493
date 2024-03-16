let ball, floor;
let sprite;
let block;
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let r = 25;
var paddleX = 160;
var speed = 5;
let bounced = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  //mouseMoveMethod(movePaddle1);
  //mouseMoveMethod(movePaddle2);

  // world.gravity.y = 15;
  // block = new Sprite(30, 30);
  //floor = new Sprite(30, 300, 60, 5, 'static');
}

function drawEllipse() {
  // background(220);
  ellipse(x, y, r * 2, r * 2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
    bounced = false;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
    bounced = false;
    // noLoop();
  }
  if (x > paddleX-r && x < paddleX + 100 + r && y > height - 50 - r && y < height) {
  // if (y > height - 50 - r && y < height) {
    console.log('touching paddleX')
    if (! bounced) {
      console.log('bounced paddleX')
      yspeed = -yspeed;
      xspeed = -xspeed;
      bounced = true;
    }
  }
}
function draw() {
  background(220);
  rect(paddleX, height - 50, 100, 20);
  //move the paddle with the arrow keys
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW && paddleX < width - 100) {
      paddleX = paddleX + speed;
    }
    if (keyCode == LEFT_ARROW && paddleX > 0) {
      paddleX = paddleX - speed;
    }
  }
  drawEllipse()
  //function movePaddle1(e){
  // var posP = e.getX();
  //  paddle1.setPosition(posP-35, getHeight() -15);
  //}
}
