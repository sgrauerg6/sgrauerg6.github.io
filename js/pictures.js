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

function addPicturesWInfo() {
  document.getElementById("pic1_content").innerHTML = PIC_1_CONTENT;
  document.getElementById("pic1_info").innerHTML = PIC_1_INFO;
  document.getElementById("pic2_content").innerHTML = PIC_2_CONTENT;
  document.getElementById("pic2_info").innerHTML = PIC_2_INFO;
  document.getElementById("pic3_content").innerHTML = PIC_3_CONTENT;
  document.getElementById("pic3_info").innerHTML = PIC_3_INFO;
  document.getElementById("pic4_content").innerHTML = PIC_4_CONTENT;
  document.getElementById("pic4_info").innerHTML = PIC_4_INFO;
  document.getElementById("pic5_content").innerHTML = PIC_5_CONTENT;
  document.getElementById("pic5_info").innerHTML = PIC_5_INFO;
}

addPicturesWInfo();