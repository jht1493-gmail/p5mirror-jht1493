// https://editor.p5js.org/jht1493/sketches/mdhUP_wTu
// button slider checkbox ui

let bg_color = 200;
let a_width = 50;
let a_x = 50;
let a_crawl = true;

function setup() {
  createCanvas(400, 200);

  build_ui();
}

function draw() {
  background(bg_color);
  
  fill(255, 0, 175);
  circle(a_x-a_width/2, 100, a_width)
  // circle(a_x, 100, a_width)
  
  if (a_crawl) {
    a_x += 1;
    if (a_x-a_width > width) {
    // if (a_x > width) {
      a_x = 0;
    }
  }
}

// Connecting ui directly to variables.
//
function build_ui() {
  // Force DOM ui below canvas
  createP();

  createButton('changeColor').mousePressed(function() {
    bg_color = random(255);
  });
  createP();

  // createSlider(min, max, [value], [step])
  createSlider(0, 200, a_width).input(function() {
    a_width = this.value();
  });
  createP();

  // createCheckbox([label], [value])
  createCheckbox('Crawl', a_crawl).changed(function() {
    a_crawl = this.checked();
  });
}

// NOTE: function ()
// NOTE: DOM variables local
// TODO: have circle move on startup
// TODO: Add a variable and a button to change direction
// TODO: Add slider for speed
// TODO-Challenge: Add slider to adjust size of circle
// TODO-Challenge: Change to bounce motion


