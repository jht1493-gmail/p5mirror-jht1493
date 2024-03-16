var paragraphs;
var paragraph;

function setup() {
  createCanvas(100, 100);
  background(0);
  // createP("This is a random number " + random(100));

  paragraph = select('#unicorn');

  for (var i = 0; i < 100; i++) {
    var par = createP('rainbow');
    par.position(random(500), random(500));
  }
  paragraphs = selectAll('p');
  // paragraphs = selectAll('.rainbow');

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }

  // paragraph = select('#unicorn');
  // paragraph.mouseOver(highlight);
  // paragraph.mouseOut(unhighlight);
}

function highlight() {
  this.style('padding', '16pt');
  this.style('background-color', '#F0F');
}

function unhighlight() {
  this.style('padding', '0pt');
  this.style('background-color', '#FFF');
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.11_p5.js_callbacks_on_multiple_DOM_elements
// https://www.youtube.com/watch?v=KeZBpeH59Q4