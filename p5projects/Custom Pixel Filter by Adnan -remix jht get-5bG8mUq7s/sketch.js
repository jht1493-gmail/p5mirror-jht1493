let id;

function preload() {
  id = loadImage("id.jpg");
}

function setup() {
  console.log('id.width',id.width,'id.height',id.height);
  createCanvas(640, 480);
  background(220);
  // image(id, 10,10, 750, 1000);

  pixelDensity(1);

  // update_img();
  
  // image can in html or in code.
  // createImg(src, alt)
  let imgTag = createImg("id.jpg","my image");
  imgTag.style('width:20%;height:20%');
  createButton('Update').mousePressed(update_img);
}

function draw() {}

function update_img() {
  console.log('update_img start')
  id.loadPixels();
  for (let x = 0; x < id.width; x++) {
    for (let y = 0; y < id.height; y++) {
      let index = (id.width * y + x) * 4;
      let r = index + 0;
      let g = index + 1;
      let b = index + 2;
      let a = index + 3;
      id.pixels[r] = id.pixels[r] - random(255);
      id.pixels[g] = id.pixels[g] - random(255);
      id.pixels[b] = id.pixels[b] - random(255);
      // let col = id.get(x,y);
      // col[0] = col[0] - random(255);
      // col[1] = col[1] - random(255);
      // col[2] = col[2] - random(255);
      // id.set(x,y, col);
    }
  }
  id.updatePixels();

  image(id, 0, 0, 750, 1000);
  console.log('update_img end')
}

// https://editor.p5js.org/jht1493/sketches/5bG8mUq7s
// Custom Pixel Filter by Adnan -remix jht get

// https://editor.p5js.org/jht1493/sketches/PqIlRqqK-
// Custom Pixel Filter by Adnan -remix jht

// https://editor.p5js.org/Adnanaga/sketches/BB0WNQxSr
// Custom Pixel Filter by Adnan