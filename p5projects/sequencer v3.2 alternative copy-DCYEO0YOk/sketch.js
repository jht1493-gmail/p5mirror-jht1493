let canvasSize = {
  x: 800,
  y: 600,
};

let bpm = 125.5;

let sequencer1;
let s1LoopSize = 1;

let sequencer2;
let s2LoopSize = 1;

let sequencer3;
let s3LoopSize = 7;

let sequencer4; 
let s4LoopSize = 3;

let sequencer5;
let s5LoopSize = 4;

function preload() {
  track1 = loadSound("Synth.mp3");
  track2 = loadSound("Bass.mp3");
  track3 = loadSound("hh1.mp3");
  track4 = loadSound("kick2.mp3");
  track5 = loadSound("kick.mp3");
}

function setup() {
  createCanvas(canvasSize.x, canvasSize.y);

  // (track, posX, posY, width, height, numberOfButtons howManyBars)
  sequencer1 = new loopTrack(track1, 20, 20, 740, 80, s1LoopSize, 32);
  sequencer2 = new loopTrack(track2, 20, 120, 740, 80, s2LoopSize, 32);

  //(track, posX, posY, width, height, numberOfButtons, gap, howManyBars)
  sequencer3 = new sequencerTrack(track3, 20, 220, 740, 80, s3LoopSize, 4, 4);
  sequencer4 = new sequencerTrack(track4, 20, 320, 740, 80, s4LoopSize, 4, 4);
  sequencer5 = new sequencerTrack(track5, 20, 420, 740, 80, s5LoopSize, 4, 4);
  
  // configuration2();
}



function draw() {
  background(220);

  sequencer1.run();
  sequencer2.run();
  sequencer3.run();
  sequencer4.run();
  sequencer5.run();
}

function mouseClicked() {
  //when clicking, check if mouse is over the button of a sequencer
  checkButton(sequencer1);
  checkButton(sequencer2);
  checkButton(sequencer3);
  checkButton(sequencer4);
  checkButton(sequencer5);
}

function configuration1(){
  sequencer1.buttonArray.on = true;
  
  let track3 = [0, 6, 12, 16, 22, 26];
  for (let i = 0; i < track3.length; i++){
    sequencer3.buttonArray[track3[i]].on = true;
  }
  
  let track4 = [0,3,6,9,14]
  for (let i = 0; i < track4.length; i++){
    sequencer4.buttonArray[track4[i]].on = true;
  }
  let track5 = [0,3]
  for (let i = 0; i < track5.length; i++){
    sequencer5.buttonArray[track5[i]].on = true;
  }
}

function configuration2(){
  sequencer2.buttonArray.on = true;
  
  let track3 = [4, 12, 20, 28];
  for (let i = 0; i < track3.length; i++){
    sequencer3.buttonArray[track3[i]].on = true;
  }
  
  let track4 = [0,4,8,12]
  for (let i = 0; i < track4.length; i++){
    sequencer4.buttonArray[track4[i]].on = true;
  }
  let track5 = [0]
  for (let i = 0; i < track5.length; i++){
    sequencer5.buttonArray[track5[i]].on = true;
  }
}

function checkButton(sequencer) {
  //go through all the buttons in a sequencer
  //if "sequencer" is an array
  if (Array.isArray(sequencer.buttonArray)) {
    for (let i = 0; i < sequencer.size; i++) {
      // if mouse is on the buttons in a sequencer,
      if (sequencer.buttonArray[i].onButton() === true) {
        //if the button is off
        if (sequencer.buttonArray[i].on === false) {
          sequencer.buttonArray[i].on = true;
        }

        //if the button is on
        else if (sequencer.buttonArray[i].on === true) {
          sequencer.buttonArray[i].on = false;
        }
      }
    }
  }
  
  //if "sequencer" is not an array
  else {
    if (sequencer.buttonArray.onButton() === true) {
        //if the button is off
        if (sequencer.buttonArray.on === false) {
          sequencer.buttonArray.on = true;
        }

        //if the button is on
        else if (sequencer.buttonArray.on === true) {
          sequencer.buttonArray.on = false;
        }
    }
  }
}

//class to create individual buttons in a sequencer
class sequencerButton {
  constructor(x, y, w, h) {
    this.x = x; //xpos
    this.y = y; //ypos
    this.w = w; //button width
    this.h = h; //button height
    this.on = false; //switch on/off memory
    this.play = false; //this button being selected
    this.triggered = false;
  }

