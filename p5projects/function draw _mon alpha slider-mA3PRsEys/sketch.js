function setup() {
  createCanvas(400, 200);
  create_ui();
}
let a_alpha = 20;
function draw() {
  // background(220);
  // frameRate(1);
  draw_mon(10+60, 20, [255,255,255,a_alpha]);
  draw_mon(10, 80, [255,255,0,a_alpha]);
  draw_mon(60-10, 80, [128,128,128,a_alpha]);
  draw_mon(110-20, 80, [255,0,0,a_alpha]);
  draw_mon(160-30, 80, [0,255,0,a_alpha]);
  draw_mon(300, 80, 'green');
  update_ui()
}

function draw_mon(xpos, ypos, acolor) {
  translate(xpos,ypos)
  fill(acolor)
  // ellipse(x, y, w, [h])
  ellipse(20*2, 20*2, 40*2);     // Face
  ellipse(10*2, 16*2, 10*2);     // Left Eye
  ellipse(30*2, 16*2, 10*2);     // Right Eye
  ellipse(20*2, 30*2, 20*2, 8*2);  // Mouth
  translate(-xpos,-ypos)
}

function create_ui() {
  createSpan().id('alp');
  createSlider(0, 255, a_alpha).input(function () {
    a_alpha = parseFloat(this.value());
  });
  createP();
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
}

function update_ui() {
  select('#alp').html('[a_alpha='+a_alpha+'] ')
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
  select('#cco').html('[RGBA='+get(mouseX,mouseY)+']')
}


// https://editor.p5js.org/jht1493/sketches/mA3PRsEys
// function draw_mon alpha slider
