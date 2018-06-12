
let varNames = ['carrot', 'banana', 'apple', 'pear', 'peach', ''];

let randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let selectTest = (id) => {
  return document.getElementById('test-'+id);
}

function ex1() {
  this.question = "Que contiendra <i>answer</i> une fois le code suivant exécuté ?";
  this.input = "text";
  this.answer = "";
  this.code = "";

  // Init random variables
  this.nbInit = randNum(0,10);
  this.nbLim = this.nbInit + randNum(3, 5);

  this.code += "let answer = \"\";\n\nfor(let i = "+this.nbInit+"; i < "+this.nbLim+"; i++) {";
  this.code += "\n    answer += i + \" \";";
  this.code += "\n}";

  for(let i = this.nbInit; i < this.nbLim; i++) {
    this.answer += i+" ";
  }

  this.answer = this.answer.trim();

  this.validate = (input) => {
    if(input.toString().trim() === this.answer) return true;
    else return false;
  }
}
/* The event fired for a text input-based question
form: DOM object
exe: Exercise object (must have validate method)
*/
let textInputEvent = (form, exe, ev) => {
  // Prevent form submit
  ev.preventDefault();
  // Get user input value
  let data = form.getElementsByTagName('input')[0].value;

  // Get DOM element to contain feedback
  let answerBlock = form.parentNode.parentNode.getElementsByTagName('p')[1];

  // Check answer and give feedback
  if(exe.validate(data)) answerBlock.innerHTML = "OK ~";
  else answerBlock.innerHTML = "~ Faux. La réponse était \""+exe.answer+"\"";

}

let populateTests = () => {

  let test1 = new ex1();
  selectTest(1).getElementsByTagName('p')[0].innerHTML = test1.question;
  selectTest(1).getElementsByTagName('code')[0].innerHTML = test1.code;
  // selectTest(1).getElementsByTagName('p')[1].innerHTML = test1.answer;
  if(test1.input === "text") {
    // Create DOM elements
    let form = document.createElement('form');
    let input = document.createElement('input');
    // Add them to the tree
    form.appendChild(input);
    selectTest(1).getElementsByClassName('user-input')[0].appendChild(form);
    // Attach event handler to the form
    form.addEventListener('submit', function(e) {
      textInputEvent(this, test1, e);
    });
  }

}

window.onload = () => {
  populateTests();
  hljs.initHighlighting();
}
