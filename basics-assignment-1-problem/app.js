const app = Vue.createApp({
    data() {
        return {
            name: 'Carol',
            age: 23,
            img: 'https://referencianerd.com/wp-content/uploads/2020/01/Todoroki-Shoto.jpg',

        }
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
});

app.mount('#assignment')