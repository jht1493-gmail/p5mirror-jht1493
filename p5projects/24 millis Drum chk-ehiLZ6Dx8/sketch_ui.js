function sketch_ui() {
  {
    let span = createSpan().id('secs');
    span.style('font-size', '12pt');
  }
  createP(); 
  
  {
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

    aselect.option('Vary', -1);
    for (let index = 0; index < n_samples; index++) {
      aselect.option('Drum ' + index, index);
    }
    aselect.selected('Drum 0');
    aselect.changed(function() {
      drum_select = this.value();
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

  createSpan('checkbox to play a drum')

  for (let index = 0; index < 7; index++) {
    let checkbox = createCheckbox('Drum ' + index, false);
    // print('checkbox', checkbox)
    checkbox.changed(function() {
      // print('index', index, 'checked', this.checked());
      a_checked[index] = this.checked();
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