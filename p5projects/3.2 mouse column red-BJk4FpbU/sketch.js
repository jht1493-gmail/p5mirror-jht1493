// https://editor.p5js.org/jht1493/sketches/-BJk4FpbU
// 3.2 mouse column red

/*
2. Change the behavior so that when you mouse over a column, you turn it red and it stays red until the next time you mouse over it again, at which point the column goes back to white. (Just get this working for one column.)
*/

let band1_red = false;
let band1_wasInside = false;

function setup() {
  createCanvas(300, 200);
  createSpan().id('mouseX');
}

function draw() {
  background(255);
  fill(255, 0, 0);

  // Draw lines for the three areas
  let band1 = width / 3;
  let band2 = band1 + band1;
  let band3 = band2 + band1;
  line(band1, 0, band1, height);
  line(band2, 0, band2, height);

  if (band1_red) {
    rect(0, 0, band1, height);
  }
  let inside = mouseX > 0 && mouseX < band1;
  if (inside) {
    if (!band1_wasInside) {
      band1_red = !band1_red;
    }
  }
  if (mouseX > band1 && mouseX < band2) {
    rect(band1, 0, band1, height);
  }
  if (mouseX > band2 && mouseX < band3) {
    rect(band2, 0, band1, height);
  }
  band1_wasInside = inside;

  select('#mouseX').html(mouseX);
}

// https://editor.p5js.org/yl9405/sketches/4A-Mh7tCq
// 3 Red columns by Yizhi
