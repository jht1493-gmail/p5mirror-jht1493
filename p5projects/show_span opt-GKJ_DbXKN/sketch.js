// for start millis()
let start_time;
  
console.log('This is Math.PI', Math.PI);
// console.log('Before setup this is p5js PI', PI);

// Display mouseX & mouseY coords
function setup() {
  createCanvas(400, 400);
  background(200);
  
  // number of frames to be displayed every second
  frameRate(5);
  
  print('This is p5js PI', PI);
  start_time = millis();
  
  print('setup frameCount', frameCount);
}

function draw() {
  show_span('mouseX', mouseX);
  show_span('mouseY', mouseY, {line:1});
  
  show_span('frameCount', frameCount);
  
  show_span('frameRate', frameRate(), {line:1, round:3})
  
  show_span('milli', millis(), {round: 3});
  
  const lapse_sec = (millis()-start_time)/1000
  show_span('lapse_sec', lapse_sec, {round:2});
  
  const lapse_min = lapse_sec / 60;
  show_span('lapse_min', lapse_min, {round:1});

  // show_span('milli', millis())
}

// show_span(label, value);
//   Show value in a span
//   label is the html id for the span
// show_span(label, value, opt);
//   opt = { line:1 }      // cause a line break
//   opt = { round:n }   // round value to n decimals
// eg. show miliseconds to 3 decimal places with a line break
//    show_span('milli', millis(), {line:1, round:3});
//
function show_span(label, value, opt) {
  let elm = select('#' + label);
  if (!elm) {
    elm = createSpan().id(label);
    elm.style('font-size', '30px');
  }
  let ndecimal = 2;
  if (opt && opt.round) {
    ndecimal = opt.round;
  }
  value = round(value, ndecimal)
  elm.html('[' + label + ' ' + value + '] ');
  if (opt && opt.line) {
    const brlabel = '_' + label;
    let elm = select('#' + brlabel);
    if (!elm) elm = createElement('br').id(brlabel);
  }
}