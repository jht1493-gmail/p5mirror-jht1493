let paragraph;

function setup() {
  createCanvas(100, 100);
  background(0);
  // createP("This is a random number " + random(100));

  paragraph = select('#unicorn');
  paragraph.mouseOver(changeBackground);

  let button = select('#button');
  button.mousePressed(canvasBg);
}

function canvasBg() {
  background(random(255));
}

function changeBackground() {
  const ocolor = paragraph.style('background-color');
  print('ocolor', ocolor)
  const ncolor = random(['#F0F', 'green', 'blue'])
  paragraph.style('background-color', ncolor);
}

// https://github.com/CodingTrain/website/blob/main/Tutorials/P5JS/p5.js/08/8.10_p5.js_select_selectAll_with_CSS_selectors
// https://www.youtube.com/watch?v=sSQPLIHIzmg