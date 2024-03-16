let a_video;
let a_scale = 2;
let a_side = 20;
let a_x = 0;
let a_scan = [];

function setup() {
  createCanvas(320 * a_scale, 240 * a_scale);
  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.hide();
  noStroke();
}

function draw() {
  // show_fps();

  image(a_video, 0, 0);

  // Select pixel from middle x of screen
  let x = width / 2;
  let y = mouseY;
  // stroke('red');
  // noFill();
  // line(0,y, width, y);
  // line(x, 0, x, height);

  show_num('x', x);
  show_num('y', y);

  let col = a_video.get(x, y);
  a_scan[a_x] = col;
  // print('col', col);
  
  show_num('r', col[0]);
  show_num('g', col[1]);
  show_num('b', col[2]);

  show_num('n', a_scan.length);
  
  // Draw other scans
  for (ii = 0; ii < a_scan.length; ii++) {
    let ncol = a_scan[ii];
    // print('ii', ii, 'ncol', ncol)
    fill(ncol);
    rect(ii, height / 2, 1, height / 2 - a_side);
  }
  // Draw bottom bar with given color col
  fill(col);
  rect(0, height - a_side, width, a_side);

  a_x += 1;
  if (a_x >= width) {
    a_x = 0;
  }
}