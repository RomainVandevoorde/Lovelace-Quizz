let randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

textAnswerExercise = class {
  constructor() {
    this.input = this.createInput();
  }

  // Validates the user's input
  validate(input) {
    return (input.toString().trim() === this.answer.trim());
  }

  // Creates the DOM elements for user input
  createInput() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    form.appendChild(input);
    return form;
  }
}

boucles_for_string1 = class extends textAnswerExercise {
  constructor() {
    super();
    this.title = "Boucle 3";
    this.question = "Que contiendra <i>answer</i> une fois le code suivant exécuté ?";
    this.answer = "";

    // Init random variables
    this.nbInit = randNum(0, 10);
    this.nbLim = this.nbInit + randNum(3, 5);

    this.code = "let answer = \"\";\n\nfor(let i = " + this.nbInit + "; i < " + this.nbLim + "; i++) {";
    this.code += "\n    answer += i + \" \";";
    this.code += "\n}";

    for (let i = this.nbInit; i < this.nbLim; i++) {
      this.answer += i + " ";
    }
  }
}

window.onload = () => {

  let exoStr = "boucles_for_string1";
  let exo = new window[exoStr];

  const title = document.getElementsByTagName('h2')[0];
  const mainBlock = document.getElementById('test-1');
  const question = mainBlock.getElementsByTagName('p')[0];
  const code = mainBlock.getElementsByTagName('code')[0];
  const input = mainBlock.getElementsByClassName('user-input')[0];
  const answer = mainBlock.getElementsByTagName('p')[1];

  title.innerHTML = exo.title;
  question.innerHTML = exo.question;
  code.innerHTML = exo.code;
  exo.input.addEventListener('submit', function(e){
    e.preventDefault();
    let data = e.target[0].value;
    if(exo.validate(data)) alert("FÉLICITATIONS ENCULÉ !!!! ❤️❤️❤️❤️❤️❤️❤️");
    else answer.innerHTML = "Faux, la réponse était \""+exo.answer+"\"";
  });
  input.appendChild(exo.input);


  hljs.initHighlighting();

}