  display() {
    if (this.on === true) {
      fill(255, 200, 50);
    } else {
      fill(140, 140, 140);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  highlight() {
    stroke(255);
    strokeWeight(3);
  }

  mute() {
    stroke(0);
    strokeWeight(1);
  }

  onButton() {
    //if mouse position is within button boundaries
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }
}

//class that controlls all buttons in a sequencer track
class sequencerTrack {
  // (track, posX, posY, width, height, numberOfRect, gap, howManyBars)
  constructor(track, posX, posY, w, h, size, gap, cycle) {
    this.track = track; //the audio file
    this.posX = posX; //x position
    this.posY = posY; //y position
    this.w = w; //width
    this.h = h; //height
    this.size = size; //how many rectangles
    this.gap = gap; //visual gap
    this.cycle = cycle; //how many bars per cycle

    //boolean to determine whether the track is in sync
    this.inSync = false;

    //work out spacing between buttons
    this.spacing = this.w / this.size;

    //array storing buttons
    this.buttonArray = [];

    //make a counter
    //count means which button is being played
    //clock means how many frames has passed
    //parentClock keeps tracks of the number of frames per sound loop
    this.count = 0;
    this.clock = 0;
    this.parentClock = 0;

    //calculate interval for resetting cycles
    this.interval = (3600 * this.cycle) / bpm / this.size;

    for (let i = 0; i < this.size; i++) {
      //make an array of buttons using class sequencerButton
      this.buttonArray[i] = new sequencerButton(
        this.posX + i * this.spacing,
        this.posY,
        this.spacing - this.gap,
        this.h
      );
    }
  }

  display() {
    //show button
    for (let i = 0; i < this.size; i++) {
      //if button is selected (play variable is enabled)
      if (this.buttonArray[i].play == true) {
        this.buttonArray[i].highlight(); //draw with highlight
      }
      //otherwise
      else {
        this.buttonArray[i].mute(); //draw with muted profile
      }

      //show the button by calling .display of the sequencerButton class
      this.buttonArray[i].display();
    }
  }

  start() {
    //check if we're in sync
    if (this.count == 0) {
      this.inSync = true;
    } else {
      this.inSync = false;
    }

    //starting clock
    this.clock++;
    this.parentClock++;

    //work out the interval between notes
    this.interval = (3600 * this.cycle) / bpm / this.size;

    //check if the clock has reached the interval
    if (this.clock > this.interval) {
      this.clock = this.clock - this.interval;

      //everytime the curser moves onto the next button,
      //reset triggered
      this.buttonArray[this.count].triggered = false;

      //count increments - moves onto the next button
      this.count++;
    }

    //counter reset:
    //whenever count reaches maximum value
    if (this.count > this.size - 1) {
      //reset count
      this.count = 0;
    }

    //find the current selected button, change play variable of the button to true
    this.buttonArray[this.count].play = true;
    this.inSync = true;

    //if the switch is on &&
    //the sequencer track is in sync
    //the play is true &&
    //the button hasn't been triggered
    if (
      this.buttonArray[this.count].triggered == false &&
      this.inSync == true &&
      this.buttonArray[this.count].on &&
      this.buttonArray[this.count].play
    ) {
      //play sound
      this.track.play();

      //set the trigger variable to true (avoid repetitive triggering)
      this.buttonArray[this.count].triggered = true;
      this.inSync = false;
    }

    //define the button to reset the play status (apply mute)
    let prevButton = this.count - 1;
    if (prevButton < 0) {
      prevButton = this.size - 1;
    }
    this.buttonArray[prevButton].play = false;
  }

  run() {
    this.start();
    this.display();
  }
}

class loopTrack {
  // (track, posX, posY, width, height, howManyBars)
  constructor(track, posX, posY, w, h, size, cycle) {
    this.track = track; //the audio file
    this.posX = posX; //x position
    this.posY = posY; //y position
    this.w = w; //width
    this.h = h; //height
    this.size = 1;
    this.cycle = cycle; //how many bars per cycle

    //boolean to determine whether the track is in sync
    this.inSync = true;

    //array storing buttons
    this.buttonArray = new sequencerButton(
      this.posX,
      this.posY,
      this.w,
      this.h
    );

    //make a counter
    //count means which button is being played
    //clock means how many frames has passed
    this.count = 0;
    this.clock = 0;

    //calculate interval for resetting cycles
    this.interval = (3600 * this.cycle) / bpm / this.size;
  }

  display() {
    //show button
    //if button is selected (play variable is enabled)
    if (this.buttonArray.play == true) {
      this.buttonArray.highlight(); //draw with highlight
    }
    //otherwise
    else {
      this.buttonArray.mute(); //draw with muted profile
    }

    //show the button by calling .display of the sequencerButton class
    this.buttonArray.display();
  }

  start() {
    //check if we're in sync
    //only applies to "LOOP" types
    if (this.interval - this.clock <= 1 &&
       this.interval - this.clock >= -1) {
      this.inSync = true;
    } else {
      this.inSync = false;
    }

    //starting clock
    this.clock++;

    //work out the interval between notes
    this.interval = (3600 * this.cycle) / bpm / this.size;

    //check if the clock has reached the interval
    if (this.clock > this.interval) {
      this.clock = this.clock - this.interval;

      //everytime the curser moves onto the next button,
      //reset triggered
      this.buttonArray.triggered = false;
    }

    //find the current selected button, change play variable of the button to true
    this.buttonArray.play = true;

    //if the switch is on &&
    //the sequencer track is in sync
    //the play is true &&
    //the button hasn't been triggered
    if (
      this.buttonArray.triggered == false &&
      this.inSync == true &&
      this.buttonArray.on &&
      this.buttonArray.play
    ) {
      //play sound
      this.track.play();

      //after triggering, set the trigger variable to true (avoid repetitive triggering)
      this.buttonArray.triggered = true;

      //after triggering, if type is "LOOP", set sync status to false
      this.inSync = false;
    }
  }

  run() {
    this.start();
    this.display();
  }
}