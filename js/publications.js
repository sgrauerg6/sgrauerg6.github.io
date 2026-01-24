const PUB_6_AUTHORS =
  `S. Grauer-Gray, W. Killian, R. Searles, J. Cavazos`;
const PUB_6_TITLE =
  `<a href="accFinAppsGpu.pdf">Accelerating Financial Applications on the GPU</a>`;
const PUB_6_JOURNAL = 
  `<a href="http://www.ece.neu.edu/groups/nucar/GPGPU/GPGPU6/">Sixth Workshop on General Purpose Processing
   Using GPUs (GPGPU 6) 2013</a>`;
const PUB_SUPP_6 = `
  <ul>
    <div class="li_small">
      <li><a href="accFinAppsGpuSlides.pdf">Presentation Slides</a></li>
      <li><a href="https://github.com/cavazos-lab/FinanceBench">
          Code</a> (any work using this code should cite above paper) </li>
    </div>
  </ul>`;

const PUB_5_AUTHORS =
  `Zhan Yu, Christopher Thorpe, Xuan Yu, Scott Grauer-Gray, Feng Li, and Jingyi Yu`;
const PUB_5_TITLE =
  `<a href="http://link.springer.com/article/10.1007%2Fs00371-013-0778-4">
   Racking Focus and Tracking Focus on Live Video Streams: A Stereo Solution</a>`;
const PUB_5_JOURNAL = 
  `<a href="http://www.springer.com/computer/image+processing/journal/371">
   The Visual Computer</a>, February 2013`;
const PUB_SUPP_5 = `
  <ul>
    <div class="li_small">
      <li><a href="http://www.youtube.com/watch?v=2XnV8HZbnXw">Video 1</a>,
          <a href="http://www.youtube.com/watch?v=zMVb-CsREow">Video 2</a>,
          <a href="http://www.youtube.com/watch?v=kO-BJp-QaJM">Video 3</a></li>
    </div>
  </ul>`;

const PUB_4_AUTHORS =
  `S. Grauer-Gray, L. Xu, R. Searles, S. Ayalasomayajula, J. Cavazos`;
const PUB_4_TITLE =
  `<a href="autoTuneGpu.pdf">Auto-tuning a High-Level Language Targeted to GPU Codes</a>`;
const PUB_4_JOURNAL = 
  `<a href="http://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=6330715">
   Proceedings of Innovative Parallel Computing (InPar) 2012</a>`;
const PUB_SUPP_4 = `
  <ul>
    <div class="li_small">
      <li><a href="inpar_2012_autotuning.pdf">Presentation Slides</a></li>
       <li><a href="http://www.cse.ohio-state.edu/%7Epouchet/software/polybench/GPU/index.html">
           Intial PolyBench/GPU Benchmark Suite</a> used for results in paper and <a
           href="https://github.com/cavazos-lab/PolyBench-ACC">updated
           version</a> that matches format of Polybench 3.2 and
           adds OpenACC/OpenMP versions of each benchmark (any
           work using either code should cite above paper)
       </li>
    </div>
  </ul>`

const PUB_3_AUTHORS =
  `Zhan Yu, Christopher Thorpe, Xuan Yu, Scott Grauer-Gray, Feng Li, and Jingyi Yu`;
const PUB_3_TITLE =
  `<a href="dynamicDepthOfFieldStereoSolution.pdf">Dynamic Depth-of-Field on Live
   Video Streams: A Stereo Solution</a>`;
const PUB_3_JOURNAL = 
  `<a href="http://cgi2011.site.uottawa.ca/index.php">Computer Graphics International (CGI) 2011</a>`;
const PUB_SUPP_3 = 
  `<ul>
     <div class="li_small">
       <li><a href="http://www.eecis.udel.edu/%7Ezyu/CGI2011/">Project Website</a></li>
     </div>
   </ul>`

const PUB_2_AUTHORS =
  `S. Grauer-Gray, J. Cavazos`;
const PUB_2_TITLE =
  `<a href="LCPC_2010_optBeliefProp.pdf">Optimizing and Auto-tuning Belief Propagation on the GPU</a>`;
const PUB_2_JOURNAL = 
  `<a href="http://lcpc10.rice.edu/LCPC10_Home.html"> The 23rd International Workshop on 
   Languages and Compilers for Parallel Computing (LCPC) 2010</a>`;
const PUB_SUPP_2 =
  `<ul>
     <div class="li_small">
       <li><a href="LCPC_2010_optBeliefPropPresent.pdf">Presentation Slides</a></li>
     </div>
   </ul>`

const PUB_1_AUTHORS =
  `S. Grauer-Gray, C. Kambhamettu`;
const PUB_1_TITLE =
  `<a href="hiarchBeliefProp.pdf">Hierarchical Belief Propagation To Reduce Search
   Space Using CUDA for Stereo and Motion Estimation</a>`;
const PUB_1_JOURNAL = 
  `<a href="http://vision.cs.byu.edu/wacv2009/wacv.php">IEEE Workshop
   on Applications of Computer Vision (WACV) 2009</a>`;
