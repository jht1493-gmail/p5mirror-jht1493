let moons = [];
let suns = [];

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < width; i += 10) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 80);
    let b = new Moon(x + 20, y + 20, r);
    let d = new Sun(random(0, 800), random(0, 800), r);
    moons.push(b);
    suns.push(d);
  }
}

function mousePressed() {
  for (let i = 0; i < moons.length; i++) {
    moons[i].clicked(mouseX, mouseY);
  }
  console.log('suns.length', suns.length)
  for (let i = suns.length - 1; i >= 0; i--) {
    if (suns[i].contains(mouseX, mouseY)) {
      console.log('deleting sun', i)
      suns.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < moons.length; i++) {
    moons[i].show();
  }
  for (let i = 0; i < suns.length; i += 10) {
    suns[i].show();
  }
}

class Sun {
  constructor(x, y, r) {
    this.r = r;
    this.x = x;
    this.y = y;
  }

  contains(px, py) {
    let dis = dist(px, py, this.x, this.y);
    // console.log('contains dis', dis)
    if (dis < this.r / 2) {
      return true;
    } else {
      return false;
    }
  }
  // rotateS() {
  //   rotate(PI/5);
  // }

  show() {
    push();
    fill("LemonChiffon");
    ellipse(this.x, this.y, 80);
    fill("PeachPuff");
    ellipseMode(CORNERS);
    translate(this.x, this.y);
    for (var i = 0; i < 20; i++) {
      // translate()
      triangle(40, 20, 50, 50, 20, 40);
      rotate(PI / 4);
    }
    pop();
    fill("white");
    circle(this.x + 20, this.y, 15);
    circle(this.x - 20, this.y, 15);
    fill("black");
    circle(this.x + 20, this.y, 8);
    circle(this.x - 20, this.y, 8);
    noFill();
    strokeWeight(2);
    arc(this.x, this.y + 10, 30, 20, 0, PI);
    strokeWeight(1);
    fill("white");
  }
}
class Moon {
  constructor(x, y, r) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.brightness = 0;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 175;
      return true;
    } else {
      return false;
    }
  }

  show() {
    strokeWeight(2);
    stroke("LightSlateGray");
    fill("tomato");
    fill(this.brightness, "lightblue");
    ellipse(this.x, this.y, 70);
    noFill();
    strokeWeight(10);
    arc(this.x, this.y, 80, 30, 0, PI);
    stroke("MintCream");
    strokeWeight(3);
    arc(this.x, this.y, 80, 30, 0, PI);
    arc(this.x, this.y - 5, 70, 28, 0, PI);
    arc(this.x, this.y - 5, 70, 28, 0, PI);
    strokeWeight(1);
    fill("white");
    circle(this.x - 20, this.y - 10, 15);
    circle(this.x + 20, this.y - 10, 15);
    fill("black");
    circle(this.x - 20, this.y - 10, 8);
    circle(this.x + 20, this.y - 10, 8);
    noFill();
    stroke("LightSlateGray");
    strokeWeight(2);
    arc(this.x, this.y - 2, 20, 10, 0, PI);
    fill("LightSlateGray");
    ellipse(this.x - 10, this.y - 25, 10, 5);
    ellipse(this.x + 15, this.y + 25, 8, 5);
    ellipse(this.x + 6, this.y + 23, 5, 2);
  }
}
