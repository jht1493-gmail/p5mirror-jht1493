function setup() {
  noLoop();
  let url =
   'https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/world/c_series/United_States.json';
  loadJSON(url, got_data);
}

function draw() {
  background(200);
}

function got_data(data) {
  // print('data', data);
  print('data last', data[data.length-1]);
}

// https://p5js.org/reference/#/p5/loadJSON

// https://github.com/EP-Visual-Design/COVID-19-parsed-data/blob/main/c_data/world/c_series/United_States.json

// https://raw.githubusercontent.com/EP-Visual-Design/COVID-19-parsed-data/main/c_data/world/c_series/United_States.json
