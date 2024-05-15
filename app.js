const app = Vue.createApp({

    data() {
        return {
              courseGoal: 'Finish the course',
              courseGoalB: 'GOAL B',
              vueLink: 'https://www.google.com'
          };
      },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoal
            } else{
                return this.courseGoalB
            }
        }

    },

});


app.mount('#user-goal')