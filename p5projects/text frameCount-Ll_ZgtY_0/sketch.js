function draw() {
  // Displays the frame count

  background(200);
  
  // frameRate(fps)
  frameRate(10);
  
  // text(str, x, y, [x2], [y2])
  text("frameCount "+frameCount, 10, 50);
}