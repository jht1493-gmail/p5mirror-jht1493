let bg_color = 240;
let a_alpha = 80;
let n_start = 20;
let a_select_color;
let a_image;
let a_bubbles = [];
let a_video;
let a_width = 640;
let a_canvas;

function setup() {
  a_canvas = createCanvas(640, 480);
  pixelDensity(1);
  noStroke();
  
  background(bg_color);

  add_bubbles(n_start);
  
  sketch_ui();
    
  init_video();
}

function draw_video(sw, sh, dw, dh) {
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  a_image.copy(a_video, 0, 0, sw, sh, 0, 0, dw, dh);
}

function init_video() {
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.position(0, 0);
  a_video.style('z-index', '-1');
  a_video.hide();

  let w = a_width;
  let h = int(a_width * (height / width));
  print('init_video w', w, 'h', h);
  print('init_video width', width, 'height', height);

  a_image = createImage(w, h);
}

function draw() {
  show_num('fps', frameRate())
  show_num('nbubs', a_bubbles.length)
  draw_video(width, height, a_image.width, a_image.height);
  for (let bub of a_bubbles) {
    draw_bubble(bub);
  }
}

function canvas_mouseMoved() {
  if (mouseIsPressed) {
    add_bubble_mouseXY();
  }
}

function more_bubbles() {
  add_bubbles(n_start);
  // print('more_bubbles a_bubbles.length', a_bubbles.length);
}

function add_bubbles(n) {
  for (let ind = 0; ind < n; ind++) {
    let x = random(0, width);
    let y = random(0, height);
    add_bubble(x, y);
  }
}

function add_bubble_mouseXY() {
  add_bubble(mouseX, mouseY);
  // print('add_bubble_mouseXY', a_bubbles.length);
}

// let save_count = 0;
function save_canvas() {
  // let fname = 'bubm-' + save_count + '-';
  let fname = 'bubm-';
  fname += new Date().toISOString();
  print('save_btn mousePressed fname', fname);
  saveCanvas(fname, 'png')
  // save_count += 1;
}

// from https://editor.p5js.org/jht1493/sketches/LrhcIzvr2