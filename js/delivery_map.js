const FOOD_DELIVERY_INFO_FD_PAGE =
  `<ul>
     <li>Jersey City, Manayunk, and Philadelphia Center City areas</li>
     <li>Deliveries for Grubhub, Uber Eats, DoorDash, Caviar, and Hungry Panda</li>
     <li><a href="https://us.brompton.com/catalogue/bikes/brompton/m2l-signal-orange-2-speed">2-speed Brompton</a> folding bike used for deliveries in Jersey City and Philadelphia Center City</li>
     <li><a href="https://www.theverge.com/2019/7/29/8934573/gocycle-review-folding-gx-price-specs">Gocycle GX folding e-bike</a> used for deliveries in Manayunk area</li>
		</ul>`;
  
function addFoodDeliveryInfoFDPage() {
  document.getElementById("food_delivery_info_fd_page").innerHTML = FOOD_DELIVERY_INFO_FD_PAGE;
}

const img = document.getElementById("deliveryDayImg");
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
changeDeliveryLocation(0);


