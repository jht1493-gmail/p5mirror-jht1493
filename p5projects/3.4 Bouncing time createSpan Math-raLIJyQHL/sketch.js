// https://editor.p5js.org/jht1493/sketches/raLIJyQHL
// 3.4 Bouncing time createSpan Math
// Use createSpan to show fps, secs and color

let r = 30;
let posX = 30;
let speedX = 2;
let color;

function setup() {
  createCanvas(300, 200);
  frameRate(30)
  // createSlider(min, max, [value], [step])
  createSlider(0, 60, 30).input(function() {
    frameRate( this.value());
  });
  createElement('br')
  createSpan().id('fps')
  createSpan().id('secs')
  createSpan().id('color')
}

function draw() {
  background(220);
  color = round((posX / width) * 255);
  fill(color);

  circle(posX, height/2, r);
  posX = speedX + posX;

  if (posX > width || posX < 0) {
    speedX = -speedX;
  }
  
  let secs = millis()/1000
  // text(secs, 10, height - textSize())
  // secs = nfc(secs,2)
  // secs = Math.trunc(secs*100) / 100;
  secs = secs.toFixed(2)
  
  let fps = frameRate();
  // fps = Math.trunc(fps*100) / 100;
  fps = fps.toFixed(2)

  select('#fps').html('[fps='+fps+']')
  select('#secs').html('[secs='+secs+']')
  select('#color').html('[color='+color+']')
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

// https://p5js.org/reference/#/p5/nfc
// https://p5js.org/reference/#/p5/millis
// https://p5js.org/reference/#/p5/createA
//   createA(href, html, [target])

// https://editor.p5js.org/jht1493/sketches/jaPZ8e1RW
// Bouncing time createSpan

// https://editor.p5js.org/jht1493/sketches/MmO5_YUKR
// Bouncing Ball by Herui copy

// https://editor.p5js.org/hc3786/sketches/_Wfc0mflF
// Bouncing Ball by Herui
