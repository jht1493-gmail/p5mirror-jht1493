let textbox;
let slider;
let paragraph;

function setup() {
  noCanvas();
  textbox = createInput('enter text');
  slider = createSlider(10, 64, 16);
  paragraph = createP('starting text');

  textbox.changed(updateText);
  slider.changed(updateSize);
  //slider.input(updateSize);
  //textbox.input(doSomething); not yet working due to editor issue (2015.10.24)
}

function updateSize() {
  // paragraph.style("font-size", "24pt");
  paragraph.style('font-size', slider.value() + 'pt');
}

function updateText() {
  paragraph.html(textbox.value());
}

// https://github.com/CodingTrain/website/tree/main/Tutorials/P5JS/p5.js/08/8.08_p5.js_events_changed_input
// https://www.youtube.com/watch?v=ZEy0_NLhdSE