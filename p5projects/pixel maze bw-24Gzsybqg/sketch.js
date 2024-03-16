let a_video;
let a_scan = {
  cuts: 32,
  margin: 2,
}
let a_src = {};
let a_image;
let a_scale = 2;
let a_weight = 5;

function setup() {
  createCanvas(640 / a_scale, 480 / a_scale);
  clear();
  pixelDensity(1);
  // noStroke();
  // strokeWeight(10);
  // frameRate(10);
  // background(255);

  init_video();
  init_scan();
  init_src();
}

function draw() {
  draw_video();
  draw_scan();
  show_fps();
  // show_num('frameRate', frameRate())
}

function draw_video() {
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  a_image.copy(a_video, 0, 0, width, height,
    0, 0, a_image.width, a_image.height);
  // image(a_video, 0, 0);
}

function draw_scan() {

  let w = a_scan.xstep - a_scan.margin;
  let h = a_scan.ystep - a_scan.margin;

  let x = a_scan.x + a_scan.margin;
  let y = a_scan.y + a_scan.margin;

  let col = a_image.get(a_src.x, a_src.y);

  // erase();
  // strokeWeight(0);
  // fill(0);
  // rect(a_scan.x, a_scan.y, a_scan.xstep, a_scan.ystep);
  // noErase();

  strokeWeight(a_weight);
  stroke('black');
  if (random() > 0.5) {
    line(x, y, x + w, y + h);
  } else {
    line(x + w, y, x, y + h);
  }
  a_scan.x += a_scan.xstep;
  a_src.x += a_src.xstep;

  if (a_scan.x >= a_scan.xend) {

    a_scan.x = a_scan.xstart;
    a_src.x = a_src.xstart;
    a_scan.y += a_scan.ystep;
    a_src.y += a_src.ystep;

    if (a_scan.y >= a_scan.yend) {
      a_scan.y = a_scan.ystart;
      a_src.y = a_src.ystart;
      clear();
    }
  }
}

function init_video() {
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.position(0, 0);
  a_video.style('z-index', '-1')
  // a_video.hide();

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
  // {
  //   let { xstep, ystep } = a_scan;
  //   show_obj('init_scan', { xstep, ystep } );
  // }
}