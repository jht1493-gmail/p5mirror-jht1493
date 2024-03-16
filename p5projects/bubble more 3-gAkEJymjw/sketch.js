let a_bubbles = [];
let a_alpha = 60;
let n_start = 20;

function setup() {
  createCanvas(600, 400);
  background(100);
  init_bubbles();
  init_ui();
}

let save_count = 0;
function init_ui() {
  let save_btn = createButton('Save');
  save_btn.style('font-size', '12pt')
  save_btn.style('margin', '2pt 0pt 2pt');
  save_btn.mousePressed(function () {
    const fname = 'bubble-more-'+save_count;
    print('save_btn mousePressed fname', fname);
    saveCanvas(fname, 'png')
    save_count += 1;
  });
}

function init_bubbles() {
  for (let ind = 0; ind < n_start; ind++ ) {
    let x = random(0, width);
    let y = random(0, height);
    add_bubble(x, y);
  }
}

function mousePressed() {
  add_bubble(mouseX, mouseY);
}

function add_bubble(x,y) {
  let r = random(1, 4);
  let fuz = random([2,4,8])
  let gray = random([0,255]);
  let alpha = a_alpha;
  let bub =  {x, y, r, fuz, gray, alpha}
  a_bubbles.push( bub );
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
