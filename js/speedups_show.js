let showMore = true;
const showMoreBtn = document.getElementById("showMoreButton");
const speedupsContent = document.getElementById("speedupsShown");

const HTML_SHOW_DEFAULT = `
<li>NVIDIA B200 (SXM6): 3.99x</li>
<li>NVIDIA H100 (GH100): 3.34x</li>
<li>AMD Turin (96 cores): 2.24x</li>
<li>AMD Genoa (96 cores): 1.98x</li>
<li>Amazon Graviton4 (96 ARM cores): 1.97x</li>
<li>Microsoft Cobalt (96 ARM cores): 1.91x</li>
<li>Intel Granite Rapids (96 cores): 1.90x</li>
<li>NVIDIA A100: 1.89x</li>`

const HTML_SHOW_MORE = `
<li>NVIDIA B200 (SXM6): 3.99x</li>
<li>NVIDIA H100 (GH100): 3.34x</li>
<li>AMD Genoa-X (176 cores across 2 CPUs): 2.31x</li>
<li>NVIDIA H100 (PCIe): 2.27x</li>
<li>AMD Turin (96 cores): 2.24x</li>
<li>AMD Genoa-X (88 cores): 2.12x</li>
<li>AMD Genoa (96 cores): 1.98x</li>
<li>Amazon Graviton4 (96 ARM cores): 1.97x</li>
<li>Microsoft Cobalt (96 ARM cores): 1.91x</li>
<li>Intel Granite Rapids (96 cores): 1.90x</li>
<li>NVIDIA A100: 1.89x</li>
<li>Intel Emerald Rapids (48 cores): 1.84x</li>
<li>RTX 3090 Ti: 1.65x</li>
<li>Intel Sapphire Rapids (48 cores): 1.53x</li>
<li>NVIDIA Grace CPU in GH200 (64 ARM cores): 1.44x</li>
<li>AMD Milan-X (60 cores): 1.37x</li>
<li>Amazon Graviton3 (64 cores): 1.20x</li>
<li>NVIDIA V100: 1.15x</li>
<li>AMD Rome (48 cores): 1.00x</li>
<li>Intel Ice Lake (32 cores): 1.00x</li>
<li>Amazon Graviton2 (64 cores): 0.90x</li>
<li>NVIDIA P100: 0.78x</li>
<li>Intel Cascade Lake (24 cores): 0.66x</li>
<li><span class="bold_text">
<a href="https://docs.google.com/spreadsheets/d/1NFJvDUr22xdrW01mA0dd8JAKEdaJ-McBX4wWjtHRhoE/edit?usp=sharing">
Spreadsheet with detailed results
</a></span>
</li>`

function showMoreToggle() {
  if (showMore) {
    showMore = false;
    showMoreBtn.innerHTML = "Show More";
    speedupsContent.innerHTML = HTML_SHOW_DEFAULT;
    showMoreBtn.style.backgroundColor = "lightblue";
    showMoreBtn.style.color = "black";
    showMoreBtn.style.fontSize = "12px";
    showMoreBtn.style.borderWidth = "0px";
    //showMoreBtn.style.fontWeight = "bold";
  }
  else {
    showMore = true;
    showMoreBtn.innerHTML = "Show Less";
    speedupsContent.innerHTML = HTML_SHOW_MORE;
    showMoreBtn.style.backgroundColor = "lightblue";
    showMoreBtn.style.color = "black";
    showMoreBtn.style.fontSize = "12px";
    showMoreBtn.style.borderWidth = "0px";
    //showMoreBtn.style.fontWeight = "bold";
  }  
}

showMoreToggle();
