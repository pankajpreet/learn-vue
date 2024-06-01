const app = Vue.createApp({
  beforeCreate(data){
    console.log('beforecreated',data)
  },
  created(data){
    console.log('created',data)
  },
  beforeMount(data){
    console.log('beforeMount',data)
  },
  mounted(data){
    console.log('mounted',data)
  },
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');
