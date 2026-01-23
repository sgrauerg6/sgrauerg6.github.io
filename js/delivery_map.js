class Location {
  constructor(name, button, imPathStart, numIms) {
    this.name = name;
    this.button = button;
    this.imPathStart = imPathStart;
    this.numIms = numIms;
  }

  imagePath(imgIndex) {
    const imagePathEnd = ".png";
    return this.imPathStart + imgIndex.toString() + imagePathEnd;
  }
}

const locations = [
  new Location("Jersey City", document.getElementById("JerseyCity"), "JerseyCityDelivery/delivery_map_", 100),
  new Location("Manayunk", document.getElementById("Manayunk"), "ManayunkDelivery/ManayunkDelivery_", 59),
  new Location("Center City", document.getElementById("CenterCity"), "CenterCityDelivery/CenterCityDelivery_", 46)];
const deliveryDayImg = document.getElementById("deliveryDayImg");
const playPauseBtn = document.getElementById("pausePlayButton");
let index = 0;
let play = true;
let delivery_location = 0;
let travel;

function changeDeliveryLocation(location) {
    clearInterval(travel);
    delivery_location = location;
    index = 0;
    locations.forEach(function(location, locationNum) {
      if (locationNum == delivery_location) {
        location.button.style.backgroundColor = "green";
        location.button.style.color = "white";
      }
      else {
        location.button.style.backgroundColor = "lightblue";
        location.button.style.color = "black";
      }
    });
    
    if (play) {
      startPlay();
    }
    else {
      deliveryDayImg.src = locations[delivery_location].imagePath(index);
    }
};

const startPlay = () => {
  travel = setInterval(() => {
    ++index;
    index = (index >= locations[delivery_location].numIms) ? 0 : index;
    deliveryDayImg.src = locations[delivery_location].imagePath(index);
  }, 1000);
};

const pausePlay = () => {
  if (play) {
    play = false;
    playPauseBtn.innerHTML = "Play";
    clearInterval(travel);
  }
  else {
    play = true;
    playPauseBtn.innerHTML = "Pause";
    startPlay();
  }
}

const prevDeliveryMap = () => {
  if (play) {
    pausePlay();
  }
  index--;
  index = (index < 0) ? index = locations[delivery_location].numIms - 1 : index;
  deliveryDayImg.src = locations[delivery_location].imagePath(index);
}

const nextDeliveryMap = () => {
  if (play) {
    pausePlay();
  }
  index++;
  index = (index >= locations[delivery_location].numIms) ? 0 : index;
  deliveryDayImg.src = locations[delivery_location].imagePath(index);
}

startPlay();
changeDeliveryLocation(0);

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


