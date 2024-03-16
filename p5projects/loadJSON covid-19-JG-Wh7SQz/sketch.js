// Covid json data is displayed in console
function setup() {
  noLoop();
  let url =
    "https://jht1493.net/COVID-19-Impact/Dashboard/a0/c_data/world/c_meta.json";
  // loadJSON(url, got_data);
  loadJSON(url, function (data) {
    console.log("data", data);
  });
}

function draw() {
  background(200);
}

function got_data(data) {
  console.log("data", data);
}

// https://editor.p5js.org/jht1493/sketches/JG-Wh7SQz
// loadJSON covid-19

// https://p5js.org/reference/#/p5/loadJSON

// source of the data
// Johns Hopkins University Center for Systems Science and Engineering
// https://github.com/CSSEGISandData/COVID-19

// data is parsed into JSON files
// https://github.com/EP-Visual-Design/COVID-19-parsed-data

// Dashboard using this data
// https://epvisual.com/COVID-19-Impact/Dashboard/a0/

// https://github.com/EP-Visual-Design/COVID-19-Impact-Project

