
/**
 * [randNum generates a random number between a min and a max]
 * @param  {number} min The (included) minimum value possible
 * @param  {number} max The (included) maximum possible value
 * @return {number}     A random int between min and max
 */
let randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * [textAnswerExercise Utility functions for exercises which take a string as user input]
 */
textAnswerExercise = class {
  constructor() {
    this.input = this.createInput();
    this.inputType = "text";
  }

  feedback() {
    return 'Faux, la bonne réponse était "' + this.answer + '"';
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
    return form.innerHTML;
  }
}

numberAnswerExercise = class {
  constructor() {
    this.input = this.createInput();
    this.inputType = "number";
  }

  validate(input) {
    return (parseInt(input) === this.answer);
  }

  feedback() {
    this.feedback = 'Faux, la bonne réponse était ' + this.answer;
  }

  createInput() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.type = 'number';
    form.appendChild(input);
    return form;
  }
}

/**
 *
 * EXERCISES
 *
 */

boucles_for_nbiter_01 = class extends numberAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Nombre d'itérations 1";
    this.question = "Combien d'itérations de cette boucle seront exécutées ?";

    this.nbInit = randNum(0, 10);
    this.nbLim = this.nbInit + randNum(3, 5);

    this.code = 'for(let i = ' + this.nbInit + '; i < ' + this.nbLim + '; i++) {';
    this.code += '\n    console.log(i);';
    this.code += '\n}';

    this.answer = this.nbLim - this.nbInit;
    // this.feedback = 'Faux, la bonne réponse était "' + this.answer + '"';
  }
}

boucles_while_nbiter_02 = class extends numberAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Nombre d'itérations 2";
    this.question = "Combien d'itérations de cette boucle seront exécutées ?";

    this.nbInit = randNum(0,10);
    this.nbLim = this.nbInit + randNum(3,5);

    this.code = 'let i = '+this.nbInit+';'
    this.code += '\n\nwhile(i < '+this.nbLim+') {';
    this.code += '\n    i++;';
    this.code += '\n}';

    this.answer = this.nbLim - this.nbInit;
    // this.feedback = 'Faux, la bonne réponse était "' + this.answer + '"';
  }
}

boucles_while_nbiter_03 = class extends numberAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Nombre d'itérations 3";
    this.question = "Combien d'itérations de cette boucle seront exécutées ?";

    this.nbInit = randNum(0,6);
    this.nbLim = this.nbInit + randNum(2,4)*2;

    this.code = 'let i = '+this.nbInit+';'
    this.code += '\n\nwhile(i < '+this.nbLim+') {';
    this.code += '\n    i += 2;';
    this.code += '\n}';

    this.answer = (this.nbLim - this.nbInit)/2;
    // this.feedback = 'Faux, la bonne réponse était "' + this.answer + '"';
  }
}

boucles_for_nbiter_04 = class extends numberAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Nombre d'itérations 4";
    this.question = "Combien d'itérations de cette boucle seront exécutées ?";

    this.nbInit = randNum(0, 6);
    this.nbLim = this.nbInit + randNum(3, 5)*2;

    this.code = 'for(let i = ' + this.nbInit + '; i < ' + this.nbLim + '; i += 2) {';
    this.code += '\n    console.log(i);';
    this.code += '\n}';

    this.answer = (this.nbLim - this.nbInit)/2;
    // this.feedback = 'Faux, la bonne réponse était "' + this.answer + '"';
  }
}


boucles_for_concat_01 = class extends textAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Concaténation 1";
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

    // this.feedback = "Faux, la bonne réponse était \""+this.answer+"\"";
  }
}
