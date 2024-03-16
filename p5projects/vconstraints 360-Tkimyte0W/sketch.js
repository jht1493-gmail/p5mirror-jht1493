
let myVideo;
let v_width;
let v_height;
let a_scale = 1/3;
// let a_scale = 1;

function setup() {
  createCanvas(640, 360);
  create_ui();

  v_width = 1920 * a_scale;
  v_height = 1080 * a_scale;
  console.log({
    v_width,
    v_height
  });

  let vconstraints = {
    video: {
      width: v_width,
      height: v_height,
    },
  };
  myVideo = createCapture(vconstraints, function(stream) {
    console.log('createCapture stream.id', stream.id);
  });
  myVideo.muted = true;
}

function display_vis(elm, vis) {
  elm.style(vis ? 'display:inline' : 'display:none')
}

// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
// image(img, x, y, [width], [height])
// https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints

function draw() {
  background(220);
  stroke(255);
  if (myVideo != null) {
    let v1 = myVideo.get();
    mirror_left(v1);
    image(v1, 0, 0, width / 2, height, 0, 0, v1.width / 2, v1.height);
    text('Here ' + v1.width + ' ' + v1.height, 10, 10);
  }  update_ui();
}

function mirror_right(vimage) {
  // console.log('mirror_right vimage',vimage);
  // console.log('mirror_right vimage.pixels',vimage.pixels);
  vimage.loadPixels();
  let w = vimage.width;
  let h = vimage.height;
  // console.log('w', w, 'h', h)
  let whalf = w / 2;
  for (let y = 0; y < h; y++) {
    for (let x = whalf; x < w; x++) {
      let ii = (w * y + x) * 4;
      let ri = ((w * y) + (w - x - 1)) * 4;
      // console.log('x', x, 'y', y)
      // console.log('ii', ii, 'ri', ri)
      vimage.pixels[ii + 0] = vimage.pixels[ri + 0];
      vimage.pixels[ii + 1] = vimage.pixels[ri + 1];
      vimage.pixels[ii + 2] = vimage.pixels[ri + 2];
    }
  }
  vimage.updatePixels();
}

function mirror_left(vimage) {
  // console.log('vimage',vimage);
  // console.log('vimage.pixels',vimage.pixels);
  vimage.loadPixels();
  let w = vimage.width;
  let h = vimage.height;
  // console.log('w', w, 'h', h)
  let whalf = w / 2;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < whalf; x++) {
      let ii = (w * y + x) * 4;
      let ri = ((w * y) + (w - x - 1)) * 4;
      // console.log('x', x, 'y', y)
      // console.log('ii', ii, 'ri', ri)
      vimage.pixels[ii + 0] = vimage.pixels[ri + 0];
      vimage.pixels[ii + 1] = vimage.pixels[ri + 1];
      vimage.pixels[ii + 2] = vimage.pixels[ri + 2];
    }
  }
  vimage.updatePixels();
}

function create_ui() {
  createSpan().id('ifps');
  createElement('br');
}

function update_ui() {
  select('#ifps').html('[fps=' + round(frameRate(), 2) + '] ');
} 

// https://editor.p5js.org/jht1493/sketches/QOfdBEg_C
// vconstraints
