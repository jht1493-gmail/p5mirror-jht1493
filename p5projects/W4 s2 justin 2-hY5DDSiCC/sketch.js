function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  var column = 20
  const cwidth = width / column;
  // print('cwidth='+cwidth)
  for (let x = 0; x < width; x += cwidth) {
    // print('x='+x)
    if (x < mouseX && mouseX < x + cwidth) {
      fill(255, 0, 0);
      rect(x, 0, width / column, height);
      // if (210 < mouseX && mouseX < 230) {
      //   print('mouseX', mouseX, 'x', x);
      //   fill(255);
      //   rect(x, 0, width / column, height);
      // }
    }
    if (210 < mouseX && mouseX < 230) {
      print('mouseX', mouseX, 'x', x);
      fill(255);
      rect(x, 0, width / column, height);
    }
  }
}

// Why does all columns show white when in 7 column?
// why does mouse not light up with columns
