// Text at slighly random locations
let str = "Ted fed Fred bread. Fred fed Ted bread.";
let p;

function setup() {
  createCanvas(400, 400);
  // Display string in paragraph element
  p = createP(str);
  textSize(28);
  textAlign(LEFT, TOP);
  // //Display entire string
  // text(str, 0, 0);
  //Display string character by character
  let x = 0;
  let y = 0;
  for (let c = 0; c < str.length; c++) {
    let char = str.charAt(c);
    text(char, x, y + random(-4,4));
    x += textWidth(char);
    if (x > width - 50) {
      x = 10;
      y += textAscent() + textDescent();
    }
  }
}