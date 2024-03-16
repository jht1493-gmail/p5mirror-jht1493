function setup() {
  createCanvas(400, 180);
  background(220);
  create_ui();
}

function draw() {
  update_ui();
}

function draw_bars(xpos, ypos) {
  // translate(x, y)
  translate(xpos, ypos)
  // rect(x, y, w, h)
  rect(20, 0, 20, 20);
  rect(0, 20, 60, 20);
  rect(20, 40, 20, 20);
  translate(-xpos, -ypos)
}

function create_ui() {
  createButton('Bars').mousePressed(function() {
    print('calling function draw_bars 5, 60');
    draw_bars(5, 60);
    print('calling function draw_bars 70, 60');
    draw_bars(70, 60);
  });
  createP();
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
}

function update_ui() {
  select('#mox').html('[mouseX=' + mouseX + '] ')
  select('#moy').html('[mouseY=' + mouseY + '] ')
  select('#cco').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/Tiu0zz1NE
// draw_bars_ui