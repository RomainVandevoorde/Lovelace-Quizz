

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

Vue.component('exercise-type-2', {
  template: "#exe-tpl",
  data: function() {
    return {
      title: "Exe 2",
      question: "Q2",
      input: "text type",
      code: "empty"
    }
  },
  methods : {
    loadExercise : function() {
      let exe = new window["boucles_for_concat_01"];
      this.title = exe.title;
      this.question = exe.question;

      this.code = hljs.highlight("javascript", exe.code).value;
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
