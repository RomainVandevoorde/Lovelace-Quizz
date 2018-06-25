
let exos = ["boucles_for_nbiter_01", "boucles_while_nbiter_02", "boucles_while_nbiter_03", "boucles_for_nbiter_04", "boucles_for_concat_01"];

// Exercises that ask the user to guess what a code's result will be
Vue.component('exercise-type-1', {
  data : function() {
    return {
      title : "Titre",
      question : "Question ?",
      questionCode : "Code...",
      input : "input"
    }
  },
  template : '<div class="type1"><h1>{{ title }}</h1><p>{{ question }}</p><div>{{ questionCode }}</div><div>{{ input }}</div></div>'
});

// Exercises with text input
Vue.component('exercise-type-2', {
  template: "#exe-tpl-2",
  data: function() {
    return {
      exeObject : null,
      title: "",
      question: "",
      inputType: "",
      code: "",
      userInput : "",
      result : null,
      resultText : "placeholder"
    }
  },
  created : function() {
    this.loadExercise();
  },
  computed : {
    classObject : function() {
      return {
        'is-invisible' : this.result === null,
        'is-success' : this.result,
        'is-danger' : this.result !== null && !this.result
      }
    }
  },
  methods : {
    loadExercise : function() {
      // Select random exercise from the list
      // TODO exercise selection algorithm
      let exo_index = randNum(0, (exos.length-1));
      let exo_name = exos[exo_index];
      this.exeObject = new window[exo_name];

      // Reset some values
      this.result = null;
      this.userInput = "";

      // Fill the template with data
      this.title = this.exeObject.title;
      this.question = this.exeObject.question;
      this.inputType = this.exeObject.inputType;
      // Fill the code with highlighted content
      this.code = hljs.highlight("javascript", this.exeObject.code).value;
    },
    validateExercise : function() {
      if(this.result !== null) return;
      this.result = this.exeObject.validate(this.userInput);
      if(this.result) this.resultText = "Yes ! Bien ouej !";
      else this.resultText = this.exeObject.feedback();
    }
  },
});

var vm = new Vue({
  el : '#app',
  data: {
    title: "",
    question : "",
    input : ""
  }
});
