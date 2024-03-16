var bubbles = [];
var emojis = [];

function preload() {
  emojis[0] = load

function setup() {Image("images/emoji0.png"); 
}
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