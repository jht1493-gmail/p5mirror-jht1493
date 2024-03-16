function setup() {
  createCanvas(400, 180);
  create_ui();
}

function draw() {
  background(220);
  draw_bars(5, 60, 'white');
  draw_bars(70, 60, 'gray');
  draw_bars(135, 60, 'yellow');
  draw_bars(200, 60, 'red');
  draw_bars(265, 60, 'green');
  update_ui();
}

function draw_mon(xpos, ypos, acolor) {
  // fill(color)
  // fill([r,g,b,a])
  fill(acolor);
  // translate(x, y)
  translate(xpos,ypos)
  // rect(x, y, w, h)
  rect(20, 0, 20, 20);     
  rect(0, 20, 60, 20);     
  rect(20, 40, 20, 20);     
  translate(-xpos,-ypos)
}

function create_ui() {
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
}

function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
  select('#cco').html('[RGBA='+get(mouseX,mouseY)+'] ')
}

// https://editor.p5js.org/jht1493/sketches/a3VD0HYqD
// draw_bars color
