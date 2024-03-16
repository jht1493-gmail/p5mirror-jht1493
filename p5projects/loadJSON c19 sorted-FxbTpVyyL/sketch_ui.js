function sketch_ui() {
  for (let citem of ['c_regions', 'c_dates', 'a_day', 'sorted']) {
    let suf = ' ' + citem + ' = '
    let span = createSpan('+' + suf);
    span.style('font-weight', 'bold');
    span.mousePressed(function() {
      span2.toggleClass('hide');
      if (span2.hasClass('hide'))
        span.html('+' + suf)
      else
        span.html('-' + suf)
    });
    let span2 = createSpan().id(citem);
    // span.style('font-size', '12pt');
    span2.toggleClass('hide');
    createSpan('<br/>');
  }
  // {
  //   let span = createSpan('+ c_dates = ');
  //   span.style('font-weight', 'bold');
  //   span.mousePressed(function() {
  //     span2.toggleClass('hide');
  //     if (span2.hasClass('hide'))
  //       span.html('+ c_dates = ')
  //     else
  //       span.html('- c_dates = ')
  //   });
  //   let span2 = createSpan().id('c_dates');
  //   // span.style('font-size', '12pt');
  //   span2.toggleClass('hide');
  // }
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

function format_num(val) {
  return Number(val).toLocaleString();
}

function format_percent(val, stats_total) {
  if (!stats_total) return '';
  let num = val / stats_total;
  let ndigits = 1;
  if (num < 0.01) ndigits = 3;
  return Number(num).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: ndigits,
    maximumFractionDigits: ndigits,
  });
}
