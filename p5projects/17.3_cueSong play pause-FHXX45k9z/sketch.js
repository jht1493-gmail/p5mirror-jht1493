let song;
let button_play;
let button_pause;
let jumpButton;

function setup() {
  createCanvas(200, 200);
  song = loadSound('rainbow.mp3', loaded);
  button_play = createButton('play');
  // Use anonymous function to be concise
  button_play.mousePressed(function() {
    song.play();
  });
  button_pause = createButton('pause');
  button_pause.mousePressed(function() {
    song.pause();
  });
  createButton('currentTime').mousePressed(show_ct)
  jumpButton = createButton('jump');
  jumpButton.mousePressed(jumpSong);
  background(51);

  song.addCue(2, changeBackground, color(0, 0, 255));
  song.addCue(4, changeBackground, color(0, 255, 255));
  song.addCue(6, changeBackground, color(255, 255, 255));
}

function changeBackground(col) {
  background(col);
}

function jumpSong() {
  let len = song.duration();
  let t = 0; //random(len);
  console.log(t);
  song.jump(t);
}

function draw() {
  //if (song.currentTime() > 5) {
  //background(song.currentTime() * 10, 0, 255);
  //}
}

function show_ct() {
  let ctime = song.currentTime();
  console.log('show_ct ctime', ctime);
}

// function togglePlaying() {
//   let playing =  song.isPlaying();
//   console.log('togglePlaying playing', playing);
//   if (!playing) {
//     song.play();
//     song.setVolume(0.3);
//     button.html('pause');
//   } else {
//     song.pause();
//     button.html('play');
//   }
// }

function loaded() {
  console.log('loaded');
  song.setVolume(0.3);
}

// https://editor.p5js.org/jht1493/sketches/FHXX45k9z
// 17.3_cueSong play pause

// https://editor.p5js.org/jht1493/sketches/ImSljxbEn
// 17.3_cueSong

// https://editor.p5js.org/jht1493/sketches/g0Y0DrH1a
// 17.2_pauseSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.3_cueSong

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/SfA5CghXw18

// song rainbow.mp3 extracted from this site
// to be more pleasing to the ear
// and small enough to load into web editor
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales



