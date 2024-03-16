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
  createP();

  {
    let btn = createButton('play');
    btn.style('font-size', '30px');
    btn.mousePressed(play_action);
  }

  {
    let btn = createButton('stop');
    btn.style('font-size', '30px');
    btn.mousePressed(stop_action);
  }
  createP(); 

  {
    let span = createSpan().id('video_time');
    span.style('font-size', '30px');
  }
  createP(); 

  {
    let span = createSpan().id('video_fps');
    span.style('font-size', '30px');
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