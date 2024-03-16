function setup() {
  createCanvas(400, 400);
  
  console.log(0 % 4); // 4 * 0, R0
  console.log(1 % 4); // 4 * 0, R1
  console.log(2 % 4); // 4 * 0, R2
  console.log(3 % 4); // 4 * 0, R3
  console.log(4 % 4); // 4 * 1, R0
  console.log(5 % 4); // 4 * 1, R1
  console.log(6 % 4); // 4 * 1, R2
  console.log(7 % 4); // 4 * 1, R3
  console.log(8 % 4); // 4 * 2, R0
  console.log(9 % 4); // 4 * 2, R1
  console.log(10 % 4); // 4 * 2, R2
  console.log(11 % 4); // 4 * 2, R3
  console.log(12 % 4); // 4 * 3, R0
}

function draw() {
  background(220);
  // console.log(frameCount);
  
  // console.log(frameCount % 60);
}

// https://editor.p5js.org/enickles/sketches/oGgnUvlHu
// ICM-06 Example - ICM 21 Week 4 - Intro %