class Bubble {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, 50, 50);
  }

  update() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}