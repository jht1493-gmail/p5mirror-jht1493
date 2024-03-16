let pics = [];
let items = [];
let total = 20;
let ndisplay = 2;

function preload() {
  // number your image files with numbers
  // for convenience when loading images
  for (let i = 0; i < 20; i++) {
    // eg. images/0.png
    pics[i] = loadImage(`images/${i}.png`);
  }
  // console.log(pics)
  // https://p5js.org/reference/#/p5/shuffle
  // shuffle(array, [bool])
  shuffle(pics, true);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  // splice(start)
// splice(start, deleteCount)

  pics.splice(0,pics.length-ndisplay);
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
  
  for (let i = 0; i < pics.length; i++) {
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
    tint(255, this.alpha);
    image(this.pic, this.x, this.y);
  }
}

// https://editor.p5js.org/jht1493/sketches/6JG_C7kkK
// ICM 21 Wk 08 • many images -remix jht ndisplay

// https://editor.p5js.org/jht1493/sketches/GtOvwRABh
// ICM-06 - ICM 21 Week 8 • Working with many images -remix jht

// https://editor.p5js.org/enickles/sketches/EQf_WGpqN
// ICM-06 - ICM 21 Week 8 • Working with many images by Ellen
