const app = Vue.createApp({
    data(){
        return {
            output: '',
            afinalOutput : ''
        }
    },
    methods:{
        showAlert(){
            alert('Showing Alert!!')
        },
        saveOutput(event){
            this.output = event.target.value
        },
        finalOutput(event){
            this.afinalOutput = this.output
        }
    }
})
app.mount('#assignment')