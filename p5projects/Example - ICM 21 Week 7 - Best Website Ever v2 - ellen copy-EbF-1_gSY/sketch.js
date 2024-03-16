function setup() {
  select('body').attribute('bgColor', '#ffcff9');
  let myCanvas = createCanvas(400, 400);
  myCanvas.position(270, 80);

  let myTitle = createElement('h1', 'Best Website Ever');
  myTitle.position(30, 10);
  myTitle.style('color', 'fuchsia');
  
  let myText = createP('Take a deep breath and relax.');
  myText.position(30, 390);
  myText.style('color', 'darkblue');

  let palmsPic = createImg('assets/bluepalms.png', 'blue palms');
  palmsPic.size(400, 400);
  palmsPic.position(30, 90);

  let myOceanVid = createVideo('assets/ocean.webm');
  myOceanVid.size(640, 480);
  myOceanVid.position(30, 400);
  myOceanVid.loop();
  
  build_ui();
}

let n_sides = 18;
let a_color = 'yellow';
let a_yellow_value = 138;

function draw() {
  background('turquoise');
  
  noStroke();
  fill(a_color);
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  let angle = TWO_PI / n_sides;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * 120;
    let sy = sin(a) * 120;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function build_ui() {
  // createSlider(min, max, [value], [step])
  createSlider(3, 20, n_sides).input(function() {
    n_sides = this.value();
  });
  createButton('red').mousePressed(function() {
    a_color = 'red';
  });
  createButton('green').mousePressed(function() {
    a_color = 'green';
  });
  createButton('yellow').mousePressed(function() {
    a_color = [a_yellow_value, a_yellow_value, 0];
  });
  createSlider(0, 255, a_yellow_value).input(function() {
    a_yellow_value = this.value();
    a_color = [a_yellow_value, a_yellow_value, 0];
  });
}

// https://editor.p5js.org/jht1493/sketches/uGy4cEzbs
// 3.5 circleX ui more

// https://editor.p5js.org/jht1493/sketches/EbF-1_gSY
// Example - ICM 21 Week 7 - Best Website Ever v2 - ellen copy

// https://editor.p5js.org/enickles/sketches/Mo528psXY
// Example - ICM 21 Week 7 - Best Website Ever v2 - ellen

/* Source material references
Blue Palm Trees: https://www.pngjoy.com/preview/b6f8x2a7k9u7u7_palm-trees-blue-palm-trees-background-transparent-png/

Ocean Waves Slow Motion: https://www.videvo.net/video/ocean-waves-slow-motion/3577/

Code for sun: https://p5js.org/examples/form-regular-polygon.html
*/