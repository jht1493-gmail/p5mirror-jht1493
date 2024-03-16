let a_x = [100];
let a_y = [100]; 
let a_xspeed = [1];
let a_yspeed = [0.5];
let a_r = [20];

function setup() {
  createCanvas(400, 200).mousePressed(function () {
    a_x.push(mouseX);
    a_y.push(mouseY);
    a_xspeed.push(random([0,.5,2]));
    a_yspeed.push(random([0,.5,2]));
    a_r.push(random([5,10]));    
  });
  createSpan('click on the canvas for a new ball');
  createElement('br');
  createButton('Remove1').mousePressed(function () {
    a_x.splice(0,1);
    a_y.splice(0,1);
    a_xspeed.splice(0,1);
    a_yspeed.splice(0,1);
    a_r.splice(0,1);
  })
}

function draw() {
  background(0);
  for (let i = 0; i < a_x.length; i++) {
    draw_one(i);
  }
}

function draw_one(i) {
  ellipse(a_x[i], a_y[i], a_r[i]*2, a_r[i]*2);
  a_x[i] += a_xspeed[i];
  a_y[i] += a_yspeed[i];
  if (a_x[i] > width - a_r[i] || a_x[i] < a_r[i]) {
    a_xspeed[i] = -a_xspeed[i];
  }
  if (a_y[i] > height - a_r[i] || a_y[i] < a_r[i]) {
    a_yspeed[i] = -a_yspeed[i];
  }
}

// https://editor.p5js.org/jht1493/sketches/7l92OzPjl
// 4.3 array bouncing balls remove

// https://editor.p5js.org/jht1493/sketches/ss-mUo0A2
// 4.3 array bouncing balls

// https://editor.p5js.org/jht1493/sketches/T8dyF-XVE
// bouncing ball copy

// https://editor.p5js.org/icm/sketches/BJKWv5Tn
// bouncing ball 
