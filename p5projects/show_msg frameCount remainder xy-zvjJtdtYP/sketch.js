// Display frameCount and frameRate
function setup() {
  createCanvas(400, 400);
  background(200);
  // number of frames to be displayed every second
  // frameRate(0.1);
  // frameRate(2);
  frameRate(4);
  // frameRate(30);
  // print(frameCount+' in setup');
  show_msg('frameRate ' + frameRate());
}

// Why blank screen at 0.1 frameRate?

function draw() {
  // print(frameCount+' in draw');
  let dx = (frameCount % 40) * 10;
  let dy = int(frameCount / 40) * 10;
  rect(dx, 100 + dy, 10, 10)
  // show_msg('frameRate ' + frameRate());
  show_msg('frameRate ' + round(frameRate(), 2));
}

// Display msg in html paragraph element id_line
function show_msg(a_msg) {
  let msg_p = select('#msg_p');
  if (!msg_p) msg_p = createP().id('msg_p');
  msg_p.elt.innerHTML = '[' + frameCount + '] ' + a_msg;
}

// print vs. console.log
