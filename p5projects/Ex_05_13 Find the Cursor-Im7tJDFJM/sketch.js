let x;
let offset = 10;

function setup() {
  createCanvas(240, 120);
  x = width/2;
}

function draw() {
  background(204);
  if (mouseX > x) {
    x = x + 0.5;
    offset = -10;
  }
  if (mouseX < x) {
    x = x - 0.5;
    offset = 10;
  }
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset*3, mouseY);
}



// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_13.js