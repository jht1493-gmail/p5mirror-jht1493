// https://editor.p5js.org/pimaster06/sketches/7oAAn_DBc
// Hyperspace Sim 2.0

const numOfParticles = 5000;
const circleRadius = 400;
let t = 0;

let particles = [];

class circle {
  constructor() {
      this.position = new p5.Vector(0,0);
      this.speed = random(1,5);
      this.angle = random(0,360);
      this.modifier = random(0,circleRadius);
      this.size = 0;
      this.color = color(random(100,180),random(100,200),255,20);
  }
  create() {
      fill(this.color);
      noStroke();
      push();
      translate(width/2,width/2);
      rotate(this.angle);
      ellipse(this.position.x+this.modifier,this.position.y,this.size,this.size/10); 
      pop();
  }
  update() {
      this.modifier=this.modifier+this.size/5+this.speed;
      this.size+=this.modifier/10;
      if(this.modifier > width) {
          this.modifier = 0;   
          this.size=0;
      }
      this.angle+=0.02;
  }
}

function setup() {
  createCanvas(400, 400);
  
  for(var i = 0; i < numOfParticles; i++) {
    particles[i] = new circle();
}
}

function draw() {
    background(0);
    for(var i = 0; i < particles.length; i++) {
        particles[i].create();
        particles[i].update();
    }
    t++;
}