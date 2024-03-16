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
}


function show_json(label, value) {
  // Find the element by id
  let elm = select('#' + label);

  // Convert value to formated string
  value = JSON.stringify(value, null, 2);
  
  if (value === undefined) value = '';
  
  // Replace new line characters with html break tag
  value = value.replace(/\n/g, '<br/>')

  // Replace spaces with html non-breaking character
  // entity so they show up in html
  value = value.replace(/ /g, '&nbsp;')

  elm.html(value);
}