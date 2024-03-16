let pics = [];
let items = [];
let total = 20;
// let total = 2;

// Try: display all images a img tag

function preload() {
  // number your image files with numbers
  // for convenience when loading images
  for (let i = 0; i < 20; i++) {
    // eg. images/0.png
    pics[i] = loadImage(`images/${i}.png`);
  }
  // console.log(pics)
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
  
  for (let i = 0; i < total; i++) {
    let pic = pics[i];
    let w = pic.width;
    let h = pic.height;
    console.log('pic i', i, 'width', w, 'height', h)
    items.push(new Item(pic));
    let imgname = `images/${i}.png`;
    let imgtag = createImg(imgname, imgname);
    // imgtag.style('width:20%;height:20%');
    imgtag.style('width:32px');
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
    tint(255, this.alpha);
    image(this.pic, this.x, this.y);
  }
}

// https://editor.p5js.org/jht1493/sketches/kXn2yqVWg
// ICM 21 Wk 08 • many images -remix jht createImg

// https://editor.p5js.org/jht1493/sketches/GtOvwRABh
// ICM-06 - ICM 21 Week 8 • Working with many images -remix jht

// https://editor.p5js.org/enickles/sketches/EQf_WGpqN
// ICM-06 - ICM 21 Week 8 • Working with many images by Ellen
