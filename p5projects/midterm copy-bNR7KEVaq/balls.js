class balls {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.xspeed = random(2, 6);
    this.yspeed = random(2, 6);
    this.brightness = 255;
  }

  clicked(px, py) {
    let l = dist(px, py, this.x, this.y);
    if (l < this.d) {
      return true;
    } else {
      return false;
    }
  }
  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounce() {
    if (this.x >= width - this.d / 2 || this.x <= this.d / 2) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y >= height - this.d / 2 || this.y <= this.d / 2) {
      this.yspeed = this.yspeed * -1;
    }
  }

  show() {
    stroke(255);
    fill("green");
    circle(this.x, this.y, this.d);
  }
}
