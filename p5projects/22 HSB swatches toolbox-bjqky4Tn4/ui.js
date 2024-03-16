function init_ui() {
  {
    let a_span = createSpan('h_off:');
    a_span.style('font-size', '16pt');
    // createSlider(min, max, [value], [step])
    let a_slider = createSlider(0, 360, h_off);
    a_slider.input(function() {
      h_off = a_slider.value();
    });
    createP();
  }
  {
    let a_span = createSpan('col_s:');
    a_span.style('font-size', '16pt');
    // createSlider(min, max, [value], [step])
    let a_slider = createSlider(0, 100, col_s);
    a_slider.input(function() {
      col_s = a_slider.value();
    });
    createP();
  }
  {
    let a_span = createSpan('col_b:');
    a_span.style('font-size', '16pt');
    // createSlider(min, max, [value], [step])
    let a_slider = createSlider(0, 100, col_b);
    a_slider.input(function() {
      col_b = a_slider.value();
    });
    createP();
  }
}