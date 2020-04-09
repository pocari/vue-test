var app1 = new Vue({
   el: '#app-1',
   data: {
     message: 'hello, vue-test'
   }
})

var app2 = new Vue({
   el: '#app-2',
   data: {
     message: 'You loaded this page on ' + new Date()
   }
})

var app3 = new Vue({
   el: '#app-3',
   data: {
     seen: true,
   }
})

var app4 = new Vue({
   el: '#app-4',
   data: {
     todos: [
       { text: 'text1' },
       { text: 'text2' },
       { text: 'text3' },
     ]
   }
})

var app5 = new Vue({
   el: '#app-5',
   data: {
     message: 'hello, vue.js',
   },
   methods: {
     reverseMessage: function () {
       this.message = this.message.split('').reverse().join('')
     }
   }
})

var app6 = new Vue({
   el: '#app-6',
   data: {
     message: 'hello, vue.js',
   },
})

Vue.component('todo-item', {
  props: [
    'todo',
  ],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
   el: '#app-7',
   data: {
     groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Chese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
     ]
   },
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannnot give you an answer until you ask a question',
    },
    watch: {
      question: function(newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        console.log("question changed");
        this.debouncedGetAnswer();
      }
    },
    created: function () {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: async function () {
        console.log("getAnser called")
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking ...'
        try {
          const res = await axios.get('https://yesno.wtf/api')
          this.answer = _.capitalize(res.data.answer)
        } catch (e) {
          this.answer = 'Error! Could not reach the API. ' + e
        }
      }
    }
})
