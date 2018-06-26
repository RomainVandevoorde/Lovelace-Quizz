
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
    this.inputType = "text";
  }

  feedback() {
    return 'Faux, la bonne réponse était "' + this.answer + '"';
  }

  // Validates the user's input
  validate(input) {
    return (input.toString().trim() === this.answer);
  }
}

numberAnswerExercise = class {
  constructor() {
    this.inputType = "number";
  }

  validate(input) {
    return (parseInt(input) === this.answer);
  }

  feedback() {
    return 'Faux, la bonne réponse était ' + this.answer;
  }
}

multipleChoiceExercise = class {
  constructor() {
    this.inputType = "TrueOrFalse";
  }

  validate(data) {
    return (data === this.answer);
  }

  feedback() {
    return 'Faux, la bonne réponse était <b>'+this.answer+'</b>';
  }
}

/**
 *
 * EXERCISES
 *
 */

let exercises = [];

exercises[0] = class extends numberAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Nombre d'itérations 1";
    this.question = "Combien d'itérations de cette boucle seront exécutées ?";

    let nbInit = randNum(0, 10);
    let nbLim = nbInit + randNum(3, 5);

    this.code = 'for(let i = ' + nbInit + '; i < ' + nbLim + '; i++) {';
    this.code += '\n    console.log(i);';
    this.code += '\n}';

    this.answer = nbLim - nbInit;
  }
}

exercises[1] = class extends numberAnswerExercise {
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
  }
}

exercises[2] = class extends numberAnswerExercise {
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
  }
}

exercises[3] = class extends numberAnswerExercise {
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
  }
}


exercises[4] = class extends textAnswerExercise {
  constructor() {
    super();
    this.title = "Boucles - Concaténation 1";
    this.question = "Que contiendra <i>answer</i> une fois le code suivant exécuté ?";

    // Init random variables
    let nbInit = randNum(0, 10);
    let nbLim = nbInit + randNum(3, 5);

    this.code = "let answer = \"\";\n\nfor(let i = " + nbInit + "; i < " + nbLim + "; i++) {";
    this.code += "\n    answer += i + \" \";";
    this.code += "\n}";

    this.answer = "";
    for (let i = nbInit; i < nbLim; i++) {
      this.answer += i + " ";
    }
    this.answer = this.answer.trim();
  }
}

exercises[5] = class extends multipleChoiceExercise {
  constructor() {
    super();
    this.title = "Opérateurs - Comparaison 1";
    this.question = "Que vaudra <i>answer</i> une fois ce code exécuté ?";

    let nb1 = randNum(0, 8);
    let nb2 = nb1 + randNum(1, 4);

    this.code = "let answer = "+nb1+" < "+nb2+";";
    this.answer = true;
    this.choices = ["false", "true"];
  }
}

let exerciseDependencies = {

}
