//Aliza H - StarryNight - Brick Game

//variables

let board;
let stars = [];
let ball;
let re, g, b;
let foulCount = 0;
let blocks = []; // blocks array for the bricks on the screen
let blocksTotal = 20;
let score = 0;
let lives = 3;
let isGameActive = false;
let wonGame = false;
let lostGame = false;

//loading pixel font
// function preload() {
//    pixelFont = loadFont("PixelGameFont.ttf");
// }

//setup only runs onces

function createBackground() {
  //create one star
  for (let s = 0; s < 500; s++) {
    let star = {
      x: random(0, width),
      y: random(0, height),
    };

    //push into stars array
    stars.push(star);
  }

  //populate random stars
  for (let i = 0; i < 500; i++) {
    let x = stars[i].x;
    let y = stars[i].y;
    fill(255);
    ellipse(x, y, random(1, 3), random(1, 3));
  }
}

function setup() {
  createCanvas(600, 600);
  createBackground();

  //initializing objects on the screen
  board = new Board();
  ball = new Ball();

  //random color
  // re = random(0, 255);
  // g = random(0, 255);
  // b = random(0, 255);

  //push blocks objs to the array
  for (let i = 0; i < 40; i++) {
    blocks.push(new Blocks());
  }
}

function putText(){
  
   //all the text
  fill(255, 0, 0);
  textSize(22);
  text("Score:" + score, width - 100, 40);
  textSize(22);
  text("Lives:" + lives, width - 100, 80);
  if (lives == 0) {
    text("Game Over", width / 2, height / 2);
    textSize(48);
  }
  
}

function draw() {
  //   background(0, 20, 20); 
  // putText();

}

//draw function runs in a loop
function draw_1() {
  background(0, 20, 20); 
  putText();

  //main game objects
  
  //displays the board
  board.display();
  if (isGameActive) {
    board.update(); //updates based on keyboard keys
    board.checkLimit(); //limits within screen
  }
  
  //displays the ball
  ball.display();
  if (isGameActive) ball.update(); 
  //if the return key is pressed, game status is active - and the ball object is updated
  
  if (isGameActive) ball.restrictCanvas();

  if (ball.contactMade(board) && ball.direction.y > 0) ball.direction.y *= -1; //checks if the ball hit the board

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].display();

    if (ball.hit(blocks[i])) {
      score++;
      blocks.splice(i, 1); // splice to remvoe object from array
      ball.direction.y *= -1;
    }
  }

  if (ball.pos.y > height - this.r && this.direction.y > 0) {
    isGameActive = false;
    ball.pos = createVector(width / 2, height / 2);
  }

  if (blocks.length === 0) {
    isGameActive = false;
    wonGame = true;
  }
}

//keys
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    board.leftM = true;
  }

  if (keyCode === RIGHT_ARROW) {
    board.rightM = true;
  }

  if (keyCode === RETURN) {
    isGameActive = true;
    wonGame = false;
  }

  if (blocks.length === 0) {
    for (let i = 0; i < 20; i++) {
      blocks.push(new Blocks());
    }
  }
}

function keyReleased() {
  board.leftM = false;
  board.rightM = false;
}

