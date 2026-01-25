//class corresponding to delivery maps for location
class LocationDelMaps {
  //constructor to initialize delivery maps at location
  constructor(button, imPathStart, numDelMaps) {
    //button to press to select location to display delivery maps
    this.button = button;

    //image path start for delivery maps at location
    this.imPathStart = imPathStart;

    //total number of delivery maps at location
    this.numDelMaps = numDelMaps;
  }

  //get path of delivery map image at current index
  imagePath(delMapIdx) {
    const imagePathEnd = ".png";
    return this.imPathStart + delMapIdx.toString() + imagePathEnd;
  }
}

//mapping of delivery location to delivery map for location
const locDelMaps = new Map([
  ["Jersey City",
    new LocationDelMaps(document.getElementById("JerseyCity"), "JerseyCityDelivery/delivery_map_", 100)],
  ["Manayunk",
    new LocationDelMaps(document.getElementById("Manayunk"), "ManayunkDelivery/ManayunkDelivery_", 59)],
  ["Center City",
    new LocationDelMaps(document.getElementById("CenterCity"), "CenterCityDelivery/CenterCityDelivery_", 46)]
]);

//image element for displayed delivery map
const deliveryDayImg = document.getElementById("deliveryDayImg");

//button to toggle between playing and pausing delivery map
const playPauseBtn = document.getElementById("pausePlayButton");

//index of current delivery map displayed
let delMapIdx = 0;

//delivery location of delivery map currently display
let delivery_location = "Jersey City";

//boolean indicating whether delivery map display is in play mode or not
let play = true;

//display interval used when play mode is enabled where displayed delivery
//map automatically goes to next delivery map every second and then wraps
//around when the last delivery map for location is reached
let displayInterval;

//change delivery location for displayed delivery map
function changeDeliveryLocation(location) {
    //clear display interval which may be active for previous
    //selected delivery location (active if in play mode)
    clearInterval(displayInterval);

    //set selected delivery location
    delivery_location = location;

    //set delivery map index to 0 for selected delivery location
    delMapIdx = 0;

    //go through delivery maps elements for each location
    locDelMaps.forEach(function(locationDelMap, locationName) {
      if (locationName == delivery_location) {
        //set button display for currently selected delivery location
        locationDelMap.button.style.backgroundColor = "green";
        locationDelMap.button.style.color = "white";
      }
      else {
        //set button display for other delivery locations
        locationDelMap.button.style.backgroundColor = "lightblue";
        locationDelMap.button.style.color = "black";
      }
    });
    
    if (play) {
      //start interval to automatically increment delivery map images every second
      //if in play mode
      startPlay();
    }
    else {
      //set delivery map display to delivery map for selected location
      //at current delivery map index
      deliveryDayImg.src = locDelMaps.get(delivery_location).imagePath(delMapIdx);
    }
};

//start play mode where displayed delivery map for current location is automatically
//changed to next delivery map for location every second and then wrapped around
const startPlay = () => {
  displayInterval = setInterval(() => {
    ++delMapIdx;
    delMapIdx = (delMapIdx >= locDelMaps.get(delivery_location).numDelMaps) ? 0 : delMapIdx;
    deliveryDayImg.src = locDelMaps.get(delivery_location).imagePath(delMapIdx);
  }, 1000);
};

//toggle between pause and play modes
const pausePlay = () => {
  if (play) {
    //turn off play mode
    play = false;
    playPauseBtn.innerHTML = "Play";
    clearInterval(displayInterval);
  }
  else {
    //turn on play mode
    play = true;
    playPauseBtn.innerHTML = "Pause";
    startPlay();
  }
}

//go to previous delivery map for currently display location
const prevDeliveryMap = () => {
  if (play) {
    pausePlay();
  }
  delMapIdx--;
  delMapIdx = (delMapIdx < 0) ? delMapIdx = locDelMaps.get(delivery_location).numDelMaps - 1 : delMapIdx;
  deliveryDayImg.src = locDelMaps.get(delivery_location).imagePath(delMapIdx);
}

//go to next delivery map for currently display location
const nextDeliveryMap = () => {
  if (play) {
    pausePlay();
  }
  delMapIdx++;
  delMapIdx = (delMapIdx >= locDelMaps.get(delivery_location).numDelMaps) ? 0 : delMapIdx;
  deliveryDayImg.src = locDelMaps.get(delivery_location).imagePath(delMapIdx);
}

playPauseBtn.style.width = "70px";

//start delivery map display in play mode
startPlay();

//start delivery location at Jersey City
changeDeliveryLocation("Jersey City");

//food delivery info to display on food delivery page
const FOOD_DELIVERY_INFO_FD_PAGE =
  `<ul>
     <li>Jersey City, Manayunk, and Philadelphia Center City areas</li>
     <li>Deliveries for Grubhub, Uber Eats, DoorDash, Caviar, and Hungry Panda</li>
     <li><a href="https://us.brompton.com/catalogue/bikes/brompton/m2l-signal-orange-2-speed">2-speed Brompton</a> folding bike used for deliveries in Jersey City and Philadelphia Center City</li>
     <li><a href="https://www.theverge.com/2019/7/29/8934573/gocycle-review-folding-gx-price-specs">Gocycle GX folding e-bike</a> used for deliveries in Manayunk area</li>
	 </ul>`;

//function to add food delivery info to food delivery page
function addFoodDeliveryInfoFDPage() {
  document.getElementById("food_delivery_info_fd_page").innerHTML = FOOD_DELIVERY_INFO_FD_PAGE;
}
