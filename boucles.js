

// let exe1 = {
//   question: "Quel va être le résultat de cette fonction ?"
// }
//
// let exe1gen = () => {
//   let nbInit = Math.floor(Math.random()*11);
//   let nbLim = nbInit + Math.floor(Math.random()*6);
//
//   // Mauvais nombre d'itérations
//   let fakeAns1 = "";
//   let fakeAns1Lim = null;
//   while(fakeAns1Lim === null || fakeAns1Lim === nbLim) {
//     fakeAns1Lim = Math.random()*
//   }
// }

let varNames = ['carrot', 'banana', 'apple', 'pear', 'peach', '']

let question = "Que retournera cette fonction ?";

let randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let loopStrInc = (init, lim) => {
  let str = "";
}

let exe1gen = () => {
  let question = "Que contiendra <i>answer</i> une fois le code suivant exécuté ?";
  let answer = "";
  let code = "";

  let nbInit = randNum(0,10);
  let nbLim = nbInit + randNum(3, 5);

  code = "let answer = \"\";\n\nfor(let i = "+nbInit+"; i < "+nbLim+"; i++) {";
  code += "\n    answer += i + \" \";";
  code += "\n}";

  for(let i = nbInit; i < nbLim; i++) {
    answer += i+" ";
  }

  return [question, code, {type: "text"}, answer];
}

let selectTest = (id) => {
  return document.getElementById('test-'+id);
}

// let populateTests = () => {
//
//   let test1 = exe1gen();
//   console.log(test1);
//   selectTest(1).getElementsByTagName('p')[0].innerHTML = test1[0];
//   selectTest(1).getElementsByTagName('code')[0].innerHTML = test1[1];
//   // selectTest(1).getElementsByTagName('p')[1].innerHTML = test1[3];
//   if(test1[2].type === "text") {
//     let input = document.createElement('input');
//     selectTest(1).appendChild(input);
//   }
//
// }

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

let populateTests = () => {

  let test1 = new ex1();
  selectTest(1).getElementsByTagName('p')[0].innerHTML = test1.question;
  selectTest(1).getElementsByTagName('code')[0].innerHTML = test1.code;
  // selectTest(1).getElementsByTagName('p')[1].innerHTML = test1.answer;
  if(test1.input === "text") {
    let form = document.createElement('form');
    let input = document.createElement('input');
    form.appendChild(input);
    selectTest(1).getElementsByClassName('user-input')[0].appendChild(form);
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log(this);
      let data = this.childNodes[0].value;
      if(test1.validate(data)) selectTest(1).getElementsByTagName('p')[1].innerHTML = "OK !";
      else selectTest(1).getElementsByTagName('p')[1].innerHTML = "Faux. La réponse était \""+test1.answer+"\"";
    });
  }

}

window.onload = () => {
  populateTests();
  hljs.initHighlighting();
}
