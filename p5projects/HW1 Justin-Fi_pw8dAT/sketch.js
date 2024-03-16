function setup() {
  createCanvas(900,500);
}

function draw() {
  background(90);
  noStroke();
  // skin
  fill(100,130,255);
  rect(350,200,700,1150,250,150);
  
  // hair left- right
  fill(0,220);
  triangle(700,30,850,250,250,400);
  triangle(800,80,1500,350,700,220);
  
  // eyebrow shadow left- right
  stroke(0,30);
  strokeWeight(43);
  line(600,405,450,410);
  line(1000,320,730,400);
  
  // pink eyebrow left- right
  stroke(255,100,100);
  strokeWeight(30);
  line(600,400,450,400);
  line(1000,300,730,400);
  
  stroke(0,290)
  strokeWeight(20)
  // eyelash left- right
  ellipse(522,507,200,130);
  ellipse(847,485,200,130);
  
  noStroke();
  fill(255);
  // eye white left- right
  ellipse(520,500,200,130);
  ellipse(850,480,200,130);
  
  fill(40);
  // left eye suspicious left- right 255- 0
  circle(440,500,70);
  circle(610,500,70);
  
  fill(40,70);
  circle(470,490,50);
  circle(567,485,50);
  
  fill(40,40);
  circle(490,475,40);
  circle(540,478,40);
  
  fill(40,40);
  circle(515,470,40);
  
  fill(40);
  // right eye suspicious left- right 255- 0
  circle(750,480,70);
  circle(890,480,70);
  
  fill(40,80);
  circle(770,475,50);
  circle(860,475,50);
  
  fill(40,40);
  circle(790,465,40);
  circle(840,465,40);
  
  fill(40,40);
  circle(815,460,40);
  
  // green sun
  stroke(255,80,255);
  strokeWeight(2);
  fill(0,255,90);
  triangle(90,30,290,100,180,250);
  
  // blue sun
  fill(0,255,255);
  triangle(180,90,290,100,180,260);
  
  // yellow sun
  fill(255,255,90);
  triangle(90,30,180,90,180,250);
}

// https://editor.p5js.org/Hoj09/sketches/MRpIK2vMJ