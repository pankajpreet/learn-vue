const app = Vue.createApp({
    data(){
        return {
            person: {
                name:'Pankajpreet Singh',
                age: 38,
                avatar: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg'
            },
        }
    },
    methods:{
        ageInFiveYears(){
            return this.person.age + 5
        },
        randomNumber(){
            return Math.random()
        }
    }
});

app.mount('#assignment')