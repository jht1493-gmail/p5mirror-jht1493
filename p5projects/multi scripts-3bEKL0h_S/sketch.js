let ball_1 = {
  name: 'a-',
  x: 320,
  y: 180,
  xspeed: 2,
  yspeed: 0,
  r: 25,
  brightness: 0
};

let ball_2 = {
  x: 150,
  y: 0,
  r: 8,
  xspeed: 0,
  yspeed: 0
};
let a_bubble;

function setup() {
  createCanvas(400, 300);
  a_bubble = {
    x: random(width),
    y: random(height),
    r: random(20, 60),
    brightness: 0
  };
  background(0);
}

function draw() {
  // background(0);
  bounce_ball(ball_1);
  // drop_ball(ball_2);
  draw_bubble(a_bubble);
}


function mousePressed() {
  clicked_bubble(a_bubble, mouseX, mouseY);
}

