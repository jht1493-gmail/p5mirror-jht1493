let str = "The quick brown fox jumped over the lazy dog.";
let p;

function setup() {
  createCanvas(400, 400);
  // Display string in paragraph element
  p = createP(str);
  
  textSize(48);
  textAlign(LEFT, TOP);
  
  // Split string into words
  let words = str.split(' ');
  print('words', words);
  
  let x = 0;
  let y = 0;
  for (let word of words) {
    text(word, x, y);
    x += textWidth(word) + textWidth(' ');
    if (x > width - 50) {
      x = 10;
      y += textAscent() + textDescent();
    }
  }
}