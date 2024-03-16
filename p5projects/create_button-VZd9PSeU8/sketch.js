// Button demo
function setup() {
  createCanvas(400, 400);
  background(255);
  
  create_button_background();
  create_button_rect();
}

// -----------------------
// Create draw background button
function create_button_background() {
  createSpan('button1:');
  let a_button = createButton('[ draw background ]');
  a_button.mousePressed(draw_background);
}
// action for draw background button
function draw_background() {
  background(random(255));
}
// -----------------------

// -----------------------
// Create draw rect button
function create_button_rect() {
  createSpan(' button2:');
  let a_button_rect = createButton('[ draw rect ]');
  a_button_rect.mousePressed(draw_rect);
}
// Action for draw rect button
function draw_rect() {
  fill(random(0,255), random(0,255), random(0,255));
  rect(random(0,width),random(0,height),20,20);
}
// -----------------------
