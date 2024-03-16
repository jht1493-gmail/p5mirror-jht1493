let x = 10;
let y = 10;
let w = 10;
let h = 20;
let start = 0;
let stop;

function setup() {
  console.log('in setup');
  stop = HALF_PI;
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    console.log('calling background');
    background(240);
  });
  createButton('Arc').mousePressed(function() {
    console.log('calling rect');
    // rect(x,y,width,height)
    arc(x, y, w, h, start, stop); // , [mode], [detail])
  });
  createButton('Trig').mousePressed(function() {
    // triangle(x1, y1, x2, y2, x3, y3)
    let x1 = 137;
    let y1 = 72;
    let x2 = 241;
    let y2 = 207;
    let x3 = 69;
    let y3 = 192;
    triangle(x1, y1, x2, y2, x3, y3)
  });
  createButton('Rect').mousePressed(function() {
    console.log('calling rect');
    // rect(x,y,width,height)
    rect(100, 0, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    console.log('calling circle');
    // circle(x,y,diameter)
    circle(200, 100, 200)
  });
  createButton('Shapes').mousePressed(function() {
    console.log('calling draw_shapes');
    draw_shapes();
  });
  create_ui();
}

function draw() {
   arc(x, y, w, h, start, stop); // , [mode], [detail])
  update_ui();
}

function draw_shapes() {
  // fill(red, green, blue, alpha)
  fill(255, 0, 0, 20); // Red, alpha 20
  rect(0, 100, 200, 200);
  // fill(red, green, blue, alpha)
  fill(255, 255, 0, 20); // Yellow, alpha 20
  circle(200, 200, 200)
  // fill(red, green, blue, alpha)
  fill(0, 255, 0, 20); // Green, alpha 20
  rect(200, 100, 200, 200);
}

function create_ui() {
  createElement('br');
  createSpan().id('imouseX');
  createSpan().id('imouseY');
  createSpan().id('irgba');
}

function update_ui() {
  select('#imouseX').html('[mouseX='+mouseX+'] ')
  select('#imouseY').html('[mouseY='+mouseY+'] ')
  select('#irgba').html('[RGBA='+get(mouseX,mouseY)+'] ')
}

console.log('Starting - pre setup');

// https://editor.p5js.org/jht1493/sketches/DGQoBYV9x
// 1.2 draw_shapes_ui
