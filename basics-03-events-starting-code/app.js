const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods: {
    add (){
      return this.counter++
    },
    remove (){
      return this.counter--
    },
    setName(event){
      this.name = event.target.value
    }
  }
});

app.mount('#events');
