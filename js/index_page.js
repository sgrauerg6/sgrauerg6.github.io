const GRAD_SCHOOL_DESC = `
Masters graduate (and PHD dropout) from the <a href="http://www.cis.udel.edu/">
Computer and Information Sciences</a> at the <a href="http://www.udel.edu/">University
of Delaware</a>. First worked with <a href="http://www.cis.udel.edu/%7Echandra/">
Dr. Chandra Kambhamettu</a> in the <a href="https://www.eecis.udel.edu/wiki/vims/">
Video/Image Modeling and Synthesis Lab</a> (VIMS); later changed advisors and worked with <a
href="https://www.eecis.udel.edu/~cavazos">Dr. John Cavazos</a> in 
<a href="http://cavazos-lab.github.io/">his lab</a> on high-performance computing.<br>`

const WORK_1_DESC = `
Worked at <a href="http://www.faro.com/en-us/home">Faro Technologies</a> on the 
<a href="https://www.faro.com/products/3d-manufacturing/faro-laser-tracker">Laser Tracker</a>
from December 2015 to February 2019 (See videos <a href="https://www.youtube.com/watch?v=lvbMai23vAQ">here</a> 
and <a href="https://www.youtube.com/watch?v=_kLzams-yaU">here</a> for more info about Faro Laser Tracker).<br>`

const WORK_2_DESC = `
Worked at <a href="https://www.canfieldsci.com/">Canfield Scientific</a>
on software for medical devices such as the 
<a href="https://www.canfieldsci.com/imaging-systems/vectra-wb360-imaging-system/">Vectra WB360</a> 
and <a href="https://www.canfieldsci.com/imaging-systems/intellistudio-derm/">IntelliStudio</a> 
from October 2019 to October 2024 (See brochures 
<a href="https://www.canfieldsci.com/common/docs/products/11/brochures/VECTRAWB360brochure.pdf">here</a> 
and <a href="https://www.canfieldsci.com/common/docs/products/55/brochures/IS3-DermXBrochure.pdf">here</a> 
for more info about the devices).`

const CONTACT_EMAIL=`Email: <a href="mailto:sgrauerg@gmail.com">sgrauerg@gmail.com</a>`
const CONTACT_RESUME=`Resume: <a href="https://sgrauerg6.github.io/resumeScottGrauerGray_updated.pdf">Resume</a>`
const CONTACT_GITHUB=`GitHub: <a href="https://github.com/sgrauerg6">https://github.com/sgrauerg6</a>`
const CONTACT_GOOGLE_SCHOLAR=`Google Scholar: <a href="https://scholar.google.com/citations?user=y35b43QAAAAJ">https://scholar.google.com/citations?user=y35b43QAAAAJ</a>`
const CONTACT_LINKEDIN=`LinkedIn: <a href="https://www.linkedin.com/in/scott-grauer-gray-30992a1a">https://www.linkedin.com/in/scott-grauer-gray-30992a1a</a>`

const DELIVERY_DESC_INDEX_PAGE = `
  <span class="secondary_color bold_text">
  Jersey City, Manayunk, and Philadelphia Center City areas</span>
  <ul style="margin-top: 0px; margin-bottom: 0px; margin-left: 5px; margin-right: 0px; padding-top: 0px; padding-bottom: 0px; padding-left: 10px; padding-right: 0px;">
    <div class="small_text">
    <li>Deliveries for Grubhub, Uber Eats, DoorDash, Caviar, and Hungry Panda</li>
    <li>2-speed Brompton folding bike used for deliveries in Jersey City and Philadelphia Center City</li>
    <li>Gocycle GX folding e-bike used for deliveries in Manayunk area</li>
    </div>
  </ul>`

const RESEARCH_INTERESTS_DESC = `
  <ul>
    <li>High performance computing and optimization, particularly on graphics processing units (GPUs) using
        CUDA, OpenCL, and directive-based languages
    </li>
    <li>Applications of high performance computing, specifically as used for financial applications,
        benchmark suites, and real-time stereo analysis/motion estimation from a pair/sequence of images
    </li>
  </ul>`

const INDEX_PAGE_PIC = `<img style="width: 263px; height: 179px;" alt="picOfMe" src="Scott.jpg">`
 
const gradSchoolContent = document.getElementById("gradSchool");
const work1Content = document.getElementById("work1");
const work2Content = document.getElementById("work2");

const contactEmailContent = document.getElementById('contactEmail');
const contactResumeContent = document.getElementById('contactResume');
const contactGithubContent = document.getElementById('contactGithub');
const contactGoogleScholarContent = document.getElementById('contactGoogleScholar');
const contactLinkedInContent = document.getElementById('contactLinkedIn');

const deliveryDescIndexPageContent = document.getElementById('deliveryDescIndexPage');

const researchInterestsContent = document.getElementById('researchInterestsDesc');

const indPagePicContent = document.getElementById('indexPagePic');

const DELIVERY_DESC = `
  <span class="secondary_color bold_text">
  Jersey City, Manayunk, and Philadelphia Center City areas</span>
  <div class="small_text">
  <li>Deliveries for Grubhub, Uber Eats, DoorDash, Caviar, and Hungry Panda</li>
  <li>2-speed Brompton folding bike used for deliveries in Jersey City and Philadelphia Center City</li>
              <li>Gocycle GX folding e-bike used for deliveries in Manayunk area</li>
            </div>`

function addGradSchoolWorkInfo() {
  gradSchoolContent.innerHTML = GRAD_SCHOOL_DESC;
  work1Content.innerHTML = WORK_1_DESC;
  work2Content.innerHTML = WORK_2_DESC;
}

function addContactInfo() {
  contactEmailContent.innerHTML = CONTACT_EMAIL;
  contactResumeContent.innerHTML = CONTACT_RESUME;
  contactGithubContent.innerHTML = CONTACT_GITHUB;
  contactGoogleScholarContent.innerHTML = CONTACT_GOOGLE_SCHOLAR;
  contactLinkedInContent.innerHTML = CONTACT_LINKEDIN;
}

function addDeliveryDesc() {
  deliveryDescIndexPageContent.innerHTML = DELIVERY_DESC_INDEX_PAGE;
}

function addResearchInterestsDesc() {
  researchInterestsContent.innerHTML = RESEARCH_INTERESTS_DESC;
}

function addIndexPagePic() {
  indPagePicContent.innerHTML = INDEX_PAGE_PIC;
}

addGradSchoolWorkInfo();
addContactInfo();
addDeliveryDesc();
addResearchInterestsDesc();
addIndexPagePic();
