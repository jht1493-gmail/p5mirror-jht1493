let max_count = 5;
let sum;
let count = 0;

function setup() {
  createCanvas(400, 400);
  textSize(48);
  // sum = 0;
  // count = 0;
  // while (count < max_count) {
  //   count = count + 1;
  //   sum = sum + count;
  //   print('count', count)
  //   print('sum', sum)
  // }
  // print('sum', sum);
}

function draw() {
  background(255)
  sum = 0;
  max_count = mouseX;
  for (count = 0; count < max_count; count = count + 1) {
    sum = sum + count;
    print('sum', sum)
  }
  text('sum = ' + sum, 10, 100)
}