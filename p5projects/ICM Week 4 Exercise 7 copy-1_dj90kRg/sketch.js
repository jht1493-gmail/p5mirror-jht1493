function setup() {
  createCanvas(400, 400);
  //Make frame change every 30 seconds
  // frameRate(2);
}

function draw() {
  background(220);
  // %2 alternates
  if (second()%2 == 0){
    rect(50,50,50);
    
  }
  
}