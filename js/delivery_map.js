const img = document.getElementById("img");
const playPauseBtn = document.getElementById("pausePlayButton");
const maxIndex = 99;
let index = 0;
let play = true;
let imagePathStart = "JerseyCityDelivery/delivery_map_";
let imagePathEnd = ".png";
let travel;

const startPlay = () => {
  travel = setInterval(() => {
    ++index;
    if (index < 0 || index > maxIndex) index = 0;
    img.src = imagePathStart;
    img.src += index.toString();
    img.src += imagePathEnd;
  }, 1000);
};

const pausePlay = () => {
  if (play) {
    playPauseBtn.innerHTML = "Play";
    play = false;
    clearInterval(travel);
  }
  else {
    play = true;
    playPauseBtn.innerHTML = "Pause";
    startPlay();
  }
}

const prevDeliveryMap = () => {
  index--;
  if (index < 0) index = maxIndex;
  img.src = imagePathStart;
  img.src += index.toString();
  img.src += imagePathEnd;
  if (play) {
    pausePlay();
  }
}

const nextDeliveryMap = () => {
  index++;
  if (index > maxIndex) index = 0;
  img.src = imagePathStart;
  img.src += index.toString();
  img.src += imagePathEnd;
  if (play) {
    pausePlay();
  }
}

startPlay();