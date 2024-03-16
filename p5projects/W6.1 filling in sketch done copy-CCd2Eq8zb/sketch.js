// https://editor.p5js.org/jht1493/sketches/CCd2Eq8zb
// corrected x,y

//W6.1 filling in sketch done 
// https://editor.p5js.org/benjamin.bergery/sketches/pTZywMgNf

let bubbles = [];

function setup() {
  createCanvas(400, 400);
}

function mouseDragged() {
  // bubbles.____(___ Bubble(______, ______));
    bubbles.push(new Bubble(mouseX, mouseY));

  // add new bubble to array
  // with x,y = mouseX,Y
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
   // if (_______.______ > 20) {
   //    bubbles.______(_, _);
   //  }

    if (bubbles.length > 20) {
      bubbles.splice(0, 1);
      // remove first item in array
    }
  }
}

class Bubble {
   // constructor(_, _) {
   //  this.x = _;
   //  this.y = _;
 constructor(x,y) {
    this.x = x;
    this.y = y;
// define bubble x,y as mouseX,mouseY
    this.size = 24;
  }

  display() {
    stroke(255);
    fill(255, 0, 150, 50);
    circle(this.x, this.y, this.size);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
