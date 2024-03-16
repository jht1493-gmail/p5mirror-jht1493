var bubbles = [];
var emojis = [];

function preload() {
  emojis[0] = loadImage("images/emoji0.png"); 
}

function setup() {
  cnv = createCanvas(600, 400);   
}

function mousePressed() {
  let r = floor(random(0, emojis.length));
  let b = new Bubble(mouseX, mouseY, emojis[r]);
  bubbles.push(b);
}

function draw() {
  background(220);

  for (var i = bubbles.length-1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display(); 
  }
}

// https://editor.p5js.org/icm/sketches/SJzKEak3W
// https://github.com/ITPNYU/ICM-2020-Code/blob/master/weeks/06_objects.md
// Images and Objects
