let a_bugs = [];
let a_lines = [];
// let a_limit = 1000;
// let a_lines = a_love;
let a_limit;
let a_prior_mousePressed;
let a_speed = 0;

function setup() {
  createCanvas(480, 320);
  createSpan("Drag mouse on canva");
  createElement('br');
  createButton('Clear').mousePressed(function () {
    a_lines = [];
  });
  createButton('Animate').mousePressed(function () {
    a_speed = 0.2;
  });
  createButton('Stop').mousePressed(function () {
    a_speed = 0;
  });
  createButton('Save').mousePressed(function () {
    save_bugs();
  });
  createButton('Restore love').mousePressed(function () {
    restore_bugs(a_love);
  });
  createButton('Restore face').mousePressed(function () {
    restore_bugs(a_face);
  });
  background(204);
}

function draw() {
  background(204);
  if (mouseOnCanvas()) {
    if (! a_prior_mousePressed) {
      a_bugs = [];
      a_lines.push(a_bugs);
    }
    add_bug(mouseX, mouseY);
    a_prior_mousePressed = true;
  }
  else {
    a_prior_mousePressed = false;
  }
  for (let bugs of a_lines) {
    let prior_bug;
    for (let bug of bugs) {
      if (prior_bug) {
        prior_bug.line_to(bug);
      }
      bug.speed = a_speed;
      bug.move();
      bug.display();
      prior_bug = bug;
    }
  }
  if (a_limit && a_bugs.length >= a_limit) {
    a_bugs.splice(0, 1);
  }
}

function mouseOnCanvas() {
  let mxy = mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
  if (! mxy) return 0;
  return mouseIsPressed;
}

function save_bugs() {
  let lines = [];
  for (let aline of a_lines) {
    let bugs = [];
    for (bug of aline) {
      let b = {x: bug.x, y: bug.y};
      bugs.push(b);
    }
    lines.push(bugs);
  }
  saveJSON(lines, 'lines.json')
}

function restore_bugs(inlines) {
  a_lines = [];
  for (let aline of inlines) {
    let bugs = [];
    for (bug of aline) {
      let x = bug.x;
      let y = bug.y;
      let b = new JitterBug(x, y);
      bugs.push(b);
    }
    a_lines.push(bugs);
  }
}

function add_bug(x, y) {
  // let r = 1;
  // let c = random(['red', 'green', 'yellow'])
  // let c = "black";
  // let bug = new JitterBug(x, y, r, c);
  let bug = new JitterBug(x, y);
  a_bugs.push(bug);
}

class JitterBug {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.speed = 0;
    this.diameter = 1;
    this.color = 'black';
  }
  move() {
    this.x += random(-this.speed, this.speed);
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    this.y += random(-this.speed, this.speed);
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;
  }
  display() {
    stroke(this.color);
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  line_to(other) {
    strokeWeight(this.diameter);
    line(this.x, this.y, other.x, other.y);
  }
}

// https://editor.p5js.org/jht1493/sketches/d9t-YSfY3
// Ex 6.2 JitterBug pen

// https://editor.p5js.org/jht1493/sketches/wYka9ilXw
// Ex 6.2 JitterBug line

// https://editor.p5js.org/jht1493/sketches/fcsUMY4C6
// Ex 6.2 JitterBug limit

// https://editor.p5js.org/jht1493/sketches/AKpx2vF1U
// Ex 6.2 JitterBug drag

// https://editor.p5js.org/jht1493/sketches/OLgbWg-a0
// Ex 6.2 JitterBug clamped

// https://editor.p5js.org/jht1493/sketches/UfXdsZAHU
// Ex 6.1 JitterBug

// https://editor.p5js.org/jht1493/sketches/HSp7qS5n4
// Ex_11_09 Managing Many Objects-remix

// https://editor.p5js.org/jht1493/sketches/XDfmnW1JD
// Ex_11_09 Managing Many Objects

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_09.js
