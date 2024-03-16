// https://editor.p5js.org/jht1493/sketches/LZwntA2dD
// 3.2 mouseOver reference
// Use createA to use DOM to link to reference

let cnv;
let d;
function setup() {
  cnv = createCanvas(100, 100);
  cnv.mouseOver(changeGray);
  d = 10;
  background(220);
  let aRef = 'https://p5js.org/reference/#/p5.Element/mouseOver';
  createA(aRef,'mouseOver reference','target')
}

function draw() {
  ellipse(width / 2, height / 2, d, d);
}

function changeGray() {
  d = d + 10;
  if (d > 100) {
    d = 0;
  }
}

// https://p5js.org/reference/#/p5/createA
// createA(href, html, [target])
