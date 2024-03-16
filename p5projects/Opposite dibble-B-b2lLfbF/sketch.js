// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-11: Simple color tracking

var video;

  // sum of qualifying coordinates
  var cumulativeX = 0;
  var cumulativeY = 0;
  var numberThatQualified = 0;
  

// A variable for the color we are searching for.
var trackColor; 

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  video.hide();

  // Start off tracking for red
  trackColor = [255, 0, 0];
}

function draw() {
  

  // Draw the video
  image(video,0,0);

  // We are going to look at the video's pixels
  video.loadPixels();

	//Make a threshold for a group of pixels
  var threshold = 30;

  // sum of qualifying coordinates
  cumulativeX = 0;
  cumulativeY = 0;
  numberThatQualified = 0;
  

  for (var y = 0; y < video.height; y++ ) {
    for (var x = 0; x < video.width; x++ ) {
      var loc = (x + y * video.width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r1 = video.pixels[loc   ]; 
      var g1 = video.pixels[loc + 1];
      var b1 = video.pixels[loc + 2];

      var r2 = trackColor[0];
      var g2 = trackColor[1];
      var b2 = trackColor[2];

      // Using euclidean distance to compare colors
      var d = dist(r1, g1, b1, r2, g2, b2); // We are using the dist( ) function to compare the current color with the color we are tracking.

      // if it close enough
      if (d < threshold) {
        numberThatQualified ++;
        cumulativeX = cumulativeX + x;
        cumulativeY = cumulativeY + y;
      }
    }
  }

  // We only consider the color found if its color distance is less than 10. 
  // This threshold of 10 is arbitrary and you can adjust this number depending on how accurate you require the tracking to be.
  if (numberThatQualified  >0 ) { 
    // Draw a circle at the tracked pixel
    fill(trackColor);
    strokeWeight(4.0);
    stroke(0);
    
    ellipse(cumulativeX/numberThatQualified , cumulativeY/numberThatQualified , 16, 16);
  }
}


function mousePressed() {
  // Save color where the mouse is clicked in trackColor variable
  trackColor = video.get(mouseX,mouseY);
  console.log(trackColor);
}

// https://editor.p5js.org/dano/sketches/rJR9QBRp-

