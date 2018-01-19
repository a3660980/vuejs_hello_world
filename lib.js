new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!!'
    }
  })
  
  var app2 = new Vue({ 
    el: '#app-2' , 
    data: { 
      message: '頁面加載於' + new  Date ().toLocaleString() ,
      title: '第二個訊息'
    } 
  })

  var app3 = new Vue({ 
    el: '#app-3' , 
    data: { 
      seen: true
     } 
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '學習 JavaScript' },
        { text: '學習 Vue' },
        { text: '整個牛項目' }
      ]
    }
  })

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
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
      message: 'Hello Vue!',
      test: 'hello world!'
    }
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  })