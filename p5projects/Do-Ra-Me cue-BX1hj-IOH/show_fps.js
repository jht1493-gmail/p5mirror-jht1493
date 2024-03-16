let fps_times;
let fps_lastn = 60 * 5;
// Show frames per second averaged over the last n frames
function show_fps() {
  if (!fps_times) {
    fps_times = [millis()];
  }
  fps_times.push(millis());
  if (fps_times.length > fps_lastn) {
    fps_times.splice(0, 1);
  }
  let sum = 0;
  for (let ind = 1; ind < fps_times.length; ind++) {
    sum += fps_times[ind] - fps_times[ind - 1];
  }
  let avg = sum / (fps_times.length - 1);
  show_num('video_fps', 1 / (avg / 1000));
}