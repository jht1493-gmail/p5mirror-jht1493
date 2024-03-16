var p;

function setup() {
  noCanvas();
  p = createP('This is a link: ');
  p.style('background-color', '#CCC');
  p.style('padding', '24px');

  // var a = createA('#', 'apples');
  // var a = createA('', 'apples');
  // Use button to avoid bug with link loading editor in canvas iframe
  var a = createButton('apple');
  a.mousePressed(addPhoto);
  a.parent(p);
}

function addPhoto(pitem) {
  
  var img = createImg('apple.png', 'apple-alt');
  img.size(100, 100);
  img.parent(p);
  
  // img.parent(this);
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/
// 8.14_0_p5.js_parent()_and_child()_again_with_variables
// https://www.youtube.com/watch?v=4OAG_BkQcPE&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=14

