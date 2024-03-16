// class to contain, allow entities to collide with, and draw tiles in a scene

class TileMap {
  constructor(scene, width, height) {
    this.scene = scene;
    // width and height in tiles
    this.width = width;
    this.height = height;

    // scaling tile size 
    this.tileSize = 50;
    
    // create container for tiles
    // value in this correspond to tile column, which refer to another object which would be indexed by row
    this.tiles = {};
  }
  
    // add or change a tile in the tilemap
  setTile(i, j, type) {
    // if column object hasn't been added yet, add it
    if (this.tiles[i] === undefined) {
      this.tiles[i] = {};
    }
    // create object for tile
    let tile = {};
    // store image object to get image from type
    // example: type = 'brick1' -> tile.image = gfx.tiles.brick1
    tile.image = gfx.tiles[type];
    // tile container [ column (x) ] [ row (y) ]
    this.tiles[i][j] = tile;
  }

  // set a rectangle of tiles to one type
  // x position starts at i1 and ends at i2
  // y position starts at j1 and ends at j2
  fillTiles(i1, j1, i2, j2, type) {
    for (let i = i1; i <= i2; i++) {
      for (let j = j1; j <= j2; j++) {
        this.setTile(i, j, type);
      }
    }
  }

  // call with bounding box of object to be moved
  // and callback functions for direction object is moved in
  // callbacks expected to be object containing 'left', 'right', 'up', and 'down' functions
  // callback function arguments: (newX, newY, scene, i, j)
  
  collide(x, y, w, h, callbacks) {
    
    // loop through every tile that object could be overlapping with
    for (let i = floor(x / this.tileSize) - 1; i <= floor((x + w) / this.tileSize) + 1; i++) {
      for (let j = floor(y / this.tileSize) - 1; j <= floor((y + h) / this.tileSize) + 1; j++) {
        
        // check if current tile in loop exists
        if (this.tiles[i] !== undefined && this.tiles[i][j] !== undefined) {
          // tile bounding box
          let v = this.tiles[i][j];
          let vx = i * this.tileSize;
          let vy = j * this.tileSize;
          let vw = this.tileSize;
          let vh = this.tileSize;
          
          // check if object is overlapping tile
          if (x + w > vx && x < vx + vw && y + h > vy && y < vy + vh) {
            // **REFERENCE** //
            // https://stackoverflow.com/questions/38648693/resolve-collision-of-two-2d-elements
            
            // array of valid collision resolutions
            let validResolutions = [];
            
            // if tile to the left is empty
            if (this.tiles[i - 1] === undefined || this.tiles[i - 1][j] === undefined) {
              // if object is closer to left side
              if (x + w / 2 <= vx + vw / 2) {
                // new position for object bounding box if this collision resolution is chosen                
                let newX = vx - w;
                // add a collision resolution object containing distance, new position, and callback function
                validResolutions.push({
                  d: x - newX,
                  newX: newX,
                  newY: y,
                  callback: callbacks.left
                });
              }
            }
            // right
            if (this.tiles[i + 1] === undefined || this.tiles[i + 1][j] === undefined) {
              if (x + w / 2 >= vx + vw / 2) {
                let newX = vx + vw;
                validResolutions.push({
                  d: newX - x,
                  newX: newX,
                  newY: y,
                  callback: callbacks.right
                });
              }
            }
            // up
            if (this.tiles[i][j - 1] === undefined) {
              if (y + h / 2 <= vy + vh / 2) {
                let newY = vy - h;
                validResolutions.push({
                  d: y - newY,
                  newX: x,
                  newY: newY,
                  callback: callbacks.up
                });
              }
            }
            // down
            if (this.tiles[i][j + 1] === undefined) {
              if (y + h / 2 >= vy + vh / 2) {
                let newY = vy + vh;
                validResolutions.push({
                  d: newY - y,
                  newX: x,
                  newY: newY,
                  callback: callbacks.down
                });
              }
            }
            // if any collision resolution directions are acceptable and were added to validResolutions
            if (validResolutions.length > 0) {
              // sort so the one with least distance (d) is first
              validResolutions.sort(function(a, b) {
                return a.d - b.d;
              });
              // callback on the collision resolution that moves object the least distance
              let res = validResolutions[0];
              res.callback(res.newX, res.newY, this.scene, i, j);
            }
          }
        }
      }
    }
  }

  // draw all tiles
  draw() {
    // loop through columns
    for (let i in this.tiles) {
      // loop through rows
      for (let j in this.tiles[i]) {
        // get tile object
        let tile = this.tiles[i][j];
        // draw tile image at (column * tileSize, row * tileSize)
        image(tile.image, int(i) * this.tileSize, int(j) * this.tileSize, this.tileSize, this.tileSize);
      }
    }
  }
}