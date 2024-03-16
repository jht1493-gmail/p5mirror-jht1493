function setup() {
  createCanvas(400, 200);
  create_ui();
}
let alpha = 2;
function draw() {
  // background(220);
  // frameRate(1);
  draw_head(10+60, 20, [255,255,255,alpha]);
  draw_head(10, 80, [255,255,0,alpha]);
  draw_head(60-10, 80, [128,128,128,alpha]);
  draw_head(110-20, 80, [255,0,0,alpha]);
  draw_head(160-30, 80, [0,255,0,alpha]);
  draw_head(300, 80, 'green');
  update_ui()
}

function draw_head(xpos, ypos, acolor) {
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
  createSpan().id('mox');
  createSpan().id('moy');
  createSpan().id('cco');
}

function update_ui() {
  select('#mox').html('[mouseX='+mouseX+'] ')
  select('#moy').html('[mouseY='+mouseY+'] ')
  select('#cco').html('[RGBA='+get(mouseX,mouseY)+']')
}