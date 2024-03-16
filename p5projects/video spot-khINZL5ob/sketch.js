let a_video;
let a_scale = 2;
let a_side = 20;

function setup() {
  createCanvas(320 * a_scale, 240 * a_scale);
  pixelDensity(1);
  a_video = createCapture(VIDEO);
  a_video.size(width, height);
  a_video.hide();
}

function draw() {
  // show_fps();
  
  image(a_video, 0, 0);

  let x = mouseX;
  let y = mouseY;
  // stroke('red');
  // noFill();
  // line(0,y, width, y);
  // line(x, 0, x, height);

  show_num('x', x);
  show_num('y', y);

  let col = a_video.get(x,y);
  
  show_num('r', col[0]);
  show_num('g', col[1]);
  show_num('b', col[2]);
  
  strokeWeight(0)
  fill(col);
  rect(0,height-a_side, width, a_side);
}