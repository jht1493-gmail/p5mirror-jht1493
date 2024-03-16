function sketch_ui() {
  a_canvas.mouseMoved(canvas_mouseMoved)

  let save_btn = createButton('Save');
  save_btn.style('font-size', '12pt')
  save_btn.style('margin', '2pt 0pt');
  save_btn.mousePressed(save_canvas);

  let more_btn = createButton('More');
  more_btn.style('font-size', '12pt')
  more_btn.style('margin', '2pt 2pt');
  more_btn.mousePressed(more_bubbles);

  let reset_btn = createButton('Reset');
  reset_btn.style('font-size', '12pt')
  reset_btn.style('margin', '2pt 2pt');
  reset_btn.mousePressed(reset_bubbles);

  let a_span = createSpan('color:')
  a_span.style('font-size', '16pt')
  a_span.style('margin', '0pt 0pt 0pt 4pt');

  let a_select = createSelect();
  a_select.style('font-size', '12pt')
  a_select.style('margin', '2pt 2pt');
  a_select.option('random');
  a_select.option('black');
  a_select.option('white');
  a_select.selected('random');
  a_select.changed(function () {
    a_select_color = this.value();
    print('a_select_color', a_select_color)
  })
  
  {
    let elm = createSpan().id('fps');
    elm.style('font-size', '20px');
  }
  {
    let elm = createSpan().id('nbubs');
    elm.style('font-size', '20px');
  }
  createP();
  
  let b_span = createSpan('bg color:')
  b_span.style('font-size', '16pt')
  b_span.style('margin', '0pt 0pt 0pt 4pt');
  
  let bc_slide = createSlider(0, 255, bg_color)
  bc_slide.style('width', '256px');
  bc_slide.input(function () {
    bg_color = this.value();
    print('bg_color', bg_color)
    background(bg_color);
  })
}

function show_num(label, num) {
  let elm = select('#' + label);
  num = round(num, 2);
  elm.html('[' + label + ' ' + num + '] ');
}
