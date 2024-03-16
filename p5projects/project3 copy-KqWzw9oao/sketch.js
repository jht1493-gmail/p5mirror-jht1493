function setup() {
  createCanvas(800, 800);
  create_slider_colorR();
  create_slider_colorG();
  create_slider_colorB();
  create_slider_maxis();
  create_slider_miaxis();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rec_ellipse_draw(0, 0, 10, 15, 5);
}


function rec_ellipse_draw(x, y, maxis, miaxis, rdegree) {
  noFill();
  stroke(sliderR.value(), sliderG.value(), sliderB.value());
  strokeWeight(1);
  rotate(rdegree);
  ellipse(x, y, maxis, miaxis)
  if (maxis < width && miaxis < height) {
    maxis += sliderMa.value();
    miaxis += sliderMi.value();
    rec_ellipse_draw(x, y, maxis, miaxis, rdegree)
  }
}

let sliderR;
let sliderG;
let sliderB;
let sliderMi;
let silderMa;

function create_slider_colorR() {
  createSpan('colorR_slider').style('helevetica', '20px');
  sliderR = createSlider(0, 255, 125);
  sliderR.style('width', '80px');
}

function create_slider_colorG() {
  createSpan('colorG_slider').style('helevetica', '20px');
  sliderG = createSlider(0, 255, 125);
  sliderG.style('width', '80px');
}

function create_slider_colorB() {
  createSpan('colorB_slider').style('helevetica', '20px');
  sliderB = createSlider(0, 255, 125);
  sliderB.style('width', '80px');
}

function create_slider_maxis() {
  createElement('br');
  createSpan('sliderMa').style('font-size', '30px');
  sliderMa = createSlider(0, 50, 125);
  sliderMa.style('width', '80px');
}

function create_slider_miaxis() {
  createSpan('sliderMi').style('helevetica', '20px');
  sliderMi = createSlider(0, 50, 125);
  sliderMi.style('width', '80px');
}