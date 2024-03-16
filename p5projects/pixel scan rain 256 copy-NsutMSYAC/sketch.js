let a_video;
let a_scan = {
  cuts: 256,
  margin: 2,
}
let a_src = {};
let a_image;
let a_scale = 1;
let a_weight = 10;
let a_erase = 1;
let a_fill = 255;
let a_r;
// let a_start = 15;
let a_start = 5;
let a_end = 360-a_start;
let a_angle = a_start;
// let a_delta = 15;
let a_delta = 5;

function setup() {
  createCanvas(640 / a_scale, 480 / a_scale);
  clear();
  pixelDensity(1);
  background(255);
  frameRate(30);

  init_video();
  init_scan();
  init_src();

  angleMode(DEGREES);

  a_r = max(width, height) * 4;

  strokeWeight(a_scan.xstep / 2);
}

function draw() {
  draw_video();
  draw_scan();
  show_fps();
  show_num('a_angle', a_angle)
  // show_num('frameRate', frameRate())
}

function draw_scan() {

  a_scan.x = a_scan.xstart;
  a_src.x = a_src.xstart;

  while (a_scan.x < a_scan.xend) {

    let x = a_scan.x + a_scan.margin;
    let y = a_scan.y + a_scan.margin;

    let col = a_image.get(a_src.x, a_src.y);
    let x2 = a_r * cos(a_angle);
    let y2 = a_r * sin(a_angle);

    stroke(col);
    line(x, y, x + x2, y + y2);

    a_scan.x += a_scan.xstep;
    a_src.x += a_src.xstep;
  }
  a_scan.y += a_scan.ystep;
  a_src.y += a_src.ystep;

  if (a_scan.y >= a_scan.yend) {
    a_scan.y = a_scan.ystart;
    a_src.y = a_src.ystart;
    // clear();
    a_erase ^= 1;
    if (!a_erase) a_fill ^= 255;

    a_angle += a_delta;
    if (a_angle > a_end || a_angle < a_start) {
      a_angle = a_start;
    }
  }
}

function draw_video() {
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  a_image.copy(a_video, 0, 0, width, height,
    0, 0, a_image.width, a_image.height);
  // image(a_video, 0, 0);
}

function init_video() {
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.position(0, 0);
  a_video.style('z-index', '-1')
  a_video.hide();

  // let w = width / a_scan.cuts;
  // let h = height / a_scan.cuts;
  let w = a_scan.cuts;
  let h = int(a_scan.cuts * (height / width));
  // let h = int( a_scan.cuts * (width/height) );
  print('init_video w', w, 'h', h)

  a_image = createImage(w, h);
}

function init_src() {
  a_src.xstart = 0;
  a_src.xend = a_image.width;
  a_src.xdim = a_src.xend - a_src.xstart;

  a_src.ystart = 0;
  a_src.yend = a_image.height;
  a_src.ydim = a_src.yend - a_src.ystart;

  a_src.xstep = 1;
  a_src.ystep = 1;

  a_src.x = a_src.xstart;
  a_src.y = a_src.ystart;
}

function init_scan() {
  // a_scan.xstep = int(width / a_scan.cuts);
  // a_scan.ystep = int(height / a_scan.cuts);
  a_scan.xstep = (width / a_scan.cuts);
  a_scan.ystep = a_scan.xstep;

  a_scan.xdim = width;
  a_scan.xstart = 0;
  a_scan.xend = a_scan.xstart + a_scan.xdim;

  a_scan.ydim = height;
  a_scan.ystart = 0;
  a_scan.yend = a_scan.ystart + a_scan.ydim;

  a_scan.x = a_scan.xstart;
  a_scan.y = a_scan.ystart;

  print('xstep', a_scan.xstep, 'ystep', a_scan.ystep);
}