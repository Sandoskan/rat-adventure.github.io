let onLevel = 0;
let playingLevel = 0;

let ballType = 'ball';

function win() {
  ballType = 'jeff';
  console.log("You're a winner!");
}

let allMachines = [];

function setupLevel(L, changeScene = true) {
  if(changeScene) {
    sb = 2;
    playingLevel = L;
  }
  allMachines = [];

  level = levels[playingLevel];
  levelAR = level.map[0].length / level.map.length;

  let W = level.map[0].length,
    H = level.map.length;
}

let contactLag = 0;

function nextLevel() {
  winSound.play();
  if(playingLevel < levels.length - 1) {
    playingLevel++;
    if(playingLevel > onLevel) {
      onLevel = playingLevel;
    }
    setupLevel(playingLevel, false);
    return;
  }
  sb = 0;
  switchSong(menuMusic);
}

function runLevel() {

}

function activateStuff() {
  for(let m of allMachines) {
    m.activate(m);
  }
}

function s2(tx, ty) {
  ctx.fillStyle = '#41a963';
  ctx.fillRect(0, 0, w, h);
  let s = standardUnit;
  let ar = levelAR;
  button(s * 0.0125, s * 0.01, s, 0.3 * s, () => {
    sb = 1;
    switchSong(menuMusic);
  }, back, backb);
  button(w - s * 0.4125, s * 0.01, s * 0.3, s * 0.3, () => {
    setupLevel(playingLevel, false);
  }, restart, restartb);
  let actionAR = 1.5;
  runLevel();
  if(ar * (h - 0.8 * s) < w - s * 2) {
    callWithinAR(s, 0, w - s * 2, h - 0.4 * s, ar, drawLevel);
  } else {
    callWithinAR(0, 0.4 * s, w, h - 0.8 * s, ar, drawLevel);
  }
}
