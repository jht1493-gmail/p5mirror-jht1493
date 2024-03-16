// let triangle1 = {
//   x1: 175,
//   y1: 300,
//   x2: 175,
//   y2: 290,
//   x3: 185,
//   y3: 295,
// }

// let triangle2 = {
//   x1: 185,
//   y1: 295,
//   x2: 195,
//   y2: 290,
//   x3: 195,
//   y3: 295,
// }

let text1 = {
  x: 0,
  y: 50,
};

let text2 = {
  x: 38,
  y: 350,
};

function setup() {
  createCanvas(400, 400);
  background(random(255), random(255), random(255));
  circle(200, 200, 200);
  //circle(175, 175, 25);
  //circle(225, 175, 25);
  fill(0);
  circle(175, 175, 20);
  circle(225, 175, 20);

  noFill();
  //fill(255, 0, 0);
  arc(200, 225, 50, 50, 0, PI);
  //noStroke();
}

function draw() {
  // background(255);
  //siren
  fill(random([0, 255]), 0, random([0, 255]));
  // circle(350, 350, 25);

  //fill(0);
  textSize(32);
  let str = "SECRET AGENT???";
  text(str, text1.x, text1.y);
  text1.x++ % height;
}

function mousePressed() {
  background(random(255), random(255), random(255));
  //head
  fill(255);
  circle(200, 200, 200);
  fill(0);
  //sunglasses
  rect(145, 150, 55, 55, 20);
  rect(200, 150, 55, 55, 20);
  //hat
  quad(250, 90, 140, 90, 100, 140, 295, 140);
  //}troke(100);
  strokeWeight(4);
  line(103, 175, 145, 175);
  line(255, 175, 295, 175);
  line(170, 240, 230, 240);
  //strokeWeight(4);

  //undercover
  textSize(25);
  let str = "007 REPORTING FOR DUTY";
  text(str, text2.x, text2.y);
}

//   function draw() {
//   //background(220);
//   //fill(random(255), random(255), random(255));
//     circle(300, 300, 25);
//     color(255, 0, 255);
// };


// https://editor.p5js.org/marthajanicki/sketches/YDt39MIPA
// Wk2_creativeProject by marthajanicki
