// task: make every other column blue 
// (not sure how to do this one yet)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  const columns = 20
  const wc = width / columns;
  for (let c = 0; c < columns; c++) {
    const cm = c % 2;
    // print('c',c,' cm ', cm)
    if (mouseX > wc * c && mouseX < wc * (c + 1) )
    {
      fill(0, 0, 255);
      rect(wc * c, 0, wc, height);
    }
    // else if (mouseX > wc * c &&
    //   mouseX < wc * (c + 2) && mouseX < width) 
    // {
    //   fill(255, 0, 0);
    //   rect(wc * c, 0, wc, height);
    // }
  }
}