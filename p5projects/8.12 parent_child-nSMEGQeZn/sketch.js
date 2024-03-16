var happy = ['rainbow', 'unicorn', 'purple', 'bacteria'];

function setup() {
  noCanvas();
  // var canvas = createCanvas(400, 400);
  // canvas.parent("canvasP");
  var button = select('#button');
  button.mousePressed(addItem);
}

// function draw() {
//   background(0);
//   ellipse(200,200,random(100), random(100));
// }
function addItem() {
  var r = floor(random(0, happy.length));
  var li = createElement('li', happy[r]);
  li.parent('happylist');
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.12_p5.js_parent_child
// https://www.youtube.com/watch?v=eoXLD0Aw1YI&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=12
