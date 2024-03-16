// I should have done a wood pattern instead of clouds 🧐
function setup() {
  createCanvas(400, 400);
  noStroke();
  // frameRate(1)// once per second
}

// function draw() {for (var x = 0; x < width; x += 10) {
//     for (var y = 0; y < height; y += 10) {
      
//       var c = 255 * noise(0.01 * x, 0.01 * y);
//       fill(c);
//       circle(x, y, 10);
      
//       fill(random(colors));
//       // changing the x and y value to offset the circles to fall in gaps in between the noise circles
//       circle(x - 5, y - 5, 5, 5); 
//     }
//   }}

function draw() {
  if (frameCount % 60 == 0) {
    background(255)
  }
  for (var x = 0; x < width; x += 10) { // Main loop goes through wide and high var to have some space in between each circle other 10 by 10

    for (var y = 0; y < height; y += 10) {
      var c = 255 * noise(0.01 * x, 0.01 * y); // We then turn it into color ranging 0-255 by multiplying it to 255 ; noise function to generate pattern in the sketch; Noise generate values considering those two X’and Y’s related to its surrounding; 

      
      fill(c, 20); // Fill (c) the circles with the noise values
      circle(x, y, 10);
      
      // checking to see if the noise-colored circle's color value is less than 90 (dark) to draw yellow circles near the darker ones
      if(c<90){
        fill("yellow");        
      } else {
        fill(c);
      }
      
      // changing the x and y value to offset the circles to fall in gaps in between the noise circles
      circle(x - 5, y - 5, 5);
    }
  }
}

// https://www.youtube.com/watch?v=Qf4dIN99e2w
//https://gorillasun.de/blog/introduction-to-perlin-noise-in-p5js-and-processing
//https://lodev.org/cgtutor/randomnoise.html


