<template>
  <base-container title="Vuex">
    <p>{{ counter }}</p>
    <button @click="addOne">Add</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer
  },
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch({ type: 'increase', value: 2 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
