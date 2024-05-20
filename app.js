const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    counter(value){
      if (value > 100){
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName(){

      if(this.name ==''){
        return '';
      }
      return this.name + ' ' + 'LAST'

    }
  },
  methods: {
    outputFullName(){
      if(this.name ==''){
        return '';
      }
      return this.name + ' ' + 'LAST'
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
