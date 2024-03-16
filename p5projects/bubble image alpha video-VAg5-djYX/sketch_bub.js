function draw_bubble(bub) {
  move_bubble(bub);
  show_bubble(bub);
}

function move_bubble(bub) {
  bub.x = bub.x + random(-bub.fuz, bub.fuz);
  bub.y = bub.y + random(-bub.fuz, bub.fuz);
  // constrain(n, low, high)
  bub.x = constrain(bub.x, 0, width);
  bub.y = constrain(bub.y, 0, height);
}

function show_bubble(bub) {
  // let col = bub.gray;
  let col = a_image.get(bub.x, bub.y)
  col[3] = a_alpha;
  // stroke(col);
  // strokeWeight(4);
  fill(col);
  ellipse(bub.x, bub.y, bub.r * 2);
}

function add_bubble(x, y) {
  let gray = random([0, 255]);
  if (a_select_color == 'white') {
    gray = 255;
  }
  else if (a_select_color == 'black') {
    gray = 0;
  }
  // let r = random(1, 4);
  let r = random([1, 2, 3]);
  // let r = random([1]);
  // let r = random([4, 8, 16]);
  // let r = random([1, 2, 3]);
  let fuz = random([2, 4, 8])
  let alpha = a_alpha;
  let bub = {
    x,
    y,
    r,
    fuz,
    gray,
    alpha
  }
  a_bubbles.push(bub);
}


function reset_bubbles() {
  a_bubbles = [];
  background(bg_color);
  console.log('bg_color', bg_color)
}
