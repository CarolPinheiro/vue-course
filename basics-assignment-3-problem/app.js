const app = Vue.createApp({
    data() {
        return { 
            result: 0
         }
    },
    computed: {
        checkForTheResult() {
            if (this.result < 37) {
                return 'Not there yet'
            }
            else if (this.result> 37) {
                return 'Too much!'
            }
            return this.result
        }

    },
    methods: {
        addFive() {
            this.result += 5
        },
        addOne() {
            this.result++
        }
    },
    watch: {
        result () {
            setTimeout(()=> this.result = 0, 5000)
        }
    }
});

app.mount('#assignment')