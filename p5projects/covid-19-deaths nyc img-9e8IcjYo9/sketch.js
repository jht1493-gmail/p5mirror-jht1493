let a_img;

function setup() {
  createCanvas(400, 400);
  a_img = createImg(
    'https://projects.thecity.nyc/covid-19-deaths-img/Cynthia_L_Adams.jpeg',
    'Cynthia_L_Adams'
  );
  // a_img.id('i1');
  // a_img = createImg(a_refs[1].h, 'image');
}

function draw() {
  background(220);
  // image(a_img, mouseX, 0);
  image(a_img, 0, 0);
}

// https://projects.thecity.nyc/covid-19-deaths/
