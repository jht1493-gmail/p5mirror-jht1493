function setup() {
  createCanvas(400, 400);
  
  background(255,0,0);
  let blue = color(0,0,255);
  
  set(0,0, blue);
  set(1,0, blue);
  set(2,0, blue);
  set(3,0, blue);
  updatePixels();
  
  let myPixel = get(0,0);
  
  print(myPixel);
}

function draw() {

}

// https://editor.p5js.org/lisajamhoury/sketches/LBgFH1RF8
