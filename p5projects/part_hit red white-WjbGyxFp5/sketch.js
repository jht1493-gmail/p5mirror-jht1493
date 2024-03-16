function setup() {
  createCanvas(400, 400);
}

let part_hit = false;
let was_hit = false;
let hit_count = 0;
let a_color = 'white';

function draw() {
  background(255);
  noStroke();

  const part_1 = width / 3;
  const part_2 = part_1 * 2;

  was_hit = part_hit;
  if (mouseX > part_1 && mouseX < part_2) {
    part_hit = true;
  } else {
    part_hit = false;
  }
  // print('was_hit', was_hit, 'part_hit', part_hit, 'hit_count', hit_count)

  if (!was_hit && part_hit) {
    hit_count += 1;
    if (hit_count == 1) {
      a_color = 'red'; // color(255, 0, 0);
    } else if (hit_count == 2) {
      a_color = 'white'; // color(255, 255, 255);
      hit_count = 0;
    }
  }
  fill(a_color);
  rect(part_1, 0, part_1, height);
}