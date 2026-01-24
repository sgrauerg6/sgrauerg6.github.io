const TEACHING_INFO = `<li><span class="bold_text">Taught CISC 101 in summer 2009</span></li>`;

const TAING_HEADER = 
  `<li><span class="bold_text">Worked as a TA for the following courses at the University of Delaware</span></li>`

class TaClass {
  constructor(department, course_name, semesters, undergrad_num, grad_num = undefined) {
    this.department = department;
    this.course_name = course_name;
    this.semesters = semesters;
    this.undergrad_num = undergrad_num;
    this.grad_num = grad_num;
  }

  toString() {
    let taClassStr = this.department + ` ` + this.undergrad_num.toString();
    if (this.grad_num !== undefined) {
      taClassStr += `/` + this.grad_num.toString();
    }
    taClassStr += ` - ` + this.course_name + ` (`;
    this.semesters.forEach(function(semester) {
      taClassStr += semester + `, `;
    });
    //remove comma after last semester and add closing parenthesis
    taClassStr = taClassStr.slice(0, -2);
    taClassStr += `)`;
    return taClassStr;
  }
}

const ta_classes = [
  new TaClass("CISC", "General Computer Science", ["fall 2008", "fall 2009", "spring 2010"], 106),
  new TaClass("CISC", "Data Structures", ["spring 2009", "fall 2012"], 220),
  new TaClass("CISC", "Intro to Algorithms for undergrads", ["fall 2007"], 320),
  new TaClass("CISC", "Introduction to Computer Science II", ["spring 2007", "summer 2007"], 181),
  new TaClass("CISC", "Artificial Intelligence for undergrads and grads", ["fall 2014"], 481, 681),
  new TaClass("CISC", "Elements of Theory of Computation for undergrads and grads", ["fall 2009, spring 2014"], 401, 601),
  new TaClass("CISC", "Computers and Information Systems", ["fall 2007, winter 2009, fall 2014, winter 2015"], 101),
  new TaClass("CISC", "Automata Theory", ["spring 2010"], 303),
  new TaClass("CISC", "Computer Graphics for undergrads and grads", ["spring 2015"], 440, 640)
];

function addTeachingTAInfo() {
  document.getElementById('teaching_info').innerHTML = TEACHING_INFO;
  document.getElementById('taing_header').innerHTML = TAING_HEADER;
  const taClassesList = document.getElementById('taing_list_id');
  //sort ta classes by undergrad course number and add to list
  //for display in order
  ta_classes.sort((a, b) => a.undergrad_num - b.undergrad_num);
  ta_classes.forEach(function(ta_class) {
    const newLi = document.createElement('li'); 
    newLi.textContent = ta_class.toString(); 
    taClassesList.appendChild(newLi);
  });
}

addTeachingTAInfo();