const app = Vue.createApp({
    data(){
        return {
            boxActive1: false,
            boxActive2: false,
            boxActive3: false,
        }
    },
    methods: {
        boxChange(letter){
            if(letter === 'A') {
                this.boxActive1 = !this.boxActive1
            }
            else if(letter === 'B') {
                this.boxActive2 = !this.boxActive2
            }
            else  {
                this.boxActive3 = !this.boxActive3
            }
        },
    }
})

app.mount('#styling')