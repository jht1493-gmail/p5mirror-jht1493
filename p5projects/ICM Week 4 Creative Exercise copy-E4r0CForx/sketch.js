function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function draw() {
  background(random (200,255),50);
  if (mouseIsPressed){
    for (let x=width; x>=0; x=x-40){
        for (y=height; y>=0; y=y-20){
          strokeWeight(3)
          stroke(x,y,50);
          line (x,y, x+10, y+10);
          line(x+10,y+10, y+20, x+20);    
        } 
    }
  }
}
