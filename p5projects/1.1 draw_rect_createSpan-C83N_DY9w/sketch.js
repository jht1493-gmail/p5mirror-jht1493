function setup() {
  console.log('in function setup');
  createCanvas(400, 300);
  createButton('backg 240').mousePressed(function() {
    console.log('calling background');
    background(240);
  });
  createButton('Rect').mousePressed(function() {
    console.log('calling rect red');
    // fill(red, green, blue, alpha)
    fill(255, 0, 0, 10);
    // rect(x, y, width, height)
    rect(100, 50, 200, 200);
  });
  createSpan().id('imouseX');
  createSpan().id('imouseY');
  createSpan().id('irgba');
}

function draw() {
  select('#imouseX').html('[mouseX='+mouseX+'] ')
  select('#imouseY').html('[mouseY='+mouseY+'] ')
  select('#irgba').html('[RGBA='+get(mouseX,mouseY)+'] ')
}

console.log('Starting pre-setup');

// https://editor.p5js.org/jht1493/sketches/C83N_DY9w
// 1.1 draw_rect_createSpan