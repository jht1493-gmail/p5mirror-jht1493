let a_students = [
  'Amber',
  'Echo',
  'Xin',
  'Jim',
  'Abby',
  'Boh-wee',
  'Justin',
  'Phil',
  'Stela',
  'Wu-shu-an',
];
let a_run = false;

function setup() {
  createCanvas(400, 400);
  {
    // createCheckbox([label], [value])
    let a_check = createCheckbox('Run', a_run);
    a_check.changed(function() {
      a_run = this.checked();
    });
    a_check.style('font-size', '28px');
  }
}

function draw() {
  background(220);
  if (a_run) {
    a_students = shuffle(a_students);
  }
  let index = int(random(a_students.length))
  let margin = 10;
  let a_size = height / a_students.length;
  textSize(a_size - margin);
  let x = 10;
  let y = a_size;
  for (index = 0; index < a_students.length; index++) {
    text(a_students[index], 10, y - margin);
    y += a_size;
  }
}