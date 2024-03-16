// Notice the groupings
// Which colors stick out?
// Which colors have more weight?

let h_off = 0;
let col_s = 100;
let col_b = 100;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  init_ui();
}

function draw() {
  show_num('h_off', h_off);
  show_num('col_s', col_s);
  show_num('col_b', col_b, {line:1});
  // Draw 12 swatches of color
  for (let i = 0; i < 12; i++) {
    // Calculate hue based on angle between colors
    // 360/12 is the angle between colors
    let h = h_off + i * 360 / 12;
    // Wrap around the circle
    h %= 360;
    // Calculate x-position of swatch
    let x = i * width / 12;
    // Draw rect
    fill(h, col_s, col_b);
    rect(x, 0, width / 12, height);
    if (i == 0) {
      let col = color(h, col_s, col_b);
      show_num('r', red(col));
      show_num('g', green(col));
      show_num('b', blue(col));
    }
  }
}

// https://editor.p5js.org/icm4.0/sketches/V413sE0Rn