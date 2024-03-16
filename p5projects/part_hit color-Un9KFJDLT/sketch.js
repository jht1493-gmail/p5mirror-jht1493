function setup() {
  createCanvas(400, 400);
}

let part_hit = false;
let a_color = 'white';

function draw() {
  background(255);
  noStroke();

  const part_1 = width / 3;
  const part_2 = part_1 * 2;

  const was_hit = part_hit;
  part_hit = (mouseX > part_1 && mouseX < part_2);
  // print('was_hit', was_hit, 'part_hit' )

  if (!was_hit && part_hit) {
    if (a_color == 'red') {
      a_color = 'white';
    }
    else {
      a_color = 'red';
    }
  }
  fill(a_color);
  rect(part_1, 0, part_1, height);
}