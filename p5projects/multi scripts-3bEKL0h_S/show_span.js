// show_span(a_label, a_value);
//   Show a_value in a span
//   a_label is the html id for the span
// show_span(a_label, a_value, a_opt);
//   a_opt = { line:1 }      // cause a line break
//   a_opt = { round:n }   // round value to n decimals
// eg. show miliseconds to 2 decimal places with a line break
//    show_span('milli', millis(), {line:1, round:2});
//
function show_span(a_label, a_value, a_opt) {
  let p_elm = select('#' + a_label);
  if (!p_elm) {
    p_elm = createSpan().id(a_label);
    p_elm.style('font-size', '30px');
  }
  let a_round = 2;
  if (a_opt && a_opt.round) {
    a_round = a_opt.round;
  }
  a_value = round(a_value, a_round)
  p_elm.html('[' + a_label + ' ' + a_value + '] ');
  if (a_opt && a_opt.line) {
    const br_label = '_' + a_label;
    let p_elm = select('#' + br_label);
    if (!p_elm) p_elm = createElement('br').id(br_label);
  }
}