// url root of covid-19 json data
let c_url = 'https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/world/';
let a_data;
let a_day;
let a_dates;
let a_sorted;

function setup() {
  // sketch_ui();

  // eg. c_data/c_meta.json
  loadJSON(c_url + 'c_meta.json', function(data) {
    a_data = data;
    // print('data', data);

    let c_dates = data.c_dates;

    // Pick last 20 dates
    let iend = c_dates.length;
    let istart = iend - 20;
    a_dates = c_dates.slice(istart, iend);
    print('a_dates', a_dates);

    sketch_ui({ dates: a_dates, select_date })
    
    select_date(0);
  });
}

function select_date(index) {
  let adate = a_dates[index];
  load_day(adate);
}

function draw() {
  background(220);
}

function load_day(adate) {
  print('load_day adate', adate);

  // eg c_data/c_days/2020-11-22.json
  let url = c_url + 'c_days/' + adate + '.json';

  loadJSON(url, function(data) {
    a_day = data;
    print('a_day.length', a_day.length)
    // show_json('a_day', a_day);
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
  a_sorted = day.concat().sort(function(ent1, ent2) {
    return ent2.daily.Deaths - ent1.daily.Deaths;
  })

  // Format numbers with commas
  for (let ent of a_sorted) {
    ent.daily.Deaths = format_num(ent.daily.Deaths);
    ent.daily.Cases = format_num(ent.daily.Cases);
    ent.totals.Deaths = format_num(ent.totals.Deaths);
    ent.totals.Cases = format_num(ent.totals.Cases);
  }
  show_json('a_sorted', a_sorted);
}


// https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/
//  c_meta.json

// https://epvisual.com/COVID-19-Impact/Dashboard/a0/c_data/
//  c_days/2020-01-22.json

// https://p5js.org/reference/#/p5/loadJSON