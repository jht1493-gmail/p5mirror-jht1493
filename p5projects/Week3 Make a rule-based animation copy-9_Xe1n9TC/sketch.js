// icons by Icons8
// reference:https://editor.p5js.org/icm/sketches/H1LXU9ah
// reference: https://editor.p5js.org/Pterodactyl_/sketches/SOu6kuuab

let xPlane=100
let yPlane=500
let xBullet,xBullet2,xBullet3,xBullet4
let yBullet=0
let yBullet2=0
let yBullet3=0
let yBullet4=0
let bullet;
let bullet2;
let bullet3;
let bullet4;

function preload(){
  airplane = loadImage('airplane.png');
  bullet = loadImage('bullet.png');
  bullet2 = loadImage('bullet.png');
  bullet3 = loadImage('bullet.png');
  bullet4 = loadImage('bullet.png');
  
}

function setup(){
  createCanvas(600,700);
  background("white");
}

function draw(){
  
  clear();

  //altitude
  textSize(24);
  altitude = 700-yPlane
  text('Flight Altitude:' + altitude , 300, 50);
  textAlign(CENTER,CENTER)
  
  //line
  strokeWeight(3);
  
  setLineDash([10, 10]);
  line(100,0,100,700);
  line(490,0,490,700);
  setLineDash([0, 0]);
  line(90,0,90,700);
  line(500,0,500,700);
  
  //bullets
  image(bullet,xBullet,yBullet,42,42);
  image(bullet2,xBullet2,yBullet2,42,42);
  image(bullet3,xBullet3,yBullet3,42,42);
  image(bullet4,xBullet4,yBullet4,42,42);
  
  //bullet function
  yBullet = yBullet+random(2,6);
  yBullet2 = yBullet+random(4,8);
  yBullet3 = yBullet3+random(2,8);
  yBullet4 = yBullet4+random(1,8);
  
  if(yBullet > 700){
    yBullet = 50;
    xBullet = random(100,150);
  }else if(yBullet2 > 700){
    yBullet2 = random(0,50);
    xBullet = random(200,400); 
  }else if(yBullet3 > 700){
    yBullet3 = 50;
    xBullet3 = random(100,450); 
  }else if(yBullet4 > 700){
    yBullet4 = random(0,50);
    xBullet4 = random(100,450); 
  }

  
  //airplane outside the line
  if (xPlane > 450 || xPlane < 50 || yPlane > 650 || yPlane < 0){
    background("red");
  
    text ('Please fly your plane back to the designated area',300,350);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(50);
    
    setLineDash([10, 10]);
    line(100,0,100,300);
    line(490,0,490,300);
    line(100,400,100,700);
    line(490,400,490,700);
    
    setLineDash([0, 0]);
    line(90,0,90,300);
    line(500,0,500,300);
    line(90,400,90,700);
    line(500,400,500,700);

  }
  
  //airplane
  image(airplane,xPlane, yPlane, 96, 96);

  if(keyIsDown(UP_ARROW)){
    yPlane -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yPlane += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    xPlane -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xPlane += 5;
  }

}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
