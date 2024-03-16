
// jht: why doesn't this show red column?

// let lpos = 50;
// let llen = 600;
// let lpos1 = 50;
// let lpos2 = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  let x = 20;
  let y = 20
  while (x < width) {
    line (x,600,y,0);
    x = x+30
    y = y+ 30
    
    if (mouseX >= x && mouseX < x + 20) {
      fill(255, 0, 0);
    } else{
      noFill();
    }
   
// }
  
//   let value = 0;
// function draw() {
//   fill(value);
// 
 }
// if mouseDragged() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
// }
// function mouseDragged() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//     fill(255,0,0)
//     consolo.log(red);
//   }
 
  
  
  }
  
  
  // if (mouseX > = 300 )
  // fill(255,0,0)
  // line(lpos, llen, lpos1, lpos2);
  // line(lpos + 50, llen, lpos1 + 50, lpos2);
  // line(lpos + 100, llen, lpos1 + 100, lpos2);
  // line(lpos + 150, llen, lpos1 + 150, lpos2);
  // line(lpos + 200, llen, lpos1 + 200, lpos2);
  // line(lpos + 250, llen, lpos1 + 250, lpos2);
  // line(lpos + 300, llen, lpos1 + 300, lpos2);
  // line(lpos + 350, llen, lpos1 + 350, lpos2);
  // line(lpos + 400, llen, lpos1 + 400, lpos2);
  // line(lpos + 450, llen, lpos1 + 450, lpos2);
  // line(lpos + 500, llen, lpos1 + 500, lpos2);

  // for canvas 400 x 400
  //  line(30, 400, 30, 0);
  //  line(60, 400, 60, 0);
  // line(90, 400, 90, 0);
  // line(120, 400, 120, 0);
  //  line(150, 400, 150, 0);
  //  line(180, 400, 180, 0);
  //  line(210, 400, 210, 0);
  //   line(240, 400, 240, 0);
  //   line(270, 400, 270, 0);
  //    line(300, 400, 300, 0);
  //      line(330, 400, 330, 0);
  //    line(360, 400, 360, 0);

// https://editor.p5js.org/lolo.ostia/sketches/3P671I0FE
// week4-3 Lorena
