//1- I have to create a function for
//3- I have to create variables with all the readings
//4- If sensor 1 is pressed: Then Card 1 is showed and random reading is read
//5
let tarot = -1;
let totalimgs = 13;
let card;
let stars = [];
// let imgs = ["thetower", "theworld","theempress","themagician","thesun", "thefool", "thehighpriestess","theemperor","thehierorphant","thelovers","thechariot","thestrenght","thehermit"];
let imgs = [];
var index = 0;
let thetower,
  theworld,
  theempress,
  themagician,
  thesun,
  thefool,
  thehighpriestess,
  theemperor,
  thehierorphant,
  thelovers,
  thechariot,
  thestrenght,
  thehermit;

function preload() {
  imgs[0] = loadImage("Photos/1.jpg");
  // thetower = loadImage('Photos/1.jpg');
  imgs[1] = loadImage("Photos/2.jpg");
  imgs[2] = loadImage("Photos/4.jpg");
  theempress = loadImage("Photos/3.jpg");
  thesun = loadImage("Photos/5.jpg");
  thefool = loadImage("Photos/6.jpg");
  thehighpriestess = loadImage("Photos/7.jpg");
  theemperor = loadImage("Photos/8.jpg");
  thehierorphant = loadImage("Photos/9.jpg");
  thelovers = loadImage("Photos/10.jpg");
  thechariot = loadImage("Photos/11.jpg");
  thestrenght = loadImage("Photos/12.jpg");
  thehermit = loadImage("Photos/13.jpg");
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create new stars
  for (var i = 0; i < 1000; i++) {
    stars[i] = new Star();
  }
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  //mousePressed();
  //stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
    stars[i].move();
  }
  fill(255);
  textFont("bahiana");
  textSize(70);
  text("FLIP THE CARD THAT'S CALLING YOU. ", width / 2, height / 2 - 50);
  textSize(30);
  fill(229, 78, 208);
  text("What has the universe planned", width / 2, height / 2 + 50);
  text("for you ? ", width / 2, height / 2 + 80);
  imageMode(CENTER);

  //ifmouse pressed
  //image(img,width/2, height/2)
  //IF MOUSEPRESSED SENSOR 1.
  //image(thetower, width/2, height/2)
  //IF MOUSEPRESSED SENSOR 2.
  // image(theworld, width/2, height/2)
  //IF MOUSEPRESSED SENSOR 3:
  // image(themagician, width/2, height/2)
  //MOUSEPRESSED SENSOR 4:
  // image(theempress, width/2, height/2)
  //IF MOUSEPRESSED SENSOR 5:
  // image(thesun, width/2, height/2)
  
  image(imgs[tarot], width / 2, height / 2);
}

function mousePressed() {
  // HERE WHAT VARIABLE CAN I USE TO CALL RANDOM INDEX OF THE PHOTOS I UPLOADED?
   tarot = floor(random(0,2));
  console.log('tarot', tarot)
  // image(imgs[tarot], width / 2, height / 2);
}

//star class
class Star {
  constructor() {
    //random position within canvas width and height
    this.x = random(width);
    this.y = random(height);
    //random size between 0.25 and 3
    this.size = random(0.15, 0.2);
    //rotation of stars - size change
    this.t = random(TWO_PI);
    //twinkle speed
    this.speed = 0.3;
  }

  //draw the stars
  draw() {
    this.t += 0.2; //speed
    var scale = this.size + sin(this.t) * 2; //star size
    noStroke();
    // fill(random((229, 78, 208), (255, 228, 242), (0, 7, 111)));
    ellipse(this.x, this.y, scale, scale);
  }

  //twinkle - reverses
  move() {
    this.x += random(-this.speed, this.speed); //left and right movement
    this.y += random(-this.speed, this.speed); //down and up movement
  }
}

