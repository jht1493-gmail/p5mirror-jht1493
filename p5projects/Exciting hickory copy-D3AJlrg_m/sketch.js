var b = 1;

function setup() {
  createCanvas(400, 400);
  create_slider();
  draw_one();
}

function draw_one() {
  background(220);
  textSize(30);
  cir();
  print("a", a, "b", b);
  frameRate(0.5);
}

function col() {
  const choice = int(random(1, 5));
  if (choice == 1) {
    fill(120, 150, 170) //grey
  } else if (choice == 2) {
    fill(230, 255, 179) //yellow
  } else if (choice == 3) {
    fill(255, 194, 153) //orange
  } else if (choice == 4) {
    fill(153, 204, 255) //blue
  }
  // print("choice", choice);
}

function create_slider() {
  createSpan('slider').style('font-size', '20px');
  slider = createSlider(1, 4);
  slider.style('width', '100px');
}

function cir() {
  var x = 0;
  var y = 0;
  n = 100;
  for (a = 0; a <= n; a += 1) {
    noStroke();
    let b = slider.value();
    col();
    const w = b * width / a
    // const h = b * width / a
    const wn = width / n;
    print('x', x, 'y', y,  'w', w, 'wn', wn)
    // ellipse(x, y, w, [h])
    ellipse(x, y, w);
    x += wn;
    y += wn;
  }
}