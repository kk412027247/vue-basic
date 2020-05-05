var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: '学习 JavaScript'},
      {text: '学习 Vue'},
      {text: '整个牛项目'}
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});


var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: '蔬菜'},
      {id: 1, text: '奶酪'},
      {id: 2, text: '随便其它什么人吃的东西'}
    ]
  }
});

var vm = new Vue({
  el: '#example',
  data: {
    message: 'hello'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
});

var vm2 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  }
});


Vue.component('todo-item', {
  template: '\
  <li>\
  {{title}}\
  <button v-on:click="$emit(\'remove\')">Remove</button>\
  </li>\
  ',
  props: ['title']
});

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = ''
    }
  }
});

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
});

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function(event) {
      alert('Hello' + this.name + '!');

      if (event) {
        alert(event.target.tagName)
      }
    },
  }
});


new Vue({
  el: '#example-3',
  methods: {
    say: function(message) {
      alert(message)
    },
    warn: function(message, event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
});

new Vue({
  el: '#example-4',
  data: {
    message: '',
  }
});


new Vue({
  el: '#example-5',
  data: {
    checkedNames: []
  }
});

Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{count}} times.</button>'
});

new Vue({el: '#components-demo'});


Vue.component('blog-post', {
  props: ['post'],
  template: `
  <div class="blog-post"> 
    <h3>{{post.title}}</h3>
    <button v-on:click="$emit('enlarge-text', 0.1)">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
  `
});

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      {id: 1, title: 'My journey with Vue', content:'111'},
      {id: 2, title: 'Blogging with Vue', content:'222'},
      {id: 3, title: 'Why Vue is so fun', content:'333'}
    ],
    postFontSize:1,
  },
});


Vue.component('custom-input',{
  props:['value'],
  template:`
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)" 
    placeholder="custom-input" 
  >
  `
});

new Vue({
  el:'#input-demo',
  data:{
    value:''
  }
});


Vue.component('alert-box',{
  template:`
    <div>
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

new Vue({el:'#slot-example'});

Vue.component('tab-home',{
  template:'<div>Home component</div>'
});


Vue.component('tab-posts',{
  template:'<div>Posts component</div>'
});


Vue.component('tab-archive',{
  template:'<div>Archive component</div>'
});

new Vue({
  el:'#dynamic-component-demo',
  data:{
    currentTab:'Home',
    tabs: ["Home", "Posts", "Archive"]
  },
  computed: {
    currentTabComponent:function(){
      return 'tab-'+ this.currentTab.toLowerCase()
    }
  }
});
