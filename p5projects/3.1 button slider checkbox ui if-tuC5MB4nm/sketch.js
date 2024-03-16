let bg_color = 200;
let a_width = 50;
let s_x = 50;
let a_crawl = false;

function setup() {
  createCanvas(200, 200);

  build_ui();
}

function draw() {
  background(bg_color);
  
  fill(255, 0, 175);
  circle(s_x-a_width/2, 100, a_width)
  
  if (a_crawl) {
    s_x += 1;
    if (s_x-a_width > width) {
      s_x = 0;
    }
  }
}

// Connecting ui directly to variables.
//
function build_ui() {
  // Force DOM ui below canvas
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

// NOTE: function ()
// NOTE: DOM variables local
// TODO: have circle move on startup
// TODO: Add a variable and a button to change direction
// TODO: Add slider for speed
// TODO-Challenge: Add slider to adjust size of circle
// TODO-Challenge: Change to bounce motion


