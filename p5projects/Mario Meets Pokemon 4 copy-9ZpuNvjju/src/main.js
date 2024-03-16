// https://editor.p5js.org/jazzangrx/sketches/3_etdXcLo
// Mario Meets Pokemon 4
// HCDE524 Programming Concepts 
// Mario Meets Pokemon by Jazz Ang

// create javascript objects to hold objects
var gfx = {};
var sfx = {};
var fonts = {};
var objects = {};

// create variables for fixing time lapsed
var dtTimer = 0;
let fixedDt = 1 / 60;
var sceneManager;

var mario;

// lobby
var trainX = -70;

var gBG;
var bgObjects;

// preload all the graphics 
function preload() {
  
  gfx.marioIdle = loadImage('gfx/marioIdle.png');
  gfx.marioWalk = loadImage('gfx/marioWalk.png');
  gfx.marioJump = loadImage('gfx/marioJump.png');

  gfx.heart = loadImage('gfx/heart.png');
  gfx.heartGrey = loadImage('gfx/heartGrey.png');
  
  gfx.lobbyPost = loadImage('gfx/lobbyPost.png');
  gfx.signPost = loadImage('gfx/signPost.png');

  gfx.level1bg = loadImage('gfx/level1bg.png');

  gfx.tiles = {
    brick1: loadImage('gfx/tiles/brick1.png'),
    brick2: loadImage('gfx/tiles/brick2.png'),
    ground: loadImage('gfx/tiles/ground.png'),
    questionBoxActive: loadImage('gfx/tiles/questionBoxActive.png'),
    questionBoxInactive: loadImage('gfx/tiles/questionBoxInactive.png')
  };

  gfx.pickups = {
    burger: loadImage('gfx/pickups/burger.png'),
    cake: loadImage('gfx/pickups/cake.png'),
    pancake: loadImage('gfx/pickups/pancake.png'),
    pizza: loadImage('gfx/pickups/pizza.png'),
    pokeball: loadImage('gfx/pickups/pokeball.png')
  };

  gfx.enemies = {
    diglettAppear: loadImage('gfx/enemies/diglettAppear.png'),
    diglettHide: loadImage('gfx/enemies/diglettHide.png'),
    gengar: loadImage('gfx/enemies/gengar.png')
  };

  // fonts
  fonts.retroComputer = loadFont('fonts/retro_computer_personal_use.ttf');

  // lobby
  objects.ferrisWheelRotate = loadImage('gfx/ferrisWheelRotate.png');
  objects.ferrisWheelBase = loadImage('gfx/ferrisWheelBase.png');
}

function setup() {
  let canvas = createCanvas(800, 500);

  // load scene manager
  sceneManager = new SceneManager();
  sceneManager.load();

  gameOver.load();
}

// **REFERENCE** // https://gafferongames.com/post/fix_your_timestep/
// using a small fixed delta time helps with collision and consistent jump height
// call fixedUpdate 60 times per second (if fixedDt = 1/60 and frame takes less than 1/10 sec to render)
// using a small fixed delta time helps with collision and consistent jump height

function update() {
  dtTimer += min(1 / frameRate(), 1 / 10);
  while (dtTimer > 0) {
    dtTimer -= fixedDt;
    fixedUpdate(fixedDt);
  }
}

function fixedUpdate(dt) {
  sceneManager.update(dt);
  gameOver.update(dt);
}

// create keypresses for each scenes and gameover
function keyPressed() {
  if (sceneManager) {
    sceneManager.keyPressed();
  }
  gameOver.keyPressed();
}

function draw() {
  update();

  // camera on when draw is called
  // turn camera off and on to apply changes from this frame
  camera.off();

  // any background elements that should stay still while the camera moves would go here

  camera.on();

  // draws current scene and mario
  sceneManager.drawWorld();

  camera.off();

  // draws other UI, the lives and fading effect
  sceneManager.drawUI();

  gameOver.draw();
}