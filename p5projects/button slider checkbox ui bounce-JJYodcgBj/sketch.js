let bg_color = 200;
let a_width = 50;
let s_x = 50;
let a_crawl = true;
let a_step = -1;

function setup() {
  createCanvas(200, 200);

  build_ui();
}

function draw() {
  background(bg_color);

  fill(255, 0, 175);
  circle(s_x - 25, 100, a_width)

  if (a_crawl) {
    s_x += a_step;
    if (s_x > width || s_x < 50) {
      a_step = a_step * -1;
      // s_x += a_step;
    }
  }
}

// Connecting ui directly to variables.
//
function build_ui() {
  // Force DOM ui below canvas
  createP();

  let a_button2 = createButton('changeDirection');
  a_button2.mousePressed(function() {
    a_step = a_step * -1;
  });
  createP();

  let a_button = createButton('changeColor');
  a_button.mousePressed(function() {
    bg_color = random(255);
  });
  createP();

  // createSlider(min, max, [value], [step])
  let = a_slider = createSlider(0, 200, a_width);
  a_slider.input(function() {
    a_width = a_slider.value();
  });
  createP();

  // createCheckbox([label], [value])
  let a_check = createCheckbox('Crawl', a_crawl);
  a_check.changed(function() {
    a_crawl = this.checked();
  });
}

// TODO: Add variable and buttons for direction of circle