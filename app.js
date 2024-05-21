const app = Vue.createApp(
    {
        data(){
            return {
                tasks: [],
                enteredTask: '',
                isVisible: true
            }
        },
        methods:{
            addTask(){
                this.tasks.push(this.enteredTask)
                this.enteredTask = ''
            },
            toggleList(){
                this.isVisible = !this.isVisible
            }
        }
    }
)

app.mount('#assignment')