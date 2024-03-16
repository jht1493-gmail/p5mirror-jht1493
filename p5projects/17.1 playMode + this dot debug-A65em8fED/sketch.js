let a_song;
let a_volume = 0.1;
let a_pan = 0;
let a_rate = 1;
let a_sounds = [
  'this-dot-kp.mp3',
];
// let a_sound = sound_files[0];
// let a_sound = 'this-dot' + '.mp3';
let a_sound = 'this-dot.mp3';

console.log('a_sound', a_sound)

function setup() {
  print('setup a_sound', a_sound);
  createCanvas(400, 100);
  // a_song = loadSound(a_sound, loaded);
  // init_ui();
}

function loaded() {
  print('loaded a_sound', a_sound);
  print('a_song.duration()', a_song.duration());
  // a_song.play();
  // a_song.loop();
  a_song.setVolume(a_volume);
  // a_song.playMode('restart');
}

function draw2() {
  background(200);
  text(a_sound, 10, 50);

  a_song.setVolume(a_volume);
  a_song.pan(a_pan);
  a_song.rate(a_rate);

  show_num('currentTime', a_song.currentTime());
  show_num('duration', a_song.duration());
  show_num('a_volume', a_volume);
  show_num('a_pan', a_pan);
  show_num('a_rate', a_rate);
}

function reset_action() {
  a_volume = 0.05;
  a_pan = 0;
  a_rate = 1;
}

function loop0_action() {
  a_song.loop();
}

function loop1_action() {
  // loop([startTime], [rate], [amp],
  //    [cueLoopStart], [duration])
  let startTime = 0;
  let rate = 1;
  let amp = 1;
  let cueStart = 18;
  let dur = 1;
  a_song.loop(startTime, rate, amp, cueStart, dur);
}

function loop2_action() {
  // loop([startTime], [rate], [amp],
  //    [cueLoopStart], [duration])
  let startTime = 0;
  let rate = 1;
  let amp = 1;
  let cueStart = 1;
  let dur = 1 / 8;
  a_song.loop(startTime, rate, amp, cueStart, dur);
}

function play_action() {
  a_song.play();
}

function stop_action() {
  a_song.stop();
}

function playMode_sustain_action() {
  a_song.playMode('sustain');
}

function playMode_restart_action() {
  a_song.playMode('restart');
}

function playMode_untilDone_action() {
  a_song.playMode('untilDone');
}

// -- Credits ------------------------------------
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
