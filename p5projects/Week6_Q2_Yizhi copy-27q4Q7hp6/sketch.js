Susuwataris = [];

function setup() {
  createCanvas(400, 400);
  // for (let i = 0; i < 20; i++) {
  //   let x = random(20, 300);
  //   let y = random(20, 300);
  //   let xs = random(-2, 3);
  //   let ys = random(-2, 3);
  //   Susuwataris[i] = new Susuwatari(x, y, xs, ys, 30);
  //}
}

function draw() {
  background(255, 100);

  //reference from Kota
  //https://editor.p5js.org/kk3632/sketches/UkXw06RYa
  if (mouseIsPressed) {
    let x = mouseX;
    let y = mouseY;
    let xs = random(-3, 3);
    let ys = random(-3, 3);
    Susuwataris.push(new Susuwatari(x, y, xs, ys, 20));
  }
  for (let i = 0; i < Susuwataris.length; i++) {
    Susuwataris[i].bounce();
    Susuwataris[i].display();
    
    if(Susuwataris[i].alpha <= 0){
      Susuwataris.splice(i, 1);
    }
  }
}

class Susuwatari {
  constructor(x, y, xs, ys, d) {
    this.d = d;
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
    this.alpha = 255;
  }

  bounce() {
    this.x += this.xs;
    this.y += this.ys;
    if (this.x > width - this.d / 2 || this.x < this.d / 2) {
      this.xs = this.xs * -1;
    }
    if (this.y > height - this.d / 2 || this.y < this.d / 2) {
      this.ys = this.ys * -1;
    }
  }

  display() {
    //Part 1
    // fill(0);
    // noStroke();
    // ellipse(this.x, this.y, this.d, this.d);

    //reference from https://editor.p5js.org/generative-design/sketches/P_2_0_01
    //http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_0_01
    this.alpha -= 1;
    stroke(0, this.alpha);
    let angle = TAU / 40;
    for (let i = 0; i <= 39; i++) {
      let _x = cos(angle * i) * this.d + this.x;
      let _y = sin(angle * i) * this.d + this.y;

      line(this.x, this.y, _x, _y);
    }
  }
}
