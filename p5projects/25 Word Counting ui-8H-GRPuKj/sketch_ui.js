function sketch_ui() {
  {
    let span = createSpan('+ a_data = ');
    span.style('font-weight', 'bold');
    span.mousePressed(function() {
      span2.toggleClass('hide');
      if (span2.hasClass('hide'))
        span.html('+ a_data = ')
      else
        span.html('- a_data = ')
    });
    let span2 = createSpan().id('a_data');
    // span.style('font-size', '12pt');
    span2.toggleClass('hide');
  }
  createSpan('<br/>'); 

  {
    let span = createSpan('+ words = ');
    span.style('font-weight', 'bold');
    span.mousePressed(function() {
      span2.toggleClass('hide');
      if (span2.hasClass('hide'))
        span.html('+ words = ')
      else
        span.html('- words = ')
    });
    let span2 = createSpan().id('words');
    // span.style('font-size', '12pt');
    span2.toggleClass('hide');
  }
  createSpan('<br/>'); 
  
  {
    let span = createSpan('+ word_count = ');
    span.style('font-weight', 'bold');
    span.mousePressed(function() {
      span2.toggleClass('hide');
      if (span2.hasClass('hide'))
        span.html('+ word_count = ')
      else
        span.html('- word_count = ')
    });
    let span2 = createSpan().id('word_count');
    // span.style('font-size', '12pt');
    span2.toggleClass('hide');
  }
  createSpan('<br/>');

  {
    let a_button = createButton('resize-full');
    a_button.mousePressed(function() {
      resizeCanvas(windowWidth, windowHeight);
    });
  }

  {
    let a_button = createButton('resize-inset');
    a_button.mousePressed(function() {
      resizeCanvas(640, 480);
    });
  }
  createP();

}


function show_json(label, value) {
  // Find the element by id
  let elm = select('#' + label);

  // Convert value to formated string
  value = JSON.stringify(value, null, 2);

  // Replace new line characters with html break tag
  value = value.replace(/\n/g, '<br/>')

  // Replace spaces with html non-breaking character
  // entity so they show up in html
  value = value.replace(/ /g, '&nbsp;')

  elm.html(value);
}