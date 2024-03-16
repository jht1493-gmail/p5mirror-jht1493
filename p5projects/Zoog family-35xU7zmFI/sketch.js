// From: https://editor.p5js.org/mimiyin/sketches/SiMFwzSGS

function setup() {
  // Create square drawing canvas 
  createCanvas(400, 400);

  const Dark_gray_color = 120;
  background(Dark_gray_color);

  scale(0.5);
  translate(-110,0);
  zoog();
  
  translate(200,0);
  zoog();
  
  translate(200,0);
  zoog();
  
  translate(200,0);
  zoog();

  function zoog() {
    Purple_face();
    Green_eyes();
    Black_pupils();
    Orange_eyebrows();
    Antenna();
    Pink_mouth();
    Black_arms();
    Yellow_body();
  }

  function Purple_face() {
    fill(127, 0, 127);
    ellipse(200, 200, 150, 200);
  }

  function Green_eyes() {
    fill(0, 200, 127);
    ellipse(150, 150, 70, 40);
    ellipse(250, 150, 40, 60);
  }

  function Black_pupils() {
    fill(0);
    ellipse(170, 150, 5, 5);
    ellipse(270, 150, 10, 10);
  }

  function Orange_eyebrows() {
    stroke(255, 100, 100);
    strokeWeight(15);
    line(130, 110, 170, 120);
    line(230, 105, 270, 100);
  }

  function Antenna() {
    stroke(255);
    strokeWeight(5);
    line(200, 125, 200, 50);
    noFill();
    ellipse(200, 40, 20, 20);
  }

  function Pink_mouth() {
    noStroke();
    fill(255, 0, 127);
    ellipse(200, 250, 50, 20);
  }

  function Black_arms() {
    stroke(0);
    strokeWeight(30);
    line(150, 350, 300, 300);
  }

  function Yellow_body() {
    noStroke();
    fill(255, 255, 0);
    rect(150, 275, 100, 200);
  }
}