let myCircle1;
let myCircle2;

let speed = 2;

// what happens if you make this negative?
let direction = 1;

function setup() {
  createCanvas(400, 400);

  myCircle0 = {
    color: "red",
    x: width / 2,
    y: height / 2,
    size: 50,
  };

  myCircle1 = {
    color: "blue",
    x: width / 2,
    y: height / 2,
    size: 50,
  };
}

function draw() {
  background(220);

  fill(myCircle0.color);
  circle(myCircle0.x, myCircle0.y, myCircle0.size);
  myCircle0.x += speed * direction;

  fill(myCircle1.color);
  circle(myCircle1.x, myCircle1.y, myCircle1.size);
  myCircle1.y += speed * direction;
}

// https://editor.p5js.org/jht1493/sketches/hdTctdqTA
// https://editor.p5js.org/enickles/sketches/jjqUJ2pjf
// Example - CC 21 WEEK 1 - Moving circle objects with speed and direction variables
