// var p;
var images = [];
function setup() {
  noCanvas();
  for (var i = 0; i < 5; i++) {
    var p = createP('This is a link: ');
    p.style('background-color', '#CCC');
    p.style('padding', '24px');

    // !!@ Fails. some clicks will loaded editor into canvas iframe
    // var a = createA('#', 'apples');
    // Use button to avoid failure
    var a = createButton('apples');
    a.mousePressed(addPhoto);
    a.parent(p);
  }

  var button = select('#clear');
  button.mousePressed(clearStuff);
}
function clearStuff() {
  for (var i = 0; i < images.length; i++) {
    images[i].remove();
    // images[i].hide();
  }
  images = [];
}
function addPhoto() {
  var img = createImg('appleImage.jpg');
  images.push(img);
  img.size(100, 100);
  // img.parent(p);
  // img.parent(this);
  var paragraph = this.parent();
  img.parent(paragraph);
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.14_3_p5.js_parent()_and_child()_again_with_variables
// https://www.youtube.com/watch?v=4OAG_BkQcPE&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=14