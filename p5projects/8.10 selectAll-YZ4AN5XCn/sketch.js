let paragraphs;

function setup() {
  createCanvas(100, 100);
  background(0);
  // createP("This is a random number " + random(100));

  // paragraph = select('#unicorn');
  // paragraphs = selectAll('p');
  paragraphs = selectAll('.rainbow');

  for (var i = 0; i < paragraphs.length; i++) {
    // paragraph.mouseOver(changeBackground);
    const para = paragraphs[i];
    print('para', para);
    const osize = para.style('font-size');
    print('osize', osize)
    paragraphs[i].style('font-size', '24pt');
  }
  //paragraph.style('background-color', '#F0F')

  let button = select('#button');
  button.mousePressed(canvasBg);
}

function canvasBg() {
  background(random(255));
}

function changeBackground() {
  paragraph.style('background-color', '#F0F');
}
// https://github.com/CodingTrain/website/blob/main/Tutorials/P5JS/p5.js/08/8.10_p5.js_select_selectAll_with_CSS_selectors
// https://www.youtube.com/watch?v=sSQPLIHIzmg