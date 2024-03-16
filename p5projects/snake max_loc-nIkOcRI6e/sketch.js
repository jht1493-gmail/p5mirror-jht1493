// A snake following the mouse

// Array used to store mouse locations
let mouse_locs = [];
let max_loc = 50;

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);

  // New location
  let loc = {
    x: mouseX,
    y: mouseY
  };
  // Add mouse location to end of array
  mouse_locs.push(loc);

  // Remove first location if too many
  if (mouse_locs.length > max_loc) {
    mouse_locs.splice(0, 1);
  }

  // Draw everything
  for (let i = 0; i < mouse_locs.length; i++) {
    // Draw an circle for each element in the arrays. 
    // Color and size are tied to the counter i.
    noStroke();
    fill(255 - i * 5);
    circle(mouse_locs[i].x, mouse_locs[i].y, i);
  }
}

// https://editor.p5js.org/icm/sketches/BkBsybb5X
// Week 6 -- Arrays