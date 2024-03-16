function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255, 193, 203);
  mouseX;
  mouseY;

  //Face 
  noStroke()
  fill(250, 210, 210);
  ellipse(200, 200, 250, 270);

  //Eyeballs
  noStroke()
  fill(5)
  ellipse(mouseX, mouseY, 27, 27);
  //ellipse(250, 150, 20, 20);

  //Nose
  fill(250, 170, 250 )
  triangle(200, 200, 180, 250, 220, 250);

  //Mouth
  fill(205, 127, 50);
  arc(200, 250, 49, 35, 0, PI);


}

// https://editor.p5js.org/jht1493/sketches/izm7rSZe4
// https://editor.p5js.org/dsy7632/sketches/cUpFxUDuK
// self-portrait Divya
