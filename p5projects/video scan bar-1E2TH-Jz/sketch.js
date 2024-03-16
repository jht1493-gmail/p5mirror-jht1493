let a_video;
let a_scale = 2;
let a_side = 40;
let a_x = 0;
let a_y;
let scan_top;
let scan_left;

function setup() {
  let a_canvas = createCanvas(320 * a_scale, 240 * a_scale);
  a_canvas.mousePressed(canvas_pressed); // attach listener for

  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.position(0, 0);
  a_video.style('z-index', '-1')
  // a_video.hide();
  clear();
  noStroke();
  scan_top = height / 2;
  scan_left = width / 2;
  a_x = scan_left;
  a_y = scan_top;
}

function draw() {
  // show_fps();

  let col = a_video.get(a_x, a_y);

  // Draw scan
  fill(col);
  // rect(a_x, scan_top, 1, height - scan_top);
  rect(a_x, a_y, 1, a_side);

  a_x += 1;
  if (a_x >= width) {
    a_x = scan_left;
    a_y += a_side;
    if (a_y >= height) {
      a_y = 0;
    }
  }
}

function canvas_pressed() {
  a_x = mouseX;
  a_y = mouseY;
  scan_top = a_y;
  
  let col = a_video.get(a_x, a_y);

  show_num('x', a_x);
  show_num('y', a_x);

  show_num('r', col[0]);
  show_num('g', col[1]);
  show_num('b', col[2]);

  // Draw bottom bar with given color col
  fill(col);
  rect(0, a_y, width, a_side);
}