// Extracting data from specific zip code in Brooklyn
// data can be viewed online here:
// https://github.com/EP-Visual-Design/COVID-19-parsed-data

let a_data;
let a_index;
let a_zip = '11234';
let a_location = 'in Brooklyn ' + a_zip;
let a_num;

function setup() {
  createCanvas(400, 200);
  let url = 'https://jht1493.net/COVID-19-Impact/Dashboard/a0/';
  url += 'c_data/nyc/c_subs/Brooklyn/c_series/' + a_zip + '.json';
  loadJSON(url, got_data);
  sketch_ui();
}

function draw() {
  background(200);
}

function got_data(data) {
  // print('data', data);
  a_data = data;
  a_index = data.length - 1;
  console.log('data last', data[a_index]);
  console.log('a_index', a_index)
  show_at_index();
}

function sketch_ui() {
  {
    let elm = createSlider(0, width, width)
    elm.style('width', width+'px');
    elm.input(() => {
      let val = elm.value();
      let m = a_data.length - 1;
      a_index = Math.trunc(m * (val / width));
      show_at_index();
    });
  }

  {
    let elm = createSpan('').id('msg0');
  }

  createP();

  {
    let elm = createDiv().id('msg');
    elm.style('font-size', '20px');
  }
}

function show_at_index() {
  let itm = a_data[a_index];
  let msg = 'index ' + a_index;
  show_text('msg0', msg);
  msg = ' On ' + itm.on + '<br>';
  msg += '<span style="font-size:40px" >';
  msg += itm.Deaths + '</span><br>';
  msg += ' People have died';
  msg += ' ' + a_location;
  show_text('msg', msg);
  a_num = itm.Deaths;
}

function show_text(label, text) {
  let elm = select('#' + label);
  elm.html(text);
}

// https://p5js.org/reference/#/p5.Font/textToPoints