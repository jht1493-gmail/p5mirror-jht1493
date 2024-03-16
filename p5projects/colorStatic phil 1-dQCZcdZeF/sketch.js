const a_red = [255, 0, 0];
const a_green = [0, 255, 0];
const a_white = [255, 255, 255];
const a_black = [0, 0, 0];
const a_yellow = [255, 255, 0];
const a_colors = [a_red, a_green, a_white, a_black, a_yellow]
                  // 0,    1,       2,       3,      4
// drawing a grid pattern with loops
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  // frameRate(10);
  background(255);

  print(a_colors);
  
  function set_color(alpha) {
    // fill(random(255), random(255), random(255), alpha);
    // const choice = int(random(0, a_colors.length))
    // const color = a_colors[choice];
    const color = random(a_colors);
    fill(color);
    // print('choice', choice)
    // if (choice == 0) {
    //   fill(a_red, alpha)
    // } else if (choice == 1) {
    //   fill(a_green, alpha)
    // } else if (choice == 2) {
    //   fill(a_white, alpha) // red
    // } else if (choice == 3) {
    //   fill(a_black, alpha) // green
    // }
  }

  let x_pos;
  let y_pos;
  let a_size = 40;
  let rect_alpha = 200;
  let cir_alpaha = 50;

  for (y_pos = 0; y_pos <= height; y_pos += a_size) {
    for (x_pos = 0; x_pos <= width; x_pos += a_size) {
      draw_rect(x_pos, y_pos, a_size * 2);
    }
  }

  for (y_pos = 0; y_pos <= height; y_pos += a_size) {
    for (x_pos = 0; x_pos <= width; x_pos += a_size) {
      draw_circle(x_pos, y_pos, a_size);
    }
  }


  function draw_rect(x, y, size) {
    noStroke();
    //fill(random(255), random(255), random(255), rect_alpha);
    set_color(rect_alpha)
    rect(x, y, size, size);
  }

  function draw_circle(x, y, a_size) {
    noStroke();
    //fill(random(255), random(255), random(255), cir_alpaha);
    // ect(x_pos, y_pos, a_size, a_size);
    set_color(cir_alpaha)
    circle(x, y, a_size);
  }
}

// https://editor.p5js.org/phil-in-a-can/sketches/rtN_vgRGJ