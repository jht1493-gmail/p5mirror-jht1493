// https://editor.p5js.org/shawn/sketches/1XRw9Mut5
// Multiple Users Overlayed
// Modifed to use VideoKit-Room-4
// !!@ Bug!
//  blend() was expecting p5.Image for the first parameter, received object instead

let otherVideos = {};
let myVideo;

function setup() {
  createCanvas(400, 400);
  
  let constraints = {audio: false, video: true};
  myVideo = createCapture(constraints, 
    function(stream) {
	  let p5l = new p5LiveMedia(this, "CAPTURE", stream, "VideoKit-Room-4")
	  p5l.on('stream', gotStream);
      p5l.on('disconnect', gotDisconnect);
    }
  );  
  myVideo.elt.muted = true;     
  myVideo.hide();
}

function draw() {
  //background(220);
  stroke(255);
  image(myVideo,0,0,width/2,height);
  
  for (const id in otherVideos) {
    let other = otherVideos[id]
    if (other) {
      let img = other.get();
      blend(img, 0, 0, img.width, img.height, width/2, 0, width/2, height, ADD);
    }
  }
}

// blend(srcImage, sx, sy, sw, sh, dx, dy, dw, dh, blendMode)

// We got a new stream!
function gotStream(stream, id) {
  // This is just like a video/stream from createCapture(VIDEO)
  otherVideo = stream;
  //otherVideo.id and id are the same and unique identifiers
  otherVideo.hide();
  
  otherVideos[id] = stream;
}

function gotDisconnect(id) {
 delete otherVideos[id]; 
}

