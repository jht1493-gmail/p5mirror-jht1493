function draw_bubble(bub) {
  move_bubble(bub);
  show_bubble(bub);
}

function move_bubble(bub) {
  bub.x = bub.x + random(-2, 2);
  bub.y = bub.y + random(-2, 2);
}

function show_bubble(bub) {
  stroke(255);
  strokeWeight(4);
  fill(bub.brightness, 125);
  ellipse(bub.x, bub.y, bub.r * 2);
}

function clicked_bubble(bub, px, py) {
  let d = dist(px, py, bub.x, bub.y);
  if (d < bub.r) {
    if (bub.brightness == 0)
      bub.brightness = 255;
    else
      bub.brightness = 0;
  }
}
