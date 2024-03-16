let obj1;
let obj2;
let back_a = 3;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
  // color properties
  noFill();
  strokeWeight(5);
  stroke(50, 180, 230);

  // x position starts at 0 - circle's radius
  obj1 = {
    radius: height / 2,
    x: -height / 2,
    y: height / 2,
    speed: 2,
  };

  let r2 = height / 4;
  // x position starts at right-hand width - circle's radius
  obj2 = {
    radius: r2,
    x: width + r2,
    y: height / 2,
    speed: -2,
  };
  
  // createSlider(min, max, [value], [step])
  createSlider(0, 300, back_a).input(back_a_func);

}

function back_a_func() {
  back_a = this.value();
}

function draw() {
  // red, green, blue, alpha
  background(20, 0, 220, back_a);
  stroke(50, 180, 230);

  // LEFT TO RIGHT, BLUE
  // circle(x, y, diameter)
  circle(obj1.x, obj1.y, obj1.radius * 2);
  obj1.x += obj1.speed;

  // If x position (center of circle) is
  // greater than canvas width + circle's radius,
  // then reset the x position
  if (obj1.x > width + obj1.radius) {
    obj1.x = -obj1.radius;
  }

  stroke(255, 180, 230);

  // RIGHT TO LEFT, RED
  // circle(x, y, diameter)
  circle(obj2.x, obj2.y, obj2.radius);
  obj2.x += obj2.speed;

  // If x position (center of circle) is greater back 
  // at the starting + circle's radius, then reset x position
  if (obj2.x < 0 - obj2.radius) {
    obj2.x = width + obj2.radius;
  }
}

// https://editor.p5js.org/jht1493/sketches/5bl_flKUx
// wk3_ex5_red Martha - remix

// https://editor.p5js.org/marthajanicki/sketches/VyHA1VBwG
// wk3_ex5_red by Martha

// https://editor.p5js.org/enickles/sketches/QbRTbV1H_
// Exercise - ICM 21 Week 3 - Add another moving circle object that resets
