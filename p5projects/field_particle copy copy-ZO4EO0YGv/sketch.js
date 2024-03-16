let p1;
let xoff = 0;
let yoff = 0;
let zoff = 0;
let unit = 400;
let change_index = 0.1;
let factor = 0.01;
function setup() {

  createCanvas(400, 400);
  let initial = createVector(0,0);
  p1 = new particles(initial);

}

function draw() {  
  background(0);
  var x = width/sqrt(unit);
  var y = height/sqrt(unit);
  let field_direction = [];
  for (var i = 0; i < sqrt(unit)+1; i++){
    xoff = 0;
    for (var j = 0; j < sqrt(unit)+1; j++){
      let angle = noise(xoff, yoff) * 2 * PI;
      var direction = p5.Vector.fromAngle(angle,1);
      xoff += change_index;
      push();
      translate(i*x,j*y);
      rotate(angle);
      stroke(255);
      line(0,0,x,0);  
      field_direction.push(direction);
      //store the value of vector direction into an array
      pop();
    }
    yoff += change_index;
  }
  yoff = 0;
  var loc = createVector(1,1);
  p1.display(10);
  p1.detectGrid(field_direction)
  p1.move();
  p1.detectEdges();
}


class particles{
  /*I need to determine the position, speed, and vector direction of the particle*/
  constructor(loc){
    this.loc = loc;
    this.speed = createVector(0,0);
    this.accel = createVector(0,0);
  }
  display(r){
    noStroke();
    fill(255);
    // print('this.loc.x', this.loc.x, 'this.loc.y', this.loc.y, 'r', r)
    show_span('this_loc', this.loc)
    circle(this.loc.x,this.loc.y,r);
  }
  /*in this function I will need the particles to move based on the angle of Perlin noise
  the speed of changing for perlin noise is based on the field*/
  move(){
    this.loc.add(this.speed);
    this.speed.add(this.accel);
    //reset the acceleration
    this.accel = createVector(0,0);
  }
  /*get the proper value of acceleration*/
  detectGrid(field_direction){
    //detect what grid the particle is in
    let x_value = int(this.loc.x/sqrt(unit));
    let y_value = int(this.loc.y/sqrt(unit));
    //find the corresponding vector value
    let array_pos = x_value + y_value * width/sqrt(unit);
    this.accel.add(field_direction[array_pos]);
    show_span('this_accel', this.accel)
  }

  /*if the particle goes beyond the canvas, we set it on somewhere back on canvas*/
  detectEdges(){
    if(this.loc.x>width || this.loc.x < 0||this.loc.y>height|| this.loc.y<0){
      this.loc.x = 0
      this.loc.y = 0
    }
  }
}

// show_span(a_label, a_value);
//   Show a_value in a span
//   a_label is the html id for the span
// show_span(a_label, a_value, a_opt);
//   a_opt = { line:1 }      // cause a line break
//   a_opt = { round:n }   // round value to n decimals
// eg. show miliseconds to 2 decimal places with a line break
//    show_span('milli', millis(), {line:1, round:2});
//
function show_span(a_label, a_value, a_opt) {
  let p_elm = select('#' + a_label);
  if (!p_elm) {
    p_elm = createSpan().id(a_label);
    p_elm.style('font-size','30px');
  }
  if (a_opt && a_opt.round) a_value = round(a_value, a_opt.round);
  p_elm.html('[' + a_label + ' ' + a_value + '] ');
  if (a_opt && a_opt.line) {
    const br_label = '_'+a_label;
    let p_elm = select('#' + br_label);
    if (!p_elm) p_elm = createElement('br').id(br_label);
  }
}