//board obj
function Board() {
  this.w = 100;
  this.h = 20;
  this.x = width / 2;
  this.y = height - 50;

  this.leftM = false;
  this.rightM = false;

  this.pos = createVector(this.x, height - 50);

  this.display = function () {
    //using mouse
    // mouseXcont = constrain(mouseX, 60, width - 60);
    // //keep within the width
    // x = mouseXcont - board.w / 2;

    fill(255, 255, 255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  };

  this.move = function (step) {
    this.pos.x += step;
  };

  this.update = function () {
    if (this.rightM) {
      this.move(20);
    }
    if (this.leftM) {
      this.move(-20);
    }
  };

  this.checkLimit = function () {
    if (this.pos.x > width - this.w) {
      this.pos.x = width - this.w;

      this.move(20);
    }
    if (this.pos.x < 0) {
      this.pos.x = 0;
    }
  };
}

//ball object
function Ball() {
  // this.x = width / 2;
  // this.y = height / 2;

  this.r = 20;
  this.pos = createVector(width / 2, height / 2); // to have direction and magnitude

  this.direction = createVector(1, 1);
  this.velocity = createVector(1, 1).mult(5);

  this.hit = function (blocks) {
    let distance = dist(this.pos.x, this.pos.y, blocks.pos.x, blocks.pos.y);
    if (distance < this.r + blocks.r) {
      return true;
    } else return false;
  };

  this.display = function () {
    noStroke();
    fill(re, g, b);
    circle(this.pos.x, this.pos.y, this.r * 2);
  };

  this.update = function () {
    this.pos.x += this.velocity.x * this.direction.x;
    this.pos.y += this.velocity.y * this.direction.y;
  };

  this.restrictCanvas = function () {
    //ball is moving up
    if (this.pos.y < this.r && this.direction.y < 0) this.direction.y *= -1;
    //ball is moving down

    if (this.pos.y > height - this.r && this.direction.y > 0 && foulCount < 3) { //if the ball is moving down and hits the bottom
      this.direction.y *= -1; //reverse the direction
      foulCount++; //add one to the foul
      lives--; //one less life
    }
    if (this.pos.y > height - this.r && this.direction.y > 0 && foulCount >= 3) { //if the foul count exceeds 3
      isGameActive = false; //game goes inactive
      lostGame = true;
      this.pos = createVector(width / 2, height / 2, this.r); //the ball is shown in center
    }
    //ball is moving up

    //ball is moving left

    if (this.pos.x < this.r && this.direction.x < 0) this.direction.x *= -1;
    //ball is moving right

    if (this.pos.x > width - this.r && this.direction.x > 0)
      this.direction.x *= -1;
  };

  this.contactMade = function () {
    if (
      this.pos.y < board.pos.y &&
      this.pos.y > board.pos.y - this.r &&
      this.pos.x > board.pos.x - this.r &&
      this.pos.x < board.pos.x + board.w + this.r
    ) {
      return true;
    } else return false;
  };
}

//blocks obj
function Blocks() {
  this.r = 10;
  this.pos = createVector(random(0, width), random(0, height - 400));
  this.display = function () {
    //p5js.org/reference/#/p5/translat
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    stroke(1000);
    fill(b, re, b);
    // noFill();

    //polar cords https://www.youtube.com/watch?v=MzhBizCmpi8
    for (let i = 0; i < 359; i += 359 / 4) {
      let r = this.r;
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
    }
    endShape();
    pop();
  };
}

//https://editor.p5js.org/erikabulger/sketches/g_YYue029
//https://p5js.org/examples/hello-p5-animation.html
//https://editor.p5js.org/kchung/sketches/qyur46iW9
//https://yining1023.github.io/brickBreaker/
//https://editor.p5js.org/Huiyi/sketches/BkaSwMVTW

//Iterative Code - taught by Yinning in a tutorial

//   this.r = 20;
//   this.total = 4;
//   this.pos = createVector(random(0, width), random(0, height - 300));
//     this.display = function () {
//       //p5js.org/reference/#/p5/translat
//       //creating dshapes https://www.youtube.com/watch?v=HTCakn7pDs8
//       push();
//       translate(this.pos.x, this.pos.y);
//       beginShape();
//       //    stroke(52);
//       fill(b, re, b);
//       for (var i = 0; i < 22; i++) {
//         let angle = map(i, 0, this.total, 0, TWO_PI);
//         let r = this.r;
//         let x = r * cos(angle);
//         let y = r * sin(angle);
//         rotate(PI / 3.0);
//         vertex(x, y + 1);
//       }

//       endShape(ClostGame);
//      pop();
//     };
