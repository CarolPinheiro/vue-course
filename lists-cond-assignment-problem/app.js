const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTaskField: '',
            buttonIsPressed: false
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTaskField)
        },
        changeButtonStatus() {
            this.buttonIsPressed = !this.buttonIsPressed
        }
    },
    computed: {
        changeVisibilityStatus() {
           return this.buttonIsPressed ? 'Show' : 'Hide'
        }
    }
})

app.mount('#assignment');