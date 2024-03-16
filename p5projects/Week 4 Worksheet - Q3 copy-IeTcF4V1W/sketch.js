// Part 1: Create 20 columns that turn red when you hover over them.

// 	Part 2: Make the first half of the columns turn blue and the right half turn red.

// Extra: Skip column 7.
// Extra: Make every column a different color.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // 7TH COLUMN DOES NOT TURN RED
  for (let i = 0; i < 20; i++) {
    if (
      mouseX >= i * (width / 20) &&
      mouseX <= (i + 1) * (width / 20 &&
      i != 7
    ) {
      if (i < 10) {
        fill(255, 0, 0);
      } else {
        fill(0, 0, 255);
      }
    } else {
      fill(255);
    }
    rect((i * width) / 20, 0, width / 20, height);
  }
}
