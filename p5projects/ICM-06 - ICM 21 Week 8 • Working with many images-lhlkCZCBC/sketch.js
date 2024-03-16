// https://editor.p5js.org/enickles/sketches/EQf_WGpqN
// ICM-06 - ICM 21 Week 8 • Working with many images
// Fixed image type to jpg

// let pic0;
// let pic1;

let pics = [];
let items = [];
let total = 20;

function preload() {
  // pic0 = loadImage("images/0.png")
  // pic1 = loadImage("images/1.png")

  // number your image files with numbers
  // for convenience when loading images 
  for (let i = 0; i < 20; i++) {
    pics[i] = loadImage(`images/${i}.jpg`);
  }
  console.log(pics)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < total; i++) {
    let pic = pics[i];
    items.push(new Item(pic));
  }
  // console.log(items)
}

function draw() {
  background(220);
  
  for (let i = 0; i < items.length; i++) {
    items[i].display();
  }
}

function mousePressed() {
  saveCanvas();
}

class Item {
  constructor(_pic) {
    this.pic = _pic;
    this.x = random(0, width - this.pic.width);
    this.y = random(0, height - this.pic.height);
    this.alpha = random(255);
  }

  display() {
    tint(255, this.alpha)
    image(this.pic, this.x, this.y);
  }
}

// https://editor.p5js.org/enickles/sketches/EQf_WGpqN
