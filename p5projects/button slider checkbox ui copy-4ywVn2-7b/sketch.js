let bg_color = 200;
let a_width = 50;
let s_x = 50;
let a_crawl = true;

function setup() {
  createCanvas(200, 200);

  // build_ui();
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
