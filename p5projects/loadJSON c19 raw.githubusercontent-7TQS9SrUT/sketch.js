function setup() {
  noLoop();
  // let url =
   'https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/world/c_meta.json';
  let url = 'https://raw.githubusercontent.com/EP-Visual-Design/COVID-19-Impact-Project/master/dashboard/public/c_data/world/c_meta.json';
  loadStrings(url, got_data);
}

function draw() {
  background(200);
}

function got_data(data) {
  // print('data', data);
  print('data.length', data.length);
  data = data.join('\n');
  print('join data.length', data.length);
  data = JSON.parse(data);
  print('data', data);
}

// https://p5js.org/reference/#/p5/loadJSON
