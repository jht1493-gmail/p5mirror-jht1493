// This is a test of the p5LiveMedia webrtc library and associated service.
// Open this sketch up 9 times to send video back and forth

// https://editor.p5js.org/dano/sketches/Xw4A5RK2J
// p5LiveMedia  Mutliple copy

let myVideo;
let allVideos = [];
let vidWidth = 160;
let vidHeight = 120;


function setup() {
  createCanvas(480, 360);

  myVideo = createCapture(VIDEO, gotMineConnectOthers);
  myVideo.size(vidWidth, vidHeight);
  myVideo.hide();
  allVideos.push(myVideo);
}

function gotMineConnectOthers(myStream) {
   let p5l = new p5LiveMedia(this, "CAPTURE", myStream, "VideoKit-Room-4");
 
  p5l.on('stream', gotOtherStream);
}

function draw() {
  background(220);
  stroke(255);

  let row = 0; //for making a grid
  let col = 0;
  for (var i = 0; i < allVideos.length; i++) {
    image(allVideos[i], col * vidWidth, row * vidHeight, vidWidth, vidHeight);
    col++;
    if (col >= width / vidWidth) {
      col = 0;
      row++;
    }

  }
}

// We got a new stream!
function gotOtherStream(stream, id) {
  // This is just like a video/stream from createCapture(VIDEO)
  otherVideo = stream;
  otherVideo.size(vidWidth, vidHeight);
  allVideos.push(otherVideo);
  // otherVideo.hide();
  //otherVideo.id and id are the same and unique identifiers

}