//--------------------------------------------------------------week 02 - 09/13/2022
//reference from class week02: https://editor.p5js.org/iscodd/sketches/DDJfsbd7P
//referecne - slider rotate 90 degrees:
//https://editor.p5js.org/allison.parrish/sketches/G2M3LIEx0

//This project simulates the pressing strategy of a very common formation in soccer, 433, with 4 defenders, 3 midfielders and 3 forwards. The initial position of each player is set, then they would press when one of the enemies holds the ball (the cursor). The players would run towards the ball with the speed given. However, each player has his certain area to cover, one would slow down if one's area is exceeded. This helps to maintain the over all formation. Possible passing lines are also drawn for better visualization.
//Players will only move when the ball(cursor) is in the pitch(canvas). When mouse is pressed, players will stop pressing and move backwards, in order to form the initial 433 position. However, it is not likely to be possible that all the players are able to go back to their preset position. Like soccer in real life, the formation and strategy are constantly changing during the game. Everything is dynamic.
//The goal keeper does not move towards the ball. He only moves in the goal area.

//--------------------------------------------------------------week 03 - 09/20/2022
//code was refined;
//soccer ball graphics was refined, color still changes every time the code is run
//added slide bars for ball size, players size and goal keeper moving speed;
//now mouseIsPressed only works when ball(cursor) is on the pitch(canvas);

//------------------------------------------------------------------------next steps
//add buttons and spotlights to each player, so user can turn the spotlight/spotlights on or off and focus on certain player/players; as for now the spotlight for player no.7 is on and follows the real-time position of the player;
//spotlight() might be use here, however it required WebGL, which I will definitely look into;
//let players be able to detect their distance to the ball, if the ball is too far away, they should not be sprinting towards it since it is unnecessary and waste of stamina. Instead, players who are closer to the ball will move faster to contain the ball;

//---------------------------------------------------------------------------
//players initial positions
//GK - goal keeper
let GKX = 250, GKY = 718.75;
//LB - left back
let LBX = 62.5, LBY = 500;
//LCB - left center back
let LCBX = 187.5, LCBY = 562.5;
//RCB - right center back
let RCBX = 312.5, RCBY = 562.5;
//RB - right back
let RBX = 437.5, RBY = 500;
//CDM - central defensive midfielder
let CDMX = 250, CDMY = 437.5;
//LCM - left center central midfielder
let LCMX = 156.25, LCMY = 312.5;
//RCM - right central midfielder
let RCMX = 343.75, RCMY = 312.5;
//LW - left wing
let LWX = 62.5, LWY = 125;
//CF - center forward
let CFX = 250, CFY = 187.5;
//RW - right wing
let RWX = 437.5, RWY = 125;

//players speed
let speedX1 = 300;
let speedX2 = 400;
let speedX3 = 500;
let speedX4 = 600;
let speedX5 = 700;

let speedY1 = speedX1 * 2;
let speedY2 = speedX2 * 2;
let speedY3 = speedX3 * 2;
let speedY4 = speedX4 * 2;
let speedY5 = speedX5 * 2;

let speedGKX = 0.5;
let speedGKY = speedGKX / 2;
let speedGKSlider; //for GK

//ball color
let r, g, b;
//ball size
let ballSlider;
//ball image
let ballImg;

//players size
let playerSlider;

//soccer ball
function preload() {
  ballImg = loadImage('assets/soccer.png');
}


function setup() {
  cnv = createCanvas(500, 750);
  let newCanvasX = (windowWidth - 500) / 2;
  let newCanvasY = (windowHeight - 750) /2;
  cnv.position(newCanvasX, newCanvasY);
  
  //ball color
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  //ball size
  ballSlider = createSlider(0, 100, 15);
  ballSlider.position((windowWidth - 500) / 2 + 150, (windowHeight - 750) /2 + 365);
  ballSlider.style('width', '750px');
  ballSlider.style("transform", "rotate(-90deg)");
  
  //players size
  playerSlider = createSlider(0, 100, 31.25);
  playerSlider.position((windowWidth - 500) / 2 + 175, (windowHeight - 750) /2 + 365);
  playerSlider.style('width', '750px')
  playerSlider.style("transform", "rotate(-90deg)");
  
  //GK speed
  speedGKSlider = createSlider(0, 30, 0.5, 0);
  speedGKSlider.position((windowWidth - 500) / 2 + 200, (windowHeight - 750) /2 + 365);
  speedGKSlider.style('width', '750px')
  speedGKSlider.style("transform", "rotate(-90deg)");
}


