function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(245);


  // hair
  noStroke();
  fill('#291103')
  ellipse(300, 250, 225, 290);
  rect(189, 241, 222, 175);

  //headband
  fill('#b4a7a7');
  arc(300, 265, 200, 295, -PI, 0, CHORD); // arc(x, y, w, h, start, stop, [mode], [detail])

  // ears
  fill(239, 202, 153);
  arc(230, 260, 60, 50, PI / 2, 3 * PI / 2, OPEN);
  arc(370, 260, 60, 50, 3 * PI / 2, PI / 2, OPEN);

  // face and neck
  noStroke();
  fill(239, 202, 153);
  quad(325, 250, 270, 250, 260, 400, 340, 400); // top right, top left, bottom left, bottom right
  fill(249, 215, 169);
  ellipse(300, 250, 170, 215);

  // eyes
  fill(255);
  stroke(0);
  strokeWeight(3);
  ellipse(260, 235, 27, 16);
  ellipse(340, 235, 27, 16);
  fill(0);
  ellipse(260, 235, 14, 12);
  ellipse(340, 235, 14, 12);

  // eyebrows
  stroke(0);
  strokeWeight(5);
  noFill();
  curve(240, 220, 240, 220, 280, 220, 450, 280); // curve (cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);
  curve(320, 220, 320, 220, 360, 220, 450, 280);

  // nose
  noStroke();
  fill(239, 202, 153);
  triangle(300, 240, 280, 275, 320, 275); // top point, bottom left point, bottom right point

  // mouth
  stroke(240, 40, 10);
  strokeWeight(5);
  fill(255);
  arc(300, 300, 60, 45, 0, PI, CHORD);

  // mask
  fill(240, 40, 10);
  arc(300, 275, 165, 155, 0, PI, CHORD);
  fill(255);

  // body
  // noStroke();
  strokeWeight(0);
  fill(0);
  ellipse(300, 575, 285, 400);
}

// https://editor.p5js.org/afaelnar/sketches/6cFiUjcLq
