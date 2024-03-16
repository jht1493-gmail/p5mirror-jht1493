let a_song;
let a_volume = 0.5;
let song_list = [
  'media/edit-1.m4a',
  'media/edit-2.m4a',
  'media/edit-3.m4a',
  'media/edit.m4a',
  'media/Reference scales_Whole Tone On C.mp3',
  'media/Reference Scales_Chromatic Scale On F Sharp.mp3',
  'media/Reference Scales_On A Flat-G Sharp.mp3',
  'media/Reference Scales_On A.mp3',
  'media/Reference Scales_On B Flat.mp3',
  'media/Reference Scales_On B.mp3',
  'media/Reference Scales_On C Sharp-D Flat .mp3',
  'media/Reference Scales_On C.mp3',
  'media/Reference Scales_On D.mp3',
  'media/Reference Scales_On E Flat-D Sharp.mp3',
  'media/Reference Scales_On E.mp3',
  'media/Reference Scales_On F Sharp-G Flat.mp3',
  'media/Reference Scales_On F.mp3',
  'media/Reference Scales_On G.mp3',
  'media/Reference Scales_Pentatonic on F Sharp.mp3',
  'media/Reference Scales_Whole Tone On C Sharp.mp3',
];
let song_index = 0;
let song_file = song_list[song_index];

function setup() {
  console.log('setup song_file', song_file);
  createCanvas(400, 80);
  // loadSound(song_file,sound_loaded);
  createButton('loadSound').mousePressed(function () {
    song_file = song_list[song_index];
    console.log('song_index', song_index)
    console.log('song_file', song_file)
    loadSound(song_file,sound_loaded);
  });
  createButton('stop').mousePressed(function () {
    a_song.stop();
  });
  createButton('pause').mousePressed(function () {
    a_song.pause();
  });
  createButton('play').mousePressed(function () {
    a_song.play();
  });
  createButton('first').mousePressed(function () {
    song_index = 0;
    console.log('first song_index', song_index)
  });
  createButton('last').mousePressed(function () {
    song_index = song_list.length-1;
    console.log('last song_index', song_index)
  });
  createButton('next').mousePressed(function () {
    song_index = (song_index+1) % song_list.length;
    console.log('next song_index', song_index)
  });
  createButton('loop').mousePressed(function () {
    console.log('loop song_index', song_index)
    // loop([startTime], [rate], [amp], [cueLoopStart], [duration])
    a_song.loop(0, 1, 1, 14, 1);
  });
  createButton('jump').mousePressed(function () {
    console.log('jump song_index', song_index)
    // jump(cueTime, duration)
    a_song.jump(14,1);
  });
}

function sound_loaded(arg_song) {
  a_song = arg_song;
  console.log('sound_loaded arg_song', arg_song);
  // a_song.play();
  a_song.setVolume(a_volume);
  // console.log('sound_loaded song_file', song_file);
  // console.log('a_song.duration()', a_song.duration());
  // a_song.loop();
  console.log('song_index', song_index)
}

function draw() {
  background(200);
  if (! a_song) return;
  let ct = a_song.currentTime();
  console.log('ct', ct)
}

// https://editor.p5js.org/jht1493/sketches/7Y0_IaFhH
// 17.1_playMode ui debug loop

// https://editor.p5js.org/jht1493/sketches/y4KbZRuQe
// 17.1_playMode ui debug min

// https://editor.p5js.org/jht1493/sketches/iihgsmwRS
// 17.1_playMode ui debug

// https://editor.p5js.org/jht1493/sketches/_LdMqTjgu
// 17.1_playMode ui

// -- Credits ------------------------------------
// https://github.com/CodingTrain/website/tree/main/Tutorials/P5JS/p5.js_sound
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
//
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales
