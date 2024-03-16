// url root of covid-19 json data
let c_url = 'https://jht1493.net/COVID-19-Impact/Dashboard/a0/c_data/world/';
let a_data;
let a_day;

function setup() {

  sketch_ui();

  loadJSON(c_url + 'c_meta.json', function(data) {
    a_data = data;
    // print('data', data);

    show_json('c_regions', data.c_regions);
    show_json('c_dates', data.c_dates);

    // Pick most recent date
    let adate = data.c_dates[data.c_dates.length - 1];
    load_day(adate);
  });
}

function draw() {
  background(200);
}

function load_day(adate) {
  print('load_day adate', adate);
  let url = c_url + 'c_days/' + adate + '.json';
  loadJSON(url, function(data) {
    a_day = data;
    print('a_day.length', a_day.length)
    show_json('a_day', a_day);
    create_sorted(data);
  });
}

// day = [ {
//   "c_ref": "Afghanistan",
//   "totals": {
//     "Cases": 44988,
//     "Deaths": 1695
//   },
//   "daily": {
//     "Cases": 282,
//     "Deaths": 8
//   }
// }, ...

function create_sorted(day) {
  // Sort by daily deaths
  let sorted = day.concat().sort(function(ent1, ent2) {
    return ent2.daily.Deaths - ent1.daily.Deaths;
  })
  show_json('sorted', sorted);
}


// https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/
//  c_meta.json

// https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/
//  c_days/2020-01-22.json

// https://p5js.org/reference/#/p5/loadJSON