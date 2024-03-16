// TRY: perserving aspect ratio of video

let video;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  slider = createSlider(25,65,25,5);
  slider.position(windowWidth/2, 0);
  slider.style('width', '100px');
}

function draw() { 
  background(255);
  let gridSize = slider.value();
  video.loadPixels();
  if (!mouseIsPressed){
    for (let y=0; y<video.height; y+=gridSize) {
      for (let x=0; x<video.width; x+=gridSize) {
        //noStroke();
        let index = (y * video.width + x) * 4;
        let r = video.pixels[index];
        //let level = map(r, 0,255, gridSize,2);
  
        fill(r);
        rect(x+gridSize/2-gridSize,y+gridSize/2-gridSize, x,y);
      
      }
    }
  }else{
    for (let y=0; y<video.height; y+=gridSize) {
      for (let x=0; x<video.width; x+=gridSize) {
      
        let index = (y * video.width + x) * 4;
        let r = video.pixels[index];
        //let level = map(r, 0,255, gridSize,2);
      
        fill(255-r);
        rect(x+gridSize/2-gridSize,y+gridSize/2-gridSize, x,y);
    }
  
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/BsiIm2Iz3

// https://editor.p5js.org/kelinnnnyu/sketches/Slm-859su
// week_9_hw by Kelin
