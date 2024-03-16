let r1;
let r2;

function setup() {
  createCanvas(400, 400);
  // r1 = { x: width/2, y: height/2, xspeed: 0, yspeed: 1 };
  r1 = {};
  r1.x = width/2;
  r1.y = height/2;
  r1.xspeed = 0;
  r1.yspeed = 1;
  r2 = {};
  r2.x = width/2;
  r2.y = height/2;
  r2.xspeed = 0;
  r2.yspeed = -1;
}

function draw() {
  background(220);
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])
  r1.x = (r1.x + r1.xspeed + width) % width;
  r1.y = (r1.y + r1.yspeed + height) % height;
  rect(r1.x, r1.y, 10,10);
  
  r2.x = (r2.x + r2.xspeed + width) % width;
  r2.y = (r2.y + r2.yspeed + height) % height;
  rect(r2.x, r2.y, 10,10);
}