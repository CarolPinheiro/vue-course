const app = Vue.createApp({
    data() {
        return {
            courseGoals: 'Learn a lot of Vue!',
            htmlTest: '<h1>Oiee</h1>',
            vueLink: 'https://vuejs.org/'
        }
    }
});

app.mount('#user-goal')