//background class holding multiple object with different moving speeds

class Objects {
  constructor() {
    this.angle = 0.0;
    this.rotateangle = 0.1;
    this.cloudX1 = 100;
    this.cloudX2 = 500;
    this.cloudX3 = 20;
    this.cloudX4 = 300;
    this.cloudX5 = 700;

  }

  draw() {

    // loop clouds 
    {
      this.cloudX1 += 0.5;
      clouds(this.cloudX1, 100, 2)
      if (this.cloudX1 >= lobby.worldRightBound + 50) {
        this.cloudX1 = -80;
      }
      this.cloudX2 += 0.2;
      clouds(this.cloudX2, 50, 1.5)
      if (this.cloudX2 >= lobby.worldRightBound + 50) {
        this.cloudX2 = -20;
      }
      this.cloudX3 += 0.1;
      clouds(this.cloudX3, 50, 2.2)
      if (this.cloudX3 >= lobby.worldRightBound + 50) {
        this.cloudX3 = -20;
      }
      this.cloudX4 += 0.1;
      clouds(this.cloudX4, 180, 2.8)
      if (this.cloudX4 >= lobby.worldRightBound + 50) {
        this.cloudX4 = -20;
      }
      this.cloudX5 += 0.6;
      clouds(this.cloudX5, 120, 2)
      if (this.cloudX5 >= lobby.worldRightBound + 50) {
        this.cloudX5 = -20;
      }
    }

    // ferris wheel
    {
      push();
      this.angle += 0.003;
      translate(475, 120);
      rotate(this.angle);
      imageMode(CENTER);
      image(objects.ferrisWheelRotate, 0, 0, 100, 100);
      pop();
    }


  }
}

// creating clouds 
function clouds(xCloud, yCloud, size) {
  fill("rgba(255, 255, 255, 0.5)");
  noStroke();
  arc(xCloud, yCloud, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
  arc(xCloud + 10, yCloud, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
  arc(xCloud + 25, yCloud, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
  arc(xCloud + 40, yCloud, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);


}