const PUB_SUPP_1 =
  `<ul>
     <div class="li_small">
       <li><a href="wacvPoster2009.pptx">Presentation Poster</a></li>
       <li><a href="https://www.eecis.udel.edu/wiki/vims/index.php/Main/MotionBP">Project page</a></li>
       <li><a href="https://github.com/sgrauerg6/HierarchicalBPForStereoAndMotionToReduceSearchSpace">
         Code</a> (any work using this code should cite above paper)
       </li>
     </div>
   </ul>`

const PUB_0_AUTHORS =
  `S. Grauer-Gray, C. Kambhamettu, K. Palaniappan`;
const PUB_0_TITLE =
  `<a href="cudaBeliefProp.pdf">GPU Implementation of Belief Propagation Using CUDA for
   Cloud Tracking and Reconstruction</a>`;
const PUB_0_JOURNAL = 
  `<a href="http://www.iapr.org/members/newsletter/Newsletter09-02/index_files/Page865.htm">
   5th IAPR Workshop on Pattern Recognition in Remote Sensing (PRRS) 2008</a>`;
//supplemental material for this paper is on index.html page since it has javascript
//buttons that don't seem to work when added from this page
const PUB_SUPP_0 = ``;

class Publication {
  constructor(authors, title, journal, supp_material) {
    this.authors = authors;
    this.title = title;
    this.journal = journal;
    this.supp_material = supp_material;
  }

  //add publication info in formatting specified for index page
  publicationTextIndexPage() {
    const PAPER_INFO_FORMATTING = `<span class="secondary_color bold_text">`
    const PAPER_INFO_FORMATTING_END = `</span>`
    return PAPER_INFO_FORMATTING + this.authors + ". " + this.title + ". In " + this.journal + "." + 
           PAPER_INFO_FORMATTING_END; 
  }

  //add publication info in formatting specified for publications page
  publicationTextPubPage() {
    const PAPER_INFO_FORMATTING = `<span class="secondary_color">`
    const PAPER_INFO_FORMATTING_END = `</span>`
    return PAPER_INFO_FORMATTING + this.authors + ". " + `<span class="bold_text">` + this.title +
           ".</span> In " + this.journal + "." + PAPER_INFO_FORMATTING_END; 
  }
}

const IEEE_NOTICE = `&#169 20xx IEEE. Personal use of this material is permitted.
            Permission from IEEE must be obtained for all other uses, in
            any current or future media, including
            reprinting/republishing this material for advertising or
            promotional purposes, creating new collective works, for
            resale or redistribution to servers or lists, or reuse of
            any copyrighted component of this work in other works.`

const SEE_IEE_NOTICE = `<span class="small_text">(See IEEE disclaimer below)</span>`;

const publications = [
  new Publication(PUB_0_AUTHORS, PUB_0_TITLE, PUB_0_JOURNAL, PUB_SUPP_0),
  new Publication(PUB_1_AUTHORS, PUB_1_TITLE, PUB_1_JOURNAL, PUB_SUPP_1),
  new Publication(PUB_2_AUTHORS, PUB_2_TITLE, PUB_2_JOURNAL, PUB_SUPP_2),
  new Publication(PUB_3_AUTHORS, PUB_3_TITLE, PUB_3_JOURNAL, PUB_SUPP_3),
  new Publication(PUB_4_AUTHORS, PUB_4_TITLE, PUB_4_JOURNAL, PUB_SUPP_4),
  new Publication(PUB_5_AUTHORS, PUB_5_TITLE, PUB_5_JOURNAL, PUB_SUPP_5),
  new Publication(PUB_6_AUTHORS, PUB_6_TITLE, PUB_6_JOURNAL, PUB_SUPP_6)
];

//add IEEE notice to page in location specified by element id
function addIEEENotice() {
  const ieeeNoticeContent = document.getElementById("IEEENotice");
  ieeeNoticeContent.innerHTML = IEEE_NOTICE;
}

function replaceTextInClass(className, text) {
  var elms = document.querySelectorAll('.' + className), i;
  for (i = 0; i < elms.length; ++i) {
    elms[i].innerHTML = text;
  }
}

//add publication info and supplemental material to index page
function addAllPubInfoIndexPage() {
  publications.forEach(function(currPublication, paperNum) {
    let pubInfoID = "paperInfo_" + paperNum.toString();
    document.getElementById(pubInfoID).innerHTML = currPublication.publicationTextIndexPage();
    let pubSuppID = "paperSupp_" + paperNum.toString();
    document.getElementById(pubSuppID).innerHTML = currPublication.supp_material;    
  });
  replaceTextInClass("seeIEEE", SEE_IEE_NOTICE);
  addIEEENotice();
}

//add publication info to publications page
function addAllPubInfoPubPage() {
  publications.forEach(function(currPublication, paperNum) {
    let pubInfoID = "paperInfo_" + paperNum.toString();
    document.getElementById(pubInfoID).innerHTML = currPublication.publicationTextPubPage();
  });
  replaceTextInClass("seeIEEE", SEE_IEE_NOTICE);
  addIEEENotice();
}
