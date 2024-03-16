//W8.1 resize images almost
// need to CENTER resized image ???
// https://editor.p5js.org/benjamin.bergery/sketches/s7CSybzZn

function preload() {
  pic = loadImage("fortitude.png");
  // pic = loadImage("NYETwarSign.png");
}

let Wslide;
function setup() {
  // frameRate(1);

  createCanvas(450, 300);

  let aspectR = width / height;

  // horizontal
  if (pic.width / pic.height > aspectR) {
    scale(width / pic.width);
    console.log("horizontal");
    background(0);
    image(pic, 0, 0, pic.width, pic.height);
  
    // let offset = height - pic.height/2;
    // transform(0,offset);
 
    // else vertical
  } else {
    scale(height / pic.height);
    console.log("vertical");
    background(0);
    imageMode(CORNER);
    image(pic, width/2 + pic.width / 2, 0, pic.width, pic.height);
  }
}

function draw() {}

// function setupWidthSlider() {
//   createP(); createSpan('WIDTH ')
//     let Wslide = createSlider(10,600,300,5);
// }

////////////////////////////////////////////

// imageMode(CORNER, CORNERS, or CENTER)
// imageMode(CENTER);
//  image(img, 50, 50, 80, 80);
// (CORNER), which interprets the second and third parameters of image() as the upper-left corner of the image. If two additional parameters are specified, they are used to set the image's width and height.
// (CORNERS) interprets the second and third parameters of image() as the location of one corner, and the fourth and fifth parameters as the opposite corner.
// (CENTER) interprets the second and third parameters of image() as the image's center point. If two additional parameters are specified, they are used to set the image's width and height.

//Resize an image to display in the width and height of the window while maintaining its aspect ratio. A vertical image should show a border on the left and right. A horizontal image should show a border on the top and bottom. Don’t forget about imageMode( ).
//Challenge: Write an algorithm that will work for any image that you upload for which you do not know the aspect ratio. (Source: HappyCoding.io)

//https://editor.p5js.org/benjamin.bergery/sketches/VbmGb6bj9
