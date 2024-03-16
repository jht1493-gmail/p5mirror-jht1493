let a_bubbles = [];
let a_balls = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  // clicked_bubble(a_bubble, mouseX, mouseY);
  let bub = {
    x: mouseX,
    y: mouseY,
    r: random(20, 60),
    brightness: 0
  };
  a_bubbles.push(bub);
  // print('a_bubbles', a_bubbles)
  
  let ball = {
    name: 'a-',
    x: mouseX,
    y: mouseY,
    xspeed: random(0,2),
    yspeed: random(0,2),
    r: 25
  };
  a_balls.push(ball)
  
  background(100)
}

function draw() {
  // background(0);
  // bounce_ball(a_ball);
  for (let bub of a_bubbles) {
    draw_bubble(bub);
  }
  for (let ball of a_balls) {
    bounce_ball(ball);
  }
  // for (let inx = 0; inx < a_bubbles.length; inx++) {
  //   let bub = a_bubbles[inx];
  //   draw_bubble(bub);
  // }
}


// from https://editor.p5js.org/jht1493/sketches/LrhcIzvr2