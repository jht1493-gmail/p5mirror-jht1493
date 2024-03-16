// https://editor.p5js.org/jht1493/sketches/u13JQBCSD
// Truchet func 2

function setup() {
  createCanvas(400, 400);
  background(190)
  noStroke();
}

function draw() {
  let d = 100;
  let x0 = 0;
  let y0 = 0;
  let backc = 220;
  let forec = 0;
  truc0(x0, y0, d, backc, forec); 
  truc1(x0+100, y0, d, backc, forec);
  backc = 0;
  forec = 220;
  truc0(x0+200, y0, d, backc, forec); 
  truc1(x0+300, y0, d, backc, forec);
}

function truc0(x0, y0, d, backc, forec) {
  fill(backc);
  rect(x0, y0, d, d);
  fill(forec);
  arc(x0, y0, d, d, HALF_PI * 0, HALF_PI * 1, PIE);
  arc(x0 + d, y0 + d, d, d, HALF_PI * 2, HALF_PI * 3, PIE);
}

function truc1(x0, y0, d, backc, forec) {
  fill(backc);
  rect(x0, y0, d, d);
  fill(forec);
  arc(x0 + d, y0, d, d, HALF_PI * 1, HALF_PI * 2, PIE);
  arc(x0, y0 + d, d, d, HALF_PI * 3, HALF_PI * 4, PIE);
}

// arc(x, y, w, h, start, stop, [mode], [detail])

// https://editor.p5js.org/jht1493/sketches/V2ifPvqiw
// Truchet func

// https://editor.p5js.org/jht1493/sketches/jK_d9a5uK
// Truchet Therapeutic
