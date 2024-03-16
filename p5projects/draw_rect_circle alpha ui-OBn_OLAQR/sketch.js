function setup() {
  print('in function setup');
  createCanvas(400, 300);
  create_ui();
}

function draw() {
  update_ui();
}

function create_ui() {
  print('in function create_ui');
  createButton('backg 240').mousePressed(function() {
    print('calling background');
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    print('calling rect yellow');
    // fill([red,green,blue,alpha])
    fill([255,255,0,100]);
    rect(0, 50, 200, 200);
  });
  createButton('Circle').mousePressed(function() {
    print('calling circle red');
    // fill([red,green,blue,alpha])
    fill([255,0,0,100]);
    circle(200, 150, 200)
  });
  createButton('Rect2').mousePressed(function() {
    print('calling rect green');
    // fill([red,green,blue,alpha])
    fill([0,255,0,100]);
    rect(200, 50, 200, 200);
  });
  createP();
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
}

function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
  select('#cco').html('[RGBA='+get(mouseX,mouseY)+'] ')
}

// Can't use p5js function print here!
// print('Hello');
console.log('Starting pre-setup');

// https://editor.p5js.org/jht1493/sketches/OBn_OLAQR
// draw_rect_circle alpha ui
