Vue.createApp({
    data() {
        return{
            goals: [],
            enteredValue: ''         
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
            this.enteredValue = ''
        }
    }
}).mount('#app')


// console.log('Hello')
// const textElement = document.getElementById('goal')! as HTMLInputElement
// const submitButton = document.querySelector('button')! as HTMLButtonElement
// const listElement = document.querySelector('ul')! as HTMLUListElement
// submitButton.addEventListener('click', (event: Event)=>{
//     console.log(textElement.value)
//     const listItem = document.createElement('li')
//     listItem.textContent = textElement.value
//     listElement.appendChild(listItem)
//     textElement.value = ""
// })