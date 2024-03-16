let a_data;

function setup() {
  
  sketch_ui();
  
  let url =
   'https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/world/c_meta.json';
  loadJSON(url, got_data);
}

function draw() {
  background(200);
  
  show_json('a_data', a_data);
}

function got_data(data) {
  a_data = data;
  print('data', data);
}

// https://p5js.org/reference/#/p5/loadJSON
