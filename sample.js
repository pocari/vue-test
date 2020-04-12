var app1 = new Vue({
   el: '#app-1',
   data: {
     message: 'hello, vue-test'
   }
})

var app2 = new Vue({
   el: '#app-2',
   data: {
     message: 'You loaded this page on ' + new Date() }
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

var classBinding1 = new Vue({
  el: '#class-binding1',
  data: {
    isActive: true,
    hasError: false,
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive,
        'text-danger': this.hasError,
        'sample-hoge': true,
      }
    }
  }
})

var ifTest = new Vue({
  el: '#if-test',
  data: {
    condition: false,
    isShow: false,
  }
})

Vue.component('button-counter', {
  props: [
    "post"
  ],
  data: function () {
    return {
      count: 0
    }
  },
  template: `
    <div>
      <h3> {{ post.content }}</h3>
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>
      <button @click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
    </div>
  `
})

var componentTest = new Vue({
  el: '#components-demo',
  data: {
      posts: [
        {
          id: 1,
          content: "hello statement1",
        },
        {
          id: 2,
          content: "hello statement2",
        },
        {
          id: 3,
          content: "hello statement3",
        },
        {
          id: 4,
          content: "hello statement4",
        },
      ],
      postFontSize: 1,
  },
  methods: {
      enlargeText: function (delta) {
        this.postFontSize += delta
      }
  }
})

Vue.component('custom-input', {
  props: {
    value: String
  },
  template: `
      <div>
        <input
          :value="value"
          @input="$emit('input', $event.target.value)"
        >
        <span>value: {{ value }} </span>
      </div>
  `
})

var componentTest2 = new Vue({
  el: '#components-demo2',
  data: {
    searchText: 'hoge'
  }
})
