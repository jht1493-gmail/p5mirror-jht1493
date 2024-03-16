// https://editor.p5js.org/jht1493/sketches/vhPVm8WCWX
// color array

let acolors;

function setup() {
  createCanvas(800, 600);
  // load JSON with callback
  loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json", printData);
  
  background(100);
  noLoop();
}


function printData(data) {
  console.log(data);
  
  acolors = [];
  let x = 10;
  // loop through and offset the text
  for (let i = 0; i < data.colors.length; i++) {
    if (i != 0 && i % 50 == 0) {
      x += 150;
    }
    // use the fill color 
    fill(data.colors[i].hex)
    // write out the names of the colors
    text(data.colors[i].color, x, (i % 50) * 12 + 12);
    // print it all out to the console
    let col = data.colors[i].color
    console.log(i + ' ' + col);
    acolors.push(col);
  }
  
}

// https://editor.p5js.org/shfitz/sketches/smCWR0Ypk
// HTML color codes and names

// aqua,  blue, fuchsia, green, lime, maroon, 
// navy, olive, purple, red, silver, teal, yellow
// black, white, grey, 
// https://www.scaler.com/topics/html-color-names/