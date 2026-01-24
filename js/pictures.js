const PIC_1_CONTENT = 
  `<img style="width: 488px; height: 374px;" alt="Me at GPGPU 6 (2013)" src="scottGPGPU6.png">`;
const PIC_1_INFO = `At the Sixth Workshop on General Purpose
                Processing Using GPUs (GPGPU 6) at the Four Seasons
                Hotel in Houston, Texas in March 2013`;

const PIC_2_CONTENT =
  `<img style="width: 488px; height: 275px;" alt="Me at Inpar 2012" src="scottInpar2012.jpg">`;
const PIC_2_INFO = `At the Innovative Parallel Computing
                    (INPAR 2012) at the San Jose Convention Center in
                    San Jose in May 2012`;

const PIC_3_CONTENT = 
  `<img style="width: 488px; height: 326px;" alt="Scott" src="scottLcpc2010.jpg">`;
const PIC_3_INFO = `At the 23rd International Workshop on Languages and
                    Compilers for Parallel Computing (LCPC2010) at Rice
                    University in Houston in October 2010`;

const PIC_4_CONTENT = 
  `<img style="width: 466px; height: 317px;" alt="picOfMe" src="Scott.jpg">`;
const PIC_4_INFO = `In front of my poster at the IEEE Workshop on
                  Applications of Computer Vision ( WACV) in December
                  2009`;

const PIC_5_CONTENT =
  `<img style="width: 488px; height: 326px;" alt="ScottAtIcpr" src="ScottIcpr2008.jpg">`;
const PIC_5_INFO = `At the International Conference of Pattern Recognition
                  (ICPR) in December 2008`;

class PicWInfo {
  constructor(contentId, content, infoId, info) {
    this.contentId = contentId;
    this.content = content;
    this.infoId = infoId;
    this.info = info;
  }
}

const picsInfo = [
  new PicWInfo("pic1_content", PIC_1_CONTENT, "pic1_info", PIC_1_INFO),
  new PicWInfo("pic2_content", PIC_2_CONTENT, "pic2_info", PIC_2_INFO),
  new PicWInfo("pic3_content", PIC_3_CONTENT, "pic3_info", PIC_3_INFO),
  new PicWInfo("pic4_content", PIC_4_CONTENT, "pic4_info", PIC_4_INFO),
  new PicWInfo("pic5_content", PIC_5_CONTENT, "pic5_info", PIC_5_INFO)
];

function addPicturesWInfo() {
  picsInfo.forEach(function(currPicsInfo) {
    document.getElementById(currPicsInfo.contentId).innerHTML = currPicsInfo.content;
    document.getElementById(currPicsInfo.infoId).innerHTML = currPicsInfo.info;
  });
}

addPicturesWInfo();