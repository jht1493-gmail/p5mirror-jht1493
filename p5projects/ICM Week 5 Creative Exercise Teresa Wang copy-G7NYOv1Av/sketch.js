let layer1;
let layer2;
function setup() {
  a_canvas = createCanvas(600, 400);
  // createGraphics(w, h, [renderer])
  layer1 = createGraphics(600, 400);
  layer2 = createGraphics(600, 400);
}

function draw() {
  layer1.background(220);
  layer1.fill(100, 100);
  drawTornado(layer1,200, 200, 10, 5);
  tree(layer1, 50, 60, 5, 30, 20);
  tree(layer1, 300, 300, 5, 30, 20);
  tree(layer1, 500, 250, 5, 30, 20);
  // image(img, x, y, [width], [height])
  image(layer1,0,0)
  image(layer2,0,0);
}

// how can I make the tornardo move?
function drawTornado(layer,a, b, c, d) {
  let xpos = a;
  let ypos = b;
  let width = c;
  let height = d;
  for (i = 1; i < 10; i = i + 1) {
    layer.stroke(250);
    layer.ellipse(xpos, ypos, width, height);
    width = width + 10;
    height = height + 5;
    xpos = xpos + 1;
    ypos = ypos - 10;
    if (xpos == 210 || xpos == 211 || xpos == 212) {
      xpos = 200;
    } else {
      xpos = xpos + 1;
    }
  }
}

function tree(layer, x, y, rw, rh, d) {
  layer.noStroke();
  layer.fill(188, 143, 143, 100);
  layer.rect(x, y, rw, rh, PI);
  layer.fill(85, 107, 47, 200);
  layer.ellipse(x + rw / 2, y + d / 10, d);
}

//this won't work, 
// even when I try just a rectangle 
// instead of my tree function
function mousePressed() {
  let x= random(100, 500);
  let y = random(200, 300);
  let rw = random(50, 10);
  let rh = random(50, 10);
  let d = random(50, 10);
  tree(layer2, x, y, rw, rh, d)
}

// https://editor.p5js.org/jht1493/sketches/UlVOmPiV9

// https://editor.p5js.org/qiqirathwang/sketches/V3KOjDg_E
// ICM Week 5 Creative Exercise Teresa Wang
