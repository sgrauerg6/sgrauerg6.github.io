const OTHER_WORK_1_HEADING = `Android App: Monochrome Math`;
const OTHER_WORK_1_INFO =
  `<span class="secondary_color">
   Didn't keep up with Google's requirements so no longer available in Play store
   </span>`;

const OTHER_WORK_2_HEADING = `Project 'paper' for GPU photon mapping using CUDA`;
const OTHER_WORK_2_INFO = `<a href="CUDAPhotonMapping.pdf">CUDAPhotonMapping.pdf</a>`;

const OTHER_WORK_3_HEADING =
  `Project 'paper' on GPU autostereoscopic image generation using a light field on CUDA`;
const OTHER_WORK_3_INFO =
  `<a href="autoStereoScopReport.pdf">autoStereoScopReport.pdf</a>`;

function addOtherWorkInfo() {
  document.getElementById("work1_heading").innerHTML = OTHER_WORK_1_HEADING;
  document.getElementById("work1_info").innerHTML = OTHER_WORK_1_INFO;
  document.getElementById("work2_heading").innerHTML = OTHER_WORK_2_HEADING;
  document.getElementById("work2_info").innerHTML = OTHER_WORK_2_INFO;
  document.getElementById("work3_heading").innerHTML = OTHER_WORK_3_HEADING;
  document.getElementById("work3_info").innerHTML = OTHER_WORK_3_INFO;
}

addOtherWorkInfo();