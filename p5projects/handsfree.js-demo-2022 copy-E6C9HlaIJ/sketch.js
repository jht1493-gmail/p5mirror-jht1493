// p5.js + handsfree.js (by Oz Ramos)
// Documentation: https://handsfree.js.org/
// https://unpkg.com/handsfree@8.5.1/build/lib/handsfree.js
// https://unpkg.com/handsfree@8.5.1/build/lib/assets/handsfree.css
// Note: this downloads large models the first time it's run.

let handsfree; // The handsfree.js tracker
let webcam; // A webcam video (for display only)


//------------------------------------------
function setup() {
  createCanvas(640, 480); 
  
  // Optionally, create a webcam object. It's just for show.
  webcam = createCapture(VIDEO);
  webcam.size(640, 480);
  webcam.hide();
  
  // Configure handsfree.js to track hands, body, and/or face.
  handsfree = new Handsfree({
    showDebug: false, /* shows or hides the camera */
    hands: true,      /* acquire hand data? */
    pose: true,       /* acquire body data? */
    facemesh: true,   /* acquire face data? */
    maxNumHands: 2
  });
  handsfree.start();
  chooseFaceLandmarks(); // See below
}


//------------------------------------------
function draw() {
  background(255);
  
  drawVideoBackground();
  drawHandPoints();
  drawPosePoints(); 
  drawFacePoints();
  
  noStroke(); 
  fill('black'); 
  text("FPS: " + int(frameRate()), 10, 20); 
}


//------------------------------------------
function drawVideoBackground(){
  push();
  translate(width, 0);
  scale(-1,1);
  tint(255,255,255, 72);
  image(webcam, 0, 0, width, height);
  tint(255);
  pop();
}


//------------------------------------------
// POSE: Full body tracking with 33 2D landmarks

function drawPosePoints(){
  fill('blue');
  stroke('black'); 
  
  if (handsfree.data.pose) {
    if (handsfree.data.pose.poseLandmarks){
      var poseLandmarks = handsfree.data.pose.poseLandmarks;
      var nPoseLandmarks = poseLandmarks.length; 
      
      for (var i = 0; i < nPoseLandmarks; i++) {
        var px = poseLandmarks[i].x;
        var py = poseLandmarks[i].y;
        px = map(px, 0, 1, width, 0);
        py = map(py, 0, 1, 0, height);
        circle(px, py, 9);
      }
      
    }
  }
}


//------------------------------------------
// HANDS: 21 2D landmarks per hand, up to 4 hands at once
// Detects pinching states, hand pointers, and gestures

function drawHandPoints() {

  if (handsfree.data.hands) {
    if (handsfree.data.hands.multiHandLandmarks) {
      var handLandmarks = handsfree.data.hands.multiHandLandmarks;   
      var nHands = handLandmarks.length;
      
      var handVertexIndices = [
        [17,0,1,5,9,13,17], /* palm */
        [1,2,3,4], /* thumb */
        [5,6,7,8], /* index */
        [9,10,11,12], /* middle */
        [13,14,15,16], /* ring */
        [17,18,19,20], /* pinky */
        ];
      
      // Draw lines connecting the parts of the fingers
      noFill(); 
      stroke('black'); 
      for (var h = 0; h < nHands; h++) {
        for (var f=0; f<handVertexIndices.length; f++){ // finger
          beginShape(); 
          for (var j=0; j<handVertexIndices[f].length; j++){
            var ji = handVertexIndices[f][j];
            var jx = handLandmarks[h][ji].x;
            var jy = handLandmarks[h][ji].y;
            jx = map(jx, 0, 1, width, 0);
            jy = map(jy, 0, 1, 0, height);
            vertex(jx, jy); 
          }
          endShape(); 
        }
      }
      
      // Draw just the points of the hands
      stroke('black'); 
      fill('red'); 
      for (var h = 0; h < nHands; h++) {
        for (var i = 0; i <= 20; i++) {
          var px = handLandmarks[h][i].x;
          var py = handLandmarks[h][i].y;
          px = map(px, 0, 1, width, 0);
          py = map(py, 0, 1, 0, height);
          circle(px, py, 9);
        }
      }

    }
  }
}


//------------------------------------------
// FACE: 468 2D face landmarks
function drawFacePoints(){
  noFill(); 
  stroke('black'); 
  
  if (handsfree.data.facemesh) {
    if (handsfree.data.facemesh.multiFaceLandmarks) {
      var faceLandmarks = handsfree.data.facemesh.multiFaceLandmarks;   
      var nFaces = faceLandmarks.length;
  
      // Draw all 468 points in the face mesh
      for (var f = 0; f < nFaces; f++) {
        var nFaceLandmarks = faceLandmarks[f].length; 
        for (var i = 0; i < nFaceLandmarks; i++) {
          var px = faceLandmarks[f][i].x;
          var py = faceLandmarks[f][i].y;
          px = map(px, 0, 1, width, 0);
          py = map(py, 0, 1, 0, height);
          circle(px, py, 1);
        }
        
        // Draw just a subset of keypoints as triangles (see below)
        for (var j = 0; j < TRI.length; j+=3){
          var a = faceLandmarks[f][VTX[TRI[j  ]]];
          var b = faceLandmarks[f][VTX[TRI[j+1]]];
          var c = faceLandmarks[f][VTX[TRI[j+2]]];
          ax = map(a.x, 0, 1, width, 0);
          ay = map(a.y, 0, 1, 0, height);
          bx = map(b.x, 0, 1, width, 0);
          by = map(b.y, 0, 1, 0, height);
          cx = map(c.x, 0, 1, width, 0);
          cy = map(c.y, 0, 1, 0, height);
          triangle(ax,ay,bx,by,cx,cy);
        }
        
      }
    
    }
  }
}


//================================================================
let TRI;
let VTX;
function chooseFaceLandmarks(){
  // Choose your preferred set of face keypoints: 7,33,68,468
  // Uncomment one of the pairings below. (See landmarks.js)
  //
  // === Bare minimum, 7 points ===
  // VTX = VTX7; TRI = TRI7;
  // === 'Important' facial features, 33 points ===
  // VTX = VTX33; TRI = TRI33;
  // === Standard facial landmarks, 68 points ===
  VTX = VTX68; TRI = TRI68;
  // === Full facemesh; 468 points ===
  // VTX = VTX468; TRI = TRI468;
}