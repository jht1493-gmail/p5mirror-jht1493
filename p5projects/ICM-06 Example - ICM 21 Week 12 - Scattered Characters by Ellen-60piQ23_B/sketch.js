let students = [
  "Jinny",
  "Yuan",
  "Alexsa",
  "Lauren",
  "Bruce",
  "Kristina",
  "Julia",
  "Gracy",
  "Pedro",
  "Genggeng",
  "Mohamed"
];

let names = students.slice();

function setup() {
  createCanvas(400, 400);
  displayName();
}

function mousePressed() {
  displayName();
}

function displayName() {
  background(220);
  let student = getName();
  
for (let i = 0; i < student.length; i++) {
  textSize(random(36, 128));
  text(student[i], random(64, width-64), random(64, height-64));
}
}

function getName() {
  let randomNum = int(random(names.length));

  let name = names[randomNum];
  names.splice(randomNum, 1);

  if (names.length == 0) {
    names = students.slice();
  }
  return name;
}

// https://editor.p5js.org/enickles/sketches/50oBOx5dY
// ICM-06 Example - ICM 21 Week 12 - Scattered Characters by Ellen