let ob1 = {
  x: 80,
  y: 60,
  radius: 12
};

let ob2 = {
  x: 160,
  y: 60,
  radius: 12
};

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  draw_obj(ob1);
  draw_obj(ob2);
}

function draw_obj(ob) {
  let d = dist(mouseX, mouseY, ob.x, ob.y);
  if (d < ob.radius) {
    ob.radius++;
    fill(0);
  } else {
    if (ob.radius > 12) {
      ob.radius--;
    }
    fill(255);
  }
  ellipse(ob.x, ob.y, ob.radius, ob.radius);
}

// https://editor.p5js.org/jht1493/sketches/ctwjs9TcL
// Ex_05_14 The Bounds of a Circle obj

// https://editor.p5js.org/jht1493/sketches/nPTnXZD3c
// Ex_05_14 The Bounds of a Circle pulse

// https://editor.p5js.org/jht1493/sketches/tPX6MmuEk
// Ex_05_14 The Bounds of a Circle

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_14.js