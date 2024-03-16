let a_bubbles = [];
let a_alpha = 60;
let n_start = 20;
let a_canvas;
let save_count = 0;

function setup() {
  a_canvas = createCanvas(600, 400);
  background(100);
  add_bubbles(n_start);
  init_ui();
}

function init_ui() {
  let save_btn = createButton('Save');
  save_btn.style('font-size', '12pt')
  save_btn.style('margin', '2pt 0pt');
  save_btn.mousePressed(save_canvas);
  
  let more_btn = createButton('More');
  more_btn.style('font-size', '12pt')
  more_btn.style('margin', '2pt 2pt');
  more_btn.mousePressed(more_bubbles);
  
  a_canvas.mousePressed(add_bubble_mouseXY)
}

function more_bubbles() {
  add_bubbles(n_start);
  print('more_bubbles a_bubbles.length', a_bubbles.length);
}

function save_canvas() {
  const fname = 'bubble-more-' + save_count;
  print('save_btn mousePressed fname', fname);
  saveCanvas(fname, 'png')
  save_count += 1;
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
  print('add_bubble_mouseXY', a_bubbles.length);
}

function add_bubble(x, y) {
  let gray = random([0, 255]);
  // let r = random(1, 4);
  let r = random([1, 2, 4]);
  let fuz = random([2, 4, 8])
  let alpha = a_alpha;
  let bub = {
    x,
    y,
    r,
    fuz,
    gray,
    alpha
  }
  a_bubbles.push(bub);
}

function draw() {
  for (let bub of a_bubbles) {
    draw_bubble(bub);
  }
}

function draw_bubble(bub) {
  move_bubble(bub);
  show_bubble(bub);
}

function move_bubble(bub) {
  bub.x = bub.x + random(-bub.fuz, bub.fuz);
  bub.y = bub.y + random(-bub.fuz, bub.fuz);
  // constrain(n, low, high)
  bub.x = constrain(bub.x, 0, width);
  bub.y = constrain(bub.y, 0, height);
}

function show_bubble(bub) {
  stroke(bub.gray, bub.alpha);
  strokeWeight(4);
  fill(bub.gray, bub.alpha);
  ellipse(bub.x, bub.y, bub.r * 2);
}

// from https://editor.p5js.org/jht1493/sketches/LrhcIzvr2