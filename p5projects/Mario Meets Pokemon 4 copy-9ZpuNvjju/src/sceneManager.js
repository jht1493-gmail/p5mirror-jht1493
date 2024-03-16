class SceneManager {
  constructor() {
    this.currentScene = lobby;
    this.nextScene = level1;

    // where the mario will appear and in what state
    this.spawnPoint = {
      x: 0,
      y: 0,
      direction: 1
    };

    this.fading = false;
    // 0-1: fade out, 1-2: fade in
    this.fadeTimer = 0;
    this.fadeTime = 0.5;
    this.switchedScene = false;
  }

  load() {
    lobby.load();
    level1.load();

    // load player
    let spawnPoint = this.currentScene.leftSpawn;
    mario = new Player(spawnPoint.x, spawnPoint.y);

    // create lobby variables
    gBG = new seattleBG(0, 100, 3);
    bgObjects = new Objects();
  }

  loadNextScene() {
    this.fading = true;
    this.fadeTimer = 0;
    this.switchedScene = false;
  }

  update(dt) {
    if (this.fading) {
      this.fadeTimer += dt / this.fadeTime;
      if (this.fadeTimer > 1 && this.switchedScene === false) {
        this.currentScene = this.nextScene;
        mario.x = this.spawnPoint.x;
        mario.y = this.spawnPoint.y;
        mario.direction = this.spawnPoint.direction;
        mario.xv = 0;
        mario.yv = 0;
        this.switchedScene = true;
      }
      if (this.fadeTimer > 2) {
        this.fading = false;
      }
    }
    mario.update(dt);
    this.currentScene.update(dt);
  }

  keyPressed() {
    mario.keyPressed();
  }

  drawWorld() {
    this.currentScene.draw();
    mario.draw();
  }

  drawUI() {
    // player lives
    for (let i = 0; i < mario.maxLives; i++) {
      // if the live is active, displays the red heart otherwise the latter 
      let img = i < mario.lives ? gfx.heart : gfx.heartGrey;
      image(img, round(20 + i * img.width * 1.25), 20);
    }
    
    // fade transition
    if (this.fading) {
      let alpha;
      if (this.fadeTimer < 1) {
        alpha = constrain(this.fadeTimer, 0, 1) * 255;
      } else {
        alpha = constrain(2 - this.fadeTimer, 0, 1) * 255;
      }
      // black with alpha transparency
      noStroke();
      fill(0, alpha);
      rect(0, 0, width, height);
    }

  }
}