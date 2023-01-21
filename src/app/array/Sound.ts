let audio = new Audio();
export async function playSucess(){
    audio.src = "../../../assets/audio/complete.mp3";
    audio.load();
    audio.play();
  }

export async function playSwap() {
  audio.src="../../../assets/audio/swap.mp3";
  audio.load();
  audio.play();
}

export async function playFind(){
  audio.src="../../../assets/audio/find.mp3";
  audio.load();
  audio.play();
}