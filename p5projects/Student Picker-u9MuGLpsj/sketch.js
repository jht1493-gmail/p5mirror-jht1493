// https://editor.p5js.org/jht1493/sketches/u9MuGLpsj
// Student picker

let students = [
  "Adnan",
  "Divya",
  "June",
  "Kelin",
  "La’Kay",
  "Lorena",
  "Martha",
  "Teresa",
  "Yvonne",
];

// let names = students.slice();
let names;
let student_index = 0;

function setup() {
  createCanvas(400, 400);
  createP('mousePress canvas to see next student')
  names = shuffle(students);
  // displayName();
}

function mousePressed() {
  displayName();
}

function displayName() {
  background(220);
  let student = getName();
  textSize(height/10)
  text( student, 10, height/2)
  // for (let i = 0; i < student.length; i++) {
  //   textSize(random(36, 128));
  //   text(student[i], random(64, width - 64), random(64, height - 64));
  // }
}

function getName() {
  if (student_index >= names.length) {
    student_index = 0;
    return 'All done';
  }
  let name = names[student_index];
  student_index++;
  
  return student_index + ' ' +name;
}

// https://editor.p5js.org/enickles/sketches/50oBOx5dY
// ICM-06 Example - ICM 21 Week 12 - Scattered Characters by Ellen
