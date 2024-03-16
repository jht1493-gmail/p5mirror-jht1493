// class to contain and update/draw all enemies in a scene
class Enemies {
    // this function called when class instantiated (ex: "new Enemies(level1);")
  constructor(scene) {
    // store the scene that this object was created with
    this.scene = scene;
    // create an array to store enemies added to scene
    this.container = [];
    // use to set player velocity after bouncing on all enemies
    this.doPlayerBounce = false;
  }

  // add enemy to scene
  // type: string for enemy type to add
  // i: x position in tile coordinates
  // j: y position in tile coordinates
  add(type, i, j) {
    // check type
    switch (type) {
      // if type === 'diglett'
      case 'diglett':
        // add new Diglett to the array
        this.container.push(new Diglett(this.scene, i, j));
        break;
      // if type === 'gengar'
      case 'gengar':
        // add new Gengar to the array
        this.container.push(new Gengar(this.scene, i, j));
        break;
    }
  }
  
  // update all enemies in container
  update(dt) {
    
    // don't make player bounce by default
    // while updating enemies, some may set this to true
    this.doPlayerBounce = false;
    // loop through enemies and call "update" function on them
    for (let [i, v] of Object.entries(this.container)) {
      v.update(i, dt);
    }
    // if one or more of the enemies says the player should bounce this frame / update step
    if (this.doPlayerBounce) {
      // call jump method on player
      mario.jump();
      // make sure player can jump again in the air
      mario.canDoubleJump = true;
    }
  }

  draw() {
    for (let [i, v] of Object.entries(this.container)) {
      v.draw();
    }
  }
}