const app = Vue.createApp({
    data(){
        return {
            contacts: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    mobile: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    mobile: '09876 543 221',
                    email: 'julie@localhost.com'
                }

            ]
        }
    }
});

app.component('contact-details',{
    template: `
    <li>
          <h2>{{contact.name}}</h2>
          <button @click="toggleDetails()">{{detailsAreVisible?'Hide':'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{contact.mobile}}</li>
            <li><strong>Email:</strong> {{contact.email}}</li>
          </ul>
        </li>
    `,
    data(){
        return {detailsAreVisible: false,
            contact: {
                id: 'julie',
                name: 'Julie Jones',
                mobile: '09876 543 221',
                email: 'julie@localhost.com'
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }

})

app.mount('#app')