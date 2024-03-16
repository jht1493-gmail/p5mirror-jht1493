var pumpkins = [];

function setup() {
  createCanvas(600, 500);
  background(220, 235, 245);

  pumpkinIcon(0, 15);
  pumpkinIcon(208, 175);
  slider = createSlider(5, 250, 100, 10);
  slider.position(30, 10);

  fill(114, 158, 161, 150);
  textFont("Helvetica");
  text("Press any key to see the pumpkins grow!", 230, 25);

  button = createButton("Harvest");
  button.position(500, 10);
  let buttonC = color(255, 203, 105);
  //button.style('color','white')
  button.style("background-color", buttonC);
  button.mousePressed(harvest);

  farmland();
}

function draw() { 
  for (let i = 0; i < pumpkins.length; i++) {
    pumpkins[i].display();
  }
  if (keyIsPressed === true) {
    for (let p of pumpkins) {
      p.grow();
    }
  }
}

// function plantPumpkins(){
//    pumpkins[pumpkins.length] = new plantedPumpkins(random(width), random(180,500));
// }

function mousePressed() {
  if (mouseY > 180) {
    pumpkins[pumpkins.length] = new plantedPumpkins(mouseX, mouseY);
  }

  //   for (let i = pumpkins.length - 1; i >= 0; i--) {
  //   if (pumpkins[i].contains(mouseX, mouseY)) {
  //     pumpkins.splice(i, 1);
  //   }
  // }
}

function harvest() {
  // for (let p of pumpkins) {
  //   if (this.r>25) {
  //     pumpkins.splice(p, 1);
  //   }
  // }
  console.log("harvest");
  for (let i = pumpkins.length - 1; i >= 0; i--) {
    if (pumpkins[i].r > 30) {
      pumpkins.splice(i, 1);
    }
  }
}

class plantedPumpkins {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.c = slider.value();
  }

  display() {
    stroke(208, 140, 96);
    strokeWeight(2);

    // fill(245, 143, 41);
    fill(this.c, 143, 41);

    ellipse(this.x, this.y, this.r, this.r * 1.2);
    ellipse(this.x + this.r * 0.6, this.y, this.r, this.r * 1.2);
    ellipse(this.x + this.r * 0.3, this.y, this.r, this.r * 1.2);
  }

  grow() {
    if (this.r < 50) {
      this.r++;
    }
  }

  // harvestable() {
  //   return this.r > 25;
  // }
}

function farmland() {
  // for (xpos = 30; xpos < width-30; xpos += 100){
  //   for (ypos = 20; ypos < height-20; ypos += 80){
  //   rect(xpos, ypos, 80, 50, 15);
  //   }
  // }
  noStroke();
  fill(255, 203, 105);
  quad(0, 180, 0, 200, width, 263, width, 176);

  fill(155, 155, 122);
  quad(0, 200, 0, 300, width, 316, width, 263);

  strokeWeight(5);
  stroke(173, 193, 120);

  for (x = 0; x < 600; x += 30) {
    line(35 + x, 200, 0 + x, 316);
  }

  noStroke();
  fill(255, 203, 105);
  quad(0, 180, 0, 200, width, 263, width, 176);

  noStroke();

  fill(173, 193, 120);
  quad(0, 300, 0, 500, width, 500, width, 316);

  strokeWeight(5);
  stroke(155, 155, 122);

  for (y = 0; y < 200; y += 8) {
    line(0, 350 + y, width, 316 + y);
  }
}

function pumpkinIcon(r, x) {
  noStroke();

  fill(r, 143, 41);

  ellipse(x, 20, 10);
  ellipse(x + 2.5, 20, 10);
  ellipse(x + 5, 20, 10);
}
