const s1 = ( sk ) => {
  let x = 100;
  let y = 100;
  sk.setup = () => {
    sk.createCanvas(200, 200);
  };
  sk.draw = () => {
    sk.background(100);
    sk.fill(200);
    sk.rect(x,y,50,50);
    x = (x + 1) % sk.width;
  };
};

const s2 = ( sk ) => {
  let x = 0;
  let y = 0;
  sk.setup = () => {
    sk.createCanvas(100, 100);
    let me = sk.select('#canvas2');
    me.position(200,0);
  };
  sk.draw = () => {
    sk.background(100);
    sk.fill(255,0,0);
    sk.rect(x,y,50,50);
    y = (y + 1) % sk.height;
  };
};

let p5_1 = new p5(s1, 'canvas1');

let p5_2 = new p5(s2, 'canvas2');

