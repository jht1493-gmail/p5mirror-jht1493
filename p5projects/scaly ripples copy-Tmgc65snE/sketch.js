//Imitating blinking surface of the lake


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
//draw and loop the circles
  //let the circles pile up
  for (let circleY = 0; circleY <= 500; circleY += 20) {
    for (let circleX = 0; circleX <= 500; circleX += 20) {
      circle(circleX, circleY, 30);
      fill(random(['red', 'green', 'yellow']))
    }
  }
}