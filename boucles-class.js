let randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

textAnswerExercise = class {
  constructor() {
    this.input = this.createInput();
  }

  // Validates the user's input
  validate(input) {
    return (input.toString().trim() === this.answer);
  }

  // Creates the DOM elements for user input
  createInput() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    form.appendChild(input);
    return form;
  }
}

boucles_for_string_01 = class extends textAnswerExercise {
  constructor() {
    super();
    this.title = "Boucle 3";
    this.question = "Que contiendra <i>answer</i> une fois le code suivant exécuté ?";

    // Init random variables
    this.nbInit = randNum(0, 10);
    this.nbLim = this.nbInit + randNum(3, 5);

    this.code = "let answer = \"\";\n\nfor(let i = " + this.nbInit + "; i < " + this.nbLim + "; i++) {";
    this.code += "\n    answer += i + \" \";";
    this.code += "\n}";

    this.answer = "";
    for (let i = this.nbInit; i < this.nbLim; i++) {
      this.answer += i + " ";
    }
    this.answer = this.answer.trim();

    this.feedback = "Faux, la bonne réponse était \""+this.answer+"\"";
  }
}

loadExe = (fct) => {
  const title = document.getElementsByTagName('h2')[0];
  const mainBlock = document.getElementById('test-1');
  // Question block
  const question = mainBlock.getElementsByTagName('p')[0];
  const code = mainBlock.getElementsByTagName('code')[0];
  const input = mainBlock.getElementsByClassName('user-input')[0];
  const answer = mainBlock.getElementsByTagName('p')[1];

  let exe = new window[fct];

  title.innerHTML = exe.title;
  question.innerHTML = exe.question;
  code.innerHTML = exe.code;
  exe.input.addEventListener('submit', function(e){
    e.preventDefault();
    let data = e.target[0].value;
    if(exe.validate(data)) alert("FÉLICITATIONS ENCULÉ !!!! ❤️❤️❤️❤️❤️❤️❤️");
    else answer.innerHTML = exe.feedback;
  });
  input.appendChild(exe.input);
}

window.onload = () => {

  let exeStr = "boucles_for_string_01";

  loadExe(exeStr);



  hljs.initHighlighting();

}
