// edit scale down to 3 notes and loop
let a_song;
let a_songs = [];
let a_volume = 0.5;
let song_list = [
  "media/edit-1.m4a",
  "media/edit-2.m4a",
  "media/edit-3.m4a",
];
let song_index = -1;

function setup() {
  createCanvas(400, 80);
  load_next();
  createButton('play0').mousePressed(function () {
    a_songs[0].play();
  })
  createButton('play1').mousePressed(function () {
    a_songs[1].play();
  })
  createButton('play2').mousePressed(function () {
    a_songs[2].play();
  })
  createButton('play012').mousePressed(function () {
    a_songs[0].play();
    a_songs[1].play();
    a_songs[2].play();
  })
  createButton('loop0').mousePressed(function () {
    a_songs[0].loop();
    // a_songs[1].loop();
    // a_songs[2].loop();
  })
  createButton('stop0').mousePressed(function () {
    a_songs[0].stop();
    // a_songs[1].stop();
    // a_songs[2].stop();
  })
  createButton('loop-false-0').mousePressed(function () {
    a_songs[0].setLoop(false);
  })
}

function load_next() {
  song_index++;
  if (song_index >= song_list.length) {
    console.log('load_next done');
    return;
  }
  let song_file = song_list[song_index];
  console.log("song_index", song_index);
  loadSound(song_file, sound_loaded);
}

function sound_loaded(arg_song) {
  a_song = arg_song;
  console.log("sound_loaded arg_song", arg_song);
  // a_song.play();
  a_song.setVolume(a_volume);
  // console.log('sound_loaded song_file', song_file);
  // console.log('a_song.duration()', a_song.duration());
  // a_song.loop();
  console.log("song_index", song_index);
  a_songs[song_index] = a_song;
  load_next();
}

function draw() {
  background(200);
  // if (!a_song) return;
  // let ct = a_song.currentTime();
  // console.log("ct", ct);
}

// https://editor.p5js.org/jht1493/sketches/B3ZFF-M2q
// 17.1_playMode ui edit

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
