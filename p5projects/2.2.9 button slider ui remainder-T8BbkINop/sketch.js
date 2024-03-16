let bg_color = 200;
let a_width = 50;
let s_x = 50;
// let a_crawl = false;

function setup() {
  createCanvas(200, 200);

 create_ui();
}

function draw() {
  background(bg_color);
  
  fill(255, 0, 175);
  circle(s_x-a_width/2, 100, a_width)
  
  s_x = (s_x + 1) % width;
}

// Connecting ui directly to variables.
//
function create_ui() {

  let a_button = createButton('bg_color');
  a_button.mousePressed(function() {
    bg_color = random(255);
  });
  createElement('br');

  // createSlider(min, max, [value], [step])
  let = a_slider = createSlider(0, 200, a_width);
  a_slider.input(function() {
    a_width = this.value();
  });

  // createCheckbox([label], [value])
  // let a_check = createCheckbox('Crawl', a_crawl);
  // a_check.changed(function() {
  //   a_crawl = this.checked();
  // });
}

// NOTE: function ()
// NOTE: DOM variables local
// TODO: have circle move on startup
// TODO: Add a variable and a button to change direction
// TODO: Add slider for speed
// TODO-Challenge: Add slider to adjust size of circle
// TODO-Challenge: Change to bounce motion

// https://editor.p5js.org/jht1493/sketches/T8BbkINop
// 2.2 button slider ui remainder

