
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
      let exo_index = randNum(0, (exercises.length-1));
      // let exo_name = exos[exo_index];
      this.exeObject = new exercises[exo_index];

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

Vue.component('Flexercise', {
  template : "#flexercise",
  data : function() {
    return {
      exeObject : null,
      result : null,
      title : "",
      question : "",
      code : "",
      resultText : "",
      currentInputComponent : "TFinput",
      currentInputProps : {"trueText":"True", "falseText":"False"}
    }
  },
  computed : {
    // Determines the class of the message div
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
      let exo_index = randNum(0, (exercises.length-1));
      this.exeObject = new exercises[exo_index];

      this.result = null;
      this.title = this.exeObject.title;
      // this.code = this.exeObject.code;
      this.code = hljs.highlight("javascript", this.exeObject.code).value;
      this.question = this.exeObject.question;

      let type = this.exeObject.inputType;
      if(type === "TrueOrFalse") {
        this.currentInputComponent = "TFinput";
        this.currentInputProps = {};
        this.currentInputProps.falseText = this.exeObject.choices[0];
        this.currentInputProps.trueText = this.exeObject.choices[1];
      }
      else if(type === "text" || type === "number") {
        this.currentInputComponent = "formInput";
        this.currentInputProps = {};
        this.currentInputProps.inputType = type;
      }
    },
    validExercise : function(input) {
      if(this.result !== null) return;
      this.result = this.exeObject.validate(input);
      if(this.result) this.resultText = "Yes ! Bien ouej !";
      else this.resultText = this.exeObject.feedback();
    }
  }
})

Vue.component('TFinput', {
  template : "#TrueOrFalse",
  props : ["trueText", "falseText"],
  methods : {
    inputTrue : function() {
      alert('true');
      this.$emit('trigger-valid', true);
    },
    inputFalse : function() {
      alert('false');
      this.$emit('trigger-valid', false);
    }
  }
});

Vue.component('formInput', {
  template : "#formInput",
  props : ["inputType"],
  data : function() {
    return {
      userInput : ""
    }
  },
  methods : {
    validateExercise : function() {
      console.log('validate');
      console.log(this.userInput);
      this.$emit('trigger-valid', this.userInput);
    }
  }
})

var vm = new Vue({
  el : '#app',
  data: {
    title: "",
    question : "",
    input : ""
  }
});
