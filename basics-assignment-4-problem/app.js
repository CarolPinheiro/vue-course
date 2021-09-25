const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            toggleClass:'visible',
            color:''
        }
        },
        methods: {
            changeClasses() {
                this.toggleClass === 'visible' ?
                this.toggleClass = 'hidden' :
                this.toggleClass = 'visible'
                console.log(this.toggleClass)
            }
        }
    })

app.mount('#assignment')