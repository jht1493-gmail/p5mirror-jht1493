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
    fill([255,255,0,10]);
    rect(0, 50, 200, 200);
  });
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
