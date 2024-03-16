let a_w;
let a_columns;
let a_rows;
let a_board;
let a_next;
let a_on = 0;
let a_off = 255;
// let a_on = 255;
// let a_off = 0;
let a_gray = 122;

function setup() {
  createCanvas(600, 400);
  strokeWeight(0)
  life_setup();
}

function life_setup() {
  a_w = 20;
  // Calculate a_columns and a_rows
  a_columns = floor(width / a_w);
  a_rows = floor(height / a_w);
  // Wacky way to make a 2D array in JS
  a_board = [];
  for (let i = 0; i < a_columns; i++) {
    a_board[i] = [];
  }
  // Going to use multiple 2D arrays and swap them
  a_next = [];
  for (i = 0; i < a_columns; i++) {
    a_next[i] = [];
  }
  life_init();
}

function draw() {
  background(a_gray);
  life_draw();
}

function life_draw() {
  life_generate();
  for (let i = 0; i < a_columns; i++) {
    for (let j = 0; j < a_rows; j++) {
      if ((a_board[i][j] == 1)) fill(a_on);
      else fill(a_off);
      // stroke(a_on);
      rect(i * a_w + 1, j * a_w + 1, a_w - 1, a_w - 1);
    }
  }
}

// reset a_board when mouse is pressed
function mousePressed() {
  life_init();
}

// Fill a_board randomly
function life_init() {
  for (let i = 0; i < a_columns; i++) {
    for (let j = 0; j < a_rows; j++) {
      if (i == 0 ||
        j == 0 ||
        i == a_columns - 1 ||
        j == a_rows - 1) {
        // Lining the edges with 0s
        a_board[i][j] = 0;
      } else {
        // Filling the rest randomly
        a_board[i][j] = floor(random(2));
      }
      a_next[i][j] = 0;
    }
  }
}

// The process of creating the new generation
function life_generate() {
  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < a_columns - 1; x++) {
    for (let y = 1; y < a_rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += a_board[x + i][y + j];
        }
      }
      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= a_board[x][y];
      // Rules of Life
      if ((a_board[x][y] == 1) && (neighbors < 2))
        a_next[x][y] = 0; // Loneliness
      else if ((a_board[x][y] == 1) && (neighbors > 3))
        a_next[x][y] = 0; // Overpopulation
      else if ((a_board[x][y] == 0) && (neighbors == 3))
        a_next[x][y] = 1; // Reproduction
      else
        a_next[x][y] = a_board[x][y]; // Stasis
    }
  }
  // Swap!
  let temp = a_board;
  a_board = a_next;
  a_next = temp;
}

// https://p5js.org/examples/simulate-game-of-life.html

// https://www.conwaylife.com/patterns/glider.cells
// !Name: Glider
// !Author: Richard K. Guy
// !The smallest, most common, and first discovered spaceship.
// !www.conwaylife.com/wiki/index.php?title=Glider
// .O
// ..O
// OOO

// https://www.conwaylife.com/wiki/Noah%27s_ark
// !Name: Noah's ark
// !Author: Charles Corderman
// !A diagonal puffer made up of two switch engines that was found in 1971.
// !www.conwaylife.com/wiki/index.php?title=Noah's_ark
// ..........O.O
// .........O
// ..........O..O
// ............OOO
//
//
//
//
//
// .O
// O.O
//
// O..O
// ..OO
// ...O