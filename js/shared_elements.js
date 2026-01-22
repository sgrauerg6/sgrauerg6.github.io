const LEFT_MENU_DATA_CELL = `
            <a href="index.html">Home</a><br>
            <br>
            <a href="research.html">Research</a><br>
            <br>
            <a href="publications.html">Publications</a><br>
            <br>
            <a href="teaching.html">Teaching/TAing</a><br>
            <br>
            <a href="pictures.html">Pictures</a><br>
            <br>
            <a href="otherwork.html">Other work</a><br>
			      <br>
  			    <a href="foodDelivery.html">Food Delivery</a><br>
			      <br>
			      <a href="photomap.html">Photo Map</a><br>
          `;

function addTopRowWLinks() {
  // Get a reference to the table element
  var table = document.getElementById("page_table");

  // Insert a new row at index 0 (the first position)
  var topRow = table.insertRow(0);

  // Create cells and add content to top row
  var cell0 = topRow.insertCell(-1);
  var cell1 = topRow.insertCell(-1);
  var cell2 = topRow.insertCell(-1);
  var cell3 = topRow.insertCell(-1);
  var cell4 = topRow.insertCell(-1);

  cell0.classList.add("top_table_bg_color");
  cell0.classList.add("top_table_cell");
  cell1.classList.add("top_table_bg_color");
  cell1.classList.add("top_table_cell");
  cell2.classList.add("top_table_bg_color");
  cell2.classList.add("top_table_cell");
  cell3.classList.add("top_table_bg_color");
  cell3.classList.add("top_table_cell");
  cell3.innerHTML = `<a href="http://www.cis.udel.edu/">Udel CIS Home</a> |
<a href="http://udel.edu/">Udel Home</a></td>`
  cell4.classList.add("top_table_bg_color");
  cell4.classList.add("top_table_cell");
}

function addSecondRow() {
  //Get a reference to the table element
  var table = document.getElementById("page_table");

  //Insert a new row at index 1 (the second position)
  var topRow = table.insertRow(1);

  //Create cells and add content to top row
  var cell0 = topRow.insertCell(-1);
  var cell1 = topRow.insertCell(-1);
  var cell2 = topRow.insertCell(-1);
  var cell3 = topRow.insertCell(-1);
  var cell4 = topRow.insertCell(-1);

  cell0.classList.add("second_block_left");
  cell0.style.height = '20px';
  cell1.classList.add("section_separator");
  cell1.style.height = '20px';
  cell2.classList.add("main_bg_color");
  cell2.classList.add("main_region_block");
  cell3.classList.add("main_bg_color");
  cell3.classList.add("main_region_block");
  cell4.style.height = '20px';
}

function addNameRow() {
  //Get a reference to the table element
  var table = document.getElementById("page_table");

  //Insert a new row at index 2 (the third position)
  var topRow = table.insertRow(2);

  //Create cells and add content to top row
  var cell0 = topRow.insertCell(-1);
  var cell1 = topRow.insertCell(-1);
  var cell2 = topRow.insertCell(-1);
  var cell3 = topRow.insertCell(-1);
  var cell4 = topRow.insertCell(-1);

  cell0.classList.add("second_block_left");
  cell1.classList.add("section_separator");
  cell2.classList.add("main_bg_color");
  cell2.classList.add("main_region_block");
  cell3.classList.add("main_bg_color");
  cell3.classList.add("main_region_block");
  cell3.innerHTML = `<span class="name_style">Scott Grauer-Gray</span>`;
}

function addRowUnderName() {
  //Get a reference to the table element
  var table = document.getElementById("page_table");

  //Insert a new row at index 3 (the fourth position)
  var topRow = table.insertRow(3);
  
  //Create cells and add content to top row
  var cell0 = topRow.insertCell(-1);
  var cell1 = topRow.insertCell(-1);
  var cell2 = topRow.insertCell(-1);
  var cell3 = topRow.insertCell(-1);
  var cell4 = topRow.insertCell(-1);
  
  cell0.classList.add("second_block_left");
  cell1.classList.add("section_separator");
  cell2.classList.add("main_bg_color");
  cell2.classList.add("main_region_block");
  cell3.classList.add("main_bg_color");
  cell3.classList.add("main_region_block");
  cell3.innerHTML = `<hr>`;
}

function addLeftMenu() {
  document.getElementById('left_menu').innerHTML = LEFT_MENU_DATA_CELL;
}

addTopRowWLinks();
addSecondRow();
addNameRow();
addRowUnderName();
addLeftMenu();
