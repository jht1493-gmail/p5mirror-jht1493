function sketch_ui() {
  {
    let span = createSpan('Press on rows Z, A, Q, 1');
    span.style('font-size', '30px');
  }
  createP();
  {
    let span = createSpan().id('rate');
    span.style('font-size', '30px');
  }

  {
    let elm = createSpan().id('a_keys');
    elm.style('font-size', '30px');
  }
}

function show_num(label, num) {
  let elm = select('#' + label);
  num = round(num, 2);
  elm.html('[' + label + ' ' + num + '] ');
}

function show_value(label, value) {
  let elm = select('#' + label);
  value = JSON.stringify(value);
  elm.html('[' + label + ' ' + value + '] ');
}