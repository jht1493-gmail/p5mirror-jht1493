// https://p5js.org/reference/#/p5/second

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let s = second();
  // console.log(s);
  
  // every even second
  if (s % 2 == 0) {
    circle(width/4, width/2, 80);
  }
  
  // every odd second
   if (s % 2 == 1) {
    circle(width/4 * 3, width/2, 80);
  }
}

// https://editor.p5js.org/jht1493/sketches/yDi03zkbH
// ICM-06 Example - ICM 21 Week 4 - Timing with seconds from computer clock 

