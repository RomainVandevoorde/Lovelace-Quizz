

let storeVersion = (v) => {
  window.localStorage.setItem("version", v);
}


/**
 * [incrementExerciseSuccess store number of times exercise was achieved]
 * @param  {[str]} name [Name of the exercise]
 * @return {[void]}      []
 */
let incrementExerciseSuccess = (name) => {
  let currentValue = parseInt(window.localStorage.getItem(name));
  if(currentValue) {
    window.localStorage.setItem(name, ++currentValue);
  }
  else {
    window.localStorage.setItem(name, 1);
  }
}

/**
 * loadExercise - populates the DOM with a chosen exercise
 * @param {string} name The class name of the exercise to load
 *
 * @returns {void}
 */
let loadExercise = (name) => {
  const title = document.getElementsByTagName('h2')[0];
  const mainBlock = document.getElementById('test-1');
  // Question block
  const question = mainBlock.getElementsByTagName('p')[0];
  const code = mainBlock.getElementsByTagName('code')[0];
  const input = mainBlock.getElementsByClassName('user-input')[0];
  const answer = mainBlock.getElementsByTagName('p')[1];

  // Create an instance of the chosen exercise
  let exe = new window[name];

  // Populate the DOM
  title.innerHTML = exe.title || name;
  question.innerHTML = exe.question;
  code.innerHTML = exe.code;

  // Events
  exe.input.addEventListener('submit', function(e){
    e.preventDefault();
    let data = e.target[0].value;
    // Bonne réponse
    if(exe.validate(data)) {
      answer.innerHTML = 'Yes ! Bravo ! :D';
      incrementExerciseSuccess(name);
      answer.innerHTML += '<br>Tu as réussi cet exercice '+window.localStorage.getItem(name)+' fois.';
      loadExercise(name);
    }
    // Mauvaise réponse
    else {
      answer.innerHTML = exe.feedback;
      answer.innerHTML += '. <a href="#" onclick="loadExercise(\''+name+'\')">Réessayer</a>';
    }
  });
  input.innerHTML = "";
  input.appendChild(exe.input);
  input.getElementsByTagName('input')[0].focus();

  hljs.highlightBlock(code);
}


window.onload = () => {

  let exeStr = "boucles_while_nbiter_02";

  loadExercise(exeStr);
  storeVersion(1);

  let links = document.getElementsByTagName('a');
  let linksNb = links.length;

  for(let i = 0; i < linksNb; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      if(e.target.dataset.exe) loadExercise(e.target.dataset.exe);
    });
  }

}
