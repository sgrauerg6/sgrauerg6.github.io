const PUB_6 = `S. Grauer-Gray, W. Killian, R. Searles, J. Cavazos.
              <a href="accFinAppsGpu.pdf">Accelerating Financial Applications on the
              GPU</a>. In <a href="http://www.ece.neu.edu/groups/nucar/GPGPU/GPGPU6/">Sixth Workshop
              on General Purpose Processing Using GPUs (GPGPU 6)
              2013</a>.`;

const PUB_5 = `Zhan Yu, Christopher Thorpe, Xuan Yu, Scott Grauer-Gray, Feng Li, and Jingyi Yu. <a
              href="http://link.springer.com/article/10.1007%2Fs00371-013-0778-4">
              Racking Focus and Tracking Focus on Live Video Streams: A Stereo Solution</a>. In <a 
              href="http://www.springer.com/computer/image+processing/journal/371">
              The Visual Computer</a>, February 2013.`;

const PUB_4 = `S. Grauer-Gray, L. Xu, R. Searles, S. Ayalasomayajula, J. Cavazos. <a
              href="autoTuneGpu.pdf">Auto-tuning a High-Level Language Targeted to GPU Codes
              </a>. In <a href="http://ieeexplore.ieee.org/xpl/mostRecentIssue.jsp?punumber=6330715">
              Proceedings of Innovative Parallel Computing (InPar) 2012</a>.`;

const PUB_3 = `Zhan Yu, Christopher Thorpe, Xuan Yu, Scott
            Grauer-Gray, Feng Li, and Jingyi Yu. <a
            href="dynamicDepthOfFieldStereoSolution.pdf">Dynamic
            Depth-of-Field on Live Video Streams: A Stereo
            Solution</a>. In <a href="http://cgi2011.site.uottawa.ca/index.php">Computer
            Graphics International (CGI) 2011</a>.`;
        
const PUB_2 = `S. Grauer-Gray, J. Cavazos. <a href="LCPC_2010_optBeliefProp.pdf">Optimizing and
            Auto-tuning Belief Propagation on the GPU</a>. In <a
            href="http://lcpc10.rice.edu/LCPC10_Home.html"> The 23rd International Workshop on 
            Languages and Compilers for Parallel Computing (LCPC) 2010</a>.</li>`;

const PUB_1 = `S. Grauer-Gray, C. Kambhamettu. <a
            href="hiarchBeliefProp.pdf">Hierarchical Belief
            Propagation To Reduce Search Space Using CUDA for
            Stereo and Motion Estimation</a>. In <a
            href="http://vision.cs.byu.edu/wacv2009/wacv.php">IEEE
            Workshop on Applications of Computer Vision (WACV)
            2009</a>.`;

const PUB_0 = `S. Grauer-Gray, C. Kambhamettu, K. Palaniappan. <a
            href="cudaBeliefProp.pdf">GPU Implementation of
            Belief Propagation Using CUDA for Cloud Tracking and
            Reconstruction</a>. In <a
            href="http://www.iapr.org/members/newsletter/Newsletter09-02/index_files/Page865.htm">5th
            IAPR Workshop on Pattern Recognition in Remote
            Sensing (PRRS) 2008</a>.`;

const PUB_SUPP_6 = `<ul>
            <div class="li_small">
              <li><a href="accFinAppsGpuSlides.pdf">Presentation Slides</a></li>
              <li><a href="https://github.com/cavazos-lab/FinanceBench">
              Code</a> (any work using this code should cite above paper) </li>
            </div>
            </ul>`;

const PUB_SUPP_5 = `<ul>
            <div class="li_small">
              <li><a href="http://www.youtube.com/watch?v=2XnV8HZbnXw">Video 1</a>,
                  <a href="http://www.youtube.com/watch?v=zMVb-CsREow">Video 2</a>,
                  <a href="http://www.youtube.com/watch?v=kO-BJp-QaJM">Video 3</a></li>
            </div>
            </ul>`;

