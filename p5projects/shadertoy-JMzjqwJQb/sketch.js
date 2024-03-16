// https://editor.p5js.org/jht1493/sketches/JMzjqwJQb
// BLM shadertoy

//EN
let message = "BLACK LIVES MATTER";
let fontSize = 38;
let fontScaleY = 1;

//PT
// let message = "VIDAS NEGRAS IMPORTAM"
// let fontSize = 34
// let fontScaleY = 1.3

let messageCanvas;
let geometry;
let size;

let draw_blm = 0;

function preload() {
  font = loadFont("ArchivoBlack-Regular.ttf");
  // load the shader
  theShader = loadShader("assets/webcam.vert", "assets/webcam.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textureWrap(REPEAT, REPEAT);
  noStroke();

  size = min(width, height) / 3;

  messageCanvas = createGraphics(512, 32);
  messageCanvas.pixelDensity(4);
  messageCanvas.textSize(fontSize);
  messageCanvas.textFont(font);
  messageCanvas.textAlign(CENTER, CENTER);
  messageCanvas.fill(255);
  messageCanvas.scale(1, fontScaleY);
  messageCanvas.text(
    message,
    messageCanvas.width / 2,
    messageCanvas.height / 3.2
  );

  initGeometry();
}

function initGeometry() {
  let points = [];
  for (let i = 0; i < 80; i++) {
    let x = cos((i / 80) * TWO_PI);
    let y = sin((i / 80) * TWO_PI);
    points.push([x, y]);
  }

  geometry = new p5.Geometry(points.length, 1);
  geometry.extrudePoints(points, -1.3, 1, true);

  geometry.computeUVs(1, 18);
  geometry.computeFaces();
  geometry.computeNormals();
  if (this._renderer._doStroke) {
    geometry._makeTriangleEdges();
    geometry._edgesToVertices();
  }
  this._renderer.createBuffers("!", geometry);
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iFrame", frameCount);
  theShader.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);

  // rect gives us some geometry on the screen
  rect(0, 0, width, height);

  // background(0)
  // draw_blm = (int(frameCount / 60) % 2 ) == 0
  if (draw_blm) {
    blm();
  }
}

function blm() {
  orbitControl();
  ambientLight(100);
  directionalLight(
    255,
    255,
    255,
    width - mouseX - width / 2,
    height - mouseY - height / 2,
    1
  );
  texture(messageCanvas);
  push();
  //rotateY(-PI/4);
  rotateY(-PI / 2);
  rotateZ(millis() / 5000);
  this._renderer.drawBuffersScaled("!", size, size, size);
  pop();
}


/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/913474

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/
