const RESEARCH_1_HEADING = 
  `<a href="http://cavazos-lab.github.io/">Dr. Cavazos' Research Lab</a>
   (high-performance computing, cybersecurity, machine learning,
    predictive analytics, and the application of these technologies
    to hard problems that if solved will make a societal and/or industrial
    impact): June 2009 - May 2015`;

const RESEARCH_1_INFO = 
  `<li>Worked on code transformations to optimize CUDA kernels which are run
       on the GPU, including using different modes of storage (local memory,
       shared memory, and registers) and loop unrolling, and applying these
       transformations to optimize CUDA belief propagation implementation.<br>
   </li>
   <li>Worked on framework to generate code transformations to optimize any
       given CUDA or OpenCL program using directives in the HMPP toolkit from
       CAPS Enterprise.<br>
   </li>
   <li>Worked on using GPUs to speed up financial applications using native
       CUDA/OpenCL and also using OpenACC and HMPP directives.<br>
   </li>`;

const RESEARCH_2_HEADING =
  `<a href="https://www.eecis.udel.edu/wiki/vims/">
   Video/Image Modeling and Synthesis Laboratory</a> (run by Dr. Chandra
   Kambhamettu): September 2006-June 2009`;

const RESEARCH_2_INFO = 
  `<li>Worked on tracking the motion of sea ice from Satellite
       Imagery, traveled to APLIS '07 ice camp in the arctic.
   </li>
   <li>Implemented stereo/motion algorithms with the goal of tracking cloud
       motion from a sequence of satellite imagery, with a focus on taking
       advantage of the GPU to allow the results to be processed in real-time.
   </li>`;

const RESEARCH_3_HEADING = `Research as part of course projects`;

const RESEARCH_3_INFO =
  `<li>Implemented photon mapping on the GPU using CUDA as a
       project for an advanced graphics course entitled 'Rendering 
       and Image Synthesis'.
   </li>
   <li>Programmed a CUDA implementation of autostereoscopic image
       generation using a light field for a Computational Photography course.
   </li>`;

function addResearchInfo() {
  document.getElementById('research_heading_1').innerHTML = RESEARCH_1_HEADING;
  document.getElementById('research_info_1').innerHTML = RESEARCH_1_INFO;
  document.getElementById('research_heading_2').innerHTML = RESEARCH_2_HEADING;
  document.getElementById('research_info_2').innerHTML = RESEARCH_2_INFO;
  document.getElementById('research_heading_3').innerHTML = RESEARCH_3_HEADING;
  document.getElementById('research_info_3').innerHTML = RESEARCH_3_INFO;
}

addResearchInfo();