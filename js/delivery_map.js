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

//mapping of tip amount to percent of deliveries with amount or less
const tipBreakdownUeGh = new Map([
  [0, 13.35],
  [1, 22.41],
  [2, 35.38],
  [3, 51.50],
  [4, 64.39],
  [5, 78.51],
  [6, 85.11],
  [7, 89.33],
  [8, 92.48],
  [9, 94.86],
  [10, 97.01]]);

const tipBreakdownUe = new Map([
  [0, 19.83],
  [1, 33.50],
  [2, 46.50],
  [3, 61.71],
  [4, 72.31],
  [5, 84.27],
  [6, 89.91],
  [7, 93.16],
  [8, 94.36],
  [9, 95.73],
  [10, 97.09]]);

const tipBreakdownGh = new Map([
  [0, 8.08],
  [1, 13.37],
  [2, 26.32],
  [3, 43.18],
  [4, 57.94],
  [5, 73.82],
  [6, 81.20],
  [7, 86.21],
  [8, 90.95],
  [9, 94.15],
  [10, 96.94]]);

//add or update table for tip breakdown corresponding to current selections
function addTipBreakdown() {
  //Get a reference to the table element
  let tipBreakdownTbl = document.getElementById("tipsDataId");

  //remove all rows on table if previously generated
  for (let i = tipBreakdownTbl.rows.length - 1; i >= 0; i--) {
    tipBreakdownTbl.deleteRow(i);
  }

  tipBreakdownTbl.width = imgWidth.toString() + "px";
  console.log(imgWidth.toString());

  //add table header with titles for tip amount and percent
  //of deliveries with tip less than or equal to amount
  let headerRow = tipBreakdownTbl.insertRow(-1);
  headerRow.width = imgWidth;
  let cell0 = headerRow.insertCell(-1);
  let cell1 = headerRow.insertCell(-1);
  cell0.width = Math.ceil(imgWidth * 0.3);
  cell0.innerHTML = `<span class="bold_text">Tip Amount</span>`;
  cell0.classList.add("tipsDataHeaderAmount");
  cell1.width = imgWidth - cell0.width;
  cell1.innerHTML = `<span class="bold_text">% Deliveries w/ Tip &le; Amount</span>`;
  cell1.classList.add("tipsDataHeaderResult");

  // Format as USD in the en-US locale
  const formatterUS = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  //retrieve tip info corresponding to current selection for Uber Eats and Grubhub options
  let tipInfo;
  if ((document.getElementById("ueCheckbox").checked) && (document.getElementById("ghCheckbox").checked)) {
    tipInfo = tipBreakdownUeGh;
  }
  else if ((!(document.getElementById("ueCheckbox").checked)) && (document.getElementById("ghCheckbox").checked)) {
    tipInfo = tipBreakdownGh;
  }
  else if ((document.getElementById("ueCheckbox").checked) && (!(document.getElementById("ghCheckbox").checked))) {
    tipInfo = tipBreakdownUe;
  }

  //add tip info to table
  if (tipInfo !== undefined) {
    tipInfo.forEach(function(percentWTipOrLess, tipAmount) {
      let tipAmountRow = tipBreakdownTbl.insertRow(-1);
      let cell0 = tipAmountRow.insertCell(-1);
      let cell1 = tipAmountRow.insertCell(-1);
      cell0.innerHTML = formatterUS.format(tipAmount);
      cell0.classList.add("tipsDataAmount");
      cell1.innerHTML = percentWTipOrLess.toFixed(1);
      cell1.classList.add("tipsDataResult");
    });
  }

  tipBreakdownAdded = true;
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
let playBeforeInterrupt = false;
let tipBreakdownAdded = false;

//display interval used when play mode is enabled where displayed delivery
//map automatically goes to next delivery map every second and then wraps
//around when the last delivery map for location is reached
let displayInterval;

let imgWidth;

//change delivery location for displayed delivery map
function changeDeliveryLocation(location) {
    //clear display interval which may be active for previous
    //selected delivery location (active if in play mode)
    clearInterval(displayInterval);

    //set selected delivery location
    delivery_location = location;

    //retrieve table cell with toggle to switch between showing
    //maps and tips
    //turn off display of cell for now and turn back on at end of
    //function if location is Jersey City
    let dispOptionsCell = document.getElementById("displayOptionsCell");
    dispOptionsCell.style.display = "none";

    //set delivery map index to 0 for selected delivery location
    delMapIdx = 0;

    //go through delivery maps elements for each location
    locDelMaps.forEach(function(locationDelMap, locationName) {
      if (locationName == delivery_location) {
        //set button display for currently selected delivery location
        locationDelMap.button.classList.remove('fd_location_not_active');
        locationDelMap.button.classList.add('fd_location_active');
      }
      else {
        //set button display for other delivery locations
        locationDelMap.button.classList.remove('fd_location_active');
        locationDelMap.button.classList.add('fd_location_not_active');
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

    // Get the image element
    let imgElement = document.getElementById('deliveryDayImg');

    //wait for image in new location to load before adjusting
    //display options
    imgElement.addEventListener('load', () => {
      //set to display maps/earnings images
      setDelDispOption("mapsEarnings");

      //show display of toggle between showing maps and tip breakdown
      //if location is Jersey City
      if (delivery_location === "Jersey City") {
        dispOptionsCell.style.display = "table-cell";
        document.getElementById("mapsEarningRButton").checked = true;
      }
      
    }, { once: true });

    imgElement.onload = function() {
      imgWidth = deliveryDayImg.width;
      console.log(imgWidth.toString());
      if (!tipBreakdownAdded) {
        addTipBreakdown();
      }
    };
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

//set delivery display option
function setDelDispOption(delDispOption) {
  const mapsEarningsView = document.getElementById("deliveryDayImg");
  const tipsDataView = document.getElementById("tipsDataId");
  const fdControlButtons = document.getElementById("fd_control_buttons_table_id");
  const delServicesCheckboxes = document.getElementById("delServicesChBoxes");
  if (delDispOption === "mapsEarnings") {
    //change to display of delivery maps with earnings
    tipsDataView.style.display = 'none';
    mapsEarningsView.style.display = 'block';
    fdControlButtons.style.display = 'block';
    delServicesCheckboxes.style.display = 'none';
    if (!play) {
      if (playBeforeInterrupt) {
        //start play if setting was play before interrupt
        //from switching to tip breakdown
        playBeforeInterrupt = false;
        pausePlay();
      }
    }
  }
  else {
    //switch to display of tip breakdown
    mapsEarningsView.style.display = 'none';
    tipsDataView.style.display = 'block';
    fdControlButtons.style.display = 'none';
    delServicesCheckboxes.style.display = 'block';
    //store play/pause setting before interrupt due
    //to switching to show tip breakdown
    playBeforeInterrupt = (play || playBeforeInterrupt);
    //pause play of delivery maps if currently running
    if (play) {
      play = false;
      playPauseBtn.innerHTML = "Play";
      clearInterval(displayInterval);
    }
  }
}

//start delivery map display in play mode
startPlay();

//start delivery location at Jersey City
changeDeliveryLocation("Jersey City");

//addTipBreakdown();

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
