function setup() {
  for (var i = 0; i < 10; i++) {
    var p = createP('apples');
    // var p = createA('#', 'apples');
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x, y);
    p.class('apple');
  }

  for (i = 0; i < 10; i++) {
    var p = createP('blueberries');
    // var p = createA('http://google.com', 'blueberries')
    // p = createA('#', 'blueberries');
    x = floor(random(windowWidth));
    y = floor(random(windowHeight));
    p.position(x, y);
    p.class('blueberry');
    p.mousePressed(becomeApple);
  }
}

function becomeApple() {
  this.removeClass('blueberry');
  this.class('apple');
}

function draw() {}


// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.13_p5.js_Assign_a_CSS_class_dynamically
// https://www.youtube.com/watch?v=KMRgLi2TBhQ
