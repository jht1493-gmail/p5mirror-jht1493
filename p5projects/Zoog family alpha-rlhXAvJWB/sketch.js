// From: https://editor.p5js.org/mimiyin/sketches/SiMFwzSGS

function setup() {
  // Create square drawing canvas 
  createCanvas(400, 400);

  const Dark_gray_color = 120;
  background(Dark_gray_color);

  scale(0.5);
  translate(-110, 0);
  zoog(255);

  scale(0.7);
  translate(200 * 2, 60 * 4);
  zoog(150);

  scale(0.5);
  translate(200 * 3, 60 * 8);
  zoog(100);

  scale(0.5);
  translate(200 * 3, 60 * 8);
  zoog(100);

  function zoog(a_alpha) {
    Purple_face(a_alpha);
    Green_eyes(a_alpha);
    Black_pupils(a_alpha);
    Orange_eyebrows(a_alpha);
    Antenna(a_alpha);
    Pink_mouth(a_alpha);
    Black_arms(a_alpha);
    Yellow_body(a_alpha);
  }

  function Purple_face(a_alpha) {
    fill(127, 0, 127, a_alpha);
    ellipse(200, 200, 150, 200);
  }

  function Green_eyes(a_alpha) {
    fill(0, 200, 127, a_alpha);
    ellipse(150, 150, 70, 40);
    ellipse(250, 150, 40, 60);
  }

  function Black_pupils(a_alpha) {
    fill(0, a_alpha);
    ellipse(170, 150, 5, 5);
    ellipse(270, 150, 10, 10);
  }

  function Orange_eyebrows(a_alpha) {
    stroke(255, 100, 100, a_alpha);
    strokeWeight(15);
    line(130, 110, 170, 120);
    line(230, 105, 270, 100);
  }

  function Antenna(a_alpha) {
    stroke(255, 255, 255, a_alpha);
    strokeWeight(5);
    line(200, 125, 200, 50);
    noFill();
    ellipse(200, 40, 20, 20);
  }

  function Pink_mouth(a_alpha) {
    noStroke();
    fill(255, 0, 127, a_alpha);
    ellipse(200, 250, 50, 20);
  }

  function Black_arms(a_alpha) {
    stroke(0, 0, 0, a_alpha);
    strokeWeight(30);
    line(150, 350, 300, 300);
  }

  function Yellow_body(a_alpha) {
    noStroke();
    fill(255, 255, 0, a_alpha);
    rect(150, 275, 100, 200);
  }
}