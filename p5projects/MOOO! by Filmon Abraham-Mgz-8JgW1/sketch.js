// https://editor.p5js.org/filmonabraham/sketches/Yvhj8iTWS
// MOOO! by Filmon Abraham

let bigNostrils = 9;
let x= 300;
let x1= 600;
let x2 = 0;
let col;


function setup() {
  createCanvas(600, 600);
  
    //background(135)
  background(135, 206, 235);
}



function draw(){
  
  // CLOUDS
  
  stroke(240);
  fill(255);
  circle(60, 65, 90);
  circle(90, 72, 80);
  circle(10, 80, 60);
  circle(130, 83, 60);
  
  circle(430, 65, 90);
  circle(460, 72, 80);
  circle(380, 80, 60);
  circle(500, 83, 60);
  
  circle(240, 105, 70);
  circle(210, 112, 50);
  circle(180, 120, 40);
  circle(280, 123, 40);
  
  // SUN

    fill(254, 249, 27);
    circle(x1, x2 ,x);
    x=x+4
    
  if (x > 1700) {
  
    x= 1700;
    
    strokeWeight(2);
    fill(26, 166, 4);
    
    // M    
    
    circle(145,110, 40);
    circle(115,80, 40);
    circle(175,80, 40);
    circle(90,50, 40);
    circle(90, 80, 40);
    circle(90, 110, 40);
    circle(90, 140, 40);
    circle(90, 170, 40);
    
    circle(200,50, 40);
    circle(200, 80, 40);
    circle(200, 110, 40);
    circle(200, 140, 40);
    circle(200, 170, 40);
    
    circle(320, 120, 40);
    circle(320, 110, 40);
    circle(320, 90, 40);
    circle(315, 70, 40);
    circle(310, 60, 40);
    circle(270, 60, 40);
    circle(295, 55, 40);
    circle(280, 55, 40);
    circle(265, 60, 40);
    circle(255, 80, 40);
    circle(255, 110, 40);
    circle(255, 140, 40);
    
    circle(420, 160, 40);
    circle(440, 150, 40);
    circle(450, 130, 40);
    circle(450, 110, 40);
    circle(450, 90, 40);
    circle(445, 70, 40);
    circle(425, 55, 40);
    circle(400, 55, 40);
    circle(385, 60, 40);
    circle(375, 80, 40);
    circle(375, 110, 40);
    circle(375, 140, 40);
    
    circle(510, 60, 40);
    circle(510, 80, 40);
    circle(510, 100, 40);
    circle(510, 120, 40);
    circle(510, 170, 40);
    
  }
  
  // HORNS
  fill(100);
  triangle(300, 160, 230, 80, 180, 210); // LEFT EAR
  triangle(420, 210, 370, 80, 310, 150); // RIGHT EAR
  noStroke()
  
  // BODY
  fill(240);
  ellipse(300, 530, 420, 460);

  // EARS
  fill(255);
  ellipse(192, 192, 60, 80);
  ellipse(408, 192, 60, 80);

    //arc(x, y, w, h, start, stop, [mode], [detail])
  fill(0);
  arc(200, 190, 60, 80, 0, 230);
  arc(400, 190, 60, 80, 12, 230);

  // HEAD
  fill(255);
  noStroke();
  ellipse(300, 250, 250, 250);

  // EYES
  
    // left eye
  fill(0);
  ellipse(260, 260, 40, 60);
  ellipse(340, 260, 40, 60);

    // right eye
  fill(255);
  ellipse(260, 262, 20, 25);
  ellipse(340, 262, 20, 25);
  
  // SPOTS
  
  fill(0)
  
    // left body
  circle(230, 450, 40);
  circle(230, 455, 40);
  circle(229, 460, 40);
  circle(227, 465, 40);
  circle(226, 442, 40);
  circle(229, 440, 40);
  circle(220, 430, 40);
  circle(215, 420, 40);
  circle(200, 440, 40);
  circle(170, 450, 40);
  circle(199, 460, 40);

    // bottom left
  circle(130, 600, 40);
  circle(125, 600, 40);
  circle(120, 586, 40);
  circle(120, 560, 40);

    // bottom right
  circle(360, 595, 40);
  circle(365, 575, 40);

    // right body
  circle(450, 500, 40);
  circle(445, 490, 40);
  circle(455, 490, 40);
  circle(455, 500, 40);
  circle(440, 480, 40);
  
    // under nuzzle
  circle(360, 362, 40);
  circle(369, 360, 40);
  circle(374, 350, 40);
  circle(379, 355, 40);
  circle(389, 350, 40);
  circle(385, 365, 40);
  circle(350, 368, 40);
  
    // head
  circle(260, 180, 40);
  circle(245, 185, 50);
  circle(230, 200, 40);
  circle(245, 170, 40);
  
  
  // LEGS
  fill(220);
  ellipse(200, 580, 70, 190);
  ellipse(400, 580, 70, 190);

    // NUZZLE
  fill(255, 192, 203);
  ellipse(300, 330, 190, 120);

  // NOSTRILS
  fill(230);
  ellipse(260, 340, 20, bigNostrils);
  ellipse(340, 340, 20, bigNostrils);
  
  bigNostrils = bigNostrils + 0
  
    
    


}
