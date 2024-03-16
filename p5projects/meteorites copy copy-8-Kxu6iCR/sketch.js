let vid1, vid2, vid3, vid4,vid5,vid6,vid7,vid8,vid9;
let vidM1,vidM2,vidM3,vidM4,vidM5,vidM6,vidM7,vidM8,vidM9;
let playVideo = false;
let playVideo2 = false;
let playVideo3 = false;
let playVideo4 = false;
let playVideo5 = false;
let playVideo6 = false;
let playVideo7 = false;
let playVideo8 = false;
let playVideo9 = false;
let intro1 = "click one meteorite to see it's falling";
let intro2 = "return";

function setup() {
  createCanvas(800, 800);
    
  vid1 = createVideo("1.mp4");
  vid1.position(0, 50);
  vid1.size(250, 250);
  vid1.loop();

  vid2 = createVideo("2.mp4");
  vid2.position(250, 50);
  vid2.size(250, 250);
  vid2.loop();
  
  vid3 = createVideo("3.mp4");
  vid3.position(500, 50);
  vid3.size(250, 250);
  vid3.loop();

  vid4 = createVideo("4.mp4");
  vid4.position(0, 300);
  vid4.size(250, 250);
  vid4.loop();

  vid5 = createVideo("5.mp4");
  vid5.position(250, 300);
  vid5.size(250, 250);
  vid5.loop();
  
  vid6 = createVideo("6.mp4");
  vid6.position(500, 300);
  vid6.size(250, 250);
  vid6.loop();
  
  vid7 = createVideo("7.mp4");
  vid7.position(0, 550);
  vid7.size(250, 250);
  vid7.loop();

  vid8 = createVideo("8.mp4");
  vid8.position(250, 550);
  vid8.size(250, 250);
  vid8.loop();
  
  vid9 = createVideo("9.mp4");
  vid9.position(500, 550);
  vid9.size(250, 250);
  vid9.loop();
  

}

function draw() {
  drawpage1();
  if (playVideo) {
    drawpage2();
    playVideo = false;
  }
  drawpage1();
  if (playVideo2) {
    drawpage3();
    playVideo2 = false;
  }
    drawpage1();
  if (playVideo3) {
    drawpage4();
    playVideo3 = false;
  }
    drawpage1();
  if (playVideo4) {
    drawpage5();
    playVideo4 = false;
  }
    drawpage1();
  if (playVideo5) {
    drawpage6();
    playVideo5 = false;
  }
  
  drawpage1();
  if (playVideo6) {
    drawpage7();
    playVideo6 = false;
  }
  
  drawpage1();
  if (playVideo7) {
    drawpage8();
    playVideo7 = false;
  }
  
  drawpage1();
  if (playVideo8) {
    drawpage9();
    playVideo8 = false;
  }
  
  drawpage1();
  if (playVideo9) {
    drawpage10();
    playVideo9 = false;
  }
  
}

function mouseClicked() {
  console.log("mouseClicked", mouseX, mouseY);
  if (mouseX > 0 && mouseX < 250 && mouseY > 50 && mouseY < 300) {
    if (vidM1) {
      vidM1.remove() 
      vidM1 = false;  
    }else {
    playVideo = true;
    }
  }

  if (mouseX > 250 && mouseX < 500 && mouseY > 50 && mouseY < 300) {
    playVideo2 = true;
  }
  
  if (mouseX > 500 && mouseX < 750 && mouseY > 50 && mouseY < 300) {
    playVideo3 = true;
  }
  
    if (mouseX > 0 && mouseX < 250 && mouseY > 300 && mouseY < 550) {
    playVideo4 = true;
  }
  
    if (mouseX > 250 && mouseX < 500 && mouseY > 300 && mouseY < 550) {
    playVideo5 = true;
  }
      if (mouseX > 500 && mouseX < 750 && mouseY > 300 && mouseY < 550) {
    playVideo6 = true;
  }
      if (mouseX > 0 && mouseX < 250 && mouseY > 550 && mouseY < 800) {
    playVideo7 = true;
  }
      if (mouseX > 250 && mouseX < 500 && mouseY > 550 && mouseY < 800) {
    playVideo8 = true;
  }
      if (mouseX > 500 && mouseX < 750 && mouseY > 550 && mouseY < 800) {
    playVideo9 = true;
  }
  
 
}

function drawpage1() {
  textFont("helvetic");
  fill(188);
  textSize(15);
  text(intro1, 0, 5, 600, 80);

}

function drawpage2() {
  //video 1
  vidM1 = createVideo("M1.mp4");
  vidM1.position(0, 50);
  vidM1.size(250, 250);
  vidM1.loop()
}

function drawpage3() {
  
  vidM2 = createVideo("M2.mp4");
  vidM2.position(250, 50);
  vidM2.size(250, 250);
  vidM2.loop()
}

function drawpage4() {

  vidM3 = createVideo("M3.mp4");
  vidM3.position(500, 50);
  vidM3.size(250, 250);
  vidM3.loop()
}
  function drawpage5() {
 
  vidM4 = createVideo("M4.mp4");
  vidM4.position(0, 300);
  vidM4.size(250, 250);
  vidM4.loop()
}    
  function drawpage6() {
 
  vidM5 = createVideo("M5.mp4");
  vidM5.position(250, 300);
  vidM5.size(250, 250);
  vidM5.loop()
}

  function drawpage7() {
 
  vidM6 = createVideo("M6.mp4");
  vidM6.position(500, 300);
  vidM6.size(250, 250);
  vidM6.loop()
}

  function drawpage8() {
 
  vidM7 = createVideo("M7.mp4");
  vidM7.position(0, 550);
  vidM7.size(250, 250);
  vidM7.loop()
}

  function drawpage9() {
 
  vidM8 = createVideo("M8.mp4");
  vidM8.position(250, 550);
  vidM8.size(250, 250);
  vidM8.loop()
}

  function drawpage10() {
 
  vidM9 = createVideo("M9.mp4");
  vidM9.position(500, 550);
  vidM9.size(250, 250);
  vidM9.loop()
}