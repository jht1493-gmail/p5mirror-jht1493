let p1;
let xoff = 0;
let yoff = 0;
let zoff = 0;
let unit = 400;
let change_index = 0.1;
let factor = 0.01;

function setup() {
  print('setup');
  background(0);
  createCanvas(400, 400);
  let initial = createVector(0, 0);
  p1 = new particles(initial);

}

function draw() {
  var x = width / sqrt(unit);
  var y = height / sqrt(unit);
  let field_direction = [];
  for (var i = 0; i < sqrt(unit) + 1; i++) {
    xoff = 0;
    for (var j = 0; j < sqrt(unit) + 1; j++) {
      let angle = noise(xoff, yoff) * 2 * PI;
      var direction = p5.Vector.fromAngle(angle, 1);
      xoff += change_index;
      push();
      translate(i * x, j * y);
      rotate(angle);
      stroke(255);
      line(0, 0, x, 0);
      field_direction.push(direction);
      //store the value of vector direction into an array
      pop();
      //console.log(field_direction);
      var start = true;
    }
    yoff += change_index;

  }
  yoff = 0;
  if (start == true) {
    var loc = createVector(1, 1);
    p1.display(2);
    p1.detectGrid()
    p1.move(field_direction);
    p1.detectEdges();
  }

}


class particles {
  /*I need to determine the position, speed, and vector direction of the particle*/
  constructor(loc) {
    this.loc = loc;
    this.speed = createVector(0, 0);
    this.accel = createVector(0, 0);

  }
  display(r) {
    noStroke();
    fill(255);
    circle(this.loc.x, this.loc.y, r);

  }
  /*in this function I will need the particles to move based on the angle of Perlin noise
  the speed of changing for perlin noise is based on the field*/
  move() {
    this.loc.add(this.speed);
    this.speed.add(this.accel);
    //reset the acceleration
    this.accel = createVector(0, 0);
  }
  /*get the proper value of acceleration*/
  detectGrid(field_direction) {
    //detect what grid the particle is in
    let x_value = int(this.loc.x / sqrt(unit));
    let y_value = int(this.loc.y / sqrt(unit));
    //find the corresponding vector value
    let array_pos = x_value + y_value * width / sqrt(unit);
    print('this.accel', this.accel);
    print('array_pos', array_pos)
    print('field_direction', field_direction)
    this.accel.add(field_direction[array_pos]);
  }

  /*if the particle goes beyond the canvas, we set it on somewhere back on canvas*/
  detectEdges() {
    if (x > width || x < 0 || y > height || y < height) {
      this.loc.x = random(width / 2);
      this.loc.y = random(height / 2);
    }
  }
}