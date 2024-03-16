let a_vid;
let a_still = 1;
// let a_still = 100;
let a_buf = [];
let a_state = {};
let a_scale = 2;
let a_width, a_height;
let a_rez = [ {w: 1920, h: 1080}, {w:640, h: 480}];
let i_rez = 0;

function setup() {
  print('setup started');
  // make canvas the resolution of webcam
  a_width = a_rez[i_rez].w/a_scale;
  a_height = a_rez[i_rez].h/a_scale;
  // print('a_width', a_width, 'a_height', a_height)
  show_num('a_width', a_width)
  show_num('a_height', a_height);
  show_fps();
  show_fps();
  createP();
  
  createCanvas(a_width, a_height);

  // create webcam capture 
  a_vid = createCapture(VIDEO, function() {
    print('vid_ready');
    a_state.ready = 1;
  });
  a_vid.size(a_width, a_height);
  // a_vid.hide(); // hide it

  pixelDensity(1);

  print('setup done');
}

function draw() {
  show_fps();
  background(255);

  // Prepare canvas pixels
  loadPixels();

  // load webcam pixels 
  a_vid.loadPixels();
  if (a_state.ready && !a_state.inited) {
    vid_init();
  }
  let sm1 = a_still - 1;
  for (let y = 0; y < a_height; y += 1) {
    for (let x = 0; x < a_width; x += 1) {
      let ii = (a_width * y + x) * 4;

      a_buf[ii + 0] = (a_buf[ii + 0]*sm1 + a_vid.pixels[ii + 0]) / a_still;
      a_buf[ii + 1] = (a_buf[ii + 1]*sm1 + a_vid.pixels[ii + 1]) / a_still;
      a_buf[ii + 2] = (a_buf[ii + 2]*sm1 + a_vid.pixels[ii + 2]) / a_still;

      pixels[ii + 0] = a_buf[ii + 0];
      pixels[ii + 1] = a_buf[ii + 1];
      pixels[ii + 2] = a_buf[ii + 2];
    }
  }
  updatePixels();
}

function vid_init() {
  print('vid_init');
  a_state.inited = 1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let ii = (width * y + x) * 4;
      a_buf[ii + 0] = a_vid.pixels[ii + 0];
      a_buf[ii + 1] = a_vid.pixels[ii + 1];
      a_buf[ii + 2] = a_vid.pixels[ii + 2];
    }
  }
}