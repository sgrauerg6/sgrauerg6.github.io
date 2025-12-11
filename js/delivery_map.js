const img = document.getElementById("img");
const playPauseBtn = document.getElementById("pausePlayButton");
const locationBtns = [document.getElementById("JerseyCity"), document.getElementById("Manayunk"), document.getElementById("CenterCity")];
const maxIndex = [99, 58, 45];
let index = 0;
let play = true;
const imagePathStart = ["JerseyCityDelivery/delivery_map_", "ManayunkDelivery/ManayunkDelivery_", "CenterCityDelivery/CenterCityDelivery_"];
let imagePathEnd = ".png";
let delivery_location = 0;
let travel;

function changeDeliveryLocation(location) {
    clearInterval(travel);
    delivery_location = location;
    index = 0;
    locationBtns[0].style.backgroundColor = "lightblue";
    locationBtns[1].style.backgroundColor = "lightblue";
    locationBtns[2].style.backgroundColor = "lightblue";
    locationBtns[0].style.color = "black";
    locationBtns[1].style.color = "black";
    locationBtns[2].style.color = "black";
    locationBtns[delivery_location].style.backgroundColor = "green";
    locationBtns[delivery_location].style.color = "white";
    if (play) {
      startPlay();
    }
    else {
      img.src = imagePathStart[delivery_location];
      img.src += index.toString();
      img.src += imagePathEnd;
    }
};

const startPlay = () => {
  travel = setInterval(() => {
    ++index;
    if (index < 0 || index > maxIndex[delivery_location]) index = 0;
    img.src = imagePathStart[delivery_location];
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
  if (index < 0) index = maxIndex[delivery_location];
  img.src = imagePathStart[delivery_location];
  img.src += index.toString();
  img.src += imagePathEnd;
  if (play) {
    pausePlay();
  }
}

const nextDeliveryMap = () => {
  index++;
  if (index > maxIndex[delivery_location]) index = 0;
  img.src = imagePathStart[delivery_location];
  img.src += index.toString();
  img.src += imagePathEnd;
  if (play) {
    pausePlay();
  }
}

startPlay();
changeDeliveryLocation(0)
