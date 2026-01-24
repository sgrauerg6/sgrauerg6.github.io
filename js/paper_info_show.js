const FOLLOWUP_1_SHOW = `
<li>Describes additional CUDA code optimizations with evaluation on multiple GPUs including Tesla V100.</li>
<li>Introduces parallel CPU implementation using OpenMP, SIMD instructions, and the same optimizations as the CUDA code, with evaluation on multiple CPUs.</li>
<li>TLDR #1: Was able to get a speedup of over 2x on many tests with no loss of accuracy by (1) getting rid of many cudaMalloc()/cudaFree() calls, (2) using 16-bit half precision data rather than 32-bit floats, and (3) improving data alignment.</li>
<li>TLDR #2: Parallel/optimized CPU implementation much faster than initial non-parallel code, but optimized CUDA implementation on Tesla V100 is still 1.9x-4.2x faster than optimized CPU implementation on 24-core Xeon CPU.</li>`

const FOLLOWUP_2_SHOW = `
<li><b>Processors benchmarked</b>
<ul>
<li>NVIDIA GPUs: H100, A100, RTX 3090 Ti</li>
<li>x86 CPUs: AMD Genoa, Intel Emerald Rapids</li>
<li>ARM CPUs: Amazon Graviton4, Azure Cobalt, NVIDIA Grace</li>
</ul>
<li><b>Abstract:</b> Parallel processing is a common way to speed up many computer vision algorithms including stereo matching.  This work
looks at optimized parallel implementations of belief propagation for stereo processing on NVIDIA GPU and x86/ARM
CPU architectures and shows runtime comparisons across multiple GPU and CPU processors on a variety of input stereo
sets.  The work goes on to present and show results of retrieving an optimized parallel configuration for each input
stereo set, speedups/slowdowns when using 16-bit floats and 64-bit doubles compared to 32-bit floats, and speedups
when using templated disparity counts that allow the iteration counts of loops that iterate through possible disparities
to be known at compile time.</li>`

//boolean variables indicating whether or not showing more info is currently toggled and shown
let showMore1, showMore2;

function followup1ShowToggle() {
  const followup1Btn = document.getElementById("followup1InfoButton");
  const followup1Content = document.getElementById("followup1Shown");
  if ((showMore1 === undefined) || showMore1) {
    showMore1 = false;
    followup1Btn.innerHTML = "Show More";
    followup1Content.innerHTML = "";
    followup1Btn.style.backgroundColor = "lightblue";
    followup1Btn.style.color = "black";
    followup1Btn.style.fontSize = "12px";
    followup1Btn.style.borderWidth = "0px";
  }
  else {
    showMore1 = true;
    followup1Btn.innerHTML = "Show Less";
    followup1Content.innerHTML = FOLLOWUP_1_SHOW;
    followup1Btn.style.backgroundColor = "lightblue";
    followup1Btn.style.color = "black";
    followup1Btn.style.fontSize = "12px";
    followup1Btn.style.borderWidth = "0px";
  }  
}

function followup2ShowToggle() {
  const followup2Btn = document.getElementById("followup2InfoButton");
  const followup2Content = document.getElementById("followup2Shown");
  if ((showMore2 === undefined) || showMore2) {
    showMore2 = false;
    followup2Btn.innerHTML = "Show More";
    followup2Content.innerHTML = "";
    followup2Btn.style.backgroundColor = "lightblue";
    followup2Btn.style.color = "black";
    followup2Btn.style.fontSize = "12px";
    followup2Btn.style.borderWidth = "0px";
  }
  else {
    showMore2 = true;
    followup2Btn.innerHTML = "Show Less";
    followup2Content.innerHTML = FOLLOWUP_2_SHOW;
    followup2Btn.style.backgroundColor = "lightblue";
    followup2Btn.style.color = "black";
    followup2Btn.style.fontSize = "12px";
    followup2Btn.style.borderWidth = "0px";
  }  
}

followup1ShowToggle();
followup2ShowToggle();
