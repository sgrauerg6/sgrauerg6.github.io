const TEACHING_INFO = `<li><span class="bold_text">Taught CISC 101 in summer 2009</span></li>`;

const TAING_HEADER = 
  `<li><span class="bold_text">Worked as a TA for the following courses at the University of Delaware</span></li>`
const TAING_INFO = `
  <li>CISC 101 - Computers and Information Systems (fall 2007, winter 2009, fall 2014, winter 2015)</li>
  <li>CISC 106 - General Computer Science (fall 2008, fall 2009, spring 2010)</li>
  <li>CISC 181 - Introduction to Computer Science II (spring 2007, summer 2007)</li>
  <li>CISC 220 - Data Structures (spring 2009, fall 2012)</li>
  <li>CISC 303 - Automata Theory (spring 2010)</li>
  <li>CISC 320 - Intro to Algorithms for undergrads (fall 2007)</li>
  <li>CISC 401/601 - Elements of Theory of Computation for undergrads and grads (fall 2009, spring 2014)</li>
  <li>CISC 440/640 - Computer Graphics for undergrads and grads (spring 2015)</li>
  <li>CISC 481/681 - Artificial Intelligence for undergrads and grads (fall 2014)</li>;`

  function addTeachingTAInfo() {
    document.getElementById('teaching_info').innerHTML = TEACHING_INFO;
    document.getElementById('taing_header').innerHTML = TAING_HEADER;
    document.getElementById('taing_info').innerHTML = TAING_INFO;
  }

  addTeachingTAInfo();