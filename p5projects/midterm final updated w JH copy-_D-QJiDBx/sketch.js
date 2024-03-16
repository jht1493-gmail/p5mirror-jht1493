//create an eyes class and be careful to not use the same name as the function when creating an object

//createButton to change background color from DOM lesson

// var button; // tried to add a button for the mousePressed funciton

class Eyes {
  constructor(x, y) {
    this.mpressed = false;
    this.x = x;
    this.y = y;
  }

  changeMpressed() {
    //this will toggle the mpressed member variable between true and false
    this.mpressed = !this.mpressed;
  }

  show() {
    //Outline
    strokeWeight(2);
    stroke(58, 14, 11);
    fill(255);
    ellipse(this.x, this.y, 50, 15);
    ellipse(this.x + (320-250), this.y, 50, 15);

    if (!this.mpressed) {
      //Iris
      fill(101, 49, 38);
      ellipse(this.x, this.y, 10, 15);
      ellipse(this.x + (320-250), this.y, 10, 15);
    }
  }

  mousePressed() {
    console.log('mousePressed')
    if (mouseX > this.x && mouseX < this.x + (320-250) ){ // not sure how to write this line to activate only the iris;
    // if (mouseX < 40) 
      console.log('mousePressed changeMpressed')
      this.changeMpressed();
    }
  }
}

//make an array for your body parts objects
let bodyParts = [];

let trunk;
let neck;
let face;
let hair;
let eyes;
let nose;
let mouth;

function setup() {
  createCanvas(600, 600);
  // eyes variable cannot be the same name as another function called eyes
  // eyes = new Eyes();
  // to make an object of a class you have to use the keyword "new" and then the name of your class and open paranthesis and close
  //Array.push() gets an element as its argument and adds it to the array

  bodyParts.push(new Eyes(250, 200));

  //initialize our button var
  //wanted to add the butterfly as a button but didn't know how...

  // button = createButton (midterms effect);
  // button.mousePressed = (bodyParts[0].changeMpressed());
}

function draw() {
  background(255);
  trunk();
  neck();
  hair();
  face();
  // eyes();
  bodyParts[0].show();
  eyeBrows();
  nose();
  mouth();

  function trunk() {
    noStroke();
    fill(20, 10, 9);
    quad(290, 300, 300, 410, 720, 604, 240, 620);
    quad(290, 400, 0, 550, 0, 600, 300, 600);
  }

  function neck() {
    fill(224, 153, 101);
    triangle(235, 430, 280, 580, 337, 430);
    rect(235, 330, 102, 100, 0);
  }

  function hair() {
    fill(79, 39, 31);

    quad(256, 80, 192, 96, 90, 530, 200, 560); //right
    quad(480, 540, 363, 98, 320, 85, 380, 570); //left

    //more hair
    fill(79, 39, 31);

    quad(200, 90, 205, 82, 95, 450, 180, 500); //right

    quad(480, 460, 350, 120, 345, 50, 380, 500); //left
  }

  function face() {
    fill(224, 153, 101);
    stroke(82, 33, 26);
    strokeWeight(2);
    quad(276, 375, 300, 375, 360, 301, 210, 303);
    noStroke();
    rect(204, 124, 161, 224, 80);

    fill(79, 39, 31);

    ellipse(277, 125, 180, 160); //hair

    fill(224, 153, 101); //face
    ellipse(285, 190, 160, 200);
  }

  //   function eyes() {
  //     strokeWeight(2);
  //     stroke(58, 14, 11);
  //     fill(255);
  //     ellipse(250, 200, 50, 15);
  //     ellipse(320, 200, 50, 15);

  //     fill(101, 49, 38);
  //     ellipse(250, 200, 10, 15);
  //     ellipse(320, 200, 10, 15);
  //   }

  function eyeBrows() {
    stroke(58, 14, 11);
    strokeWeight(4);

    line(250, 170, 270, 175); //mid up
    line(300, 175, 320, 170);

    line(250, 170, 220, 175); //up down
    line(350, 175, 320, 170);

    //     line(220, 165, 270, 175);
    //     line(300, 175, 350, 165);
  }

  function nose() {
    noStroke();
    fill(231, 174, 131);
    triangle(270, 260, 300, 260, 285, 210);
    ellipse(285, 260, 30, 10);
  }

  function mouth() {
    fill(205, 88, 79);
    arc(285, 290, 80, 60, 0, PI);

    fill(250);
    arc(285, 297, 50, 25, 0, PI);
  }
}

function mousePressed() {
  // if (mouseX < 40) {
  //   bodyParts[0].changeMpressed();
  // }
  bodyParts[0].mousePressed()
}

// Question: From the DOM lesson wanted to add a button with a butterfly image that would change our iris color but couldn't figure it out.
