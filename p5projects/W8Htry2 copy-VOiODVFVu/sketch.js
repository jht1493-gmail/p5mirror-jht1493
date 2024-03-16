let vid;
let playing = false;
let blur = false;
let cnv;
let nwidth = 500/2;
let nheight = 300/2;

function setup() {
  cnv = createCanvas(nwidth, nheight);
  btnBlur = createButton("Add Blur filter");
  btnBlur.position(6, 378);
  btnBlur.mousePressed(applyBlur);
  vid = createVideo("jelly.mp4");
  // vid.size(1000,1100);
  vid.loop();
  vid.position(0, 0);
  vid.hide();
  cnv.mousePressed(jumpToRandomPlace);
}

function draw() {
  // completion = vid.time() / vid.duration();
  background(0);
  let img = vid.get();
  image(img, 0, 0, nwidth, nheight);
  if (blur) filter(BLUR, 10);
}

function jumpToRandomPlace() {
  // if (!playing) {
  vid.play();
  vid.time(random() * vid.duration());
  playing = true;
}

function applyBlur() {
  // Add the BLUR filter to the image
  // invert a boolean variable
  blur = !blur;
}

// function mousePressed() {
//   if (!playing) {
//     vid.play();
//     let r = random(225,vid.time)
//                    // * vid.duration());
//     playing = true;
//   }
//   else {
//     vid.pause();
//     playing = false;
//   }

// https://creative-coding.decontextualize.com/video/
// https://p5js.org/reference/#/p5/filter
