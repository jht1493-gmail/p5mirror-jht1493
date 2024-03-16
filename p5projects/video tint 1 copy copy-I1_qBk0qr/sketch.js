let a_video;
let a_tints = [
  [255, 0, 150],
  [0, 255, 0],
  [0, 0, 255],
  [255, 0, 0]
]
let x_step;
let y_step;
let a_scale = 3;
let t_offset = 0;
let a_alpha = 120;

function setup() {
  createCanvas(320, 240);
  background(51);
  a_video = createCapture(VIDEO);
  a_video.size(320, 240);
  x_step = width / a_scale;
  y_step = x_step * (height / width);
  print('x_step', x_step, 'y_step', y_step)
  a_video.hide();

  // createSlider(min, max, [value], [step])
  let = a_slider = createSlider(1, 10, a_scale);
  a_slider.input(function() {
    a_scale = a_slider.value();
    x_step = width / a_scale;
    y_step = x_step * (height / width);
  });
  createP();

  let = a_slider2 = createSlider(0, 10, t_offset);
  a_slider2.input(function() {
    t_offset = a_slider2.value();
  });
  createP();

  let = a_slider3 = createSlider(0, 255, a_alpha);
  a_slider3.input(function() {
    a_alpha = a_slider3.value();
  });

}

function draw() {
  background(255);
  let tindex = t_offset;
  for (y = 0; y < height; y += y_step) {
    for (x = 0; x < width; x += x_step) {
      // let tt = random(a_tints);
      tindex = tindex % a_tints.length
      let tt = a_tints[tindex];
      tt[3] = a_alpha;
      tint(tt);
      image(a_video, x, y, x_step, y_step);
      tindex = (tindex + 1);
    }
  }
}

// https://editor.p5js.org/jht1493/sketches/MtdR3vBcj
// https://github.com/CodingTrain/website/blob/master
//   /Tutorials/P5JS/p5.js_a_video/11.1_p5.js_createCapture