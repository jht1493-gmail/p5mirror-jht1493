let numberofsquares = 13;
let widthofbox;
let spaceing = 4;
let r = 70;
let g = 245;

function setup() {
  createCanvas(500, 500);
  //noLoop();

  widthofbox = width / numberofsquares;
}
function sizeofrectangle(i, j) { // here is week 5 
  rect(i * widthofbox, widthofbox * j, widthofbox - spaceing);
}
function mousePressed(){ // click on box with mouse to change colors 
  r = random(0,255);
  g = random(0,255);
}

function keyPressed(){
  
  if (keyCode === LEFT_ARROW) { // brings back red 
    r = (r + 10) % 256;
  } else if (keyCode === RIGHT_ARROW) { // right arrow no red
    r = 0;
  }

  console.log('r', r)

}

function draw() {
  background(255);

  for (var i = 0; i <= numberofsquares; i++) {
    //loop

    for (var j = 0; j <= numberofsquares; j++) {
      // nested loop

      fill(r / i, g / j, 40);
      sizeofrectangle(i,j);

      //rect(i *60 + random(50), 60*j, j*5, j*3);

      //fill(245/j, 33/i, 45, 100/j)

      //fill(66/i, 245/j, 40)
      //rect(20+ i *50, 50*j, j*5);
      //fill(245/j, 33/i, 45, 100/j)

      //rect(i *50 + random(30), 50*j, j*5, j*3);
    }
  }
      
}
    
    
