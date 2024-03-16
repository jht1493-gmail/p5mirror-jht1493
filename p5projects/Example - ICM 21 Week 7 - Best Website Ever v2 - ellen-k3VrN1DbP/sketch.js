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
}

function draw() {
  background('turquoise');
  
  noStroke();
  fill('yellow');
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  let angle = TWO_PI / 18;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = cos(a) * 120;
    let sy = sin(a) * 120;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// https://editor.p5js.org/enickles/sketches/Mo528psXY
// Example - ICM 21 Week 7 - Best Website Ever v2 - ellen

/* Source material references
Blue Palm Trees: https://www.pngjoy.com/preview/b6f8x2a7k9u7u7_palm-trees-blue-palm-trees-background-transparent-png/

Ocean Waves Slow Motion: https://www.videvo.net/video/ocean-waves-slow-motion/3577/

Code for sun: https://p5js.org/examples/form-regular-polygon.html
*/