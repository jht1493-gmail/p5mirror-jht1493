// https://editor.p5js.org/jht1493/sketches/xq4zwDd2x
// 7.3 Arrays of objects 1

// Drag mouse to see multple circles added to array
let a_bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged() {
  let bub = {
    x: mouseX,
    y: mouseY,
    r: random(10, 50)
  };
  a_bubbles.push(bub);
}

function draw() {
  background(0);

  // for (let bubble of bubbles) {
  //   move_bubble(bubble);
  //   show_bubble(bubble);
  // }
  for (let i = 0; i < a_bubbles.length; i++) {
    move_bubble(a_bubbles[i]);
    show_bubble(a_bubbles[i]);
  }
}

function move_bubble(bub) {
  bub.x = bub.x + random(-5, 5);
  bub.y = bub.y + random(-5, 5);
}

function show_bubble(bub) {
  stroke(255);
  strokeWeight(4);
  noFill();
  circle(bub.x, bub.y, bub.r * 2);
}

// 7.3 Array of Objects
// jht: Converted to POJO from 
// https://editor.p5js.org/codingtrain/sketches/1y_xfueO
