let a_video;
let a_scale = 2;
let a_side = 20;
let a_x = 0;
let a_y;
let scan_top;

function setup() {
  let a_canvas = createCanvas(320 * a_scale, 240 * a_scale);
  a_canvas.mousePressed(canvas_pressed); // attach listener for

  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.position(0, 0);
  a_video.style('z-index', '-1')
  // a_video.hide();
  // erase();
  noStroke();
  a_y = height / 2;
  scan_top = height / 2;
}

function draw() {
  // show_fps();
  // image(a_video, 0, 0);

  let x = a_x;
  let y = a_y;

  show_num('x', x);
  show_num('y', y);

  let col = a_video.get(x, y);
  
  show_num('r', col[0]);
  show_num('g', col[1]);
  show_num('b', col[2]);

  // Draw bottom bar with given color col
  fill(col);
  rect(0, height - a_side, width, a_side);
  
  // Draw scan
  rect(a_x, scan_top, 1, height / 2 - a_side);

  a_x += 1;
  if (a_x >= width) {
    a_x = 0;
  }
}

function canvas_pressed() {
  a_x = mouseX;
  a_y = mouseY;
}