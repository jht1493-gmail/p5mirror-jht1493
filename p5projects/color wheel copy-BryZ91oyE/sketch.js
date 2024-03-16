// https://editor.p5js.org/jht1493/sketches/BryZ91oyE
//

let segmentCount = 80;
let radius;

function setup() { 
  createCanvas(600, 600);
  radius = 300;
  noStroke();
  
  colorMode(HSB, 360, width, height);
  background('white');
  
  var angleStep = floor(360 / segmentCount);
  
  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);
  for(var angle = 0; angle <= 360; angle += angleStep) {
    console.log('----------------');
    
    var vx = width / 2 + cos(radians(angle)) * radius;
    console.log(radians(angle));
    console.log(cos(radians(angle)));
    console.log(cos(radians(angle))*radius);
    
    var vy = width / 2 + sin(radians(angle)) * radius;
    console.log(radians(angle));
    console.log(sin(radians(angle)));
    console.log(sin(radians(angle))*radius);
    vertex(vx, vy);
    //fill(angle, mouseX, mouseY);
    fill(angle, 600, 600);
    
    console.log('----------------');
  } // end of for loop
  endShape();
} 

function draw() { 
  
}


// https://editor.p5js.org/dfeusse/sketches/Sk9r9hb2W
