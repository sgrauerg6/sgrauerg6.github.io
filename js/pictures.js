const PIC_1_SRC = "scottGPGPU6.png";
const PIC_1_ALT_TEXT = "Me at GPGPU 6 (2013)";
const PIC_1_INFO = `At the Sixth Workshop on General Purpose
                Processing Using GPUs (GPGPU 6) at the Four Seasons
                Hotel in Houston, Texas in March 2013`;

const PIC_2_SRC = "scottInpar2012.jpg";
const PIC_2_ALT_TEXT = "Me at Inpar 2012";
const PIC_2_INFO = `At the Innovative Parallel Computing
                    (INPAR 2012) at the San Jose Convention Center in
                    San Jose in May 2012`;

const PIC_3_SRC = "scottLcpc2010.jpg";
const PIC_3_ALT_TEXT = "Scott";
const PIC_3_INFO = `At the 23rd International Workshop on Languages and
                    Compilers for Parallel Computing (LCPC 2010) at Rice
                    University in Houston in October 2010`;

const PIC_4_SRC = "Scott.jpg";
const PIC_4_ALT_TEXT = "picOfMe";
const PIC_4_INFO = `In front of my poster at the IEEE Workshop on
                  Applications of Computer Vision (WACV) in December
                  2009`;

const PIC_5_SRC = "ScottIcpr2008.jpg";
const PIC_5_ALT_TEXT = "ScottAtIcpr";
const PIC_5_INFO = `At the International Conference of Pattern Recognition
                  (ICPR) in December 2008`;

class PicWInfo {
  constructor(srcPath, altText, info) {
    this.srcPath = srcPath;
    this.altText = altText;
    this.info = info;
  }
}

const picsInfo = [
  new PicWInfo(PIC_1_SRC, PIC_1_ALT_TEXT, PIC_1_INFO),
  new PicWInfo(PIC_2_SRC, PIC_2_ALT_TEXT, PIC_2_INFO),
  new PicWInfo(PIC_3_SRC, PIC_3_ALT_TEXT, PIC_3_INFO),
  new PicWInfo(PIC_4_SRC, PIC_4_ALT_TEXT, PIC_4_INFO),
  new PicWInfo(PIC_5_SRC, PIC_5_ALT_TEXT, PIC_5_INFO)
];

function addPicturesWInfo() {  
  //shuffle order of images
  picsInfo.sort(() => Math.random() - 0.5);

  //set image width to be random value between 450 and 550
  const imWidth = Math.floor(Math.random() * (101)) + 450;

  //add images with info below each image to HTML
  let picsWInfoStr = String();
  for (let i = 0; i < picsInfo.length; i++) {
    picsWInfoStr += `<img style="width: ` + imWidth.toString() + `px;" alt="` + picsInfo[i].altText + `" src="` + picsInfo[i].srcPath + `">` + "<br>";
    console.log(picsWInfoStr);
    picsWInfoStr += `<span class="secondary_color bold_text">` + picsInfo[i].info + "</span><br>";
    if (i < (picsInfo.length - 1)) {
        picsWInfoStr += "<br><br>";
    }
  };
  document.getElementById("pics").innerHTML = picsWInfoStr;

  //add pics_image_spacing class to image tags for formatting
  let images = document.getElementsByTagName("img");
  for(let i = 0; i < images.length; i++) {
    images[i].className += " pics_image_spacing";
  }
}

addPicturesWInfo();