const app = Vue.createApp({
    data(){
        return {
            keyDown: '',
            enter: ''
        }
    },
    methods: {
        alertButton() {
            alert("Hello World!")
        },
        keyDownInput(event) {
            this.keyDown= event.target.value
        },
        enterInput(event) {
            this.enter= event.target.value
        }
    }
})

app.mount('#assignment')