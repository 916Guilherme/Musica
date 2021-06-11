let music = document.getElementById("music");

function play() {
  music.play();
}
function pause() {
  music.pause();
}
function alto() {
  music.volume = 1.0;
}
function medio() {
  music.volume = 0.5;
}
function mute() {
  music.volume = 0;
}
