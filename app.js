const app= Vue.createApp(
    {
        data(){
            return{
                userInput : '',
                pVisible: true,
                textColor:'',
            };
        }, 
        computed:{
            pClasses(){
                return ['p', this.userInput, this.pVisible ? 'visible': 'hidden']
            }
        },
        methods:{
            toggleParagraph(){
                this.pVisible = !this.pVisible
            }
        }
    }
);

app.mount('#assignment')