//positional control of LED strip

//variables for webcam usage and PoseNet recognition
let video;
let poseNet;
let pose;
let skeleton;
let mid;
let startTime;

//variables for synth and sample manipulation
let osc, playing, freq, vol;

//variabe to hold an audio sample
let mySound;

// variable to hold an instance of the p5.webserial library:
const serial = new p5.WebSerial();

// port chooser button for web serial:
let portButton;

//bringing in all the audio samples with unique variable names
function preload() {
  soundFormats("mp3", "wav");
  piano = loadSound("piano.wav");
  bass = loadSound("bass.wav");
  synth = loadSound("synth.wav");
  drums = loadSound("drum.wav");
  guitar = loadSound("guitar.wav");
}
function setup() {
  //to show a different instrument sound change the "piano" variabe name below to either bass, synth, guitar, or drums. Also change the variable from "piano" to the same new instrument chosen here on line 165 before pressing play

  //tip: if you press "command" and "f" at the same time you can search the page for Alfon to get to the other line quickly

  //selecting which instrument sample is being played
  // mySound = synth;

  //web serial console log stuff below:

  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  } else {
    alert("WebSerial is supported. Enjoy!");
  }
  // check to see if serial is available:
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);

  // add serial connect/disconnect listeners from WebSerial API:
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);

  //creating a canvas and asking for webcam to run PoseNet on
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
  init_ui();

//old p5 synth stuff
  //osc = new p5.Oscillator("square");
  // reverb = new p5.Reverb();

  //add an option to repeat options

  //console.log("listening");

// define the position values to be sent to arduino for LED control
  allOff = 0;
  allOn = 5;
  // left = 1;
  // right = 2;
  // up = 10;
  // down = 20;
  leftUp = 11;
  rightDown = 21;
  rightUp = 12;
  leftDown = 22;

  //converts serial out to bytes so arduino cnan read
  outByte = byte(0);
  
//loop whatever audio sample is being played -- must be included in set up to avoid distortion
  // mySound.loop();
  startTime = millis();
  console.log('startTime', startTime)
}


// web serial port stuff below: 

// if there's no port selected,
// make a port select button appear:
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton("choose port");
  portButton.position(10, 10);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}

// make the port selector window appear:
function choosePort() {
  if (portButton) portButton.show();
  serial.requestPort();
}

// open the selected port, and make the port
// button invisible:
function openPort() {
  // wait for the serial.open promise to return,
  // then call the initiateSerial function
  let options = { baudrate: 9600 };
  serial.open().then(initiateSerial);

  // once the port opens, let the user know:
  function initiateSerial() {
    console.log("port open");
  }
  // hide the port button once a port is chosen:
  if (portButton) portButton.hide();
}

// pop up an alert if there's a port error:
function portError(err) {
  alert("Serial port error: " + err);
}
// read any incoming data as a string
// (assumes a newline at the end of it):
function serialEvent() {
  // CUSTOMIZE: add your code for receiving/sending data over serial
}

// try to connect if a new serial port
// gets added (i.e. plugged in via USB):
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}

// if a port is disconnected:
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}

function closePort() {
  serial.close();
}


// pose net functions
function gotPoses(poses) {
  //console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  print("poseNet ready");
}

function draw() {
//change the instrument name here too Alfon
  // mySound = synth;
  // webcam position functions
  imageMode(CORNER);
  //mirror video
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0);
  
  //showing frames per second when running pose net
  if (!pose) return;
  show_fps();

  //finding a single point point between two shoulders
  m1 = (pose.leftShoulder.x + pose.rightShoulder.x) / 2;
  m2 = (pose.leftShoulder.y + pose.leftShoulder.y) / 2;
  mid = ellipse(m1, m2, 25);

  //for p5 synth object:
  //starting the synth
  // osc.start();
  //mySound.playMode('sustain')
  // mySound.loop();
  // playing = true;
  //setting the frequency and volume values to follow position on the X and Y axes
  // osc.freq(freq, 0.001);
  // osc.amp(vol, 0.01);
  //freq = constrain(freq, 0.01, 4);
  
  //for samples:
  freq = map(m1, 0, width, 2, 0);
  vol = map(m2, height, 0, 0, 1);
  if (mySound) {
    mySound.rate(freq, 0.1);
    mySound.setVolume(vol, 0.1);
  }

// sending serial data based on position
  if ((m1 > 320) & (m2 < 240)) {
    outByte = byte(leftUp);
    //console.log(outByte);
    // serial.write(outByte);
  } else if ((m1 < 320) & (m2 < 240)) {
    outByte = byte(rightUp);
    // console.log(outByte);
    // serial.write(outByte);
  } else if ((m1 > 240) & (m2 > 240)) {
    outByte = byte(leftDown);
    // console.log(outByte);
    // serial.write(outByte);
  } else if ((m1 < 240) & (m2 > 240)) {
    outByte = byte(rightDown);
    // console.log(outByte);
    // serial.write(outByte);
  } else {
    outByte = byte(0);
    // console.log(outByte);
    // serial.write(outByte);
  }
  
  if (millis() - startTime < 3000) {
    checkSound()
  }
}

function checkSound() {
  if (mouseX > width/2) {
    // right of screen
    console.log('right of screen')
    if (! mySound) {
      mySound = piano;
      mySound.loop();
    }
  }
  else if (mouseX > width/4) {
    // second qtr
    console.log('second qtr')
    if (! mySound) {
      mySound = bass;
      mySound.loop();
    }
  }
  else {
    stopSound();
  }
}

function stopSound() {
  if (mySound) {
    mySound.stop();
    mySound = undefined;
  }
}

//CREDITS:

// serial
//https://editor.p5js.org/hafferty/sketches/2A0mlT9Ea

//Gestural command integration adapted from JHT's "PoseNet Example 1"
//https://editor.p5js.org/jht1493/sketches/xKSDq-w4H

//synth
//https://p5js.org/examples/sound-note-envelope.html
//https://editor.p5js.org/mbardin/sketches/YpGORZt9c
