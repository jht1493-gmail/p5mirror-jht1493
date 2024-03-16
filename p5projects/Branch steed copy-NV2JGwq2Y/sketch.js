let font;
let pg;
let canvasW = 400;
let canvasH = 400;
let textS = 400;


let tX, tY, sp, dspx, dspy, fct;

function setup() {

  c = random(255);

  createCanvas(canvasW, canvasH);
  background(c);
  createSliders();
  pg = createGraphics(canvasW, canvasH);
}

function draw() {
  pg.background(c);
  pg.fill(255);

  pg.textSize(textS);

  pg.push();
  pg.translate(canvasH / 2, canvasH / 2);
  pg.textAlign(CENTER, CENTER);
  pg.text("hi", 0, 0);
  pg.pop();

  let tilesX = tX.value();
  let tilesY = tY.value();

  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  let spv = sp.value();
  let dspxv = dspx.value();
  let fctv = fct.value();
  
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // WARP
      let waveX = int(
        sin(frameCount * spv + x * y * dspxv) * fctv
      );
      let waveY = int(
        sin(frameCount * spv + x * y * dspxv) * fctv
      );

      if (dspxv === 0) {
        waveX = 0;
      }

      if (dspxv === 0) {
        waveY = 0;
      }


      let sx = x * tileW + waveX;
      let sy = y * tileH + waveY;
      let sw = tileW;
      let sh = tileH;
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

function createSliders() {
  tX = createSlider(1, 80, 16, 1);
  tX.position(20, height + 40);
  createP("Tiles X").position(20, height);

  tY = createSlider(1, 80, 16, 1);
  tY.position(20, height + 100);
  createP("Tiles Y").position(20, height + 60);

  sp = createSlider(0, 1, 0.005, 0.01);
  sp.position(20, height + 160);
  createP("Speed").position(20, height + 120);

  dspx = createSlider(0, 0.1, 0.05, 0.001);
  dspx.position(180, height + 40);
  createP("Displacement X").position(180, height);

  dspy = createSlider(0, 0.2, 0, 0.01);
  dspy.position(180, height + 100);
  createP("Displacement Y").position(180, height + 60);

  fct = createSlider(0, 300, 100, 1);
  fct.position(180, height + 160);
  createP("Offset").position(180, height + 120);
}

//ref & tutorial: https://editor.p5js.org/DAI2020/sketches/uvJX1SM_J