function draw() {
  //base grass color
  background(119, 198, 110);
  
  //horizontal grass shades
  draw_grass();

  //goal lines + touch lines
  stroke(225);
  strokeWeight(6);
  line(0, 0, 500, 0);
  line(500, 750, 0, 750);
  line(500, 0, 500, 750);
  line(0, 750, 0, 0);

  //corner arcs
  noFill();
  strokeWeight(3);
  arc(0, 0, 40, 40, 0, HALF_PI);
  arc(500, 0, 40, 40, HALF_PI, PI);
  arc(500, 750, 40, 40, PI, PI + HALF_PI);
  arc(0, 750, 40, 40, PI + HALF_PI, TWO_PI);

  //penalty areas + goal areas
  strokeWeight(3);
  rectMode(CENTER);
  stroke(255);
  noFill();
  rect(250, 62.5, 250, 125);
  rect(250, 687.5, 250, 125);
  rect(250, 31.25, 125, 62.5);
  rect(250, 718.5, 125, 62.5);

  //penalty arcs
  noFill();
  strokeWeight(3);
  arc(250, 100, 125, 125, 0.42, 2.72);
  arc(250, 650, 125, 125, 3.55, 5.86);

  //center circle + center line
  noFill();
  stroke(255);
  circle(250, 375, 125);
  line(0, 375, 500, 375);

  //penaldy spots + center spot
  noStroke();
  fill(255);
  circle(250, 375, 8);
  circle(250, 100, 8);
  circle(250, 650, 8);

  //passing lines
  stroke(0, 50);
  strokeWeight(2);
  line(GKX, GKY, LBX, LBY);
  line(GKX, GKY, LCBX, LCBY);
  line(GKX, GKY, RCBX, RCBY);
  line(GKX, GKY, RBX, RBY);
  line(GKX, GKY, CDMX, CDMY);
  line(GKX, GKY, LWX, LWY);
  line(GKX, GKY, RWX, RWY);
  line(LBX, LBY, LCBX, LCBY);
  line(LBX, LBY, LWX, LWY);
  line(LBX, LBY, LCMX, LCMY);
  line(LBX, LBY, CDMX, CDMY);
  line(LBX, LBY, RCMX, RCMY);
  line(LCBX, LCBY, RCBX, RCBY);
  line(LCBX, LCBY, CDMX, CDMY);
  line(LCBX, LCBY, LCMX, LCMY);
  line(RCBX, RCBY, RBX, RBY);
  line(RCBX, RCBY, CDMX, CDMY);
  line(RCBX, RCBY, RCMX, RCMY);
  line(RBX, RBY, RWX, RWY);
  line(RBX, RBY, CDMX, CDMY);
  line(RBX, RBY, RCMX, RCMY);
  line(RBX, RBY, LCMX, LCMY);
  line(CDMX, CDMY, CFX, CFY);
  line(CDMX, CDMY, LCMX, LCMY);
  line(CDMX, CDMY, RCMX, RCMY);
  line(CDMX, CDMY, LWX, LWY);
  line(CDMX, CDMY, RWX, RWY);
  line(RCMX, RCMY, LCMX, LCMY);
  line(RCMX, RCMY, LWX, LWY);
  line(RCMX, RCMY, CFX, CFY);
  line(RCMX, RCMY, RWX, RWY);
  line(LCMX, LCMY, RWX, RWY);
  line(LCMX, LCMY, CFX, CFY);
  line(LCMX, LCMY, LWX, LWY);
  line(CFX, CFY, LWX, LWY);
  line(CFX, CFY, RWX, RWY);
  line(LWX, LWY, RWX, RWY)
  
  //players size
  let d = playerSlider.value();
  stroke(0, 82, 159);
  strokeWeight(4);
  fill(254, 190, 16);
  
  //jersey numbers - players
  textAlign(CENTER, CENTER);
  textFont("futura");
  textSize(d / 2);
  
  
  //players movement
  //---------------------------------------------------------------------------GK
  //GK - goal keeper - does not run towards the ball - 1
  
  let GKSpeed = speedGKSlider.value();
  if (GKX >= 312.5 - d / 2) {
    speedGKX = - GKSpeed;
  }
  if (GKX <= 187.5 + d / 2) {
    speedGKX = GKSpeed;
  }
  if (GKY >= 750 - d / 2) {
    speedGKY = - GKSpeed / 2;
  }
  if (GKY <= 687.5 + d / 2) {
    speedGKY = GKSpeed / 2;
  }
  
  GKX += speedGKX;
  GKY += speedGKY;
  circle(GKX, GKY, d);
  text ("1", GKX, GKY);
  
  //---------------------------------------------------------------------------LB
  //LB - left back - 12
  let timeLBX = (mouseX - LBX) / speedX2;
  let timeLBY = (mouseY - LBY) / speedY2;
  
  if (LBX > 200 && mouseX > 200) {
    timeLBX = (mouseX - LBX) / (speedX2 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeLBX = 0;
    timeLBY = 0;
  }
  
  if (LBX >= 500 - d / 2) {
    LBX = 500 - d / 2;
  }
  if (LBX <= d / 2) {
    LBX = d / 2;
  }
  if (LBY >= 750 - d / 2) {
    LBY = 750 - d / 2;
  }
  if (LBY <= d / 2) {
    LBY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeLBX = - (mouseX - LBX) / speedX2;
      timeLBY = - (mouseY - LBY) / speedY2;
    }
  }
  
  LBX += timeLBX;
  LBY += timeLBY;
  circle(LBX, LBY, d);
  text ("12", LBX, LBY);
  
  //---------------------------------------------------------------------------LCB
  //LCB - left center back - 3
  let timeLCBX = (mouseX - LCBX) / speedX3;
  let timeLCBY = (mouseY - LCBY) / speedY3;
  
  if (LCBX > 300 && mouseX > 300) {
    timeLCBX = (mouseX - LCBX) / (speedX3 * 2);
  }
  if (LCBY < 300 && mouseY < 300) {
    timeLCBY = (mouseY - LCBY) / (speedY3 * 5);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeLCBX = 0;
    timeLCBY = 0;
  }
  
  if (LCBX >= 500 - d / 2) {
    LCBX = 500 - d / 2;
  }
  if (LCBX <= d / 2) {
    LCBX = d / 2;
  }
  if (LCBY >= 750 - d / 2) {
    LCBY = 750 - d / 2;
  }
  if (LCBY <= d / 2) {
    LCBY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeLCBX = - (mouseX - LCBX) / speedX3;
      timeLCBY = - (mouseY - LCBY) / speedY3;
    }
  }
  
  LCBX += timeLCBX;
  LCBY += timeLCBY;
  circle(LCBX, LCBY, d);
  text ("3", LCBX, LCBY);
  
  //---------------------------------------------------------------------------RCB
  //RCB - right center back - 4
  let timeRCBX = (mouseX - RCBX) / speedX2;
  let timeRCBY = (mouseY - RCBY) / speedY2;
  
  if (RCBX < 200 && mouseX < 200) {
    timeRCBX = (mouseX - RCBX) / (speedX2 * 2);
  }
  if (RCBY < 300 && mouseY < 300) {
    timeRCBY = (mouseY - RCBY) / (speedY2 * 5);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeRCBX = 0;
    timeRCBY = 0;
  }
  
  if (RCBX >= 500 - d / 2) {
    RCBX = 500 - d / 2;
  }
  if (RCBX <= d / 2) {
    RCBX = d / 2;
  }
  if (RCBY >= 750 - d / 2) {
    RCBY = 750 - d / 2;
  }
  if (RCBY <= d / 2) {
    RCBY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeRCBX = - (mouseX - RCBX) / speedX2;
      timeRCBY = - (mouseY - RCBY) / speedY2;
    }
  }
  
  RCBX += timeRCBX;
  RCBY += timeRCBY;
  circle(RCBX, RCBY, d);
  text ("4", RCBX, RCBY);
  
  //---------------------------------------------------------------------------RB
  //RB - right back - 2
  let timeRBX = (mouseX - RBX) / speedX3;
  let timeRBY = (mouseY - RBY) / speedY3;
  
  if (RBX < 200 && mouseX < 200) {
    timeRBX = (mouseX - RBX) / (speedX2 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeRBX = 0;
    timeRBY = 0;
  }
  
  if (RBX >= 500 - d / 2) {
    RBX = 500 - d / 2;
  }
  if (RBX <= d / 2) {
    RBX = d / 2;
  }
  if (RBY >= 750 - d / 2) {
    RBY = 750 - d / 2;
  }
  if (RBY <= d / 2) {
    RBY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeRBX = - (mouseX - RBX) / speedX3;
      timeRBY = - (mouseY - RBY) / speedY3;
    }
  }
  
  RBX += timeRBX;
  RBY += timeRBY;
  circle(RBX, RBY, d);
  text ("2", RBX, RBY);
  
  //---------------------------------------------------------------------------CDM
  //CDM - central defensive midfielder
  let timeCDMX = (mouseX - CDMX) / speedX5;
  let timeCDMY = (mouseY - CDMY) / speedY5;
  
  if (CDMX < 100 && mouseX < 100){
    timeCDMX = (mouseX - CDMX) / (speedX5 * 3);
  }
  if (CDMX > 400 && mouseX > 400){
    timeCDMX = (mouseX - CDMX) / (speedX5 * 3);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeCDMX = 0;
    timeCDMY = 0;
  }
  
  if (CDMX >= 500 - d / 2) {
    CDMX = 500 - d / 2;
  }
  if (CDMX <= d / 2) {
    CDMX = d / 2;
  }
  if (CDMY >= 750 - d / 2) {
    CDMY = 750 - d / 2;
  }
  if (CDMY <= d / 2) {
    CDMY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeCDMX = - (mouseX - CDMX) / speedX5;
      timeCDMY = - (mouseY - CDMY) / speedY5;
    }
  }
  
  CDMX += timeCDMX;
  CDMY += timeCDMY;
  circle(CDMX, CDMY, d);
  text ("14", CDMX, CDMY);
  
  //---------------------------------------------------------------------------LCM
  //LCM - left center central midfielder
  let timeLCMX = (mouseX - LCMX) / speedX3;
  let timeLCMY = (mouseY - LCMY) / speedY3;
  
  if (LCMX > 300 && mouseX > 300){
    timeLCMX = (mouseX - LCMX) / (speedX5 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeLCMX = 0;
    timeLCMY = 0;
  }

  if (LCMX >= 500 - d / 2) {
    LCMX = 500 - d / 2;
  }
  if (LCMX <= d / 2) {
    LCMX = d / 2;
  }
  if (LCMY >= 750 - d / 2) {
    LCMY = 750 - d / 2;
  }
  if (LCMY <= d / 2) {
    LCMY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeLCMX = - (mouseX - LCMX) / speedX3;
      timeLCMY = - (mouseY - LCMY) / speedY3;
    }
  }
  
  LCMX += timeLCMX;
  LCMY += timeLCMY;
  circle(LCMX, LCMY, d);
  text ("10", LCMX, LCMY);
  
  //---------------------------------------------------------------------------RCM
  //RCM - right central midfielder
  let timeRCMX = (mouseX - RCMX) / speedX4;
  let timeRCMY = (mouseY - RCMY) / speedY4;
  
  if (RCMX < 200 && mouseX < 200){
    timeRCMX = (mouseX - RCMX) / (speedX5 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeRCMX = 0;
    timeRCMY = 0;
  }

  if (RCMX >= 500 - d / 2) {
    RCMX = 500 - d / 2;
  }
  if (RCMX <= d / 2) {
    RCMX = d / 2;
  }
  if (RCMY >= 750 - d / 2) {
    RCMY = 750 - d / 2;
  }
  if (RCMY <= d / 2) {
    RCMY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeRCMX = - (mouseX - RCMX) / speedX4;
      timeRCMY = - (mouseY - RCMY) / speedY4;
    }
  }
  
  RCMX += timeRCMX;
  RCMY += timeRCMY;
  circle(RCMX, RCMY, d);
  text ("8", RCMX, RCMY);
  
  //---------------------------------------------------------------------------LW
  //LW - left wing
  let timeLWX = (mouseX - LWX) / speedX1;
  let timeLWY = (mouseY - LWY) / speedY1;
  
  if (LWX > 275 && mouseX > 275) {
    timeLWX = (mouseX - LWX) / (speedX1 * 1.5);
  }
  if (LWY > 450 && mouseY >450) {
    timeLWY = (mouseY - LWY) / (speedY1 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeLWX = 0;
    timeLWY = 0;
  }

  if (LWX >= 500 - d / 2) {
    LWX = 500 - d / 2;
  }
  if (LWX <= d / 2) {
    LWX = d / 2;
  }
  if (LWY >= 750 - d / 2) {
    LWY = 750 - d / 2;
  }
  if (LWY <= d / 2) {
    LWY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeLWX = - (mouseX - LWX) / speedX1;
      timeLWY = - (mouseY - LWY) / speedY1;
    }
  }
  
  LWX += timeLWX;
  LWY += timeLWY;
  circle(LWX, LWY, d);
  text ("7", LWX, LWY);
  
  //---------------------------------------------------------------------------CF
  //CF - center forward
  let timeCFX = (mouseX - CFX) / speedX2;
  let timeCFY = (mouseY - CFY) / speedY2;
  
  if (CFX > 400 && mouseX > 400) {
    timeCFX = (mouseX - CFX) / (speedX2 * 2);
  }
  if (CFX < 100 && mouseX <100) {
    timeCFX = (mouseX - CFX) / (speedX2 * 2);
  }
  if (CFY > 450 && mouseY > 450) {
    timeCFY = (mouseY - CFY) / (speedY2 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeCFX = 0;
    timeCFY = 0;
  }

  if (CFX >= 500 - d / 2) {
    CFX = 500 - d / 2;
  }
  if (CFX <= d / 2) {
    CFX = d / 2;
  }
  if (CFY >= 750 - d / 2) {
    CFY = 750 - d / 2;
  }
  if (CFY <= d / 2) {
    CFY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeCFX = - (mouseX - CFX) / speedX2;
      timeCFY = - (mouseY - CFY) / speedY2;
    }
  }
  
  CFX += timeCFX;
  CFY += timeCFY;
  circle(CFX, CFY, d);
  text ("9", CFX, CFY);
  
  //---------------------------------------------------------------------------RW
  //RW - right wing
  let timeRWX = (mouseX - RWX) / speedX1;
  let timeRWY = (mouseY - RWY) / speedY1;
  
  if (RWX < 225 && mouseX < 225) {
    timeRWX = (mouseX - RWX) / (speedX1 * 1.5);
  }
  if (RWY > 450 && mouseY >450) {
    timeRWY = (mouseY - RWY) / (speedY1 * 2);
  }
  
  if (mouseX <= 0 || mouseX >= 500 || mouseY <= 0 || mouseY >= 750) {
    timeRWX = 0;
    timeRWY = 0;
  }

  if (RWX >= 500 - d / 2) {
    RWX = 500 - d / 2;
  }
  if (RWX <= d / 2) {
    RWX = d / 2;
  }
  if (RWY >= 750 - d / 2) {
    RWY = 750 - d / 2;
  }
  if (RWY <= d / 2) {
    RWY = d / 2;
  }
  
  if (mouseIsPressed) {
    if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 750) {
      timeRWX = - (mouseX - RWX) / speedX1;
      timeRWY = - (mouseY - RWY) / speedY1;
    }
  }
  
  RWX += timeRWX;
  RWY += timeRWY;
  circle(RWX, RWY, d);
  text ("11", RWX, RWY);
 

  //ball
  let ballSize = ballSlider.value();
  stroke(0);
  strokeWeight(2);
  fill(r, g, b);
  circle(mouseX, mouseY, ballSize);
  imageMode(CENTER);
  image(ballImg, mouseX, mouseY, ballSize, ballSize);
  
  //spotlights - work in progress
  stroke(255);
  fill(255, 150);
  circle(LWX, LWY, 2 * d);
}

function draw_grass() {
    //horizontal grass shades
  rectMode(CORNER);
  noStroke();
  fill(0, 10);
  rect(0, 0, 500, 62.5);
  rect(0, 125, 500, 62.5);
  rect(0, 250, 500, 62.5);
  rect(0, 375, 500, 62.5);
  rect(0, 500, 500, 62.5);
  rect(0, 625, 500, 62.5);
  //vertical grass shades
  rect(0, 0, 62.5, 750);
  rect(125, 0, 62.5, 750);
  rect(250, 0, 62.5, 750);
  rect(375, 0, 62.5, 750);
}