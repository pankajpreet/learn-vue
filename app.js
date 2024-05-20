const app = Vue.createApp({
    data(){
       return {
            result: 0
        }
    },
    methods:{
        add(num){
            this.result = this.result + num
        }
    },
    computed:{
        printResult(){
            if (this.result < 37){
                return 'not there yet!!'
            } else if(this.result > 37){
                return 'too much'
            } else{
                return '37'
            }
        }
    },
    watch:{
        result(newValue, oldValue){
            that = this
            if(newValue > 37){
                setTimeout(() => {
                    that.result = 0;
                  }, "5000");
            }
        }
    }
});

app.mount('#assignment')