// Circle Packing

let circles;

function setup() {
  createCanvas(640, 360);
  circles = [];
}

function draw() {
  background(0);

  let total = 5;
  let count = 0;
  let attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      noLoop();
      console.log('finished');
      break;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  let x = random(width);
  let y = random(height);
  let valid = true;
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}

// https://editor.p5js.org/jht1493/sketches/hqgMiQ6HZ

// https://editor.p5js.org/codingtrain/sketches/XNhNJ3OVn
// CC  50 Circle Packing Basic

// Circle Packing
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/050.1-circlepackinganimated.html
// https://thecodingtrain.com/CodingChallenges/050.2-circlepackingimage.html

// Basic: https://editor.p5js.org/codingtrain/sketches/2_4gyDD_9
// Image (Text): https://editor.p5js.org/codingtrain/sketches/wxGRAd4I-
// Image (Kitten): https://editor.p5js.org/codingtrain/sketches/tRpryH_um

