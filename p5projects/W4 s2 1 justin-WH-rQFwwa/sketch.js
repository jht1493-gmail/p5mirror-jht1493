function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  var column = 20

  for (let x = 0; x < width; x += width / column) {
    print('x='+x)
    if (x < mouseX && mouseX < x + width / column) {
      fill(255, 0, 0);
      rect(x, 0, width / column, height);
    }
    if (210 < mouseX && mouseX < 230) {
      print('mouseX', mouseX, 'x', x);
      fill(255);
      rect(x, 0, width / column, height);
    }
  }


}