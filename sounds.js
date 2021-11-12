//audio assets
var menuMusic = new Howl({
  src: ['assets/menu.mp3'],
  loop: true,
  autoplay: true
});

let playMusic = true;
let playSound = true;
let transitionLength = 500;
let playingSong = menuMusic;

function withIntro(audio){
  playingSong.stop();
  audio.play('start');
  playingSong = audio;
  playingSong.volume(playMusic?1:0);
}

function switchSong(audio){
  playingSong.fade(playMusic?1:0,0,transitionLength);
  playingSong.on('fade',v=>{
    playingSong.stop();
    audio.play();
    playingSong = audio;
    playingSong.volume(playMusic?1:0);
  })
}

function toggleMusic() {
  playMusic = !playMusic;
  playingSong.volume(playMusic?1:0);
}

function toggleSound() {
  playSound = !playSound;
}
