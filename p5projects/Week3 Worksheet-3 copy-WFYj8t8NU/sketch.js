// https://editor.p5js.org/jht1493/sketches/WFYj8t8NU
// timer using variable iframe

let iframe = 0;

function setup() {
  createCanvas(400, 400);
  // let frameCount = 0;
}

function draw() {
  
  background("white");
  iframe++;
  
  if(iframe > 30 && iframe < 60){
    // frameCount = frameCount+1;
    rect(150,150,100,100);   
  }else{
    background("black");
  }
  
  if (iframe > 120) {
    iframe = 0
  }
}