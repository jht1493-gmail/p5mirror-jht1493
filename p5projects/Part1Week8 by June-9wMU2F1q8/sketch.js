// TRY: scaled down images to improve response

//Create a dynamic collage that the viewer can interact with using DOM elements. The sketch should have one or more images that change by themself, one or more images that change under control by the viewer (using buttons, sliders, mouse press, key pressed etc..) You may choose to tell a story, make a simple game, or explore the visual options you have learned. The intent is of your design.

//use the slide to release the character.

let pic;
let w, h;
let slider;
let img;

function preload() {
  pic = loadImage("city.png");
  img = loadImage("person.png");
}

function setup() {
  createCanvas(pic.width, 370);
  
  console.log('pic.width', pic.width)
  console.log('img.width', img.width)
  
  w = pic.width / 2;
  h = pic.height / 2;

  //creat slider
  slider = createSlider(0, 255, 0, 25);
  slider.position(0, 370);
  slider.style("width", "500px");
}

function draw() {
  background(220);
  image(pic, 0, 0, w, h);
  // original
  pic.loadPixels();
  for (let y = 0; y < pic.height; y++) {
    for (let x = 0; x < pic.width; x++) {
      let originalColor = pic.get(x, y);
      const r = 255 - red(originalColor);
      const g = 200 - green(originalColor);
      const b = 245 - blue(originalColor);
      let outputColor = color(r, g, b);
      pic.set(x, y, outputColor);
      
      // color array - could be faster
      // try after images resized
      // const r = 255 - originalColor[0]
      // const g = 200 - originalColor[1]
      // const b = 245 - originalColor[2]
      // // let outputColor = color(r, g, b);
      // pic.set(x, y, [r,g,b,255]);
    }
  }
  pic.updatePixels();

  // flip over vertical axis
  push();
  translate(width, 0);
  // -1 * x, 1 * y
  scale(-1, 1);
  //draws reversed from upper right corner
  image(pic, 0, 0, w, h);
  pop();

  //Character move
  let Cheight = slider.value();
  let Cwidth = slider.value();
  image(img, 100, 200, Cwidth, Cheight + 20);
}

// https://editor.p5js.org/jht1493/sketches/9wMU2F1q8

// https://editor.p5js.org/DerJuni/sketches/eAb4qyRh9
// Part1Week8 by June

/*Image credit:Anthony Reungère on Splash
Link: https://unsplash.com/photos/s6xt1mwF_iU
*/
