// Pointillism is a painting technique using small and single colored dots to create one cohesive image

// I wanted to use the source image as the image that is loaded through this technique but not sure how...

// Source: https://www.youtube.com/watch?v=aza-3oZjY4g
//let img;
let capture;
let cg; //create graphics, create a layer as a background

  //trying with a preexising image:
function preload (){
  img = loadImage ("nightGowns.jpg");
}

function setup() {
  createCanvas(600, 750);
  // capture = createCapture(VIDEO); // when i take the video from the parenthesis it would capture sound as well
  
  // capture.hide();

  cg = createGraphics(width, height);
}

function draw() {
  background(220); // we add cg to the ellipse functions so it applies only to that create graphics layer

  // image (img,0,0, width, height);
  
  img.loadPixels();

  let x1 = random(img.width);
  let y1 = random(img.height);

  let c = img.get(x1, y1); //x,y of the very pixel we want to get

  cg.noStroke();
  cg.fill(c);
  cg.ellipse(x1, y1, 10, 10); //by adding cg is saying that it applies only to the cg layer now that we added back the background layer

  image(cg, 0, 0, width, height); // now we have to draw it out by creating an image

  //print (c); we can see it contains r,g,b,a values
  // img.updatePixels();
}
