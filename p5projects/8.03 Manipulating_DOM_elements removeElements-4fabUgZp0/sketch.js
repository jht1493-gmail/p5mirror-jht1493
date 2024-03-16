var a_canvas;
var h1;
var x = 100;
var y = 150;
let a_remove_btn;
let a_createP_btn;

// !!@ Need more practical example of DOM ui creation
// random is good for showing quick feedback
// but not for practical use on DOM ui
// unlikely removeElements for practical use
// for demo forces need for build_ui

function setup() {
  a_canvas = createCanvas(200, 200);
  a_canvas.position(400, 500);

  // h1.position(400, 400);
  // createP("My favorite color is purple")

  build_ui();
}

function build_ui() {
  // Could be local, make global for style debugging
  // let a_remove_btn;
  // let a_createP_btn;

  a_createP_btn = createButton('createP');
  // mousePressed method is called to set event handler
  // Don't this: -- WRONG!--
  // mousePressed = function () {
  // anonymous functions improves readability
  a_createP_btn.mousePressed(function() {
    // print('createP_btn.mousePressed');
    h1.html('Now I will show you my favorite number');
    createP('My favorite number is ' + random(0, 10));
  });
  // !!@ Use styles here to add margin/padding
  createSpan(' ');

  a_remove_btn = createButton('removeElements');
  a_remove_btn.mousePressed(function() {
    // print('a_remove_btn.mousePressed');
    removeElements();
    build_ui();
  });
  
  h1 = createElement('h1', 'Waiting.');
}

// function createP_btn_mousePressed() {
//   h1.html('Now I will show you my favorite number');
//   createP('My favorite number is ' + random(0, 10));
// }

// function mousePressed() {
//   h1.html('Now I will show you my favorite number');
//   createP('My favorite number is ' + random(0, 10));
// }

function draw() {
  //clear();
  background(150, 100);
  fill(255, 0, 0);
  rect(x, y, 50, 50);
  
  // !!@ pt.y = 171 eventhough set to 150
  // print('h1.position()', h1.position())
  // const cpt = a_canvas.position();
  // const pt = h1.position();
  // print('cpt', cpt, 'pt', pt)
  
  h1.position(x, y);
  
  // constrain(n, low, high)
  x = constrain(x + random(-5, 5), 0, width);
}

// https://github.com/CodingTrain/website/tree/main/
// Tutorials/P5JS/p5.js/08/8.03_p5.js_Manipulating_DOM_elements_html_position
// https://www.youtube.com/watch?v=YfaJ20vXcK8