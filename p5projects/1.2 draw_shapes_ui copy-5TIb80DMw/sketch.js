// https://editor.p5js.org/jht1493/sketches/DGQoBYV9x
// 1.2 draw_shapes_ui

function setup() {
  console.log('in setup');
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    console.log('calling background');
    background(240);
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
  createButton('fill red').mousePressed(function() {
    console.log('fill red');
    fill('red');
  });
  create_ui();
  // frameRate(1)
}

function draw() {
  update_ui();
  // draw_shapes();
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

