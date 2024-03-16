// jht: Added optional slider

// Create a dynamic collage that the viewer can interact with using DOM elements. The sketch should have one or more images that change by themself, one or more images that change under control by the viewer (using buttons, sliders, mouse press, key pressed etc..) You may choose to tell a story, make a simple game, or explore the visual options you have learned. The intent is of your design.

let underwatermelon;
let jellyfish;
let x=0;
let speed = 2;
let slider;
let hue;
let a_alpha = 100;

function preload(){
  underwatermelon = loadImage("underwatermelon.jpeg")
  jellyfish = loadImage('jellyfish.png')
}

function setup() {
  createCanvas(500, 500);
  slider = createSlider(0,255);
  slider.position(0, 0);
  // The input method of connecting a slider
  // to variable also for the slider to be optional
  // createSlider(min, max, [value], [step])
  createSlider(0,255, a_alpha).input( function () {
    a_alpha = this.value();
    console.log('a_alpha', a_alpha)
  });
}

function draw() {
  scale(0.5)
  image(underwatermelon,0,0)
  scale(0.4)
  image(jellyfish,x,0)
  x=x+speed
  if (x==width+700){
    speed = -speed
  }
  if (x==-400){
    speed = -speed
  }
  hue = slider.value()
  //tint(v1, v2, v3, [alpha])
  tint(255,hue,hue,a_alpha)
}

// https://editor.p5js.org/jht1493/sketches/3unl-jWfp
// ICM Week 8 Creative Exercise -optional slider

// https://editor.p5js.org/qiqirathwang/sketches/ZhLaEg_fC
// ICM Week 8 Creative Exercise by Teresa

//Image Source https://phyllisma.com/mushrooms/
