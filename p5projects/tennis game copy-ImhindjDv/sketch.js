//question1：how could i make the movement to be more random?
//question2: how to make the tennis ball to interact with each other?
//question3: can i assign degree to each key?
//question4: why i cannot load my image, it shows 'loading'.

let tennisballs = [];
//var img;

//function preload(){
//  img = loadImage("googlechrome.png");
//}

let xwidth = 600;

function setup() {
  createCanvas(xwidth, 600);

  // for (let i = 0; i < tennisballs.length; i++) {
  //   let x = random(0, width);
  //   let y = random(0, height);
  //   let r = random(10, 50);
  //   tennisballs[i] = new tennisBall(x, y, r, 2, 3);
  // }
}

function draw() {
  background("blue");
  //    image(img, 10, 10);

  for (let i = 0; i < tennisballs.length; i++) {
    tennisballs[i].move();
    tennisballs[i].show();
  }
}

function mousePressed() {
  for (var i = tennisballs.length - 1; i >= 0; i--) {
    if (tennisballs[i].contains(mouseX, mouseY)) {
      tennisballs.splice(i, 1);
    }
  }
}

function keyPressed() {
  let r = random(10, 50);
  let sx = random(-2, 2);
  let sy = random(-2, 2);
  let b = new tennisBall(mouseX, mouseY, r, sx, sy);
  tennisballs.push(b);
}

class tennisBall {
  constructor(x, y, r, sx, sy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedx = sx;
    this.speedy = sy;

    this.move = function () {
      this.x += this.speedx;
      this.y += this.speedy;

      if (this.x > xwidth - this.r || this.x < this.r) {
        this.speedx *= -1;
      }

      if (this.y > height - this.r || this.y < this.r) {
        this.speedy *= -1;
      }
    };

    this.show = function () {
      textSize(40);
      text("🎾", this.x, this.y);
      strokeWeight(this.r / 3);
    };
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r + 20) {
      return true;
    } else {
      return false;
    }
  }
}