const PUB_SUPP_4 = `<ul>
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

const PUB_SUPP_3 = `<ul>
          <div class="li_small">
            <li><a href="http://www.eecis.udel.edu/%7Ezyu/CGI2011/">Project Website</a>
            </li>
          </div>
          </ul>`

const PUB_SUPP_2 = `<ul>
          <div class="li_small">
            <li><a href="LCPC_2010_optBeliefPropPresent.pdf">Presentation Slides</a></li>
          </div>
          </ul>`

const PUB_SUPP_1 = `<ul>
          <div class="li_small">
            <li><a href="wacvPoster2009.pptx">Presentation Poster</a></li>
            <li><a href="https://www.eecis.udel.edu/wiki/vims/index.php/Main/MotionBP">Project page</a></li>
            <li><a href="https://github.com/sgrauerg6/HierarchicalBPForStereoAndMotionToReduceSearchSpace">
              Code</a> (any work using this code should cite above paper)
            </li>
          </div>
          </ul>`

const PUB_SUPP_0 = `<ul>
          <div class="li_small">
            <li><a href="tampaCudaBeliefPropTalk.pdf">Presentation Slides</a></li>
            <li><a href="https://www.eecis.udel.edu/wiki/vims/index.php/Main/MotionGPU">Project
              page</a>
            </li>
          </div>
            <li><span class="bold_text">Code (any work using this code should cite above paper)</span></li>
            <ul>
              <div class="li_small">
              <li><a href="beliefPropCodePost.zip">Original Code</a></li>
              <li><a href="https://github.com/sgrauerg6/cudaBeliefProp">
                Updated Code w/ optimized CPU implementation in addition to CUDA</a>
              </li>
              </div>
						  <li><span class="bold_text">Relative speedup across various processors using updated code</span></li>
					    <ul>
                <div class="li_small">
                <div id="speedupsShown">
                </div>
                </li>
                  <button id="showMoreButton" onclick="showMoreToggle()">Show More</button>
                  <script type="text/javascript" src="js/speedups_show.js"></script>
                </div>
					    </ul>
            </ul>
					    <li><span class="bold_text">Follow-up 'paper' (2019): <a
                href="OptimizingGlobalStereoMatching.pdf">
                "Optimizing Global Stereo Matching on NVIDIA GPUs and CPUs"</a>
                </span>
              </li>
					  <ul>
              <div class="li_small">
              <div id="followup1Shown">
              </div>
              <button id="followup1InfoButton" onclick="followup1ShowToggle()">Show More</button>
              </div>
					  </ul>
              </li>
              <li>
                <span class="bold_text">Second follow-up 'paper' (2025): <a 
                href="OptimizedBpGpuVsCpu_Jan2025.pdf">
                "Optimized Parallel Belief Propagation on NVIDIA GPUs and CPUs"</a>
                </span>
              </li>
              <ul>
                <div class="li_small">
                <div id="followup2Shown">
                </div>
                <button id="followup2InfoButton" onclick="followup2ShowToggle()">Show More</button>
                </div>
              </ul>
              <script type="text/javascript" src="js/paper_info_show.js"></script>
            </ul>
          </ul>`

const IEEE_NOTICE = `&#169 20xx IEEE. Personal use of this material is permitted.
            Permission from IEEE must be obtained for all other uses, in
            any current or future media, including
            reprinting/republishing this material for advertising or
            promotional purposes, creating new collective works, for
            resale or redistribution to servers or lists, or reuse of
            any copyrighted component of this work in other works.`

const PAPER_INFO_FORMATTING = `<span class="secondary_color bold_text">`
const PAPER_INFO_FORMATTING_END = `</span>`

const PUBLICATIONS_INFO = [PUB_0, PUB_1, PUB_2, PUB_3, PUB_4, PUB_5, PUB_6];
const PUBLICATIONS_SUPP = [PUB_SUPP_0, PUB_SUPP_1, PUB_SUPP_2, PUB_SUPP_3, PUB_SUPP_4, PUB_SUPP_5, PUB_SUPP_6];
const SEE_IEE_NOTICE = `<span class="small_text">(See IEEE disclaimer below)</span>`;

function addPubInfo(paperNum) {
  let pubInfoID = "paperInfo_" + paperNum.toString();
  const paper_info_id = document.getElementById(pubInfoID);
  paper_info_id.innerHTML = PAPER_INFO_FORMATTING + PUBLICATIONS_INFO[paperNum] + PAPER_INFO_FORMATTING_END;
}

function addPubSupp(paperNum) {
  let pubSuppID = "paperSupp_" + paperNum.toString();
  const paper_supp_id = document.getElementById(pubSuppID);
  paper_supp_id.innerHTML = PUBLICATIONS_SUPP[paperNum];
}

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

addPubInfo(0);
addPubInfo(1);
addPubInfo(2);
addPubInfo(3);
addPubInfo(4);
addPubInfo(5);
addPubInfo(6);

//addPubSupp(0);
addPubSupp(1);
addPubSupp(2);
addPubSupp(3);
addPubSupp(4);
addPubSupp(5);
addPubSupp(6);

replaceTextInClass("seeIEEE", SEE_IEE_NOTICE);
addIEEENotice();

