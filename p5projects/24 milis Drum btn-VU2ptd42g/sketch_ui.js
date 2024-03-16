function sketch_ui() {
  {
    let span = createSpan().id('secs');
    span.style('font-size', '12pt');
  }
  createP(); {
    let span = createSpan().id('offset');
    span.style('font-size', '12pt');
  }
  createP();

  {
    let span = createSpan('Sample:');
    // span.style('font-size', '16pt');
    // span.style('margin', '0pt 0pt 0pt 4pt');

    let aselect = createSelect();
    // aselect.style('font-size', '12pt');
    // aselect.style('margin', '2pt 2pt');
    aselect.option('Drum 0');
    for (let index = 0; index < n_samples; index++) {
      aselect.option('Drum ' + index);
    }

    aselect.selected('Vary');
    aselect.changed(function() {
      let str = this.value();
      // str = 'Drum 0'
      // str[5] == '0'
      if (str === 'Vary') drum_select = -1;
      else drum_select = parseFloat(str[5]);
      print('drum_select', drum_select)
    });
  }
  createP();

  createSpan('volume')

  // createSlider(min, max, [value], [step])
  let slider = createSlider(0, 1, a_vol, 0.001);
  slider.input(function() {
    a_vol = slider.value();
  })
  createP();

  createSpan('Click to play a drum')
  createP();

  for (let index = 0; index < 7; index++) {
    let btn = createButton('Drum ' + index);
    btn.mousePressed(function() {
      // print('mousePressed index', index);
      drum_pressed(index);
    });
  }
  createP();

  {
    let span = createSpan().id('drums');
    span.style('font-size', '12pt');
  }
  createP();
  {
    let span = createSpan().id('played');
    span.style('font-size', '12pt');
  }
  createP();

  {
    let btn = createButton('Clear');
    btn.mousePressed(function() {
      drum_clear();
    });

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