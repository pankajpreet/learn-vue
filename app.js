const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "John Doe"
    };
  },
  methods:{
    incrementCounter(num){
      this.counter = this.counter + num
    },
    decrementCounter(){
      this.counter = this.counter - 1
    },
    setName(event, lastName){
      this.name = event.target.value  + lastName
    },
    submitForm(event){      
      alert('submitted')
    }


  },
});

app.mount('#events');
