let words = [
  "colors",
  "jokes",
  "parts of a story",
  "fortunes",
  "exercise moves",
  "etc.",
];

let index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  textSize(30);
  text(words[index], 100, 200);
}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index = 0;
  }
}
