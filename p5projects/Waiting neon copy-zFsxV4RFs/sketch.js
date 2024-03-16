let r1;
let r2;
let r3;

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
  r3 = { x: width/2, y: height/2, xspeed: 1, yspeed: 1 };
  r4 = { x: width/2, y: height/2, xspeed: -1, yspeed: -1 };
}

function draw() {
  background(220);  
//   r2.x = (r2.x + r2.xspeed + width) % width;
//   r2.y = (r2.y + r2.yspeed + height) % height;
//   rect(r2.x, r2.y, 10,10);
  draw_rect(r1);
  draw_rect(r2);
  draw_rect(r3);
  draw_rect(r4);
}

function draw_rect(r) {
  r.x = (r.x + r.xspeed + width) % width;
  r.y = (r.y + r.yspeed + height) % height;
  rect(r.x, r.y, 10,10);
}