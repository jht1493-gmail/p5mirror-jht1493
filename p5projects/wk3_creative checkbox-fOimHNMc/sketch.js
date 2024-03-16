let rect1 = {
  x: 50,
  y: 50,
  w: 50,
  h: 50,
};

let rect2 = {
  x: 50,
  y: 175,
  w: 50,
  h: 50,
};

let rect3 = {
  x: 50,
  y: 300,
  w: 50,
  h: 50,
};

let bigRect1 = { 
  x: 201, 
  y: 0, 
  w: 200, 
  h: 133.33,
};

let bigRect2 = { 
  x: 201, 
  y: 133.33, 
  w: 200, 
  h: 133.33,
};

let bigRect3 = { 
  x: 201, 
  y: 266.66, 
  w: 200, 
  h: 133.33,
};


let a_move1 = false;

function setup() {
  createCanvas(400, 400); 
  
  createCheckbox('Move1', a_move1).changed(function() {
    a_move1 = this.checked();
  });

};

function keyPressed(event) {
  console.log(event);
};



function draw() {
  background(255);
  stroke(3);  
  line(200, 0, 200, 400);
  //line(200, height/3, 400, height/3);
  //line(200, height-height/3, 400, height-height/3);
  
  strokeWeight(3);
  fill(255, 50, 50);
  noStroke();
  rect(rect1.x, rect1.y, rect1.w, rect1.h);
  fill(255, 225, 0);
  noStroke();
  rect(rect2.x, rect2.y, rect2.w, rect2.h);
  fill(25, 15, 255);
  noStroke();
  rect(rect3.x, rect3.y, rect3.w, rect3.h);
  
  if (rect1.x > 150) { 
    fill(255, 0, 0, 125); 
    rect(bigRect1.x, bigRect1.y, bigRect1.w, bigRect1.h);
  }
  
  // if (rect1.x > 150 && rect1.y > 134) { 
  //   fill(255, 0, 0, 125); 
  //   rect(bigRect2.x, bigRect2.y, bigRect2.w, bigRect2.h);
  // }
  
  if (rect2.x > 150) { 
    fill(255, 225, 0, 125); 
    rect(bigRect2.x, bigRect2.y, bigRect2.w, bigRect2.h);
  }
  
  // if (rect2.x > 150 && rect2.y > 266) { 
  //   fill(255, 225, 0, 150); 
  //   rect(bigRect3.x, bigRect3.y, bigRect3.w, bigRect3.h);
  // }
  
  if (rect3.x > 150) { 
    fill(0, 0, 255, 125); 
    rect(bigRect3.x, bigRect3.y, bigRect3.w, bigRect3.h);
  }
  
  if (a_move1) {
    rect1.x = rect1.x + 10;
    if (rect1.x > width) {
      rect1.x = 0;
    }
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rect1.x = rect1.x - 10;
    rect2.x = rect2.x - 10;
    rect3.x = rect3.x - 10;
  } else if (keyCode === RIGHT_ARROW) { 
    rect1.x = rect1.x + 10;
    rect2.x = rect2.x + 10;
    rect3.x = rect3.x + 10;
  }
  if (keyCode === DOWN_ARROW) { 
    rect1.y = rect1.y + 10;
    rect2.y = rect2.y + 10;
    rect3.y = rect3.y + 10;
  } else if (keyCode === UP_ARROW) { 
    rect1.y = rect1.y - 10;
    rect2.y = rect2.y - 10;
    rect3.y = rect3.y - 10;
  }
}

// https://editor.p5js.org/jht1493/sketches/-fOimHNMc
// wk3_creative checkbox

// https://editor.p5js.org/jht1493/sketches/qBt6Ty_7b
// 3.5 circleX a_len ui
// https://github.com/jht1493/ICM-2021-Code-Remix/blob/master/weeks/02_animation.md#ex-22-variables-circlex


// https://editor.p5js.org/marthajanicki/sketches/RxJIbFZGC
// wk3_creative by marthajanicki
  



  