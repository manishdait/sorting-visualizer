let audio = new Audio();
let isMuted: boolean = false;
export async function playSucess(){
    audio.src = "assets/audio/complete.mp3";
    audio.load();
    if(!isMuted)
      audio.play();
  }

export async function playSwap() {
  audio.src = "assets/audio/swap.mp3";
  audio.load();
  if(!isMuted)
    audio.play();
}

export async function playFind(){
  audio.src = "assets/audio/find.mp3";
  audio.load();
  if(!isMuted)
    audio.play();
}

export function setMute(val: boolean) {
  isMuted = val;
}